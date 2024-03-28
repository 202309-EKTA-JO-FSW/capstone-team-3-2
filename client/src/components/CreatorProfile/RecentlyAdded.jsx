import React from 'react';

const RecentlyAdded = () => {
  return (
    <div className="mt-8 mr-8">
      <h1 className="text-2xl font-semibold mb-4 ml-4 text-black font-poppins" style={{ lineHeight: '1.875rem' , fontSize: '1.5rem', marginLeft: '25px'}}>Recently Added</h1>
      <div className="flex justify-between">
        <Favorite />
        <TopRated />
        <TryNew />
        <Delicious/>
        <Vegan/>
      </div>
    </div>
  );
};

const Favorite = () => {
  return (
    <div className="p-4  bg-gray-200 rounded-lg  items-center justify-center  border border-gray-300 mr-4" style={{ backgroundColor: '#E5E7EB', borderRadius: '0.75rem', marginLeft: '50px'}}>

<div className="text-center mb-8 mr-8 w-full ">
        <h2 className="text-xl font-semibold mb-2">Favorite</h2>
        <h3>DishDash</h3>
      </div>
      <img src="https://images.unsplash.com/photo-1694763892640-122f6e0506fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw0fHxTdXNoaSUyQyUyMFJhbWVuJTJDJTIwTm9vZGxlc3xlbnwxfHx8fDE3MDczNTM0NTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="fav" className="w-12 h-12 object-cover rounded-lg" style={{ width: '135px', height: '150px' }} />
      <div className="flex justify-between w-full mt-4">
        <div>
          <h4>Price</h4>
          <h4>Time Estm</h4>
          
        </div>
        <div>
        <p>$10.99</p>
          <p>30 mins</p>
        </div>
      </div>
    </div>
  );
};

const TopRated = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg mr-4 justify-center  border border-gray-300" style={{ backgroundColor: '#E5E7EB', borderRadius: '0.75rem'}}>
      <div className="text-center mb-8 mr-8 w-full ">

      <h2 className="text-xl font-semibold mb-2">Top Rated</h2>
<h3>DishDash</h3>
      </div>

     <img src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw0fHxCdXJnZXIlMkMlMjBQaXp6YSUyQyUyMFBhc3RhfGVufDF8fHx8MTcwNzM1MzQ1OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="topRated" className="w-12 h-12 object-cover rounded-lg" style={{ width: '135px', height: '150px'}}  />
     <div className="flex justify-between w-full mt-4">
     <div>
          <h4>Price</h4>
          <h4>Time Estm</h4>
          
        </div>
        <div>
        <p>$10.99</p>
          <p>30 mins</p>
        </div>
    </div>
    </div>
  );
};

const TryNew = () => {
  return (
<div className="p-4 bg-gray-200 rounded-lg mr-4 justify-center  border border-gray-300" style={{ backgroundColor: '#E5E7EB', borderRadius: '0.75rem'}}>
      <div className="text-center mb-8 mr-8 w-full ">

      <h2 className="text-xl font-semibold mb-2">Try Our New</h2>
<h3>DishDash</h3>
      </div>

     <img src="https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwyfHxTdXNoaSUyQyUyMEphcGFuZXNlJTJDJTIwU2VhZm9vZHxlbnwxfHx8fDE3MDczNTM0NTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="tryNew" className="w-12 h-12 object-cover rounded-lg" style={{ width: '135px', height: '150px'}}  />
     <div className="flex justify-between w-full mt-4">
     <div>
          <h4>Price</h4>
          <h4>Time Estm</h4>
          
        </div>
        <div>
        <p>$10.99</p>
          <p>30 mins</p>
        </div>
    </div>
    </div>
  );
};

const Delicious = () => {
  return (
<div className="p-4 bg-gray-200 rounded-lg mr-4 justify-center  border border-gray-300" style={{ backgroundColor: '#E5E7EB', borderRadius: '0.75rem'}}>
      <div className="text-center mb-8 mr-8 w-full ">

      <h2 className="text-xl font-semibold mb-2">Delicious</h2>
<h3>DishDash</h3>
      </div>

     <img src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw0fHxCdXJnZXIlMkMlMjBQaXp6YSUyQyUyMFBhc3RhfGVufDF8fHx8MTcwNzM1MzQ1OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="delicious" className="w-12 h-12 object-cover rounded-lg" style={{ width: '135px', height: '150px'}}  />
     <div className="flex justify-between w-full mt-4">
     <div>
          <h4>Price</h4>
          <h4>Time Estm</h4>
          
        </div>
        <div>
        <p>$10.99</p>
          <p>30mins</p>
        </div>
    </div>
    </div>
  );
};

const Vegan = () => {
  return (
<div className="p-4 bg-gray-200 rounded-lg mr-4 justify-center  border border-gray-300" style={{ backgroundColor: '#E5E7EB', borderRadius: '0.75rem', marginRight: '50px'}}>
      <div className="text-center mb-8 mr-8 w-full ">

      <h2 className="text-xl font-semibold mb-2">Vegan</h2>
<h3>DishDash</h3>
      </div>

     <img src="https://assets.api.uizard.io/api/cdn/stream/cf5cbc8c-f556-47e5-9c84-5e9b9f345724.png" alt="Vegan" className="w-12 h-12 object-cover rounded-lg" style={{ width: '135px', height: '150px'}}  />
     <div className="flex justify-between w-full mt-4">
     <div>
          <h4>Price</h4>
          <h4>Time Estm</h4>
          
        </div>
        <div>
        <p>$10.99</p>
          <p>30 mins</p>
        </div>
    </div>
    </div>
  );
};

export default RecentlyAdded;