import React from "react";
import Image from "next/image";

const NewArrival = () => {
  const products = [
    {
      id: 1,
      image: "/images/images.png-9", 
      name: "T-SHIRT WITH TAPE DETAILS",
      rating: "4.5/5",
      price: "$120",
      originalPrice: "$232",
      discount: "20%",
    },
    {
      id: 2,
      image: "/images/images.png-4",
      name: "SKINNY FIT JEANS",
      rating: "4.0/5",
      price: "$240",
    },
    {
      id: 3,
      image: "/images/images.png-5",
      name: "CHECKERED SHIRT",
      rating: "3.0/5",
      price: "$180",
    },
    {
      id: 4,
      image: "/images/images.png-6",
      name: "SLEEVE STRIPED T-SHIRT",
      rating: "4.5/5",
      price: "$130",
    },
  ];

  return (
    <div className="bg-gray-50 p-6">
      <h2 className="text-center text-4xl font-bold mb-8">New Arrival</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md p-4 rounded-lg text-center"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-md mb-4"></Image>
            
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-sm text-yellow-600 mb-2">{product.rating}</p>
            <div className="text-lg font-bold">
              <span className="text-black">{product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-gray-500 line-through ml-2">
                    {product.originalPrice}
                  </span>
                  <span className="text-red-500 text-sm ml-2">
                    {product.discount}
                  </span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="bg-white-500 font-bold text-black py-2 px-4 rounded-md hover:bg-white-600 ">
          View All
        </button>
      </div>
    </div>
  );
};

export default NewArrival;
