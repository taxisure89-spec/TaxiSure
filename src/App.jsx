import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/ProtectedRoute';

// Lazy load pages for better performance (code splitting)
const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));
const AccountDeletion = lazy(() => import('./pages/AccountDeletion'));
const SignUp = lazy(() => import('./pages/SignUp'));
const SignIn = lazy(() => import('./pages/SignIn'));
const DeleteAccount = lazy(() => import('./pages/DeleteAccount'));

function App() {
    return (
        <>
            <ScrollToTop />
            <Suspense fallback={<LoadingSpinner text="Loading page..." />}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="terms" element={<Terms />} />
                        <Route path="account-deletion" element={<AccountDeletion />} />
                        <Route path="signup" element={<SignUp />} />
                        <Route path="signin" element={<SignIn />} />
                        <Route
                            path="delete"
                            element={
                                <ProtectedRoute>
                                    <DeleteAccount />
                                </ProtectedRoute>
                            }
                        />
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
}

export default App;
