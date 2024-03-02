import React , {useState}from "react";


const LandingPage = () => {

  const [deliveryAddress, setDeliveryAddress] = useState("");

  const handleSearchAddress = (e) => {
    setDeliveryAddress(e.target.value);
  }
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    
    window.location.href = `/delivery?query=${encodeURIComponent(deliveryAddress)}`;
    console.log("searching", deliveryAddress);
  }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 relative">

            <div className=" flex flex-col relative">
            <div className="flex justify-start items-center w-full">
          <h1 className="text-4xl font-bold text-white mb-8">Discover Our Most Delectable Dishes</h1>
            <div className="photosContainer ml-auto">
              <img src="https://barn2.com/wp-content/uploads/2020/09/834671_restaurant-chain-order-online_Op2_092120-cropped-1-820x358.png" alt="Food 1" className="slideIn-photo" />
              <div className="rotating-photos-container absolute top-0 left-0">
              <img src="https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg" alt="Food 2" className="rotating-photo w-24 h-24 object-cover rotate-animation" />
              <img src="https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg" alt="Food 3" className="rotating-photo w-24 h-24 object-cover rotate-animation" />
              </div>
            </div>
            </div>
          </div>

          
          <div className="bg-gray-200 py-16 ">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between w-full items-center">
          <div className="text-center">
            
          <h3 className="text-4xl font-bold text-black mb-8 flex items-center text-center">How It Works</h3>

          <form onSubmit={handleSearchSubmit} className=" flex items-center ml-auto">
            <input
              type="text"
              value={deliveryAddress}
              onChange={handleSearchAddress}
              className="border border-gray-300 rounded-md px-4 py-2 mr-4 focus:outline-none focus:border-indigo-500 text-black text-center"
              
              placeholder="Enter your address"
            />
            <button type="submit" className="bg-indigo-500 text-black px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Search</button>
          </form>
</div>
 </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-lg border border-yellow-500 shadow-lg">
          <img src="https://assets.api.uizard.io/api/cdn/stream/7dc79fea-dfab-43c4-8c3c-4d3c302573fb.png" alt="step 1" className="w-24 h-24 object-cover rounded-full" />
            <h3 className="text-xl font-bold text-black mb-4">Step 1</h3>
            <p className="text-gray-700">Enter your location, Simply type in your address or enable location services for a precise delivery</p>
          </div>
          <div className="bg-white p-8 rounded-lg border border-yellow-500 shadow-lg">
            <img src="https://assets.api.uizard.io/api/cdn/stream/a46630bd-9a0c-4b7c-bb3c-6b0f4f2d3b31.png" alt="step 2" className="w-24 h-24 object-cover rounded-full" />
            <h3 className="text-xl font-bold text-black mb-4">Step 2</h3>
            <p className="text-gray-700">Choose a restaurant and a mouthwatering dish. The perfect quick bite is just a click away</p>
          </div>
          <div className="bg-white p-8 rounded-lg border border-yellow-500 shadow-lg">
          <img src="https://assets.api.uizard.io/api/cdn/stream/6992293c-39ad-4d51-873e-64bf26754ab0.png" alt="step 3" className="w-24 h-24 object-cover rounded-full" />
            <h3 className="text-xl font-bold text-black mb-4">Step 3</h3>
            <p className="text-gray-700">Complete your payment. Sit back and relax while we prepare your delicious food</p>
          </div>
        </div>

        <div className=" py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
          <h2 className="text-4xl font-bold text-black mb-8">Join The DishDash Community</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center border border-yellow-500 shadow-lg">
<img src="https://assets.api.uizard.io/api/cdn/stream/e246370c-8563-4926-bbe9-d1d44b872ab7.png" alt="become a rider" className="w-24 h-24 object-cover rounded-full" />
  <h3 className="text-xl font-bold text-black mb-2">Become A Rider</h3>
  <p className="text-gray-700 mb-4">Earn money by delivering food from restaurants. All you need is a bike and a passion for great service</p>
  <form >
    <link></link>
  <button type="submit" className="bg-indigo-500 text-black px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Start Riding</button>
          </form>
</div>
<div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center border border-yellow-500 shadow-lg">
<img src="https://assets.api.uizard.io/api/cdn/stream/3de66382-a1d7-41e9-add0-73355e305e95.png" alt="partner with us" className="w-24 h-24 object-cover rounded-full mb-4" />
  <h3 className="text-xl font-bold text-black mb-2">Partner with Us</h3>
  <p className="text-gray-700 mb-4">DishDash helps restaurants thrive with online ordering, loyalty programs, and more</p>
  <form  className="mt-auto">
  <button type="submit" className="bg-indigo-500 text-black px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Join Now</button>
          </form>
</div>
<div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center border border-yellow-500 shadow-lg">
<img src="https://assets.api.uizard.io/api/cdn/stream/5731af9d-856a-4f19-be88-ace58e953529.png" alt="join our team" className="w-24 h-24 object-cover rounded-full" />
  <h3 className="text-xl font-bold text-black mb-2">Join Our Team</h3>
  <p className="text-gray-700 mb-14">Be part of a team that's building an exceptional delivery service</p>
  <form>
  <button type="submit" className="bg-indigo-500 text-black px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Join Our Team</button>
          </form>
</div>
        </div>
      </div>
</div>


       </div>

       <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center border border-yellow-500 shadow-lg">
  <h3 className="text-xl font-bold text-black mb-2">Download Our App</h3>
  
  <div className="flex flex-col md:flex-row items-center justify-between w-full">
    <div className="bg-white p-8 rounded-lg shadow-md mb-4 md:mb-0">
      <h3 className="text-xl font-bold text-black mb-2">Order With Ease</h3>
      <p className="text-gray-700 mb-4">Indulge in the most delicious bites delivered to your door with FoodieHub. Our speedy delivery service offers a variety of cuisines from local restaurants.</p>
      <form className="w-full">
    <button
      type="download"
      className=" w-full bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
    >
      Download
    </button>
  </form>
    </div>

    <div>
    <img src="https://assets.api.uizard.io/api/cdn/stream/07d4696b-4d8a-41d4-b1d8-d76970325da7.png" alt="partner with us" className="w-70 h-32 object-cover rounded-full md:ml-8" />
    </div>
    
  </div>
  

</div>


       </div>
       </div>
      
        
      );
    };


export default LandingPage;

