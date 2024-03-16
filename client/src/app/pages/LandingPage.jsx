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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 relative bg-gray-200 py-16 ">
      <div className="flex flex-col items-center justify-center relative">
        
        <div className="flex justify-center items-center w-full mb-8 relative">
          <div className="absolute top-0 left-0">
            <img src="https://assets.api.uizard.io/api/cdn/stream/4c2ecf65-dcbe-4126-9aba-e90ab3514397.png" alt="discover2" className="w-10 h-10 rounded-lg" />
          </div>
          <div className="">
            <header className="text-6xl font-semibold font-poppins text-center text-black mb-4">Discover Our Most Delectable Dishes</header>
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
        

        <div className="bg-gray-200 py-16   mb-8 relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-col   cursor-pointer" onClick={toggleSteps}>
    <div className="text-center">
      <h1 className="text-4xl text-black mb-8 flex items-center text-center text-black text-2xl font-semibold font-poppins" style={{ lineHeight: '48px' }}>How It Works</h1>
    </div>
  </div>
  {showSteps && (
    <div className="flex flex-cols-3 gap-8">
      <div className="bg-white p-8 rounded-lg border border-yellow-500 shadow-lg flex items-start">
        <div className="mr-4">
          <img src="https://assets.api.uizard.io/api/cdn/stream/7dc79fea-dfab-43c4-8c3c-4d3c302573fb.png" alt="step 1" className="w-12 h-12 object-cover rounded-lg" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-black mb-2">Step 1</h3>
          <p className="text-gray-700">Enter your location, Simply type in your address or enable location services for a precise delivery</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg border border-yellow-500 shadow-lg flex items-start">
        <div className="mr-4">
          <img src="https://assets.api.uizard.io/api/cdn/stream/a46630bd-9a0c-4b7c-bb3c-6b0f4f2d3b31.png" alt="step 2" className="w-12 h-12 object-cover rounded-full mb-4" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-black mb-2">Step 2</h3>
          <p className="text-gray-700">Choose a restaurant and a mouthwatering dish. The perfect quick bite is just a click away</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg border border-yellow-500 shadow-lg flex items-start">
        <div>
          <img src="https://assets.api.uizard.io/api/cdn/stream/6992293c-39ad-4d51-873e-64bf26754ab0.png" alt="step 3" className="w-12 h-12 object-cover rounded-full mb-4" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-black mb-2">Step 3</h3>
          <p className="text-gray-700">Complete your payment. Sit back and relax while we prepare your delicious food</p>
        </div>
      </div>
    </div>
  )}
</div>

<div className="text-black font-bold">
  <div className="flex flex-col text-black">
    <div>
      <h1 className="text-center text-4xl font-semibold text-black mb-8">Join The DishDash Community</h1>
    </div>
    <div className="flex flex-cols-3 gap-8">
    <div className="mr-4 bg-white p-8 rounded-lg shadow-md flex flex-col items-start border border-yellow-500 shadow-lg">
  <img src="https://assets.api.uizard.io/api/cdn/stream/e246370c-8563-4926-bbe9-d1d44b872ab7.png" alt="become a rider" className="w-10 h-12 object-cover rounded-full mb-4" />
  <div className="pb-4" style={{ marginBottom: '10px' }}>
    <h3 className="text-xl font-semibold text-black mb-2">Become A Rider</h3>
    <p className="text-gray-700 mb-4" style={{ marginBottom: '10px' }}>Earn money by delivering food from restaurants. All you need is a bike and a passion for great service</p>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfozeHDuj3aPCKtKCIZbD9JdO4h6eQMXKJcS0GdTrugABOwTg/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
      <button type="button" className="font-semibold border border-black bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 focus:outline-none focus:bg-gray-900 " style={{ backgroundColor: 'black' }}>Start Riding</button>
    </a>
  </div>
</div>

<div className="mr-4 bg-white p-8 rounded-lg shadow-md flex flex-col items-start border border-yellow-500 shadow-lg">
  <img src="https://assets.api.uizard.io/api/cdn/stream/3de66382-a1d7-41e9-add0-73355e305e95.png" alt="partner with us" className="w-10 h-14 object-cover rounded-full mb-4" />
  <div className="pb-4" style={{ marginBottom: '10px' }}>
    <h3 className="text-xl font-semibold text-black mb-2">Partner with Us</h3>
    <p className="text-gray-700 mb-4" >DishDash helps restaurants thrive with online ordering, loyalty programs, and more</p>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdwVPLMm-BxGPulP1lEoipVLSAgihCjQ4TrC2gt8QVNt25OMA/viewform" target="_blank" rel="noopener noreferrer">
    <button type="button" className="font-semibold border border-black bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 focus:outline-none focus:bg-gray-900" style={{ backgroundColor: 'black' }}>Join Now</button>
    </a>
  </div>
</div>

<div className=" mr-4 bg-white p-8 rounded-lg shadow-md flex flex-col items-start border border-yellow-500 shadow-lg">
  <img src="https://assets.api.uizard.io/api/cdn/stream/5731af9d-856a-4f19-be88-ace58e953529.png" alt="join our team" className="w-12 h-12 object-cover rounded-full mb-4" />
  <div className="pb-4 items-center" style={{ marginBottom: '10px' }}>
    <h3 className="text-xl font-semibold text-black mb-2">Join Our Team</h3>
    <p className="text-gray-700 mb-4"  >Be part of a team that's building an exceptional delivery service</p>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdwVPLMm-BxGPulP1lEoipVLSAgihCjQ4TrC2gt8QVNt25OMA/viewform" target="_blank" rel="noopener noreferrer">
    <button type="button" className="font-semibold border border-black text-white px-4 py-2 rounded-md hover:bg-gray-900 focus:outline-none focus:bg-gray-900" style={{ backgroundColor: 'black' }}>Work With Us</button>
    </a>
  </div>
</div>
    </div>
  </div>
</div>


    

<div className="bg-white p-8 rounded-lg shadow-md flex flex-row items-center w-full border border-yellow-500 shadow-lg">
  <div className="flex-1 flex flex-col justify-center"> 
    <div className="mb-4"> 
      <h1 className="text-xl font-semibold text-black">Download Our App</h1>
    </div>
    <div className="flex items-center justify-between">
      <div className="mr-4 ">
        <img src="https://assets.api.uizard.io/api/cdn/stream/07d4696b-4d8a-41d4-b1d8-d76970325da7.png" alt="download" />
      </div>
      <div>
        <h2 className="font-semibold">Order With Ease </h2>
        <p>Indulge in the most delicious bites delivered to your door with FoodieHub. Our speedy delivery service offers a variety of cuisines from local restaurants</p>
        <form className="w-full">
          <div>
            <button
              type="download"
              className=" bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600" style={{ backgroundColor: 'black' }}
            >
              Download
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

        </div> 

        </div>
       
 
  )};

export default LandingPage;
