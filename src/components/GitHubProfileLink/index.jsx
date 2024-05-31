import { Link } from 'react-router-dom';
import styles from './gitHubLink.module.css';
/**
 * component that creates the Link to github
 */
export function GithubLink() {
  return (
    <Link to="https://github.com/mathiasg12" className={styles.gitHubLink}>
      GitHub
    </Link>
  );
}
