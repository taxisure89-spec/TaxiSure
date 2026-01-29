import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../components/Toast';
import SEO from '../components/SEO';

function DeleteAccount() {
    const navigate = useNavigate();
    const { user, deleteAccount } = useAuth();
    const toast = useToast();

    const [step, setStep] = useState(1); // 1: warning, 2: confirmation, 3: re-auth
    const [password, setPassword] = useState('');
    const [confirmText, setConfirmText] = useState('');
    const [acknowledged, setAcknowledged] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const isGoogleUser = user?.providerData.some(
        provider => provider.providerId === 'google.com'
    );

    const handleProceedToConfirmation = () => {
        if (!acknowledged) {
            setError('Please acknowledge that you understand the consequences.');
            return;
        }
        setError('');
        setStep(2);
    };

    const handleProceedToReauth = () => {
        if (confirmText.toLowerCase() !== 'delete my account') {
            setError('Please type "DELETE MY ACCOUNT" to confirm.');
            return;
        }
        setError('');
        setStep(3);
    };

    const handleDeleteAccount = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await deleteAccount(password);

            // Show success toast
            toast.success("We're sorry to see you go. Your account has been permanently deleted.", 'Account Deleted');

            // Redirect to home page
            navigate('/', { replace: true });
        } catch (err) {
            console.error('Delete account error:', err);

            // User-friendly error messages
            switch (err.code) {
                case 'auth/wrong-password':
                    setError('Incorrect password. Please try again.');
                    break;
                case 'auth/too-many-requests':
                    setError('Too many failed attempts. Please try again later.');
                    break;
                case 'auth/requires-recent-login':
                    setError('For security reasons, please sign out and sign in again before deleting your account.');
                    break;
                default:
                    setError('Failed to delete account. Please try again or contact support.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="delete-account-page">
            <SEO
                title="Delete Account - TaxiSure"
                description="Delete your TaxiSure account permanently."
                keywords="delete account, remove account, TaxiSure"
            />

            <div className="container">
                <div className="delete-account-container">
                    {/* Step 1: Warning */}
                    {step === 1 && (
                        <div className="delete-step">
                            <div className="delete-header">
                                <div className="delete-icon-warning">
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <h1 className="delete-title">Delete Your Account</h1>
                                <p className="delete-subtitle">This action cannot be undone</p>
                            </div>

                            <div className="delete-content">
                                <div className="user-info-card">
                                    <div className="user-avatar">
                                        {user?.photoURL ? (
                                            <img src={user.photoURL} alt={user.displayName || 'User'} />
                                        ) : (
                                            <div className="user-avatar-placeholder">
                                                {(user?.displayName || user?.email || 'U')[0].toUpperCase()}
                                            </div>
                                        )}
                                    </div>
                                    <div className="user-info">
                                        <h3>{user?.displayName || 'User'}</h3>
                                        <p>{user?.email}</p>
                                    </div>
                                </div>

                                <div className="warning-box">
                                    <h3>⚠️ What will happen when you delete your account:</h3>
                                    <ul>
                                        <li>Your account will be <strong>permanently deleted</strong></li>
                                        <li>You will <strong>lose access</strong> to all TaxiSure services</li>
                                        <li>Your profile and personal information will be <strong>removed</strong></li>
                                        <li>Your ride history will be <strong>deleted</strong></li>
                                        <li>Any remaining wallet balance will be <strong>forfeited</strong></li>
                                        <li>This action <strong>cannot be reversed</strong></li>
                                    </ul>
                                </div>

                                <div className="info-box">
                                    <h3>📋 Before you proceed:</h3>
                                    <ul>
                                        <li>Complete any active or upcoming ride bookings</li>
                                        <li>Withdraw or use any remaining wallet balance</li>
                                        <li>Download any receipts or documents you may need</li>
                                        <li>Consider contacting support if you have concerns</li>
                                    </ul>
                                </div>

                                <div className="acknowledgment-box">
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={acknowledged}
                                            onChange={(e) => setAcknowledged(e.target.checked)}
                                        />
                                        <span>I understand that deleting my account is permanent and cannot be undone</span>
                                    </label>
                                </div>

                                {error && (
                                    <div className="auth-error">
                                        <svg className="auth-error-icon" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                        {error}
                                    </div>
                                )}

                                <div className="delete-actions">
                                    <button
                                        className="btn-secondary"
                                        onClick={() => navigate(-1)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="btn-danger"
                                        onClick={handleProceedToConfirmation}
                                    >
                                        Continue to Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Confirmation */}
                    {step === 2 && (
                        <div className="delete-step">
                            <div className="delete-header">
                                <div className="delete-icon-danger">
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </div>
                                <h1 className="delete-title">Final Confirmation</h1>
                                <p className="delete-subtitle">Type to confirm deletion</p>
                            </div>

                            <div className="delete-content">
                                <div className="confirmation-box">
                                    <p>To confirm deletion, please type:</p>
                                    <p className="confirmation-text">DELETE MY ACCOUNT</p>

                                    <input
                                        type="text"
                                        className="form-input"
                                        placeholder="Type here..."
                                        value={confirmText}
                                        onChange={(e) => setConfirmText(e.target.value)}
                                    />
                                </div>

                                {error && (
                                    <div className="auth-error">
                                        <svg className="auth-error-icon" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                        {error}
                                    </div>
                                )}

                                <div className="delete-actions">
                                    <button
                                        className="btn-secondary"
                                        onClick={() => setStep(1)}
                                    >
                                        Go Back
                                    </button>
                                    <button
                                        className="btn-danger"
                                        onClick={handleProceedToReauth}
                                    >
                                        Proceed
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Re-authentication */}
                    {step === 3 && (
                        <div className="delete-step">
                            <div className="delete-header">
                                <div className="delete-icon-danger">
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h1 className="delete-title">Verify Your Identity</h1>
                                <p className="delete-subtitle">
                                    {isGoogleUser
                                        ? 'Click below to re-authenticate with Google'
                                        : 'Enter your password to confirm'
                                    }
                                </p>
                            </div>

                            <div className="delete-content">
                                <form onSubmit={handleDeleteAccount} className="auth-form">
                                    {!isGoogleUser && (
                                        <div className="form-group">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input
                                                type="password"
                                                id="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="form-input"
                                                placeholder="Enter your password"
                                                required
                                                disabled={loading}
                                            />
                                        </div>
                                    )}

                                    {error && (
                                        <div className="auth-error">
                                            <svg className="auth-error-icon" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                            {error}
                                        </div>
                                    )}

                                    <div className="delete-actions">
                                        <button
                                            type="button"
                                            className="btn-secondary"
                                            onClick={() => setStep(2)}
                                            disabled={loading}
                                        >
                                            Go Back
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn-danger"
                                            disabled={loading}
                                        >
                                            {loading ? (
                                                <>
                                                    <span className="spinner"></span>
                                                    Deleting Account...
                                                </>
                                            ) : (
                                                'Delete My Account Forever'
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DeleteAccount;
