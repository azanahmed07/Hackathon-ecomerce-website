import React from "react";
import Image from "next/image";

const Blog = () => {
  const blog = {
    id: 1,
    title: "New Arrivals",
    subtitle: "Asgaard Sofa",
    description: "Discover the latest addition to our collection. Modern, elegant, and comfortable.",
    imageUrl: "/img.sofa.jpg", // Example image path
    buttonLabel: "Order Now",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto p-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* Blog Content */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Blog Image */}
            <div className="relative">
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                priority // Optimize for LCP
              />
            </div>

            {/* Blog Text Section */}
            <div className="flex flex-col justify-center p-8">
              <h1 className="text-3xl font-bold text-gray-800">{blog.title}</h1>
              <h2 className="text-2xl text-gray-600 mt-2 font-semibold">
                {blog.subtitle}
              </h2>
              <p className="text-gray-700 mt-4 leading-relaxed">
                {blog.description}
              </p>
              <div className="mt-6">
                <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-all">
                  {blog.buttonLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
