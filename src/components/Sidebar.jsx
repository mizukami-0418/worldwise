import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./sidebar.module.css";

function sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>都市リスト</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by 世界紀行
        </p>
      </footer>
    </div>
  );
}

export default sidebar;
