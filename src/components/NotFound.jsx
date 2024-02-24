import React from 'react';

const NotFound = () => {
  return (
    <div className="text-center mt-20">
      <h2 className="text-7xl font-bold text-brandPrimary mb-6">
        Oops! Page Not Found
      </h2>
      <p className="text-lg text-gray-500 mb-8">
        It seems like you've entered a mysterious realm. The page you are looking for does not exist.
      </p>
     
      {/* You can add your custom styling for the image or replace it with your own content */}
      {/* <img
        src="https://placekitten.com/400/300"
        alt="Funny Cat"
        className="rounded-lg shadow-lg"
      /> */}
    </div>
  );
};

export default NotFound;
