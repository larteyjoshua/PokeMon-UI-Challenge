import Image from "next/image";
import useFetchPokemonWithName from "../utils/fetchPokemonWithName";
import Link from "next/link";
import Spinner from "./Spinner";
import Error from "./Error";

function Thumbnail({ pokemon }) {
  const { name } = pokemon;
  const { result, error } = useFetchPokemonWithName(name);

  if (error) return <Error error={error} />;
  if (!result) return <Spinner />;

  return (
    <div>
    <Link href={`/pokemon/${name}/`}>
      <div className=" bg-[#FBDDBB] max-w-100 m-4 group cursor-pointer transition duration-200 sm:hover:scale-105 hover: z-50">
        <h1 className="text-white bg-[#5bb0ca] font-bold w-15 rounded-r-lg p-1 absolute">
          #{result?.id}
        </h1>

        <Image
          className="justify-center items-center"
          layout="responsive"
          priority={true}
          quality={100}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon//${result?.id}.png`}
          height={100}
          width={200}
        />
        <div className=" p-2 ">
          <h2 className="text-[#00302E] capitalize mt-1 items-center flex flex-col justify-center tracking-wide text-2xl transition-all duration-100 ease-in-out group-hover:font-bold">
            {name}
          </h2>
          <p className=" truncate max-w-md  flex flex-col items-center justify-center tracking-wide text-[#00302E] transition-all duration-100 ease-in-out group-hover:font-bold ">
            {" "}
            {result?.types.map((poke) => poke.type.name).join(", ")}
          </p>
        </div>
      </div>
    </Link>
    </div>
  );
}

export default Thumbnail;
