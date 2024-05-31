import { Link, NavLink, useLocation } from 'react-router-dom';
import styles from './nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
/**
 * component that returns the jsx for the Nav
 */
export function Nav(props) {
  const { setActiveMenu, activeMenu } = props;
  const location = useLocation();
  function onClickHamburger() {
    setActiveMenu(!activeMenu);
  }
  useEffect(() => {
    setActiveMenu(!activeMenu);
  }, [location]);
  return (
    <nav className={styles.nav}>
      <FontAwesomeIcon
        icon={faBars}
        type="button"
        role="button"
        onClick={onClickHamburger}
        className={styles.hamburger}
      />
      <ul className={styles.headerUl}>
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
