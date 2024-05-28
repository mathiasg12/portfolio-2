import { Link } from 'react-router-dom';
import { Nav } from '../Nav';
import styles from './header.module.css';
export function Header() {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.logo}>
        MG
      </Link>
      <Nav></Nav>
    </div>
  );
}
