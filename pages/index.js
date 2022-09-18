import Head from "next/head";
import Results from "../components/Results";
import Header from "./../components/Header";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import Error from "../components/Error";
import Footer from "../components/Footer";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(16);
  const [error, setError] = useState("");

  const offset = currentPage * perPage;
  const currentPageData = pokemon.slice(offset, offset + perPage);
  const pageCount = Math.ceil(pokemon.length / perPage);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const API_URL = "https://pokeapi.co/api/v2/pokemon";
    const limit = 1000;
    const offSet = 0;
    const url = `${API_URL}?limit=${limit}&offset=${offSet}`;
    axios
      .get(url)
      .then((response) => {
        setPokemon(response.data.results);
      })
      .catch((err) => setError(err.error));
  }
  const copyPokemon = pokemon;

  const searchPokemon = (text) => {
    if (text.length >= 3) {
      setPerPage(16);
      setCurrentPage(0);
      const filterPokemon = copyPokemon.filter((d) =>
        d.name.toLowerCase().includes(text.toLowerCase())
      );
      setPokemon(filterPokemon);
    } else {
      fetchData();
    }
  };

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div>
      <Head>
        <title>Pokemon UI Challenge</title>
        <meta name="description" content="Job Code Challenge" />
        <link rel="icon" href="/assets/p-icon.jpeg" />
      </Head>

      <Header searchPokemon={searchPokemon} />
      <Results result={currentPageData} />

      <ReactPaginate
        className="flex flex-grow justify-evenly items-center cursor-pointer text-gray-400 font-medium mb-10"
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        previousLinkClassName={
          "flex flex-col font-bold border rounded p-3 capitalize sm:p-0"
        }
        nextLinkClassName={
          " font-bold text-[#5bb0ca] border p-3 rounded capitalize sm:p-0"
        }
        disabledClassName={"text-gray-700 sm:p-0"}
        activeClassName={
          "bg-[#5bb0ca] w-auto p-3 font-bold text-gray-700 sm:p-0"
        }
      />

      <Footer />
    </div>
  );
}
