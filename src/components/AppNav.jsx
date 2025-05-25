import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">都市一覧</NavLink>
        </li>
        <li>
          <NavLink to="countries">国一覧</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
