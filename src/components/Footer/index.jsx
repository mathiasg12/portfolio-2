import { Link } from 'react-router-dom';
import styles from './footer.module.css';
/**
 * component that creates the jsx for the footer
 */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>Email: mathiasgausl@gmail.com</li>
        <li>
          <Link to="https://github.com/mathiasg12" className={styles.gitLink}>
            Github Profile
          </Link>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com/in/mathias-gausl%C3%A5-79aa162aa/"
            className={styles.linkedinLink}
          >
            Linkedin Profile
          </Link>
        </li>
      </ul>
    </footer>
  );
}
