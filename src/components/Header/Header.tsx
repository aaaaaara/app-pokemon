import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_inner}> pokemon </div>
    </header>
  );
}

export default Header;
