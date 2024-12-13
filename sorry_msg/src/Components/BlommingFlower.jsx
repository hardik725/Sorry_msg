import React from 'react';

const BloomingFlower = () => {
  const bloomFlower = () => {
    if (document.body.classList.contains('not-loaded')) {
      document.body.classList.remove('not-loaded');
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="not-loaded">
      <h1 className="title text-5xl absolute top-8 left-1/2 transform -translate-x-1/2 text-white font-poppins">
        Animated Blooming Flower
      </h1>
      <button
        className="reloadBtn absolute top-28 left-1/2 transform -translate-x-1/2 z-10 p-2 px-6 text-lg rounded bg-gray-200 hover:bg-gray-300"
        onClick={bloomFlower}
      >
        Bloom Flower
      </button>

      <div className="night absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-blue-400"></div>

      <div className="flowers relative scale-90">
        {[1, 2, 3].map((flowerNumber) => (
          <div key={flowerNumber} className={`flower flower--${flowerNumber} absolute`}> 
            <div className={`flower__leafs flower__leafs--${flowerNumber} relative animate-blooming`}>
              {[1, 2, 3, 4].map((leafNumber) => (
                <div
                  key={leafNumber}
                  className={`flower__leaf flower__leaf--${leafNumber} absolute bg-gradient-to-t from-green-400 to-teal-300 rounded-full`}
                ></div>
              ))}
              <div className="flower__white-circle bg-white rounded-full absolute"></div>
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`flower__light flower__light--${i + 1} absolute bg-blue-300 rounded-full`}
                ></div>
              ))}
            </div>
            <div className="flower__line bg-gradient-to-t from-teal-600 to-teal-300 w-1 rounded mx-auto relative">
              {[1, 2, 3, 4, 5, 6].map((lineLeafNumber) => (
                <div
                  key={lineLeafNumber}
                  className={`flower__line__leaf flower__line__leaf--${lineLeafNumber} bg-teal-400 rounded absolute`}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="growing-grass relative">
        {[1, 2].map((grassNumber) => (
          <div key={grassNumber} className={`flower__grass flower__grass--${grassNumber} absolute`}> 
            <div className="flower__grass--top bg-gradient-to-t from-green-500 to-green-300 w-2 rounded"></div>
            <div className="flower__grass--bottom bg-green-600 w-2 h-24"></div>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((leafNumber) => (
              <div
                key={leafNumber}
                className={`flower__grass__leaf flower__grass__leaf--${leafNumber} bg-green-500 rounded-full absolute`}
              ></div>
            ))}
            <div className="flower__grass__overlay bg-black bg-opacity-60 absolute inset-0 blur-sm"></div>
          </div>
        ))}
      </div>

      <div className="long-g relative">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((longGNumber) => (
          <div key={longGNumber} className={`long-g--${longGNumber} absolute`}> 
            {[0, 1, 2, 3].map((leafNumber) => (
              <div
                key={leafNumber}
                className={`leaf leaf--${leafNumber} bg-green-700 rounded-full absolute`}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloomingFlower;
