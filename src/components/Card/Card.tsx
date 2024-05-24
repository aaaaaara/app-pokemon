interface Props {
  name: string;
  type?: string;
  image: string;
}

function Card({ name, type, image }: Props) {
  //const [pokemonImage, setPokemonImage] = useState('');

  // const getPokemonDetail = () => {
  //   getPokemonDetailApi(name)
  //     .then((response) => response.json())
  //     .then((data) => setPokemonImage(data.sprites.front_default))
  //     .catch((error) => console.log(error));
  // };

  // useEffect(() => {
  //   getPokemonDetail();
  // }, []);
  return (
    <div>
      <img src={image} alt={name} />
      <p>NAME : {name}</p>
      <p>{type}</p>
    </div>
  );
}

export default Card;

/*
 리프 컴포넌트는 prop으로 data를 받아서 view를 보여주는 그 역할
 그 이상을 하고 싶지 않았지만 
 지금 함수를 구성하기에 어려움이 있어 
 이 컴포넌트에서 api호출을 하기로 함 
*/

/**
 * main > list > card
 * main component에서 필요한 api를 호출한다
 * 전체 포켓몬 데이터
 * 이미지 데이터를 가지고 있는 상세 포켓몬 데이터
 * 상세 포켓몬 데이터를 호출 하기 위해서는 name인자가 필요하다
 * 포켓몬 이름과 포켓몬 이미지가 담긴 배열을 생성
 * 하위 컴포넌트로 props로 전달한다
 */
