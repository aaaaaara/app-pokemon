import Card from '@/components/Card/Card';
import styles from './List.module.scss';
function List() {
  return (
    <div className={styles.list_container}>
      <div className={styles.list}>
        {[1, 2, 3, 4, 5, 6].map((z, idx) => (
          <Card key={idx} image={'z'} title={'z'} />
        ))}
      </div>
    </div>
  );
}

export default List;
