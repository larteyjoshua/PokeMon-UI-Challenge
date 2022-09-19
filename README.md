
![Next](https://img.shields.io/badge/NextJS-12.3.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.1.8-blueviolet)



# Pokemon-Box

This is a Pokemon-Box app built using [Next.js](https://nextjs.org/) and [TailwindCSS](http://tailwindcss.com).

[Check out the Website](https://pokemon-app-inky-ten.vercel.app/).
Leave a 🌟 if you liked it. That would make my day 😊.

## Screenshots
<img src="https://github.com/larteyjoshua/PokeMon-UI-Challenge/blob/main/screenshots/main-page1.png" width='600'  />
<img src="https://github.com/larteyjoshua/PokeMon-UI-Challenge/blob/main/screenshots/main-page2.png" width='600' />
<img src="https://github.com/larteyjoshua/PokeMon-UI-Challenge/blob/main/screenshots/detail-page1.png" width='600' />
<img src="https://github.com/larteyjoshua/PokeMon-UI-Challenge/blob/main/screenshots/detail-page2.png" width='600'  />
## Features

1. Data of 1000 species and different forms.
2. Pokemon Moves.
3. stats Data.
4. Abilities.


## Getting Started

1. First install all the dependencies with `yarn install` or `npm install`.
2. Then, run the development server using `yarn dev` or `npm run dev`.
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## A word of Thanks

- [PokeAPI](https://github.com/PokeAPI/pokeapi) for providing Pokemon Data.
- [Duiker101](https://github.com/duiker101/pokemon-type-svg-icons) for making beautiful pokemon type icons.

## APPROACH 
In order to arrive at the need solution. I break the problem into pieces and create Jiras using the atlassian Jira. 
First, I ensured I get my responsiveness right using Tailwind C grid and screen break point for small and large screen. 
I then break my code base into pieces making use of components. I implement the header component following by the results components and the footer component. I then break the consume the results in the results component using the thumbnail which each pokemon at break point of 16. 
Finally, I consume the pokemon API by by fetching 1000 Pokemon's and using react Paginate to break the results into 15 per page. Each the next button is click, the detail of the pokemon is fetching in the thumbnail component. On a click of of a pokemon, the detail of the pokemon is display making use of next js page parameter display. The details is also break into three components namely basics for the basic pokemon info, Stats for the pokemon stats making use of react tailwind material, a free material package from creative teams and the moves component which display all the moves of a pokemon. I finally implement the search logic and display the search bar at the appropriate page. The implementation of the search was bit challenging but it well but need some improvement if possible. The search work when three letters a pokemon name is enter but when the letters are clear. it is does not return the first page and not the state of the using assuming the user is on the ten's page. I am sure if this requirement is the exactly what is expected but much improvement will be added if there are more time. 


## Copyright

Pokémon and Pokemon-Box are registered trademarks of their respective owners. No copyright infringement intended. This is just a fun little side project made by a PokeFan.
