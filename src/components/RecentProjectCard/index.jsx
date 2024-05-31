import { Link } from 'react-router-dom';
import styles from './recentProjectCard.module.css';
/**
 * component that creates the "Recent project card" this card contains a image, title, short decription and links to the live site and github repository
 */
export function RecentProjectCard(props) {
  const { projectArray } = props;
  return (
    <div>
      {projectArray.map((eachObject) => {
        return (
          <div className={styles.card} key={eachObject.id}>
            <div className={styles.imageDiv}>
              <img src={eachObject.imageUrl} alt="screenshot of project" />
            </div>
            <h3>{eachObject.title}</h3>
            <p className={styles.desc}>{eachObject.decription}</p>
            <div>
              <h4>Built with</h4>
              <div className={styles.bultWithCon}>
                {eachObject.builtWith.map((item) => {
                  return (
                    <div className={styles.svgCon} key={item.name}>
                      <p>{item.name}</p>
                      <div>
                        <img src={item.svg} alt="svg of tool" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.linkCon}>
              <Link to={eachObject.liveSite} className={styles.link}>
                Live site
              </Link>
              <Link
                to={eachObject.gitHub}
                className={`${styles.link} ${styles.gitHubLink}`}
              >
                Github repo
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
