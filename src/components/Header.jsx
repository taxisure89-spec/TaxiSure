import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const { user, logout } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const userMenuRef = useRef(null);

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
        setIsUserMenuOpen(false);
        document.body.style.overflow = '';
    }, [location]);

    // Close user menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setIsUserMenuOpen(false);
            }
        };

        if (isUserMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isUserMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
    };

    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    };

    const handleLogout = async () => {
        try {
            await logout();
            setIsUserMenuOpen(false);
        } catch (error) {
            console.error('Logout error:', error);
        }
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
                        {user && (
                            <>
                                <li className="nav__item nav__item--mobile">
                                    <Link to="/delete" className="nav__link" onClick={closeMenu}>Delete Account</Link>
                                </li>
                                <li className="nav__item nav__item--mobile">
                                    <button onClick={handleLogout} className="nav__link nav__link--button">Sign Out</button>
                                </li>
                            </>
                        )}
                        {!user && (
                            <>
                                <li className="nav__item nav__item--mobile">
                                    <Link to="/signin" className="nav__link" onClick={closeMenu}>Sign In</Link>
                                </li>
                                <li className="nav__item nav__item--mobile">
                                    <Link to="/signup" className="nav__link" onClick={closeMenu}>Sign Up</Link>
                                </li>
                            </>
                        )}
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
                        <div className="nav__auth-wrapper" ref={userMenuRef}>
                            <button
                                className="nav__auth-button"
                                onClick={toggleUserMenu}
                                aria-label="Authentication menu"
                                aria-expanded={isUserMenuOpen}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                                <span>Account</span>
                                <svg
                                    className={`nav__auth-arrow ${isUserMenuOpen ? 'nav__auth-arrow--open' : ''}`}
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>

                            {isUserMenuOpen && (
                                <div className="nav__auth-menu">
                                    <Link
                                        to="/signin"
                                        className="nav__auth-menu-item"
                                        onClick={() => setIsUserMenuOpen(false)}
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                                            <polyline points="10 17 15 12 10 7" />
                                            <line x1="15" y1="12" x2="3" y2="12" />
                                        </svg>
                                        Sign In
                                    </Link>
                                    <Link
                                        to="/signup"
                                        className="nav__auth-menu-item"
                                        onClick={() => setIsUserMenuOpen(false)}
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                            <circle cx="8.5" cy="7" r="4" />
                                            <line x1="20" y1="8" x2="20" y2="14" />
                                            <line x1="23" y1="11" x2="17" y2="11" />
                                        </svg>
                                        Sign Up
                                    </Link>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="nav__user-wrapper" ref={userMenuRef}>
                            <button
                                className="nav__user"
                                onClick={toggleUserMenu}
                                aria-label="User menu"
                                aria-expanded={isUserMenuOpen}
                            >
                                <img
                                    src={user.photoURL || '/logo.png'}
                                    alt="User"
                                    className="nav__user-avatar"
                                />
                                <span className="nav__user-name">
                                    {user.displayName?.split(' ')[0] || 'User'}
                                </span>
                                <svg
                                    className={`nav__user-arrow ${isUserMenuOpen ? 'nav__user-arrow--open' : ''}`}
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>

                            {isUserMenuOpen && (
                                <div className="nav__user-menu">
                                    <div className="nav__user-menu-header">
                                        <div className="nav__user-menu-avatar">
                                            {user.photoURL ? (
                                                <img src={user.photoURL} alt={user.displayName || 'User'} />
                                            ) : (
                                                <div className="nav__user-menu-avatar-placeholder">
                                                    {(user.displayName || user.email || 'U')[0].toUpperCase()}
                                                </div>
                                            )}
                                        </div>
                                        <div className="nav__user-menu-info">
                                            <p className="nav__user-menu-name">{user.displayName || 'User'}</p>
                                            <p className="nav__user-menu-email">{user.email}</p>
                                        </div>
                                    </div>
                                    <div className="nav__user-menu-divider"></div>
                                    <Link
                                        to="/delete"
                                        className="nav__user-menu-item"
                                        onClick={() => setIsUserMenuOpen(false)}
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        Delete Account
                                    </Link>
                                    <div className="nav__user-menu-divider"></div>
                                    <button
                                        onClick={handleLogout}
                                        className="nav__user-menu-item nav__user-menu-item--logout"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                            <polyline points="16 17 21 12 16 7" />
                                            <line x1="21" y1="12" x2="9" y2="12" />
                                        </svg>
                                        Sign Out
                                    </button>
                                </div>
                            )}
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
