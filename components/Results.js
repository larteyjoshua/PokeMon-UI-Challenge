import Thumbnail from "./Thumbnail"
 
function Results({result}) {
    
  return (
    <div className=" px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-4 3xl:flex flex-wrap justify-center">
      {result.results.map(pokemon => (
        <Thumbnail  key ={pokemon.name} pokemon= {pokemon}/>
      ))}
    </div>
  )
}

export default Results
