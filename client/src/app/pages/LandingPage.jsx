import React, { useState } from "react";

const LandingPage = () => {
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [showSteps, setShowSteps] = useState(false);

  const handleSearchAddress = (e) => {
    setDeliveryAddress(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/delivery?query=${encodeURIComponent(deliveryAddress)}`;
    console.log("searching", deliveryAddress);
  };

  const toggleSteps = () => {
    setShowSteps(!showSteps);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 relative">
      <div className="flex flex-col items-center justify-center relative">
        <div className="flex justify-center items-center w-full mb-8 relative">
          <div className="absolute top-0 left-0">
            <img src="https://assets.api.uizard.io/api/cdn/stream/4c2ecf65-dcbe-4126-9aba-e90ab3514397.png" alt="discover2" className="w-12 h-12 rounded-lg" />
          </div>
          <div className="">
            <h1 className="text-6xl font-semibold font-poppins text-center text-black mb-4">Discover Our Most Delectable Dishes</h1>
            <form onSubmit={handleSearchSubmit} className="flex items-center">
              <input
                type="text"
                value={deliveryAddress}
                onChange={handleSearchAddress}
                className="border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-indigo-500 text-black text-center"
                placeholder="Enter your address"
              />
              <button type="submit" className="bg-indigo-500 text-black px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Search</button>
            </form>
          </div>
          <div>
            <img src="https://assets.api.uizard.io/api/cdn/stream/509960c0-9679-42c2-9fe2-0e3a3ed5e54f.png" alt="discover1" className="w-12 h-12 rounded-lg absolute right-0 bottom-0" />
          </div>
        </div>

        <div className="bg-gray-200 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between w-full items-center">
            <div className="text-center " onClick={toggleSteps}>
              <h3 className="text-4xl text-black mb-8 flex cursor-pointer items-center text-center text-black text-2xl font-semibold font-poppins" style={{ lineHeight: '48px' }}>How It Works</h3>
            </div>
          </div>
          {showSteps && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg border border-yellow-500 shadow-lg flex flex-col items-center">
                <img src="https://assets.api.uizard.io/api/cdn/stream/7dc79fea-dfab-43c4-8c3c-4d3c302573fb.png" alt="step 1" className="w-10 h-10 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-black mb-4">Step 1</h3>
                <p className="text-gray-700">Enter your location, Simply type in your address or enable location services for a precise delivery</p>
              </div>
              <div className="bg-white p-8 rounded-lg border border-yellow-500 shadow-lg flex flex-col items-center">
                <img src="https://assets.api.uizard.io/api/cdn/stream/a46630bd-9a0c-4b7c-bb3c-6b0f4f2d3b31.png" alt="step 2" className="w-10 h-10 object-cover rounded-full mb-4" />
                <h3 className="text-xl font-semibold text-black mb-4">Step 2</h3>
                <p className="text-gray-700">Choose a restaurant and a mouthwatering dish. The perfect quick bite is just a click away</p>
              </div>
              <div className="bg-white p-8 rounded-lg border border-yellow-500 shadow-lg flex flex-col items-center">
                <img src="https://assets.api.uizard.io/api/cdn/stream/6992293c-39ad-4d51-873e-64bf26754ab0.png" alt="step 3" className="w-10 h-10 object-cover rounded-full mb-4" />
                <h3 className="text-xl font-semibold text-black mb-4">Step 3</h3>
                <p className="text-gray-700">Complete your payment. Sit back and relax while we prepare your delicious food</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
