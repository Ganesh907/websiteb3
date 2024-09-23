import React from 'react';

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-transparent">
      <div className="loader">
        <style jsx>{`
          .loader {
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-top: 4px solid #0060B5; /* Blue color */
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Spinner;
