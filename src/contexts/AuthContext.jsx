import { createContext, useContext, useState, useEffect } from 'react';
import {
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    sendPasswordResetEmail
} from 'firebase/auth';
import {
    auth,
    googleProvider,
    EmailAuthProvider,
    deleteUser,
    reauthenticateWithCredential,
    reauthenticateWithPopup,
    sendEmailVerification
} from '../config/firebase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // Sign up with email and password
    const signUp = async (email, password, displayName) => {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);

            // Update profile with display name
            if (displayName) {
                await updateProfile(result.user, { displayName });
            }

            // Send email verification
            await sendEmailVerification(result.user);

            return result.user;
        } catch (error) {
            console.error('Sign up error:', error);
            throw error;
        }
    };

    // Sign in with email and password
    const signIn = async (email, password) => {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            return result.user;
        } catch (error) {
            console.error('Sign in error:', error);
            throw error;
        }
    };

    // Sign in with Google
    const loginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            return result.user;
        } catch (error) {
            console.error('Google login error:', error);
            if (error.code === 'auth/unauthorized-domain') {
                alert('Sign in is available on the live website. For testing, please add this domain to Firebase Console > Authentication > Settings > Authorized domains.');
            } else {
                alert('Sign in failed. Please try again later.');
            }
            throw error;
        }
    };

    // Legacy login method (for backward compatibility)
    const login = loginWithGoogle;

    // Sign out
    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error('Logout error:', error);
            throw error;
        }
    };

    // Update user profile
    const updateUserProfile = async (displayName, photoURL) => {
        try {
            if (!user) throw new Error('No user logged in');

            const updates = {};
            if (displayName !== undefined) updates.displayName = displayName;
            if (photoURL !== undefined) updates.photoURL = photoURL;

            await updateProfile(user, updates);
        } catch (error) {
            console.error('Update profile error:', error);
            throw error;
        }
    };

    // Send password reset email
    const resetPassword = async (email) => {
        try {
            await sendPasswordResetEmail(auth, email);
        } catch (error) {
            console.error('Password reset error:', error);
            throw error;
        }
    };

    // Re-authenticate user (required before account deletion)
    const reauthenticate = async (password) => {
        try {
            if (!user) throw new Error('No user logged in');

            // Check if user signed in with Google
            const isGoogleUser = user.providerData.some(
                provider => provider.providerId === 'google.com'
            );

            if (isGoogleUser) {
                // Re-authenticate with Google
                await reauthenticateWithPopup(user, googleProvider);
            } else {
                // Re-authenticate with email/password
                const credential = EmailAuthProvider.credential(user.email, password);
                await reauthenticateWithCredential(user, credential);
            }
        } catch (error) {
            console.error('Re-authentication error:', error);
            throw error;
        }
    };

    // Delete user account
    const deleteAccount = async (password) => {
        try {
            if (!user) throw new Error('No user logged in');

            // Re-authenticate first
            await reauthenticate(password);

            // Delete the user
            await deleteUser(user);
        } catch (error) {
            console.error('Delete account error:', error);
            throw error;
        }
    };

    // Resend email verification
    const resendVerificationEmail = async () => {
        try {
            if (!user) throw new Error('No user logged in');
            await sendEmailVerification(user);
        } catch (error) {
            console.error('Resend verification error:', error);
            throw error;
        }
    };

    const value = {
        user,
        loading,
        signUp,
        signIn,
        login,
        loginWithGoogle,
        logout,
        updateUserProfile,
        resetPassword,
        deleteAccount,
        reauthenticate,
        resendVerificationEmail
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
