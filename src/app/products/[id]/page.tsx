"use client";
import { RiStarSFill } from "react-icons/ri";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Check, Minus, Plus } from "lucide-react";

const star = Array(5).fill(null).map((_, index) => <RiStarSFill key={index} />);

interface Iproduct {
    title: string;
    price: string;
    id: number;
    rating?: string;
    old_price?: string;
    img_url: string;
    img1: string;
    img2: string;
    img3: string;
}

const product: Iproduct[] = [
    {
        title: "T-SHIRT WITH TAPE DETAILS",
        id: 1,
        price: "$120",
        img_url: "/images/product1.png",
        img1: "/images/detail1.png",
        img2: "/images/detail2.png",
        img3: "/images/detail3.png",
    },
    {
        title: "SKINNY FIT JEANS",
        id: 2,
        price: "$240",
        old_price: "$200",
        img_url: "/images/product2.png",
        img1: "/images/detail1.png",
        img2: "/images/detail2.png",
        img3: "/images/detail3.png",
    },
    {
        title: "CHECKERED SHIRT",
        id: 3,
        price: "$180",
        img_url: "/images/product3.png",
        img1: "/images/detail1.png",
        img2: "/images/detail2.png",
        img3: "/images/detail3.png",
    },
    {
        title: "SLEEVE STRIPED T-SHIRT",
        id: 4,
        price: "$130",
        old_price: "$200",
        img_url: "/images/product4.png",
        img1: "/images/detail1.png",
        img2: "/images/detail2.png",
        img3: "/images/detail3.png",
    },
];

export default function Pro_detail() {
    const params = useParams();
    const id = params.id; // dynamic id
    const item = product.find((item) => item.id === Number(id));

    if (!item) {
        return <h1>Product not found</h1>;
    }

    return (
        <div className="flex flex-col md:flex-row justify-center sm:justify-evenly mt-10 p-5 sm:p-0">
            {/* Left */}
            <div className="flex sm:flex-col justify-between items-center w-full sm:w-[152px]">
                {/* Images */}
                {[item.img1, item.img2, item.img3].map((img, index) => (
                    <Image
                        key={index}
                        src={img}
                        className="sm:w-full w-[100px] h-[100px] sm:h-[150px] sm:mt-3"
                        alt="productdetail"
                        width={100}
                        height={100}
                    />
                ))}
            </div>

            {/* Middle */}
            <div className="w-full sm:w-[444px] h-[260px] mt-5 sm:mt-0 sm:h-[500px]">
                <Image
                    src={item.img1}
                    alt="productdetail"
                    className="w-full h-[95%]"
                    width={100}
                    height={100}
                />
            </div>

            {/* Right */}
            <div className="w-full sm:w-[600px] h-[500px] mt-3">
                <h1 className="text-2xl md:text-3xl font-bold">{item.title}</h1>
                <div className="flex text-yellow-300">{star}</div>
                <p className="font-bold mt-1">
                    {item.price} <span>{item.old_price}</span>
                </p>
                <p>
                    This graphic t-shirt which is perfect for any occasion.
                    Crafted from a soft and breathable fabric, it offers
                    superior comfort and style.
                </p>

                {/* Select Color */}
                <div className="flex mt-5">
                    <p className="text-gray-500">Select Colors</p>
                    <div className="flex mt-2">
                        {["#4F4631", "#314F4A", "#31344F"].map((color, index) => (
                            <div
                                key={index}
                                className="w-[37px] h-[37px] space-x-3 mt-8 rounded-full flex justify-center items-center"
                                style={{ backgroundColor: color }}
                            >
                                <Check className="text-white opacity-0 hover:opacity-100" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Select Size */}
                <div className="mt-4">
                    <p className="text-gray-500">Choose size</p>
                    <div className="flex space-x-3 mt-3">
                        {["Small", "Medium", "Large", "X-Large"].map((size, index) => (
                            <div
                                key={index}
                                className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-500"
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-start items-center mt-7 space-x-4">
                    <div className="w-[90px] h-[40px] flex justify-between items-center rounded-[62px] bg-[#F0F0F0] text-gray-500">
                        <Minus className="font-bold" />
                        1
                        <Plus className="font-bold" />
                    </div>
                    <Button className="text-white w-[300px] bg-black">
                        Add to cart
                    </Button>
                </div>
            </div>
        </div>
    );
}
