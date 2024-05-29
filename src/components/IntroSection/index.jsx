import styles from './intro.module.css';
/**
 * component that returns the jsx intro message at the home page
 */
export function IntroMessage() {
  return (
    <section>
      <div className={styles.introMessage}>
        <h1>Hello</h1>
        <h2>My name is Mathias</h2>
        <h3>And I am a Frontend developer</h3>
      </div>
    </section>
  );
}
