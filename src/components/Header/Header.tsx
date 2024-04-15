import styles from './Header.module.scss';

const TITLE = 'pokemon';
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <h1 className={styles.header_title}>{TITLE}</h1>
      </div>
    </header>
  );
}

export default Header;
