import { recentProjectArray } from '../../JS/recentProjectArray';
import { RecentProjectCard } from '../RecentProjectCard';
import styles from './recentProject.module.css';
/**
 * component that returns the jsx for the "recent project section" this includes a heading and the "RecentProjectCard" components
 */
export function RecentProjects() {
  return (
    <section className={styles.recentProjectsSection}>
      <h1>Recent projects</h1>
      <RecentProjectCard projectArray={recentProjectArray}></RecentProjectCard>
    </section>
  );
}
