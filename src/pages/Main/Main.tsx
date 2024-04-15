import Header from '@/components/Header/Header';
import Pokeball from '@/components/Pokeball/Pokeball';
import { useState } from 'react';
import styles from './Main.module.scss';
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
        <div className={styles.search}>
          <input type="search" placeholder="너로 정했다 !" />
          <button onClick={goSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#657789"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-search">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
        <div className={styles.list_container}>
          <div className={styles.list}>
            {[1, 2, 3, 4, 5, 6].map((z, idx) => (
              <div key={idx}>
                <p className={styles.img}>
                  <img src="" alt="pokemon" />
                </p>
                <ul className={styles.description}>
                  <li>name</li>
                  <li>type</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
