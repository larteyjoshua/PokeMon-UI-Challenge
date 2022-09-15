import Head from 'next/head'
import Image from 'next/image'
import Results from '../components/Results'
import styles from '../styles/Home.module.css'
import Header from './../components/Header'
const results = [{
  "name": "bulbasaur",
  "url": "https://pokeapi.co/api/v2/pokemon/1/"
},
{
  "name": "ivysaur",
  "url": "https://pokeapi.co/api/v2/pokemon/2/"
},
{
  "name": "venusaur",
  "url": "https://pokeapi.co/api/v2/pokemon/3/"
},
{
  "name": "charmander",
  "url": "https://pokeapi.co/api/v2/pokemon/4/"
},
{
  "name": "charmeleon",
  "url": "https://pokeapi.co/api/v2/pokemon/5/"
},
{
  "name": "charizard",
  "url": "https://pokeapi.co/api/v2/pokemon/6/"
},
{
  "name": "squirtle",
  "url": "https://pokeapi.co/api/v2/pokemon/7/"
},
{
  "name": "wartortle",
  "url": "https://pokeapi.co/api/v2/pokemon/8/"
},
{
  "name": "blastoise",
  "url": "https://pokeapi.co/api/v2/pokemon/9/"
},
{
  "name": "caterpie",
  "url": "https://pokeapi.co/api/v2/pokemon/10/"
},
{
  "name": "metapod",
  "url": "https://pokeapi.co/api/v2/pokemon/11/"
},
{
  "name": "butterfree",
  "url": "https://pokeapi.co/api/v2/pokemon/12/"
},
{
  "name": "weedle",
  "url": "https://pokeapi.co/api/v2/pokemon/13/"
},
{
  "name": "kakuna",
  "url": "https://pokeapi.co/api/v2/pokemon/14/"
},
{
  "name": "beedrill",
  "url": "https://pokeapi.co/api/v2/pokemon/15/"
},
{
  "name": "pidgey",
  "url": "https://pokeapi.co/api/v2/pokemon/16/"
}]


export default function Home(results) {
  console.log(results)
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon UI Challenge</title>
        <meta name="description" content="Job Code Challenge" />
        <link rel="icon" href="/./../public/assets/p-icon.jpeg" />
      </Head>
     
     <Header />
     <Results  /> 

    

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