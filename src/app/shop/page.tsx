import React from "react";
import Link from "next/link"; // Import Link from next/link
import Image from "next/image"; // Import Image from next/image

const ShopPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section with Full Image */}
      <div
        className="w-full h-[316px] mx-auto bg-cover bg-center relative"
        style={{ backgroundImage: "url('/path-to-your-header-image.jpg')" }} // Replace this with your actual image path
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex flex-col justify-center items-start h-full text-white px-8 relative z-10">
          <h1 className="text-4xl font-bold">Shop</h1>
          <p className="text-sm mt-2">
            <Link href="/" className="hover:underline">Home</Link> &gt; <span>Shop</span>
          </p>
        </div>
      </div>

      {/* Small Image next to text */}
      <div className="w-[1440px] mx-auto py-8 flex justify-between items-center">
        <div className="flex flex-col gap-4 w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800">Explore Our Collection</h2>
          <p className="text-gray-600">Find the perfect items that suit your needs and space.</p>
        </div>
        <div className="w-1/3">
          <Image
            src="/path-to-small-image.jpg" // Replace with actual image path for the small image
            alt="Small Display"
            width={500} // Specify width
            height={300} // Specify height
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Product Grid Section */}
      <div className="w-[1440px] mx-auto py-8">
        <div className="flex justify-between items-center mb-6">
          <button className="text-gray-700 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200">
            Filter
          </button>
          <div className="text-gray-600">Showing 1–16 of 32 results</div>
          <select className="border border-gray-300 px-3 py-2 rounded-md">
            <option>Default</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {/* Product Card */}
          {Array(16).fill(0).map((_, index) => (
            <div
              key={index}
              className="w-[287px] h-[387px] border border-gray-300 p-4 bg-white flex flex-col items-center justify-between"
            >
              {/* Product Image */}
              <div
                className="w-full h-[200px] bg-cover bg-center mb-4"
                style={{ backgroundImage: `url('/path-to-product-image-${index + 1}.jpg')` }} // Ensure product images have correct paths
              ></div>
              <h3 className="text-lg font-medium text-gray-800 text-center">
                Product Name {index + 1}
              </h3>
              <p className="text-gray-600 text-center">Rs. {Math.floor(Math.random() * 100000) + 15000}.00</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <ul className="flex space-x-4">
            <li className="px-4 py-2 bg-yellow-400 text-white rounded">1</li>
            <li className="px-4 py-2 border border-gray-300 rounded">2</li>
            <li className="px-4 py-2 border border-gray-300 rounded">3</li>
            <li className="px-4 py-2 border border-gray-300 rounded">Next</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
