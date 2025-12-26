import SEO from '../components/SEO';

function AccountDeletion() {
    return (
        <div className="legal-page">
            <SEO
                title="Account Deletion - TaxiSure"
                description="Learn how to delete your TaxiSure account and understand what happens to your data."
                keywords="delete TaxiSure account, remove account, data deletion, account removal"
            />
            <div className="container">
                <div className="legal-page__header">
                    <h1 className="legal-page__title">Account Deletion</h1>
                    <p className="legal-page__updated">How to delete your TaxiSure account</p>
                </div>

                <div className="legal-page__content">
                    <h2>Your Right to Delete Your Account</h2>
                    <p>At TaxiSure, we respect your privacy and your right to control your personal data. You can delete your TaxiSure account at any time. This page explains the process, what happens to your data, and alternative options available to you.</p>

                    <div className="highlight-box">
                        <p><strong>Important:</strong> Account deletion is permanent and cannot be undone. Please ensure you have completed any pending rides and withdrawn any remaining wallet balance before proceeding.</p>
                    </div>

                    <h2>Before You Delete Your Account</h2>
                    <p>Please consider the following before deleting your account:</p>
                    <ul>
                        <li>Complete any active or upcoming ride bookings</li>
                        <li>Withdraw or use any remaining wallet balance</li>
                        <li>Download any ride receipts or invoices you may need</li>
                        <li>Note that you will lose access to your ride history</li>
                        <li>Consider temporarily disabling notifications instead if you just need a break</li>
                    </ul>

                    <h2>How to Delete Your Account</h2>
                    <p>You can delete your TaxiSure account using any of the following methods:</p>

                    <div className="deletion-steps">
                        <div className="deletion-step">
                            <div className="deletion-step__number">1</div>
                            <div className="deletion-step__content">
                                <h3>Through the TaxiSure App (Recommended)</h3>
                                <p>Open the TaxiSure app → Go to <strong>Profile</strong> → Tap <strong>Settings</strong> → Select <strong>Account</strong> → Tap <strong>Delete Account</strong> → Confirm your decision by entering your password or OTP → Your account will be scheduled for deletion.</p>
                            </div>
                        </div>

                        <div className="deletion-step">
                            <div className="deletion-step__number">2</div>
                            <div className="deletion-step__content">
                                <h3>Via Email Request</h3>
                                <p>Send an email to <a href="mailto:taxisure2025@gmail.com">taxisure2025@gmail.com</a> from your registered email address with the subject line "Account Deletion Request". Include your registered phone number for verification. We will process your request within 48 hours.</p>
                            </div>
                        </div>

                        <div className="deletion-step">
                            <div className="deletion-step__number">3</div>
                            <div className="deletion-step__content">
                                <h3>Contact Customer Support</h3>
                                <p>Call our support team or use the in-app chat to request account deletion. Our support team is available 24/7 to assist you. You will need to verify your identity through your registered phone number.</p>
                            </div>
                        </div>
                    </div>

                    <h2>What Happens When You Delete Your Account</h2>
                    <p>When you delete your TaxiSure account, the following will occur:</p>

                    <h3>Immediately</h3>
                    <ul>
                        <li>You will be logged out of all devices</li>
                        <li>Your account will be deactivated</li>
                        <li>You will no longer be able to book rides</li>
                        <li>Your profile will no longer be visible</li>
                    </ul>

                    <h3>Within 30 Days</h3>
                    <ul>
                        <li>Your personal information (name, email, phone number) will be permanently deleted</li>
                        <li>Your profile photo will be deleted</li>
                        <li>Your saved addresses will be deleted</li>
                        <li>Your payment methods will be removed</li>
                    </ul>

                    <h3>Data We May Retain</h3>
                    <p>Certain information may be retained for legal, regulatory, or safety reasons:</p>
                    <ul>
                        <li>Transaction records for tax and accounting purposes (up to 7 years as required by law)</li>
                        <li>Safety incident reports</li>
                        <li>Information needed to prevent fraud or investigate violations</li>
                        <li>Anonymized and aggregated data that cannot identify you</li>
                    </ul>

                    <h2>Data Deletion Request</h2>
                    <p>If you want to request deletion of specific data without deleting your entire account, or if you have questions about what data we hold, you can:</p>
                    <ul>
                        <li>Submit a data deletion request to <a href="mailto:taxisure2025@gmail.com">taxisure2025@gmail.com</a></li>
                        <li>Request a copy of your data before deletion</li>
                        <li>Ask our Data Protection Officer for assistance at <a href="mailto:taxisure2025@gmail.com">taxisure2025@gmail.com</a></li>
                    </ul>

                    <h2>Reactivating Your Account</h2>
                    <p>Once your account is deleted, the action cannot be reversed. If you wish to use TaxiSure again in the future, you will need to create a new account with fresh registration.</p>

                    <p>If you requested account deletion but change your mind within 7 days, contact us immediately at <a href="mailto:taxisure2025@gmail.com">taxisure2025@gmail.com</a> and we may be able to cancel the deletion request.</p>

                    <h2>Alternative Options</h2>
                    <p>Instead of deleting your account, you might consider:</p>
                    <ul>
                        <li><strong>Disable notifications:</strong> Turn off app notifications in your phone settings</li>
                        <li><strong>Log out:</strong> Simply log out of the app without deleting your account</li>
                        <li><strong>Contact support:</strong> Discuss your concerns with our team - we may be able to help</li>
                    </ul>

                    <h2>Need Help?</h2>
                    <p>If you have any questions about the account deletion process or need assistance, please contact us:</p>
                    <ul>
                        <li><strong>Account Deletion:</strong> <a href="mailto:taxisure2025@gmail.com">taxisure2025@gmail.com</a></li>
                        <li><strong>Privacy Concerns:</strong> <a href="mailto:taxisure2025@gmail.com">taxisure2025@gmail.com</a></li>
                        <li><strong>General Support:</strong> <a href="mailto:taxisure2025@gmail.com">taxisure2025@gmail.com</a></li>
                    </ul>

                    <p>We aim to respond to all account deletion requests within 48 hours.</p>
                </div>
            </div>
        </div>
    );
}

export default AccountDeletion;
