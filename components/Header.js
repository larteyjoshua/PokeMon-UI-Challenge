import Image from "next/image";
import { HomeIcon } from "@heroicons/react/24/outline";
import HeaderItem from "./HeaderItem";
import { useRouter } from "next/router";
import Search from "./Search";

function Header({ searchPokemon }) {
  const router = useRouter();
  return (
    <header className="flex flex-col sm:flex-row m-5 p-2 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem
          title="Home"
          Icon={HomeIcon}
          onClick={() => router.push("/")}
        />
        <Search searchPokemon={searchPokemon} />
      </div>
      <div className="headerRight">
        <Image
          className="objectContain"
          src="/assets/p-icon.jpeg"
          width={80}
          height={50}
        />
        <p className="tracking-widest"> POKEMON</p>
      </div>
    </header>
  );
}

export default Header;
