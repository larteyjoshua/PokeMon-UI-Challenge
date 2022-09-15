import Head from 'next/head';
import Image from 'next/image';
import Results from '../components/Results';
import styles from '../styles/Home.module.css';
import Header from './../components/Header';
import useFetchPokemonWithOffSet from './../utils/fetchPokemonWithOffSet'
import React, { useState } from 'react';
import BottomNav from '../components/BottomNav';
import Spinner from '../components/Spinner';


export default function Home() {
  const [offSet, setOffSet] = useState(0)
  const { result, error } = useFetchPokemonWithOffSet(offSet);
  
  const nextPage = () => {
    setOffSet(offSet + 16);
  
  };
  const previousPage = () => {
    setOffSet(Math.max(offSet - 16, 0));
  };
  console.log(offSet)

  // if (!Array.isArray(result?.results) || result.results.length <= 0) {
  //   return null;
  // }

  if (error) return <h1>Something went wrong!</h1>;
  if (!result) return ( <Spinner/>)
 
 
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon UI Challenge</title>
        <meta name="description" content="Job Code Challenge" />
        <link rel="icon" href="/./../public/assets/p-icon.jpeg" />
      </Head>
     
     <Header />
     <Results result={result}  /> 
     <BottomNav previousPage={previousPage} nextPage={nextPage} />

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

// export async function getServerProps(context){
// //  const request = await fetch('https://pokeapi.co/api/v2/pokemon?limit=16&offset=0').then(res => res.json())
//  return {
//   props: {
    

// }