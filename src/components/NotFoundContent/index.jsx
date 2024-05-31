import { Link } from 'react-router-dom';
import styles from './notFoundContent.module.css';
/**
 * component that returns the jsx for 404 page not found content
 */
export function NotFoundContent() {
  return (
    <section className={styles.notFoundSection}>
      <h1>Sorry this page was not Found</h1>
      <div>
        <p>Sorry the page you were looking for was not found</p>
        <Link className={styles.notFoundLink}>Back to home</Link>
      </div>
    </section>
  );
}
