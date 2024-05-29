import { useState } from 'react';
import { AboutMeContent } from '../AboutMeContent';
import { GitHubLink } from '../GithubLink';
import styles from './aboutMeSection.module.css';
import { ExperienceContent } from '../ExperienceSection';
import { SkillsSection } from '../SkillsSection';
/**
 * Function that returns the aboutMeSection.
 * This section includes three buttons where users can choose what to display: either an "About Me" section, a "Skills" section, or an "Experience" section.
 */
export function AboutMeSection() {
  const [activeSection, setActiveSection] = useState('ab');
  function changeActiveSection(section) {
    setActiveSection(section);
  }
  return (
    <section className={styles.aboutMeSection}>
      <div className={styles.buttonsWrapper}>
        <button
          onClick={() => changeActiveSection('ab')}
          className={`${styles.notActiveBtn} ${activeSection === 'ab' ? styles.activeBtn : ''}`}
        >
          About me
        </button>
        <button
          onClick={() => changeActiveSection('sk')}
          className={`${styles.notActiveBtn} ${activeSection === 'sk' ? styles.activeBtn : ''}`}
        >
          Skills
        </button>
        <button
          onClick={() => changeActiveSection('exp')}
          className={`${styles.notActiveBtn} ${activeSection === 'exp' ? styles.activeBtn : ''}`}
        >
          Experience
        </button>
      </div>
      <div className={styles.contentWrapper}>
        <div>
          {activeSection === 'ab' && <AboutMeContent></AboutMeContent>}
          {activeSection === 'sk' && <SkillsSection></SkillsSection>}
          {activeSection === 'exp' && <ExperienceContent></ExperienceContent>}
        </div>
        <GitHubLink></GitHubLink>
      </div>
    </section>
  );
}
