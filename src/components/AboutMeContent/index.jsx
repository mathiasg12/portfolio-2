import styles from './aboutMeContent.module.css';
/**
 * component that creates the jsx for the about me section
 */
export function AboutMeContent() {
  return (
    <div className={styles.aboutmeContentWrapper}>
      <h2>About me</h2>
      <p>
        Hello, my name is Mathias, and I am a 25-year-old frontend developer
        from Norway, I enjoy learning and I am currently learning more about
        React and node.js. I would describe myself as a positive, hard-working,
        and extroverted individual who thrives on new challenges. I have studied
        for two years at Noroff School of Technology and Digital Media, where I
        had the opportunity to work on practical and realistic projects.
      </p>
    </div>
  );
}
