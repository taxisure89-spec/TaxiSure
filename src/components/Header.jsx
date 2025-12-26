import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { user, login, logout } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
    }, [location]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
    };

    const isHomePage = location.pathname === '/';

    const handleLogoClick = (e) => {
        e.preventDefault();
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNavClick = (e, sectionId) => {
        if (isHomePage) {
            e.preventDefault();
            const element = document.getElementById(sectionId);
            if (element) {
                const headerHeight = 80;
                const targetPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        }
        closeMenu();
    };

    return (
        <header className={`header ${isScrolled || !isHomePage ? 'scrolled' : ''}`} id="header">
            <nav className="nav container">
                <a href="/" onClick={handleLogoClick} className="nav__logo">
                    <img src="/logo.png" alt="TaxiSure Logo" className="nav__logo-img" />
                </a>

                <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            {isHomePage ? (
                                <a href="#home" className="nav__link active" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
                            ) : (
                                <Link to="/" className="nav__link">Home</Link>
                            )}
                        </li>
                        <li className="nav__item">
                            {isHomePage ? (
                                <a href="#about" className="nav__link" onClick={(e) => handleNavClick(e, 'about')}>About</a>
                            ) : (
                                <Link to="/#about" className="nav__link">About</Link>
                            )}
                        </li>
                        <li className="nav__item">
                            {isHomePage ? (
                                <a href="#features" className="nav__link" onClick={(e) => handleNavClick(e, 'features')}>Features</a>
                            ) : (
                                <Link to="/#features" className="nav__link">Features</Link>
                            )}
                        </li>
                        <li className="nav__item">
                            {isHomePage ? (
                                <a href="#safety" className="nav__link" onClick={(e) => handleNavClick(e, 'safety')}>Safety</a>
                            ) : (
                                <Link to="/#safety" className="nav__link">Safety</Link>
                            )}
                        </li>
                        <li className="nav__item">
                            {isHomePage ? (
                                <a href="#download" className="nav__link" onClick={(e) => handleNavClick(e, 'download')}>Download</a>
                            ) : (
                                <Link to="/#download" className="nav__link">Download</Link>
                            )}
                        </li>
                        <li className="nav__item nav__item--mobile">
                            <Link to="/contact" className="nav__link" onClick={closeMenu}>Contact</Link>
                        </li>
                    </ul>

                    <button className="nav__close" id="nav-close" aria-label="Close menu" onClick={closeMenu}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                <div className="nav__actions">
                    {!user ? (
                        <button id="login-btn" className="nav__login" onClick={login} aria-label="Sign in with Google">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                            <span>Sign In</span>
                        </button>
                    ) : (
                        <div id="user-info" className="nav__user">
                            <img
                                id="user-avatar"
                                src={user.photoURL || '/logo.png'}
                                alt="User"
                                className="nav__user-avatar"
                            />
                            <span id="user-name" className="nav__user-name">
                                {user.displayName?.split(' ')[0] || 'User'}
                            </span>
                            <button onClick={logout} className="nav__logout" aria-label="Sign out">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                    <polyline points="16 17 21 12 16 7" />
                                    <line x1="21" y1="12" x2="9" y2="12" />
                                </svg>
                            </button>
                        </div>
                    )}
                    <Link to="/contact" className="nav__contact">Contact</Link>
                    <button className="nav__toggle" id="nav-toggle" aria-label="Open menu" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
