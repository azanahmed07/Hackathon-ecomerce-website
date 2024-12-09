import React from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Side Table",
    imageUrl: "/Slide Table.png", // Replace with actual image path
  },
  {
    id: 2,
    name: "Side Table",
    imageUrl: "/Side Table.png", // Replace with actual image path
  },
];

const Product = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto flex justify-center gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 w-64 text-center"
          >
            <div className="relative w-full h-40">
              <Image
                src={product.imageUrl}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority // Optimize loading for LCP
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {product.name}
            </h3>
            <a
              href="#"
              className="text-blue-500 underline hover:text-blue-600 mt-2 inline-block"
            >
              View More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
