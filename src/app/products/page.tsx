import { RiStarSFill } from "react-icons/ri";
import Image from "next/image";

interface IProduct {
  title: string;
  price: string;
  id: number;
  rating?: number; // Change to number for dynamic stars
  old_price?: string;
  img_url: string;
}

const products: IProduct[] = [
  {
    title: "T-SHIRT WITH TAPE DETAILS",
    id: 1,
    price: "$120",
    img_url: "/images/product1.png",
    rating: 4, // Example rating
  },
  {
    title: "SKINNY FIT JEANS",
    id: 2,
    price: "$240",
    img_url: "/images/product2.png",
    old_price: "$200",
    rating: 5,
  },
  {
    title: "CHECKERED SHIRT",
    id: 3,
    price: "$180",
    img_url: "/images/product3.png",
    rating: 3,
  },
  {
    title: "SLEEVE STRIPED T-SHIRT",
    id: 4,
    price: "$130",
    img_url: "/images/product4.png",
    old_price: "$200",
    rating: 4,
  },
];

export default function Product() {
  return (
    <div className="w-full sm:h-full h-[500px] mt-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center">NEW ARRIVALS</h1>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
        {products.map((product) => (
          <div key={product.id} className="mb-8">
            <div className="w-[230px] h-[200px] bg-[#F0EEED] rounded-[20px]">
              <Image
                className="w-full h-full rounded-[20px]"
                src={product.img_url}
                alt={product.title}
                width={100}
                height={100}
              />
            </div>
            <div>
              <p className="text-lg mt-2 font-bold">{product.title}</p>
              <p className="flex text-yellow-300">
                {Array(product.rating || 0)
                  .fill(0)
                  .map((_, i) => (
                    <RiStarSFill key={i} />
                  ))}
              </p>
              <p className="font-bold mt-1">
                {product.price}
                {product.old_price && (
                  <span className="text-gray-400 font-bold line-through ml-1">
                    {product.old_price}
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}