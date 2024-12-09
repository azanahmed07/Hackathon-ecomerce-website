import React from "react";

const Instagram = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* View All Posts Section - Moved Above the Image */}
      <div className="text-center w-full mt-8">
        <a
          href="#"
          className="text-gray-600 text-sm font-medium hover:underline"
        >
          View All Posts
        </a>
        <div className="mt-1 border-t-2 border-gray-400 w-16 mx-auto"></div>
      </div>

      {/* Full-width Image Section */}
      <div className="w-full">
        <img
          src="/instagram-pic.jpg" // Replace with your actual image URL
          alt="Instagram Feed"
          className="w-full h-[60vh] object-cover" // Adjust the height as needed
        />
      </div>

      {/* Main Section (Centered Content) */}
      <div className="flex flex-col items-center justify-center text-center px-4 mt-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Instagram</h1>
        <p className="text-gray-600 mb-6">Follow our store on Instagram</p>

        <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg shadow-lg font-medium hover:bg-gray-300 transition">
          Follow Us
        </button>
      </div>
    </div>
  );
};

export default Instagram;
