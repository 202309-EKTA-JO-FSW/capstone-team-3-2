"use client";
import { useState } from 'react';
import withAuth from '@/components/withAuth';

const dishesData = [
  {
    "id": 1,
    "dishTitle": "Caprese Salad",
    "dishPrice": 10.99,
    "dishCurrency": "$",
    "dishImage": "https://drive.google.com/uc?id=1IrBoykZsB9KBqdrdg4OxQqQe1tgXRmhJ",
    "dishCategory": "Appetizers"
  },
  {
    "id": 2,
    "dishTitle": "Grilled Chicken Breast",
    "dishPrice": 18.50,
    "dishCurrency": "$",
    "dishImage": "https://drive.google.com/uc?id=12NueM0DyKUHBPu7lL9mxwixaSktWgHQT",
    "dishCategory": "Main Course"
  },
  {
    "id": 3,
    "dishTitle": "Chocolate Lava Cake",
    "dishPrice": 8.99,
    "dishCurrency": "$",
    "dishImage": "https://drive.google.com/uc?id=1VPyhxdHfQG85emxT8MZjLJsO-b37MHC8",
    "dishCategory": "Desserts"
  },
  {
    "id": 4,
    "dishTitle": "Mango Mojito",
    "dishPrice": 6.50,
    "dishCurrency": "$",
    "dishImage": "https://drive.google.com/uc?id=1RPIHvo5igFA95vicsp1N5O8pd8ZXzVVY",
    "dishCategory": "Drinks"
  },
  {
    "id": 5,
    "dishTitle": "Bruschetta",
    "dishPrice": 9.75,
    "dishCurrency": "$",
    "dishImage": "https://drive.google.com/uc?id=1ogJD-ID83QKrHdg93YIWIe-SjJ1eeD4u",
    "dishCategory": "Appetizers"
  },
  {
    "id": 6,
    "dishTitle": "Pasta Carbonara",
    "dishPrice": 15.99,
    "dishCurrency": "$",
    "dishImage": "https://drive.google.com/uc?id=1ZAYABYKUKvubAmf-31R1o7mqAKwUfnDs",
    "dishCategory": "Main Course"
  },
  {
    "id": 7,
    "dishTitle": "Tiramisu",
    "dishPrice": 7.50,
    "dishCurrency": "$",
    "dishImage": "https://drive.google.com/uc?id=1JEk4sKWN7kK98c8WEskSJDiab7gq_rEM",
    "dishCategory": "Desserts"
  },
  {
    "id": 8,
    "dishTitle": "Classic Martini",
    "dishPrice": 10.25,
    "dishCurrency": "$",
    "dishImage": "https://drive.google.com/uc?id=1JdrTIGNoHxe4HBA-kx6qq4_iCQvfXB4b",
    "dishCategory": "Drinks"
  },
  {
    "id": 9,
    "dishTitle": "Caesar Salad",
    "dishPrice": 12.99,
    "dishCurrency": "$",
    "dishImage": "https://drive.google.com/uc?id=1M0gbyNRcboWzOrgISLIZc_GZQTaof1vD",
    "dishCategory": "Appetizers"
  },
  {
    "id": 10,
    "dishTitle": "Fruit Sorbet",
    "dishPrice": 6.99,
    "dishCurrency": "$",
    "dishImage": "https://drive.google.com/uc?id=1fT4Am6F8xH-X6S1ysrSdr5kg2dBRuDSm",
    "dishCategory": "Desserts"
  },
  {
    "id": 11,
    "dishTitle": "New Dish Title",
    "dishPrice": 9.99,
    "dishCurrency": "$",
    "dishImage": "https://drive.google.com/uc?id=1vSHaENBYRPBcw2uCjoyl4mY2Y1tQy-08",
    "dishCategory": "New Category"
  }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleDishes, setVisibleDishes] = useState(10);

  const filterDishesByCategory = (category) => {
    setSelectedCategory(category);
    setVisibleDishes(10);
  };

  const loadMoreDishes = () => {
    setVisibleDishes(prevVisibleDishes => prevVisibleDishes + 10);
  };

  const filteredDishes = selectedCategory === 'All'
    ? dishesData.slice(0, visibleDishes)
    : dishesData.filter(dish => dish.dishCategory === selectedCategory).slice(0, visibleDishes);

  return (
    <div style={{ backgroundColor: 'white', color: 'black', padding: '20px' }}>
      <div style={{ width: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
        <img src="https://unsplash.com/photos/a-bowl-of-food-M5XmQWNBBvo" alt="Cover Photo" style={{ width: '100%', objectFit: 'cover' }} />
      </div>
      <h1 style={{ textAlign: 'center', fontSize: '2em' }}>Dishes</h1>

      <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '10px' }}>
        <button style={{ backgroundColor: 'black', color: 'white', borderRadius: '10px', padding: '5px 10px', fontSize: '0.8em', marginRight: '10px' }} onClick={() => filterDishesByCategory('All')}>All</button>
        <button style={{ backgroundColor: 'black', color: 'white', borderRadius: '10px', padding: '5px 10px', fontSize: '0.8em', marginRight: '10px' }} onClick={() => filterDishesByCategory('Appetizers')}>Appetizers</button>
        <button style={{ backgroundColor: 'black', color: 'white', borderRadius: '10px', padding: '5px 10px', fontSize: '0.8em', marginRight: '10px' }} onClick={() => filterDishesByCategory('Main Course')}>Main Course</button>
        <button style={{ backgroundColor: 'black', color: 'white', borderRadius: '10px', padding: '5px 10px', fontSize: '0.8em', marginRight: '10px' }} onClick={() => filterDishesByCategory('Desserts')}>Desserts</button>
        <button style={{ backgroundColor: 'black', color: 'white', borderRadius: '10px', padding: '5px 10px', fontSize: '0.8em' }} onClick={() => filterDishesByCategory('Drinks')}>Drinks</button>
      </div>


      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filteredDishes.map((dish, index) => (
          <div key={index} style={{ margin: '10px', textAlign: 'left' }}>
            <div style={{ backgroundColor: '#f2f2f2', padding: '10px', borderRadius: '5px' }}>
              <img src={dish.dishImage} alt={dish.dishTitle} style={{ width: '170px', height: '220px', objectFit: 'cover' }} />
              <p style={{ fontSize: '1.2em' }}><b style={{ fontSize: '0.8em' }}>{dish.dishTitle}</b></p>
              <p>{dish.dishPrice} {dish.dishCurrency}</p>
            </div>
          </div>
        ))}
      </div>

      {dishesData.length > visibleDishes && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button style={{ backgroundColor: 'black', color: 'white', borderRadius: '10px', padding: '5px 10px' }} onClick={loadMoreDishes}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default withAuth(Products);
