import { ContactMeContent } from '../../components/ContactMeContent';
import styles from './contactPage.module.css';
/**
 * component that returns the contact page
 */
export function ContactPage() {
  return (
    <main className={styles.contactMain}>
      <ContactMeContent></ContactMeContent>
    </main>
  );
}
