import { getPokemonApi } from '@/api/repository';
import Header from '@/components/Header/Header';
import Input from '@/components/Input/Input';
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
    getPokemonData();
  }, []);

  return (
    <section>
      <div className={styles.inner}>
        <Header />
        <Input onClick={goSearch} />
        <List pokemonData={pokemonData} />
      </div>
    </section>
  );
}

export default Main;
