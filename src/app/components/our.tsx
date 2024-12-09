import React from "react";
import Image from "next/image";

const Our = () => {
  const blogs = [
    {
      id: 1,
      title: "Going all-in with millennial design",
      imageUrl: "/blog1.jpg", // Replace with your image path
      timeToRead: "5 min",
      date: "12th Oct 2022",
    },
    {
      id: 2,
      title: "Going all-in with millennial design",
      imageUrl: "/blog2.jpg", // Replace with your image path
      timeToRead: "5 min",
      date: "12th Oct 2022",
    },
    {
      id: 3,
      title: "Going all-in with millennial design",
      imageUrl: "/blog3.jpg", // Replace with your image path
      timeToRead: "5 min",
      date: "12th Oct 2022",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Our Blogs</h1>
          <p className="text-gray-600 mt-2">
            Find a bright idea to suit your taste with our great selection
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Blog Image */}
              <div className="relative w-full h-48">
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  priority // Optimizes loading for LCP
                />
              </div>
              {/* Blog Content */}
              <div className="p-6 text-center">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h2>
                <button className="text-blue-500 font-medium hover:underline">
                  Read More
                </button>
                {/* Metadata */}
                <div className="mt-4 flex justify-center items-center text-gray-500 text-sm">
                  <span className="flex items-center mr-4">
                    <i className="far fa-clock mr-2"></i> {blog.timeToRead}
                  </span>
                  <span className="flex items-center">
                    <i className="far fa-calendar-alt mr-2"></i> {blog.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Our;
