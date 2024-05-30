import { recentProjectArray } from '../../JS/recentProjectArray';
import { RecentProjectCard } from '../RecentProjectCard';
import styles from './recentProject.module.css';
export function RecentProjects() {
  return (
    <section className={styles.recentProjectsSection}>
      <h1>Recent projects</h1>
      <RecentProjectCard projectArray={recentProjectArray}></RecentProjectCard>
    </section>
  );
}
