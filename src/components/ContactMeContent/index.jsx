import { GithubLink } from '../GitHubProfileLink';
import { LinkedinLink } from '../LinkedinLink';
import styles from './contactMe.module.css';
/**
 * component that creates the Contact page content
 */
export function ContactMeContent() {
  return (
    <section className={styles.contactContentSection}>
      <div className={styles.contactMeWrapper}>
        <h1>Contact me</h1>
        <div>
          <p>
            If you want to send me a message or ask me a question my Email is:
            mathiasgausl@gmail.com
          </p>
        </div>
        <div className={styles.linkWrapper}>
          <GithubLink></GithubLink>
          <LinkedinLink></LinkedinLink>
        </div>
      </div>
    </section>
  );
}
