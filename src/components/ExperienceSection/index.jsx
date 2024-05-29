import styles from './experienceContent.module.css';
/**
 * function that creates the ExperienceContent component
 */
export function ExperienceContent() {
  return (
    <div className={styles.experienceSection}>
      <h2>Experience</h2>
      <p>
        My experience as a Frontend Developer includes two years of education at
        Noroff School of Technology and Digital Media, where I worked on various
        projects using design programs, HTML, CSS, JavaScript, React, Bootstrap,
        headless WordPress, and much more.
      </p>
      <ul>
        <h3>Projects I worked on includes</h3>
        <li>Blogg site</li>
        <li>e-commerce site</li>
        <li>auction house site</li>
        <li>Booking site</li>
        <li>and more</li>
      </ul>
    </div>
  );
}
