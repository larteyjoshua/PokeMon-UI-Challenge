import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const API_URL = "https://pokeapi.co/api/v2/pokemon";
        const PAGE_LIMIT = 16;

export default function useFetchPokemonWithName(name) {
    console.log(name)
  const uri = `${API_URL}/${name}`;
  const { data: result, error } = useSWR(uri, fetcher);

  return { result, error };
}
