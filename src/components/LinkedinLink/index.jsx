import styles from './linkedinLink.module.css';
import { Link } from 'react-router-dom';
/**
 * component that creates the link to linkedin
 */
export function LinkedinLink() {
  return (
    <Link
      to="https://www.linkedin.com/in/mathias-gausl%C3%A5-79aa162aa/"
      className={styles.linkedinLink}
    >
      Linkedin
    </Link>
  );
}
