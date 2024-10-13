import { useLocation } from 'preact-iso';
import styles from './ErrorPage.module.scss';

export const ErrorPage = () => {
  const location = useLocation();

  const handleGoBack = () => {
    location.route('/');
  };

  return (
    <section className={styles.notFoundContainer}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.notFoundTitle}>404</h1>
        <p className={styles.notFoundMessage}>
          Oops! The page you're looking for doesn't exist.
        </p>
        <button className={styles.goBackBtn} onClick={handleGoBack}>
          Take Me Home
        </button>
      </div>
    </section>
  );
};
