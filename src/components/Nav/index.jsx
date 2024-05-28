import { NavLink } from 'react-router-dom';
import styles from './nav.module.css';
export function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink className={styles.navlink} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navlink} to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
