import { Link } from 'react-router-dom';
import styles from './gitHubLink.module.css';
import { GithubLink } from '../GitHubProfileLink';
/**
 * component that creates the link to Github personal profile
 */
export function GitHubInfo() {
  return (
    <div className={styles.linkWrapper}>
      <p>
        If you want to know more about my projects, take a look at my github
        profile
      </p>
      <GithubLink></GithubLink>
    </div>
  );
}
