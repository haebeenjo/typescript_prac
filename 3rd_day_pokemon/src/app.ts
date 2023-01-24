// getElementById 정의로 가보면 HTMLElement, null을 리턴 받는걸 확인
const container: HTMLElement | null = document.getElementById("app");
// 보여줄 포켓몬 최대 수를 지정하는 pokemons 변수 생성
const pokemons: number = 100;

// api에서 가져올 포켓몬 객체 형식을 지정하는 인터페이스 생성
interface IPokemon {
  id: number;
  name: string;
  image: string;
  type: string;
}

// 포켓몬 정보를 불러오는 getPokemon 함수를 100번 실행시킬 fetchData 함수 구현
const fetchData = async(): Promise<void> => {
  for (let i = 1; i <= pokemons; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id: number): Promise<void> => {
  const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon: any = await data.json();
  const pokemonType: string = pokemon.types
    .map((poke: any) => poke.type.name)
    .join(", ");

  const transformedPokemon: IPokemon = {
    id: pokemon.id,
    name: pokemon.name,
    image: `${pokemon.sprites.front_default}`,
    type: pokemonType,
  };

  showPokemon(transformedPokemon);
};

const showPokemon = (pokemon: IPokemon): void => {
  let output: string = `
      <div class="card">
          <span class="card--id">#${pokemon.id}</span>
          <img class="card--image" src=${pokemon.image} alt=${pokemon.name} />
          <h1 class="card--name">${pokemon.name}</h1>
          <span class="card--details">${pokemon.type}</span>
      </div>
    `;

  if (container) {
    container.innerHTML += output;
  }
};

fetchData();