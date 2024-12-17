import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";
import { SheetSide } from "./sheet";
import { NavigationMenuDemo } from "./navigation";



export default function Header() {
  return (
<header className=" w-full h-[60px] flex justify-between items-center bg-white">
    {/*left*/}
    <div className="flex justify-center items-center">
        <SheetSide/>
        <h1 className="text-xl sm:text-3xl font-bold pl-2">SHOP.CO</h1>
    </div>
    {/* navbar */}
    <ul className="hidden md:block">
        <li className="space-x-5 flex items-center text-1xl">
            
           
            <Link href={""}> <NavigationMenuDemo /></Link>
            <Link href={"Top Selling"}>On Sale</Link>
            <Link href={"New Arrival"}>New Arrival</Link>
            <Link href={""}>Brands</Link>

        </li>
    </ul>
    {/* search bar*/}
    
        <div className="hidden md:block">
        <div className="flex  justify-start items-center w-[330px] h-[40px]  bg-[#F0F0F0] rounded-[62px]" >
            <CiSearch className="text-2xl ml-2 "/>
            <input placeholder="search item..." className="w-full h-full ml-2 outline-none bg-[#F0F0F0] rounded-[62px]"></input>

        </div>
    
        </div>
    {/* cart*/}
    <div className="flex justify-center mr-7 space-x-5 ">
    <CiSearch className="text-2xl ml-2 md:hidden"/>
    <BsCart className="text-2xl"/>
    <IoPersonCircleOutline className="text-2xl"/>

    </div>


</header>
  );
}