import { Link } from 'react-router-dom';
import { Nav } from '../Nav';
import styles from './header.module.css';
import { useState } from 'react';
/**
 * component that returns the jsx for the header
 */
export function Header() {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <Link to="/" className={styles.logo}>
          MG
        </Link>
        <Nav setActiveMenu={setActiveMenu} activeMenu={activeMenu}></Nav>
      </div>
      <ul className={activeMenu ? styles.menuVisible : styles.menuNotVisible}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
