import React from 'react';

function Boxes() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-stretch gap-6 p-6 bg-gray-100">
      
      <div className="flex-1 bg-white shadow-md rounded-lg p-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">మా దృష్టి</h2>
      </div>

      <div className="flex-1 bg-white shadow-md rounded-lg p-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">చరిత్ర & మూలం</h2>
      </div>

      <div className="flex-1 bg-white shadow-md rounded-lg p-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">మా లక్ష్యం</h2>
      </div>

    </div>
  );
}

export default Boxes;
