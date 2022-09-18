import Image from "next/image";
import Link from "next/link";
import Spinner from "./Spinner";
import Error from "./Error";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Thumbnail({ pokemon }) {
  const { name } = pokemon;
  const [result, setResult] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPokemon();
  }, [name]);

  function fetchPokemon() {
    if (name) {
      const API_URL = "https://pokeapi.co/api/v2/pokemon";
      const url = `${API_URL}/${name}`;
      axios
        .get(url)
        .then((response) => {
          setResult(response?.data);
        })
        .catch((err) => {
          setError(err?.message);
        });
    }
  }

  if (result && result?.id) {
    return (
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
              {result?.name}
            </h2>
            <p className=" truncate max-w-md  flex flex-col items-center justify-center tracking-wide text-[#00302E] transition-all duration-100 ease-in-out group-hover:font-bold ">
              {" "}
              {result.types?.map((poke) => poke.type.name).join(", ")}
            </p>
          </div>
        </div>
      </Link>
    );
  } else if (!result && !error) {
    return (
      <div className="">
        <Spinner />
      </div>
    );
  } else if (error) {
    return (
      <div className="">
        <Error error={error} />
      </div>
    );
  }
}

export default Thumbnail;
