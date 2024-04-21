import { getPokemonApi } from '@/api/repository';
import Header from '@/components/Header/Header';
import Input from '@/components/Input/Input';
import Pokeball from '@/components/Pokeball/Pokeball';
import { useEffect, useState } from 'react';
import styles from './Main.module.scss';
import List from './components/List/List';
function Main() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [pokemonData, setPokemonData] = useState<[]>([]);
  const goSearch = () => {
    console.log('검색');
  };

  const getPokemonData = () => {
    getPokemonApi()
      .then((response) => response.json())
      .then((data) => setPokemonData(data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPokemonApi();
    getPokemonData();
  }, []);

  return (
    <section
      className={styles.container}
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}>
      <div className={styles.inner}>
        <Pokeball clentX={position.x} clentY={position.y} />
        <Header />
        <Input onClick={goSearch} />
        <List pokemonData={pokemonData} />
      </div>
    </section>
  );
}

export default Main;
