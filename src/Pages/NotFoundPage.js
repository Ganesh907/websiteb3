import React from 'react';
import '../CSS_Files/NotFoundPage.css'; // Import custom CSS

// NotFoundPage Component
const NotFoundPage = () => {
  const dots = Array.from({ length: 3 }, (_, index) => (
    <div
      key={index}
      className="h-5 w-5 bg-white rounded-md mx-1 animate-spin"
//       style={{ animationDelay: `${index * 0.2}s` }}
    />
  ));

  return (
    <div className='bg-transparent min-h-screen flex flex-col items-center justify-center'>
      {/* pt-20 ensures there's space for the navbar */}
      <div className='relative flex flex-col items-center  '>
        {/* Spinner with changing background and text color */}
        <div className='p-2 flex flex-col items-center '>
          <div className="animate-bounce  flex duration-1000 justify-center items-end h-24 w-24">
            <div
              className="bg-white rounded-md p-5 animate-alternate-colors"
              style={{ boxShadow: "0 4px 0 rgba(0, 0, 0, 0.2)" }}
            >
              <h1 className='font-bold text-alternate-colors text-4xl '>B<sup>3</sup></h1>
            </div>
          </div>

          {/* Dots animation */}
          <div className='h-10 flex justify-center items-center '>
            {/* <h1 className='font-bold text-white ml-2'>B &nbsp;</h1> */}
            {dots}
            {/* <h1 className='font-bold text-white ml-2'>3</h1> */}
          </div>
        </div>

        {/* 404 message directly below the blue-bordered div */}
        <h1 className='text-white font-bold  text-xl lg:text-5xl mt-10'>404 - Page Not Found</h1>
        
      </div>
    </div>
  );
};

export default NotFoundPage;
