import Header from '@/components/Header/Header';
import Input from '@/components/Input/Input';
import Pokeball from '@/components/Pokeball/Pokeball';
import { useState } from 'react';
import styles from './Main.module.scss';
import List from './components/List/List';
function Main() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const goSearch = () => {
    console.log('검색');
  };
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
        <List />
      </div>
    </section>
  );
}

export default Main;
