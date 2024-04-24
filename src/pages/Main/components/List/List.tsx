import Card from '@/components/Card/Card';
import { GetPokemonBasicType } from '@/types/interface/interface';
import styles from './List.module.scss';

interface Props {
  pokemonData: GetPokemonBasicType[];
}
function List({ pokemonData }: Props) {
  return (
    <div className={styles.list_container}>
      <div className={styles.list}>
        {pokemonData &&
          pokemonData.map((pokemon) => <Card key={pokemon.name} name={pokemon.name} />)}
      </div>
    </div>
  );
}

export default List;

/*
  name 으로 찾기
  url끝에 있는 id로 

  List 컴포넌트에서 함수로 만들기
  Card 컴포넌트에서 받은 name값으로 호출
*/
