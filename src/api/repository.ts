/*

1. 리스트 데이터 받아서 뿌리는 작업
2. image data 요청해서 뿌리기
(카드 )
fetch => data 뽑기 => 과정을 이해 => 20(토)
*/

export const getPokemonApi = () => {
  const response = fetch('https://pokeapi.co/api/v2/pokemon');
  return response;
};

export const getPokemonsDetailApi = () => {
  const response = fetch('https://pokeapi.co/api/v2/pokemon/${id}');
  return response;
};

//https://pokeapi.co/api/v2/pokemon/{id or name}/
//PokemonSprites  front_default

/*
fetch함수는 디폴트가 get
fetch는 promise로 감싸진 response를 반환한다
    async function logMovies() {
  const response = await fetch("http://example.com/movies.json");
  const movies = await response.json(); 응답은 respoense객체로 표현되며 json 응답 본문을 바로 반환하지 않기때문에 json()메서드를 호출
  console.log(movies);
*/
