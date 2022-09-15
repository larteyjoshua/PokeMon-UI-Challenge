import { useRouter } from "next/router";
import Image from "next/image";
import useFetchPokemonWithName from "./../../utils/fetchPokemonWithName";

function PokemonDetail() {
    const { query } = useRouter();
    const { result, error } = useFetchPokemonWithName(query.name);
    if (error) return <h1>Something went wrong!</h1>;
    if (!result) return <h1>Loading...</h1>;

  
    return (
        <div className=" bg-[#FBDDBB] w-100 m-4 group cursor-pointer transition duration-200 sm:hover:scale-105 hover: z-50">
      <h1 className="text-white bg-[#5bb0ca] font-bold w-15 rounded-r-lg p-1 absolute boa">
        #{result?.id}
      </h1>

      <Image
        layout="responsive"
        src={result?.sprites.front_default}
        height={1080}
        width={1720}
      />
      <span></span>
      <div className=" p-2 ">
        <h2 className="text-[#00302E] capitalize mt-1  justify-center text-3xl transition-all duration-100 ease-in-out group-hover:font-bold">
          {query.name}
        </h2>
        <p className=" truncate max-w-md text-black transition-all duration-100 ease-in-out group-hover:font-bold ">
          {" "}
          {result?.types.map((poke) => poke.type.name).join(", ")}
        </p>
      </div>
    </div>
    )
  }
  
  export default PokemonDetail