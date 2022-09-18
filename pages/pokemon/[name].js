import { useRouter } from "next/router";
import Head from "next/head";
import useFetchPokemonWithName from "./../../utils/fetchPokemonWithName";
import Spinner from "../../components/Spinner";
import Header from "../../components/Header";
import Basics from "../../components/Basics";
import Stats from "../../components/Stats";
import Move from "../../components/Move";
import { BackwardIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Footer from "../../components/Footer";

function PokemonDetail() {
  const { query } = useRouter();
  const { result, error } = useFetchPokemonWithName(query?.name);

  return (
    <>
      <Head>
        <title>Pokémon - {result?.id}</title>
        <link rel="icon" href="/assets/p-icon.jpeg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />
      <div className="flex flex-col bg-[#FBDDBB] mt-10 from-gray-200 items-center justify-evenly">
        {result ? (
          <div className="">
            <div className="bg-[#5bb0ca]  flex flex-col  justify-center items-center">
              <h1
                className='capitalize text-gray-100 rounded-md text-4xl'
              >
                {query?.name}
              </h1>
            </div>
            <div className="text-gray-800 px-12 pb-20">
              <Basics
                id={result?.id}
                name={result?.name}
                types={result?.types}
                abilities={result?.abilities}
                weight={result?.weight}
                height={result?.height}
                species={result?.species.name}
              />
              <Move moves={result?.moves} />
              <Stats stats={result?.stats} />
            </div>
            <Link href="/">
              <div className=" flex flex-row mb-3 w-40  bg-[#5bb0ca] px-4 py-2 rounded text-white text-center items-center">
                <BackwardIcon className=" h-8 mb-1 mr-3 group-hover:animate-bounce" />
                Back to Home.
              </div>
            </Link>
            <Footer />
          </div>
        ) : (
          <div className="h-screen">
            <Spinner />
            <Footer />
          </div>
        )}
      </div>
    </>
  );
}

export default PokemonDetail;
