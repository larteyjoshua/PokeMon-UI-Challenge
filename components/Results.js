import Thumbnail from "./Thumbnail"
import useFetchPokemon from "../utils/request";
  
function Results() {
    const { result, error } = useFetchPokemon();

  if (error) return <h1>Something went wrong!</h1>;
  if (!result) return <h1>Loading...</h1>;
  console.log(result.results)

  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-4 3xl:flex flex-wrap justify-center">
      {result.results.map(pokemon => (
        <Thumbnail  key ={pokemon.name} pokemon= {pokemon}/>
      ))}
    </div>
  )
}

export default Results
