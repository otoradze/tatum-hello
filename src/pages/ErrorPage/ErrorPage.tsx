import { useLocation } from 'preact-iso';
import './ErrorPage.css';

export const ErrorPage = () => {
  const location = useLocation();

  const handleGoBack = () => {
    location.route('/');
  };

  return (
    <section className="not-found-container">
      <div className="content-wrapper">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button className="go-back-btn" onClick={handleGoBack}>
          Take Me Home
        </button>
      </div>
    </section>
  );
};
