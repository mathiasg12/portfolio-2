import { GithubLink } from '../GitHubProfileLink';
import { LinkedinLink } from '../LinkedinLink';
import styles from './contactMe.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
/**
 * component that creates the Contact page content
 */
export function ContactMeContent() {
  return (
    <section className={styles.contactContentSection}>
      <div className={styles.contactMeWrapper}>
        <h1>Contact me</h1>
        <div className={styles.emailCon}>
          <p>
            If you want to send me a message or ask me a question my Email is:
          </p>
          <a
            className={styles.emailAndEnvWrapper}
            href="mailto:mathiasgausl@gmail.com"
          >
            <FontAwesomeIcon icon={faEnvelope} className={styles.env} />
            <p className={styles.linkText}>mathiasgausl@gmail.com</p>
          </a>
        </div>
        <div className={styles.linkWrapper}>
          <GithubLink></GithubLink>
          <LinkedinLink></LinkedinLink>
        </div>
      </div>
    </section>
  );
}
