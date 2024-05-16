import { getPokemonApi, getPokemonDetailApi } from '@/api/repository';
import Header from '@/components/Header/Header';
import Input from '@/components/Input/Input';
import { GetPokemonBasicType } from '@/types/interface/interface';
import { useEffect, useState } from 'react';
import styles from './Main.module.scss';
import List from './components/List/List';
function Main() {
  const [pokemonData, setPokemonData] = useState<GetPokemonBasicType[]>([]); //포켓몬 전체 리스트
  const [pokemonImage, setPokemonImage] = useState(''); //포켓몬 이미지 데이터
  const [filteredPokemonData, setFilteredPokemonData] = useState<GetPokemonBasicType[]>([]);
  const [inputValue, setInputValue] = useState('');

  const goSearch = () => {
    /*
     * value state를 이용하여 pokemonData에서 value와 일치하는 data를 찾는다
     */

    const pokemon = pokemonData.filter((pokemon) => pokemon.name.includes(inputValue));
    setFilteredPokemonData(pokemon);
  };

  const getPokemonData = () => {
    getPokemonApi()
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data.results), setFilteredPokemonData(data.results);
      })
      .catch((error) => console.log(error));
  };

  const getPokemonDetail = (name: string) => {
    getPokemonDetailApi(name)
      .then((response) => response.json())
      .then((data) => setPokemonImage(data.sprites.front_default))
      .catch((error) => console.log(error));
  };

  const getImage = () => {
    pokemonData.forEach((pokemon, i) => getPokemonDetail(pokemon.name));
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  useEffect(() => {
    getImage();
  }, []);

  useEffect(() => {
    goSearch();
  }, [inputValue]);

  return (
    <section>
      <div className={styles.inner}>
        <Header />
        <Input onClick={goSearch} value={inputValue} setValue={setInputValue} />
        <List pokemonData={filteredPokemonData} image={pokemonImage} />
      </div>
    </section>
  );
}

export default Main;

/*
    @@ 포켓몬 검색 
 * 포켓몬 데이터에서 유저는 원하는 포켓몬을 찾고자 한다. 
 * 유저는 검색창을 통해 포켓몬 이름을 입력한다.
 * 입력 후에 찾기버튼(돋보기모양 아이콘)을 클릭힌다.
 * 유저가 입력한 포켓몬 이름과 일치하는(이름이 포함된?) 포켓몬 리스트가 나온다.
 *  
 * !! 구현해야되는 기능
 * !! 필수 
 * input => onChange , value가 저장되는 state 필요 
 * button => onClick 
 * view => filter된 결과를 담은 state 필요 (편의상 view로 표기)
 * !! 순서
 * 유저가 input에 입력한 값을 저장한다. (value가 바뀔 때 input 이벤트가 발생하고, onChange함수를 통해서 state를 업데이트 해줄 수 있다.)
 * - input은 child component로 되어있다 
 * - 그렇다면, 값을 저장할 state를 props로 넘겨준다
 * - 값을 변경하는 setState 함수도 props로 넘겨준다
 * 유저가 입력한 값을 가지고 포켓몬 데이터안에 일치하는 값을 찾는다. (클릭 이벤트)
 * - 일치하는 값은 filter메서드를 이용 할 수 있다 
 * - 포함하는 값을 찾고 싶으면 inclues메서드를 이용할 수 있다.
 * 일치하는 값을 리스트로 보여준다.
 * - 필터된 값이 저장된 state를 List component로 전달해준다.
 * 
 * !! 참고사항
 * 포켓몬 리스트의 데이터는 Main컴포넌트에서 불러온다
 * 
 * !!주의할 점
 * state는 같은 선상에 있어야 한다.
 
*/
