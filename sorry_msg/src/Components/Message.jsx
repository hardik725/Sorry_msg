import React from 'react';

const Message = ({ message, onAcknowledge }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-3/4 max-w-md text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">We're Sorry!</h1>
        <p className="text-gray-700 text-lg mb-6">{message || "Something went wrong. Please accept our apologies."}</p>
        <button
          onClick={onAcknowledge}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Acknowledge
        </button>
      </div>
    </div>
  );
};

export default Message;
