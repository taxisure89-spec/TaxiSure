import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function Contact() {
    return (
        <div className="contact-page">
            <SEO
                title="Contact Us - TaxiSure"
                description="Get in touch with TaxiSure support. Available 24/7 for your questions, feedback, and assistance."
                keywords="contact TaxiSure, taxi support, ride help, customer service"
            />
            <div className="container">
                <div className="contact-page__header">
                    <h1 className="contact-page__title">Get in Touch</h1>
                    <p className="contact-page__subtitle">Have questions or need assistance? We're here to help you 24/7.</p>
                </div>

                <div className="contact-grid">
                    <div className="contact-card">
                        <div className="contact-card__icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </div>
                        <h3 className="contact-card__title">Email Support</h3>
                        <p className="contact-card__description">For general inquiries, feedback, or assistance with your account.</p>
                        <a href="mailto:taxisure2025@gmail.com" className="contact-card__link">
                            taxisure2025@gmail.com
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </a>
                    </div>

                    <div className="contact-card">
                        <div className="contact-card__icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                        </div>
                        <h3 className="contact-card__title">Privacy & Data</h3>
                        <p className="contact-card__description">Questions about your privacy, data protection, or account deletion.</p>
                        <a href="mailto:taxisure2025@gmail.com" className="contact-card__link">
                            taxisure2025@gmail.com
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </a>
                    </div>

                    <div className="contact-card">
                        <div className="contact-card__icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                <path d="M12 17h.01" />
                            </svg>
                        </div>
                        <h3 className="contact-card__title">Report an Issue</h3>
                        <p className="contact-card__description">Report safety concerns, technical issues, or problems with your ride.</p>
                        <a href="mailto:taxisure2025@gmail.com" className="contact-card__link">
                            taxisure2025@gmail.com
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </a>
                    </div>

                    <div className="contact-card">
                        <div className="contact-card__icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                            </svg>
                        </div>
                        <h3 className="contact-card__title">Legal Inquiries</h3>
                        <p className="contact-card__description">For legal matters, partnership inquiries, or business correspondence.</p>
                        <a href="mailto:taxisure2025@gmail.com" className="contact-card__link">
                            taxisure2025@gmail.com
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="legal-page__content" style={{ marginTop: 'var(--space-16)' }}>
                    <h2>Frequently Asked Questions</h2>

                    <h3>How do I create a TaxiSure account?</h3>
                    <p>Download the TaxiSure app from Google Play Store, open it, and follow the registration process. You'll need to provide your phone number, name, and email address to create an account.</p>

                    <h3>How do I delete my account?</h3>
                    <p>You can delete your account through the app (Profile → Settings → Account → Delete Account) or by emailing <a href="mailto:taxisure2025@gmail.com">taxisure2025@gmail.com</a>. For detailed instructions, visit our <Link to="/account-deletion">Account Deletion</Link> page.</p>

                    <h3>Is my personal information safe?</h3>
                    <p>Yes, we take data security seriously. We use encryption, secure servers, and strict access controls to protect your information. Read our <Link to="/privacy-policy">Privacy Policy</Link> for more details.</p>

                    <h3>How do I report a safety concern?</h3>
                    <p>For immediate safety concerns during a ride, use the emergency features in the app. For post-ride safety reports, email us at <a href="mailto:taxisure2025@gmail.com">taxisure2025@gmail.com</a> with details of the incident.</p>

                    <h3>What payment methods are accepted?</h3>
                    <p>We accept UPI, credit/debit cards, mobile wallets (Paytm, PhonePe, etc.), and cash payments (where available). All digital payments are processed through secure, PCI-compliant gateways.</p>

                    <h3>How do I get a refund?</h3>
                    <p>Refund requests can be submitted through the app or by emailing <a href="mailto:taxisure2025@gmail.com">taxisure2025@gmail.com</a>. Please include your ride details and reason for the refund request. Refunds are typically processed within 5-7 business days.</p>

                    <h2>Response Times</h2>
                    <p>We strive to respond to all inquiries as quickly as possible:</p>
                    <ul>
                        <li><strong>General Support:</strong> Within 24 hours</li>
                        <li><strong>Account Deletion:</strong> Within 48 hours</li>
                        <li><strong>Safety Reports:</strong> Within 4 hours</li>
                        <li><strong>Privacy Requests:</strong> Within 48 hours</li>
                    </ul>

                    <h2>In-App Support</h2>
                    <p>For the fastest assistance, we recommend using the in-app support feature:</p>
                    <ol>
                        <li>Open the TaxiSure app</li>
                        <li>Go to Profile → Help & Support</li>
                        <li>Select your issue category</li>
                        <li>Chat with our support team or browse help articles</li>
                    </ol>

                    <p><em>Note: Our office is not open for walk-in visits. Please contact us via email for all inquiries.</em></p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
