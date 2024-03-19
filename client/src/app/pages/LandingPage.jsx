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
    <div className="     ">
      <div className="w-full">

 
<img src="landingpage.png" alt="landing" className="justify-center  " style={{ width: '1150px', height: '450px' , marginLeft:'9rem'}} >
</img>

<div className="flex flex-col justify-center items-center ">




<div>
<div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{backgroundImage: 'url(landingpage.png)'}}>
    <header className="font-semibold font-poppins text-black mb-4 text-center" style={{  fontSize: '2rem', paddingTop: '4rem', marginTop: '2rem' }}>
      Discover Our Most <br /> Delectable Dishes
    </header>

    <form onSubmit={handleSearchSubmit} className="flex items-center justify-center">
      <input
        type="text"
        value={deliveryAddress}
        onChange={handleSearchAddress}
        className="mr-8 border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-indigo-500 text-black text-center mr-2"
        placeholder="Enter your address"
      />
      <button type="submit" className="mr-8 font-semibold bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600" style={{ backgroundColor: 'black' }}>
        Search
      </button>
    </form>
  </div>
</div>



</div>


        <div className="bg-gray-200 py-16   mb-8 relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-col   cursor-pointer" onClick={toggleSteps}>
    <div >
      <h1 className=" text-center text-2xl mb-4 mr-4 text-black  font-semibold font-poppins rounded-lg border border-yellow-500 shadow-lg " style={{ lineHeight: '48px', marginLeft: '25px' }}>How It Works</h1>
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

<div className="text-black font-bold  mb-8  ">
  <div className="flex flex-col text-black ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-col ">
      <h1 className="font-semibold text-black  text-2xl mb-4 mr-4 text-black  font-semibold font-poppins rounded-lg  shadow-lg text-black text-2xl font-bold font-poppins mb-4 leading-tight " style={{ lineHeight: '48px' }}>Join The DishDash Community</h1>
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


</div>
</div>   


  )};

export default LandingPage;
