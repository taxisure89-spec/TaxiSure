import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function Terms() {
    return (
        <div className="legal-page">
            <SEO
                title="Terms & Conditions - TaxiSure"
                description="Read the terms and conditions for using TaxiSure ride-booking services in India."
                keywords="TaxiSure terms, conditions, taxi service terms, ride booking agreement"
            />
            <div className="container">
                <div className="legal-page__header">
                    <h1 className="legal-page__title">Terms & Conditions</h1>
                    <p className="legal-page__updated">Last updated: December 24, 2024</p>
                </div>

                <div className="legal-page__content">
                    <h2>Agreement to Terms</h2>
                    <p>By downloading, installing, or using the TaxiSure mobile application ("App"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our services.</p>

                    <p>These Terms constitute a legally binding agreement between you and TaxiSure regarding your use of our ride-booking platform and related services.</p>

                    <h2>Description of Services</h2>
                    <p>TaxiSure provides a technology platform that connects users with independent transportation service providers ("Drivers") for ride-booking services. Our services include:</p>
                    <ul>
                        <li>City rides and local transportation</li>
                        <li>Outstation and intercity travel</li>
                        <li>All-India tour packages</li>
                        <li>Pilgrimage journey services (e.g., Char Dham Yatra)</li>
                        <li>Group travel with various vehicle options</li>
                    </ul>

                    <div className="highlight-box">
                        <p><strong>Important:</strong> TaxiSure acts as an intermediary platform connecting riders with drivers. We do not directly provide transportation services and are not a transportation carrier.</p>
                    </div>

                    <h2>Account Registration</h2>
                    <p>To use TaxiSure, you must:</p>
                    <ul>
                        <li>Be at least 18 years of age</li>
                        <li>Provide accurate, current, and complete registration information</li>
                        <li>Maintain the security of your account credentials</li>
                        <li>Promptly update your information if it changes</li>
                        <li>Accept responsibility for all activities under your account</li>
                    </ul>

                    <p>You agree not to create multiple accounts, share your account, or allow others to use your account.</p>

                    <h2>User Responsibilities</h2>
                    <p>As a TaxiSure user, you agree to:</p>
                    <ul>
                        <li>Provide accurate pickup and drop-off locations</li>
                        <li>Be ready at the pickup location at the scheduled time</li>
                        <li>Treat drivers with respect and courtesy</li>
                        <li>Not engage in any illegal activities during rides</li>
                        <li>Pay all applicable fares, fees, and charges</li>
                        <li>Comply with driver instructions regarding safety</li>
                        <li>Not damage or soil the vehicle</li>
                        <li>Not carry prohibited or illegal items</li>
                    </ul>

                    <h2>Booking and Cancellation</h2>
                    <h3>Booking a Ride</h3>
                    <p>When you request a ride through the App:</p>
                    <ul>
                        <li>You will receive an estimated fare before confirmation</li>
                        <li>Fares may vary based on demand, traffic, and route</li>
                        <li>Confirming a booking creates a binding request for service</li>
                        <li>Driver assignment is subject to availability</li>
                    </ul>

                    <h3>Cancellation Policy</h3>
                    <ul>
                        <li>Free cancellation within 2 minutes of booking</li>
                        <li>Cancellation fees may apply after driver assignment</li>
                        <li>Repeated cancellations may result in account restrictions</li>
                        <li>No-shows may incur charges as specified in the App</li>
                    </ul>

                    <h2>Payments and Pricing</h2>
                    <p>By using TaxiSure, you agree to:</p>
                    <ul>
                        <li>Pay the fare displayed at the end of each ride</li>
                        <li>Pay any applicable surge pricing during high-demand periods</li>
                        <li>Pay additional charges for waiting time, tolls, or route changes</li>
                        <li>Provide valid payment information and authorize charges</li>
                    </ul>

                    <p>We offer multiple payment methods including UPI, credit/debit cards, mobile wallets, and cash (where available). All digital payments are processed through secure, PCI-compliant payment gateways.</p>

                    <h2>Refunds</h2>
                    <p>Refunds may be provided in the following circumstances:</p>
                    <ul>
                        <li>Duplicate charges or billing errors</li>
                        <li>Service not rendered after payment</li>
                        <li>Significant deviation from quoted fare without justification</li>
                        <li>Safety-related ride termination</li>
                    </ul>
                    <p>Refund requests must be submitted within 7 days of the ride. Refunds are processed within 5-7 business days to the original payment method.</p>

                    <h2>Safety and Conduct</h2>
                    <p>We are committed to the safety of all users. You agree not to:</p>
                    <ul>
                        <li>Engage in any form of harassment or discrimination</li>
                        <li>Use threatening or abusive language</li>
                        <li>Carry weapons, illegal substances, or hazardous materials</li>
                        <li>Consume alcohol or drugs during rides</li>
                        <li>Damage or vandalize vehicles</li>
                        <li>Request drivers to violate traffic laws</li>
                    </ul>

                    <p>Violations may result in immediate account suspension or permanent ban.</p>

                    <h2>Intellectual Property</h2>
                    <p>The TaxiSure App, including its design, features, content, and trademarks, is owned by TaxiSure and protected by intellectual property laws. You may not:</p>
                    <ul>
                        <li>Copy, modify, or distribute the App or its content</li>
                        <li>Reverse engineer or decompile the App</li>
                        <li>Use our trademarks without written permission</li>
                        <li>Create derivative works based on the App</li>
                    </ul>

                    <h2>Limitation of Liability</h2>
                    <p>To the maximum extent permitted by law:</p>
                    <ul>
                        <li>TaxiSure is not liable for actions of independent drivers</li>
                        <li>We do not guarantee uninterrupted or error-free service</li>
                        <li>We are not responsible for loss of personal belongings</li>
                        <li>Our liability is limited to the amount you paid for the specific service</li>
                    </ul>

                    <p>Nothing in these Terms excludes liability for death or personal injury caused by negligence, or for fraud.</p>

                    <h2>Indemnification</h2>
                    <p>You agree to indemnify and hold TaxiSure, its officers, directors, employees, and agents harmless from any claims, damages, losses, or expenses arising from:</p>
                    <ul>
                        <li>Your violation of these Terms</li>
                        <li>Your use of the services</li>
                        <li>Your violation of any third-party rights</li>
                        <li>Your violation of applicable laws</li>
                    </ul>

                    <h2>Account Termination</h2>
                    <p>We may suspend or terminate your account if you:</p>
                    <ul>
                        <li>Violate these Terms or our policies</li>
                        <li>Engage in fraudulent activity</li>
                        <li>Pose a safety risk to drivers or other users</li>
                        <li>Provide false information</li>
                    </ul>

                    <p>You may delete your account at any time through the App or by contacting support. See our <Link to="/account-deletion">Account Deletion</Link> page for details.</p>

                    <h2>Dispute Resolution</h2>
                    <p>Any disputes arising from these Terms or your use of TaxiSure shall be:</p>
                    <ul>
                        <li>First attempted to be resolved through our customer support</li>
                        <li>Subject to mediation before legal proceedings</li>
                        <li>Governed by the laws of India</li>
                        <li>Subject to the exclusive jurisdiction of courts in New Delhi</li>
                    </ul>

                    <h2>Changes to Terms</h2>
                    <p>We may modify these Terms at any time. We will notify you of significant changes through the App or email. Continued use of TaxiSure after changes constitutes acceptance of the modified Terms.</p>

                    <h2>Severability</h2>
                    <p>If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.</p>

                    <h2>Contact Information</h2>
                    <p>For questions about these Terms, please contact us:</p>
                    <ul>
                        <li><strong>Email:</strong> <a href="mailto:taxisure2025@gmail.com">taxisure2025@gmail.com</a></li>
                        <li><strong>Support:</strong> <a href="mailto:taxisure2025@gmail.com">taxisure2025@gmail.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Terms;
