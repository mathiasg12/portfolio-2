import { Link } from 'react-router-dom';
import styles from './gitHubLink.module.css';
/**
 * component that creates the link to Github personal profile
 */
export function GitHubLink() {
  return (
    <div className={styles.linkWrapper}>
      <p>
        If you want to know more about my projects, take a look at my github
        profile
      </p>
      <Link to="https://github.com/mathiasg12" className={styles.gitHubLink}>
        GitHub
      </Link>
    </div>
  );
}
