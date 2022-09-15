import Image from "next/image";
import{HomeIcon, MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className=" flex flex-col sm:flex-row m-5 border=2 justify-between items-center  bg-[#00302E] ;">
     <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem  title="Home" Icon={HomeIcon} />
        <HeaderItem  title="Search" Icon={MagnifyingGlassIcon} /> 
     </div>
     <div className="headerRight"> 
     <Image
       className="objectContain"
        src="/./../public/assets/p-icon.jpeg"
         width={80}
          height={50} />
        <p className="tracking-widest"> POKEMON</p>
     </div> 
    </header>
  );
}

export default Header;
