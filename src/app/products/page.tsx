import { RiStarSFill } from "react-icons/ri";
import Image from "next/image";
interface Iproduct{
    title:string,
    price:string,
    id:number,
    rating?:string,
    old_price?:string,
    img_url:string
}
let product:Iproduct[] = [
{
    title:"T-SHIRT WITH TAPE DETAILS",
    id:1,
    price:"$120",
    img_url:"/images/product1.png"

},
{
    title:"SKINNY FIT JEANS",
    id:1,
    price:"$240",
    img_url:"/images/product2.png",
    old_price:"$200"

},{
    title:"CHECKERED SHIRT",
    id:1,
    price:"$180",
    img_url:"/images/product3.png"

},{
    title:"SLEEVE STRIPED T-SHIRT",
    id:1,
    price:"$130",
    img_url:"/images/product4.png",
    old_price:"$200"

}
]
let star =[<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>]

export default function Product(){
    return(
        <div  className="w-full sm:h-full h-[500px] mt-10">
            <h1 className="text-3xl md:text-4xl font-bold text-center">NEW ARRIVALS</h1>
            <div className="flex  flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
                {
                    product.map((data)=>{
                        return(
                            <div>
                               <div className="w-[230px] h-[200px] bg-[#F0EEED] rounded-[20px] ">
                               <Image className="w-full h-full rounded-[20px]" src={data.img_url} alt={data.title}width={100} height={100}></Image>
                               </div>
                                <div>
                                <p className="text-lg mt-2 font-bold">{data.title}</p>
                                <p className="flex text-yellow-300">{star}</p>
                                <p className="font-bold mt-1" >{data.price}<span className="text-gray-400 font-bold line-through ml-1 ">{data.old_price}</span> </p>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}