import Card from '@/components/Card/Card';
import styles from './List.module.scss';

interface Props {
  pokemonData: [];
}
function List({ pokemonData }: Props) {
  return (
    <div className={styles.list_container}>
      <div className={styles.list}>
        {pokemonData &&
          pokemonData.map((pokemon, idx) => <Card key={idx} image={'z'} name={pokemon.name} />)}
      </div>
    </div>
  );
}

export default List;
