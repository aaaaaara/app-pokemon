import styles from './Pokeball.module.scss';

interface Props {
  clentX: number;
  clentY: number;
}
function Pokeball({ clentX, clentY }: Props) {
  return (
    <div className={styles.pokeball} style={{ transform: `translate(${clentX}px, ${clentY}px)` }}>
      <div className={styles.pokeball_details}>
        <div className={styles.pokeball_button}></div>
      </div>
    </div>
  );
}

export default Pokeball;
