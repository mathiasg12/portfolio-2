import { Link } from 'react-router-dom';
import styles from './gitHubLink.module.css';
export function GithubLink() {
  return (
    <Link to="https://github.com/mathiasg12" className={styles.gitHubLink}>
      GitHub
    </Link>
  );
}
