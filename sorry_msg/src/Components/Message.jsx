import React from 'react';

const Message = ({ message, onAcknowledge }) => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-gray-100"
      style={{
        backgroundImage: 'url(/Background.jpg)', // Directly use the relative path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 w-3/4 max-w-md text-center">
        <h1 className="text-[40px] font-bold text-red-500 mb-4">Mujhe Maaf Kr Dijiya Madam Jee😔💖</h1>
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
