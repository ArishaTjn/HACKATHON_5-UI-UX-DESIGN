import { RiStarSFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

interface Iproduct {
    title: string;
    price: string;
    id: number;
    rating?: string;
    old_price?: string;
    img_url: string;
}

const product: Iproduct[] = [
    {
        title: "VERTICAL STRIPED SHIRT",
        id: 1,
        price: "$120",
        img_url: "/images/product5.png",
    },
    {
        title: "COURAGE GRAPHIC T-SHIRT",
        id: 2,
        price: "$240",
        img_url: "/images/product6.png",
        old_price: "$200",
    },
    {
        title: "LOOSE FIT BERMUDA SHORTS",
        id: 3,
        price: "$180",
        img_url: "/images/product7.png",
    },
    {
        title: "FADED SKINNY JEANS",
        id: 4,
        price: "$130",
        img_url: "/images/product-8.png",
        old_price: "$200",
    },
];

const star = Array(5).fill(null).map((_, index) => <RiStarSFill key={index} />);

export default function Top_sell() {
    return (
        <div className="w-full h-[500px] mt-10">
            <h1 className="text-3xl md:text-4xl font-bold text-center">TOP SELLING</h1>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
                {product.map((data) => (
                    <div key={data.id}>
                        <Link href={`/products/${data.id}`}>
                            <div className="w-[230px] h-[200px] bg-[#F0EEED] rounded-[20px]">
                                <Image
                                    className="w-full h-full rounded-[20px]"
                                    src={data.img_url}
                                    alt={data.title}
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </Link>
                        <div>
                            <p className="text-lg mt-2 font-bold">{data.title}</p>
                            <p className="flex text-yellow-300">{star}</p>
                            <p className="font-bold mt-1">
                                {data.price}
                                <span className="text-gray-400 font-bold line-through ml-1">
                                    {data.old_price}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
