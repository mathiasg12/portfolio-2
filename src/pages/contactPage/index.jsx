import { ContactMeContent } from '../../components/ContactMeContent';
import styles from './contactPage.module.css';
export function ContactPage() {
  return (
    <main className={styles.contactMain}>
      <ContactMeContent></ContactMeContent>
    </main>
  );
}
