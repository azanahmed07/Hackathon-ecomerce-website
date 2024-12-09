import React from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Trenton modular sofa_3",
    price: "Rs. 25,000.00",
    imageUrl: "/image1.jpg", // Replace with actual image path
  },
  {
    id: 2,
    name: "Granite dining table with dining chair",
    price: "Rs. 25,000.00",
    imageUrl: "/image2.png", // Replace with actual image path
  },
  {
    id: 3,
    name: "Outdoor bar table and stool",
    price: "Rs. 25,000.00",
    imageUrl: "/image3.png", // Replace with actual image path
  },
  {
    id: 4,
    name: "Plain console with teak mirror",
    price: "Rs. 25,000.00",
    imageUrl: "/image4.jpg", // Replace with actual image path
  },
];

const Top = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Top Picks For You
        </h2>
        <p className="text-gray-600 mb-8">
          Find a bright idea to suit your taste with our great selection of
          suspension, floor, and table lights.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
            >
              <div className="relative w-full h-40">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                  priority
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {product.name}
              </h3>
              <p className="text-gray-700 font-bold mt-2">{product.price}</p>
            </div>
          ))}
        </div>
        <button className="mt-8 text-blue-500 underline hover:text-blue-600">
          View More
        </button>
      </div>
    </div>
  );
};

export default Top;
