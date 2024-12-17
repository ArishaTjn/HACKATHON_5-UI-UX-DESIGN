import Image from "next/image";
const DressStyleGrid = () => {
    const dressStyles = [
      { name: "Casual", image: "/images/frame 61.png" },
      { name: "Formal", image: "/images/frame 62.png" },
      { name: "Party", image: "/images/frame 64.png" },
      { name: "Gym", image: "/images/frame 63.png" },
    ];
  
    return (
      <div className="max-w-5xl mx-auto p-4 bg-gray-50">
        <h1 className="text-3xl font-bold text-center mb-6">
          BROWSE BY DRESS STYLE
        </h1>
        <div className="grid grid-cols-2 gap-4">
          {dressStyles.map((style) => (
            <div
              key={style.name}
              className="relative group cursor-pointer overflow-hidden"
            >
              <Image
                src={style.image}
                alt={style.name}
                className="w-full h-60 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">{style.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default DressStyleGrid;
  