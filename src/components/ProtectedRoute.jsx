import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import LoadingSpinner from './LoadingSpinner';

function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <LoadingSpinner text="Checking authentication..." />;
    }

    if (!user) {
        // Redirect to sign-in page, but save the location they were trying to access
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return children;
}

export default ProtectedRoute;
