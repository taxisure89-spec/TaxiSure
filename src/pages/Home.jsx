import { useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import SEO from '../components/SEO';

function Home() {
    const containerRef = useScrollAnimation();

    useEffect(() => {
        // Scroll to hash section if present
        const hash = window.location.hash.substring(1);
        if (hash) {
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) {
                    const headerHeight = 80;
                    const targetPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
            }, 100);
        }
    }, []);

    return (
        <div ref={containerRef}>
            <SEO
                title="TaxiSure - Your Trusted Ride Companion"
                description="Safe, reliable rides for city travel, all-India tours, and pilgrimage journeys. Book verified drivers across 100+ cities."
                keywords="taxi booking, ride hailing, India tours, Char Dham Yatra, city rides, transportation"
            />

            {/* Hero Section */}
            <section className="hero" id="home">

                <div className="hero__bg">
                    <div className="hero__gradient"></div>
                    <div className="hero__pattern"></div>
                </div>

                <div className="hero__container container">
                    <div className="hero__content">
                        <div className="hero__badge" data-animate="fade-up">
                            <span className="hero__badge-icon">✦</span>
                            Trusted by thousands across India
                        </div>

                        <h1 className="hero__title" data-animate="fade-up" data-delay="100">
                            Your Journey,<br />
                            <span className="hero__title-accent">Our Commitment</span>
                        </h1>

                        <p className="hero__description" data-animate="fade-up" data-delay="200">
                            From daily city rides to spiritual pilgrimages across India — travel with confidence, comfort, and care. TaxiSure connects you with verified drivers for every journey that matters.
                        </p>

                        <div className="hero__actions" data-animate="fade-up" data-delay="300">
                            <a href="https://play.google.com/store/apps/details?id=com.taxisure.v2.android&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="hero__cta hero__cta--primary">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="hero__play-badge" />
                            </a>
                            <a href="#about" className="hero__cta hero__cta--secondary">
                                <span>Learn More</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </a>
                        </div>

                        <div className="hero__stats" data-animate="fade-up" data-delay="400">
                            <div className="hero__stat">
                                <span className="hero__stat-number">5K+</span>
                                <span className="hero__stat-label">Happy Riders</span>
                            </div>
                            <div className="hero__stat-divider"></div>
                            <div className="hero__stat">
                                <span className="hero__stat-number">50+</span>
                                <span className="hero__stat-label">Verified Drivers</span>
                            </div>
                            <div className="hero__stat-divider"></div>
                            <div className="hero__stat">
                                <span className="hero__stat-number">10+</span>
                                <span className="hero__stat-label">Cities Covered</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero__visual" data-animate="fade-left" data-delay="200">
                        <div className="hero__phone">
                            <div className="hero__phone-frame">
                                <div className="hero__phone-notch"></div>
                                <img src="/unnamed.webp" alt="TaxiSure App Screenshot" className="hero__phone-screen" />
                            </div>
                        </div>
                        <div className="hero__phone hero__phone--secondary">
                            <div className="hero__phone-frame">
                                <div className="hero__phone-notch"></div>
                                <img src="/unnamed-1.webp" alt="TaxiSure App Features" className="hero__phone-screen" />
                            </div>
                        </div>

                        <div className="hero__floating hero__floating--1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                            </svg>
                        </div>
                        <div className="hero__floating hero__floating--2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <circle cx="12" cy="12" r="10" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="hero__scroll">
                    <span>Scroll to explore</span>
                    <div className="hero__scroll-line"></div>
                </div>
            </section>

            {/* About Section */}
            <section className="about" id="about">
                <div className="about__container container">
                    <div className="about__header">
                        <span className="section__label" data-animate="fade-up">About TaxiSure</span>
                        <h2 className="section__title" data-animate="fade-up" data-delay="100">
                            More Than Just a Ride,<br />
                            <span className="text-accent">It's a Promise</span>
                        </h2>
                    </div>

                    <div className="about__grid">
                        <div className="about__content" data-animate="fade-right">
                            <p className="about__text about__text--lead">
                                TaxiSure was born from a simple belief: everyone deserves safe, reliable, and dignified transportation — whether it's a quick trip across the city or a sacred journey to Char Dham.
                            </p>
                            <p className="about__text">
                                We understand that when you book a ride, you're trusting us with more than just your travel. You're trusting us with your time, your safety, and often, your family. That's a responsibility we take seriously.
                            </p>
                            <p className="about__text">
                                Our platform connects you with carefully verified drivers who share our commitment to service excellence. Every ride is tracked, every driver is background-checked, and every journey is backed by our dedication to your peace of mind.
                            </p>

                            <div className="about__values">
                                <div className="about__value">
                                    <div className="about__value-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Safety First</h4>
                                        <p>Verified drivers, real-time tracking, 24/7 support</p>
                                    </div>
                                </div>
                                <div className="about__value">
                                    <div className="about__value-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M12 6v6l4 2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Always On Time</h4>
                                        <p>Punctual pickups, efficient routes, respect for your schedule</p>
                                    </div>
                                </div>
                                <div className="about__value">
                                    <div className="about__value-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Built with Care</h4>
                                        <p>Thoughtful service for families, pilgrims, and everyday travelers</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="about__visual" data-animate="fade-left">
                            <div className="about__image-wrapper">
                                <div className="about__image-card about__image-card--1">
                                    <div className="about__card-content">
                                        <span className="about__card-icon">🚗</span>
                                        <span className="about__card-text">City Rides</span>
                                    </div>
                                </div>
                                <div className="about__image-card about__image-card--2">
                                    <div className="about__card-content">
                                        <span className="about__card-icon">🗺️</span>
                                        <span className="about__card-text">All India Tours</span>
                                    </div>
                                </div>
                                <div className="about__image-card about__image-card--3">
                                    <div className="about__card-content">
                                        <span className="about__card-icon">🙏</span>
                                        <span className="about__card-text">Char Dham Yatra</span>
                                    </div>
                                </div>
                                <div className="about__circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features" id="features">
                <div className="features__bg">
                    <div className="features__gradient"></div>
                </div>

                <div className="features__container container">
                    <div className="features__header">
                        <span className="section__label" data-animate="fade-up">Features</span>
                        <h2 className="section__title" data-animate="fade-up" data-delay="100">
                            Everything You Need,<br />
                            <span className="text-accent">Nothing You Don't</span>
                        </h2>
                        <p className="section__description" data-animate="fade-up" data-delay="200">
                            Designed with care, built for reliability. Here's what makes TaxiSure your ideal travel companion.
                        </p>
                    </div>

                    <div className="features__grid">
                        <article className="feature-card" data-animate="fade-up" data-delay="100">
                            <div className="feature-card__icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="3" y="11" width="18" height="10" rx="2" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    <circle cx="12" cy="16" r="1" />
                                </svg>
                            </div>
                            <h3 className="feature-card__title">Verified Drivers</h3>
                            <p className="feature-card__description">
                                Every driver undergoes thorough background verification, document checks, and training before joining our platform.
                            </p>
                        </article>

                        <article className="feature-card" data-animate="fade-up" data-delay="200">
                            <div className="feature-card__icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                                    <path d="M2 12h20" />
                                </svg>
                            </div>
                            <h3 className="feature-card__title">Real-Time Tracking</h3>
                            <p className="feature-card__description">
                                Track your ride live on the map. Share your trip details with family for added peace of mind during every journey.
                            </p>
                        </article>

                        <article className="feature-card" data-animate="fade-up" data-delay="300">
                            <div className="feature-card__icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <h3 className="feature-card__title">Secure Payments</h3>
                            <p className="feature-card__description">
                                Multiple payment options with bank-grade security. Pay via UPI, cards, wallets, or cash — whatever works for you.
                            </p>
                        </article>

                        <article className="feature-card" data-animate="fade-up" data-delay="400">
                            <div className="feature-card__icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <h3 className="feature-card__title">Pan-India Coverage</h3>
                            <p className="feature-card__description">
                                From metro cities to pilgrimage destinations — book rides across 100+ cities and towns throughout India.
                            </p>
                        </article>

                        <article className="feature-card" data-animate="fade-up" data-delay="500">
                            <div className="feature-card__icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3 className="feature-card__title">Group Travel</h3>
                            <p className="feature-card__description">
                                Traveling with family or friends? Choose from sedans to tempo travellers. We have the right vehicle for every group size.
                            </p>
                        </article>

                        <article className="feature-card" data-animate="fade-up" data-delay="600">
                            <div className="feature-card__icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                            </div>
                            <h3 className="feature-card__title">24/7 Support</h3>
                            <p className="feature-card__description">
                                Questions or concerns? Our support team is available around the clock to assist you before, during, and after your ride.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* Safety Section */}
            <section className="safety" id="safety">
                <div className="safety__container container">
                    <div className="safety__header">
                        <span className="section__label" data-animate="fade-up">Safety & Privacy</span>
                        <h2 className="section__title" data-animate="fade-up" data-delay="100">
                            Your Trust,<br />
                            <span className="text-accent">Our Priority</span>
                        </h2>
                        <p className="section__description" data-animate="fade-up" data-delay="200">
                            We believe transparency builds trust. Here's exactly how we protect your data and ensure your safety.
                        </p>
                    </div>

                    <div className="safety__grid">
                        <div className="safety__content" data-animate="fade-right">
                            <div className="safety__card">
                                <div className="safety__card-header">
                                    <div className="safety__card-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        </svg>
                                    </div>
                                    <h3>Data Protection</h3>
                                </div>
                                <ul className="safety__list">
                                    <li>Your personal data is encrypted and stored securely</li>
                                    <li>We never sell your information to third parties</li>
                                    <li>Location data is only used during active rides</li>
                                    <li>You can request data deletion at any time</li>
                                </ul>
                            </div>

                            <div className="safety__card">
                                <div className="safety__card-header">
                                    <div className="safety__card-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                            <path d="M12 17h.01" />
                                        </svg>
                                    </div>
                                    <h3>User Privacy</h3>
                                </div>
                                <ul className="safety__list">
                                    <li>Minimal data collection — only what's necessary</li>
                                    <li>Transparent policies available for review</li>
                                    <li>No hidden tracking or surveillance</li>
                                    <li>Full control over your account and data</li>
                                </ul>
                            </div>

                            <div className="safety__card">
                                <div className="safety__card-header">
                                    <div className="safety__card-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                        </svg>
                                    </div>
                                    <h3>Security Practices</h3>
                                </div>
                                <ul className="safety__list">
                                    <li>Bank-grade encryption for all transactions</li>
                                    <li>Regular security audits and updates</li>
                                    <li>Secure authentication systems</li>
                                    <li>Protected against unauthorized access</li>
                                </ul>
                            </div>
                        </div>

                        <div className="safety__links" data-animate="fade-left">
                            <div className="safety__links-card">
                                <h3>Legal Documents</h3>
                                <p>Review our policies and understand your rights as a TaxiSure user.</p>

                                <div className="safety__links-list">
                                    <a href="/privacy-policy" className="safety__link">
                                        <span className="safety__link-icon">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                                <polyline points="14 2 14 8 20 8" />
                                                <line x1="16" y1="13" x2="8" y2="13" />
                                                <line x1="16" y1="17" x2="8" y2="17" />
                                                <polyline points="10 9 9 9 8 9" />
                                            </svg>
                                        </span>
                                        <span className="safety__link-content">
                                            <span className="safety__link-title">Privacy Policy</span>
                                            <span className="safety__link-desc">How we collect, use, and protect your data</span>
                                        </span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                    </a>

                                    <a href="/terms" className="safety__link">
                                        <span className="safety__link-icon">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                                <polyline points="14 2 14 8 20 8" />
                                                <line x1="16" y1="13" x2="8" y2="13" />
                                                <line x1="16" y1="17" x2="8" y2="17" />
                                            </svg>
                                        </span>
                                        <span className="safety__link-content">
                                            <span className="safety__link-title">Terms & Conditions</span>
                                            <span className="safety__link-desc">Rules and guidelines for using TaxiSure</span>
                                        </span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                    </a>

                                    <a href="/account-deletion" className="safety__link">
                                        <span className="safety__link-icon">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <line x1="15" y1="9" x2="9" y2="15" />
                                                <line x1="9" y1="9" x2="15" y2="15" />
                                            </svg>
                                        </span>
                                        <span className="safety__link-content">
                                            <span className="safety__link-title">Account Deletion</span>
                                            <span className="safety__link-desc">How to delete your account and data</span>
                                        </span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                    </a>

                                    <a href="/contact" className="safety__link">
                                        <span className="safety__link-icon">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                            </svg>
                                        </span>
                                        <span className="safety__link-content">
                                            <span className="safety__link-title">Contact Support</span>
                                            <span className="safety__link-desc">Get help with any questions or concerns</span>
                                        </span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="safety__account-note">
                                <div className="safety__note-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="12" y1="16" x2="12" y2="12" />
                                        <line x1="12" y1="8" x2="12.01" y2="8" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Account Information</h4>
                                    <p>TaxiSure requires account creation to use our services. You can create an account, manage your profile, and delete your account at any time through the app or by contacting our support team.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Download Section */}
            <section className="download" id="download">
                <div className="download__bg">
                    <div className="download__gradient"></div>
                    <div className="download__shapes">
                        <div className="download__shape download__shape--1"></div>
                        <div className="download__shape download__shape--2"></div>
                        <div className="download__shape download__shape--3"></div>
                    </div>
                </div>

                <div className="download__container container">
                    <div className="download__content" data-animate="fade-up">
                        <h2 className="download__title">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="download__description">
                            Download TaxiSure today and experience the difference. Available exclusively on Google Play Store.
                        </p>

                        <div className="download__actions">
                            <a href="https://play.google.com/store/apps/details?id=com.taxisure.v2.android&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="download__cta">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="download__badge" />
                            </a>
                        </div>

                        <div className="download__qr">
                            <div className="download__qr-box">
                                <img src="/My_QR_Code_1-1024.svg" alt="QR Code - Scan to download TaxiSure" width="140" height="140" />
                            </div>
                            <p className="download__qr-text">Scan to download</p>
                        </div>
                    </div>

                    <div className="download__visual" data-animate="fade-left">
                        <div className="download__phone">
                            <div className="download__phone-frame">
                                <div className="download__phone-notch"></div>
                                <img src="/unnamed.webp" alt="TaxiSure App" className="download__phone-screen" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
