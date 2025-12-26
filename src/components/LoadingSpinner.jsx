import './LoadingSpinner.css';

function LoadingSpinner({ size = 'medium', text = 'Loading...' }) {
    return (
        <div className={`loading-spinner loading-spinner--${size}`}>
            <div className="loading-spinner__ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {text && <p className="loading-spinner__text">{text}</p>}
        </div>
    );
}

export default LoadingSpinner;
