import { Link, useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();

    const handleLogoClick = (e) => {
        e.preventDefault();
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__main">
                    <div className="footer__brand">
                        <a href="/" onClick={handleLogoClick} className="footer__logo">
                            <img src="/logo.png" alt="TaxiSure" className="footer__logo-img" />
                        </a>
                        <p className="footer__tagline">Your trusted ride companion for every journey across India.</p>
                        <div className="footer__contact">
                            <a href="mailto:taxisure2025@gmail.com" className="footer__email">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                taxisure2025@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="footer__links">
                        <div className="footer__column">
                            <h4 className="footer__title">Quick Links</h4>
                            <ul className="footer__list">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/#about">About</Link></li>
                                <li><Link to="/#features">Features</Link></li>
                                <li><Link to="/#download">Download</Link></li>
                            </ul>
                        </div>

                        <div className="footer__column">
                            <h4 className="footer__title">Legal</h4>
                            <ul className="footer__list">
                                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                <li><Link to="/terms">Terms & Conditions</Link></li>
                                <li><Link to="/account-deletion">Account Deletion</Link></li>
                            </ul>
                        </div>

                        <div className="footer__column">
                            <h4 className="footer__title">Support</h4>
                            <ul className="footer__list">
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><a href="mailto:taxisure2025@gmail.com">Email Support</a></li>
                                <li><Link to="/#safety">Safety & Privacy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <div className="footer__copyright">
                        <p>&copy; 2024 TaxiSure. All rights reserved.</p>
                        <p className="footer__location">Proudly serving riders across India 🇮🇳</p>
                    </div>

                    <div className="footer__badge">
                        <a href="https://play.google.com/store/apps/details?id=com.taxisure.v2.android&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="footer__play-badge" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

