import styles from './skillsSection.module.css';
/**
 * component that returns the "skill section" which is a list of different tools, each li consists of a name(p tag) and a svg icon(img tag)
 */
export function SkillsSection() {
  return (
    <div className={styles.skillsWrapper}>
      <h2>My toolbox include</h2>
      <ul>
        <li>
          <p>React</p>
          <div>
            <img src="./svg/react-1-logo-svgrepo-com.svg" alt="react" />
          </div>
        </li>
        <li>
          <p>Bootstrap</p>
          <div>
            <img src="./svg/bootstrap-svgrepo-com.svg" alt="bootstrap" />
          </div>
        </li>
        <li>
          <p>Figma</p>
          <div>
            <img src="./svg/figma-svgrepo-com.svg" alt="Figma" />
          </div>
        </li>
        <li>
          <p>HTML</p>
          <div>
            <img src="./svg/html-5-svgrepo-com.svg" alt="HTML" />
          </div>
        </li>
        <li>
          <p>Netlify</p>
          <div>
            <img src="./svg/netlify-svgrepo-com.svg" alt="Netlify" />
          </div>
        </li>
        <li>
          <p>JS</p>
          <div>
            <img src="./svg/js-svgrepo-com.svg" alt="JS" />
          </div>
        </li>
        <li>
          <p>CSS</p>
          <div>
            <img src="./svg/w3_css-icon.svg" alt="css" />
          </div>
        </li>
        <li>
          <p>SCSS</p>
          <div>
            <img src="./svg/scss2-svgrepo-com.svg" alt="SCSS" />
          </div>
        </li>
        <li>
          <p>WorldPress</p>
          <div>
            <img src="./svg/wordpress-tile.svg" alt="WorldPress" />
          </div>
        </li>
        <li>
          <p className={styles.moreP}>+ more</p>
        </li>
      </ul>
    </div>
  );
}
