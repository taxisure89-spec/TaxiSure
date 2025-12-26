import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function PrivacyPolicy() {
    return (
        <div className="legal-page">
            <SEO
                title="Privacy Policy - TaxiSure"
                description="Learn how TaxiSure collects, uses, and protects your personal information. Your privacy matters to us."
                keywords="TaxiSure privacy, data protection, user privacy, taxi app security"
            />
            <div className="container">
                <div className="legal-page__header">
                    <h1 className="legal-page__title">Privacy Policy</h1>
                    <p className="legal-page__updated">Last updated: December 24, 2024</p>
                </div>

                <div className="legal-page__content">
                    <h2>Introduction</h2>
                    <p>Welcome to TaxiSure. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services.</p>

                    <p>Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.</p>

                    <h2>Information We Collect</h2>
                    <p>We collect information that you provide directly to us, information we obtain automatically when you use our services, and information from third-party sources.</p>

                    <h3>Personal Information You Provide</h3>
                    <ul>
                        <li><strong>Account Information:</strong> Name, email address, phone number, and password when you create an account</li>
                        <li><strong>Profile Information:</strong> Profile photo (optional), emergency contacts</li>
                        <li><strong>Payment Information:</strong> Payment method details processed through secure payment gateways</li>
                        <li><strong>Communications:</strong> Messages, feedback, and correspondence with our support team</li>
                    </ul>

                    <h3>Information Collected Automatically</h3>
                    <ul>
                        <li><strong>Location Data:</strong> Real-time location during active rides for navigation and safety purposes</li>
                        <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers</li>
                        <li><strong>Usage Data:</strong> App features used, ride history, preferences</li>
                        <li><strong>Log Data:</strong> Access times, pages viewed, app crashes, and system activity</li>
                    </ul>

                    <h2>How We Use Your Information</h2>
                    <p>We use the information we collect for the following purposes:</p>
                    <ul>
                        <li>To provide, maintain, and improve our ride-booking services</li>
                        <li>To process transactions and send related information</li>
                        <li>To connect you with drivers and facilitate rides</li>
                        <li>To enable real-time tracking and navigation</li>
                        <li>To send you technical notices, updates, and support messages</li>
                        <li>To respond to your comments, questions, and customer service requests</li>
                        <li>To ensure safety and security for all users</li>
                        <li>To detect, prevent, and address fraud or other illegal activities</li>
                        <li>To comply with legal obligations</li>
                    </ul>

                    <h2>Location Data</h2>
                    <div className="highlight-box">
                        <p><strong>Important:</strong> We only collect your location data when you are actively using the app to book or take a ride. We do not track your location in the background or when the app is closed. You can disable location services at any time through your device settings, though this will affect the app's core functionality.</p>
                    </div>

                    <h2>Data Sharing and Disclosure</h2>
                    <p>We may share your information in the following circumstances:</p>
                    <ul>
                        <li><strong>With Drivers:</strong> To facilitate your rides, we share necessary information like your name, pickup/drop location, and phone number with assigned drivers</li>
                        <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (payment processing, analytics, customer support)</li>
                        <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                        <li><strong>Safety:</strong> To protect the safety, rights, or property of TaxiSure, our users, or the public</li>
                        <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    </ul>

                    <p><strong>We do not sell your personal information to third parties.</strong></p>

                    <h2>Data Retention</h2>
                    <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law. When you delete your account, we will delete or anonymize your personal information within 30 days, except where we are required to retain certain information for legal or regulatory purposes.</p>

                    <h2>Data Security</h2>
                    <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
                    <ul>
                        <li>Encryption of data in transit and at rest</li>
                        <li>Secure servers and databases</li>
                        <li>Regular security assessments and audits</li>
                        <li>Access controls and authentication</li>
                        <li>Employee training on data protection</li>
                    </ul>

                    <h2>Your Rights and Choices</h2>
                    <p>You have the following rights regarding your personal information:</p>
                    <ul>
                        <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                        <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                        <li><strong>Deletion:</strong> Request deletion of your account and personal data</li>
                        <li><strong>Data Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
                        <li><strong>Opt-out:</strong> Opt out of promotional communications at any time</li>
                    </ul>

                    <p>To exercise any of these rights, please contact us at <a href="mailto:taxisure2025@gmail.com">taxisure2025@gmail.com</a> or through the app settings.</p>

                    <h2>Account Deletion</h2>
                    <p>You can delete your TaxiSure account at any time. When you delete your account:</p>
                    <ul>
                        <li>Your profile and personal information will be permanently deleted</li>
                        <li>Your ride history will be anonymized or deleted</li>
                        <li>Any remaining wallet balance must be used or withdrawn before deletion</li>
                        <li>This action cannot be undone</li>
                    </ul>
                    <p>For detailed instructions, please visit our <Link to="/account-deletion">Account Deletion</Link> page.</p>

                    <h2>Children's Privacy</h2>
                    <p>TaxiSure is not intended for use by children under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.</p>

                    <h2>Third-Party Services</h2>
                    <p>Our app may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies before providing any information.</p>

                    <h2>Changes to This Policy</h2>
                    <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. For significant changes, we will provide additional notice through the app or email.</p>

                    <h2>Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                    <ul>
                        <li><strong>Email:</strong> <a href="mailto:taxisure2025@gmail.com">taxisure2025@gmail.com</a></li>
                        <li><strong>Support:</strong> <a href="mailto:taxisure2025@gmail.com">taxisure2025@gmail.com</a></li>
                    </ul>

                    <p>For data protection inquiries, you may also reach our Data Protection Officer at <a href="mailto:taxisure2025@gmail.com">taxisure2025@gmail.com</a>.</p>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
