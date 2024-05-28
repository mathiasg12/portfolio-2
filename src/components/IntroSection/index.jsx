import styles from './intro.module.css';
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
