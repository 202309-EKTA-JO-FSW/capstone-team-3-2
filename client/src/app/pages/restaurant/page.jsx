"use client"
import { useState, useEffect, useMemo } from 'react';
import styles from "../../../styles.module.css";
import MyNavbar from '@/components/MyNavbar';
import { useParams } from 'react-router-dom';


function SpecificPage() {
  const { id } = useParams();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDish, setSelectedDish] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [subtotal, setSubtotal] = useState(0); 
  console.log("Customer ID:", id);

  const dishesData = [
    {
      "id": 1,
      "dishTitle": "Caprese Salad",
      "dishPrice": 10.99,
      "dishCurrency": "$",
      "dishImage": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/2a4cabfe-f693-4e80-8ccd-9be9f1023143-bulgarian-banitsa.jpg",
      "dishCategory": "Appetizers"
    },
    {
      "id": 2,
      "dishTitle": "Grilled Chicken Breast",
      "dishPrice": 18.50,
      "dishCurrency": "$",
      "dishImage": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/39a4457e-1400-452f-9a32-369375351313-pastel-de-choclo.jpg",
      "dishCategory": "Main Course"
    },
    {
      "id": 3,
      "dishTitle": "Chocolate Lava Cake",
      "dishPrice": 8.99,
      "dishCurrency": "$",
      "dishImage": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/e357b234-9ff0-4aff-a200-ba60f70dbf12-41-plov.jpg",
      "dishCategory": "Desserts"
    },
    {
      "id": 4,
      "dishTitle": "Mango Mojito",
      "dishPrice": 6.50,
      "dishCurrency": "$",
      "dishImage": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/7e60479d-dd55-41e4-89f0-6ff9a64be780-clam-chowder.jpg",
      "dishCategory": "Drinks"
    },
    {
      "id": 5,
      "dishTitle": "Bruschetta",
      "dishPrice": 9.75,
      "dishCurrency": "$",
      "dishImage": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/e015f7a7-0442-40a6-8c10-bf17baaabd7f-bouillabaisse.jpg",
      "dishCategory": "Appetizers"
    },
    {
      "id": 6,
      "dishTitle": "Pasta Carbonara",
      "dishPrice": 15.99,
      "dishCurrency": "$",
      "dishImage": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/4dc93521-ff92-4ee4-9c1c-e614a92c22b1-11-poke.jpg",
      "dishCategory": "Main Course"
    },
    {
      "id": 7,
      "dishTitle": "Tiramisu",
      "dishPrice": 7.50,
      "dishCurrency": "$",
      "dishImage": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/3be0b2ab-1932-4ced-bc80-b684e9e3f6d7-12-pad-thai.jpg",
      "dishCategory": "Desserts"
    },
    {
      "id": 8,
      "dishTitle": "Classic Martini",
      "dishPrice": 10.25,
      "dishCurrency": "$",
      "dishImage": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/58e91824-f105-4f15-97bd-5b0dacbee941-23-pierogi.jpg",
      "dishCategory": "Drinks"
    },
    {
      "id": 9,
      "dishTitle": "Caesar Salad",
      "dishPrice": 12.99,
      "dishCurrency": "$",
      "dishImage": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/51826cc6-78e6-4776-98cd-66ca7ba5f844-13-khachapuri.jpg",
      "dishCategory": "Appetizers"
    },
    {
      "id": 10,
      "dishTitle": "Fruit Sorbet",
      "dishPrice": 6.99,
      "dishCurrency": "$",
      "dishImage": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/a56b8ace-67b3-48bb-ab7e-33024cf7584a-18-moules-frites.jpg",
      "dishCategory": "Desserts"
    },
    {
      "id": 11,
      "dishTitle": "New Dish Title",
      "dishPrice": 9.99,
      "dishCurrency": "$",
      "dishImage": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/671e271d-b43d-4924-8d43-fbf254c37f8f-bao-buns.jpg",
      "dishCategory": "New Category"
    }
  ];


  const filteredResults = useMemo(() => {
    let results = dishesData;

    if (searchTerm) {
      results = results.filter(dish =>
        dish.dishTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      results = results.filter(dish =>
        dish.dishCategory === selectedCategory
      );
    }

    return results;
  }, [searchTerm, selectedCategory, dishesData]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };



  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice((quantity - 1) * selectedDish.dishPrice);
    }
  };
  useEffect(() => {
    if (selectedDish) {
      setSubtotal(selectedDish.dishPrice); 
    }
  }, [selectedDish]);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
    setTotalPrice((quantity + 1) * selectedDish.dishPrice);
  };

  useEffect(() => {
    if (selectedDish) {
      setTotalPrice(quantity * selectedDish.dishPrice);
    }
  }, [selectedDish, quantity]);

  useEffect(() => {
    if (!selectedDish && dishesData.length > 0) {
      setSelectedDish(dishesData[0]);
      setQuantity(1);
      setSubtotal(dishesData[0].dishPrice);
      setTotalPrice(dishesData[0].dishPrice);
    }
  }, [selectedDish, dishesData]);

  const categories = useMemo(() => Array.from(new Set(dishesData.map(dish => dish.dishCategory))), [dishesData]);


  return (
    
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>DISCOVER</h1> 
          <h1>DELICIOUS</h1>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Log In</button>
          <button className={styles.button}>Sign Up</button>
        </div>
      </div>
      <img src='https://img.freepik.com/premium-photo/tiramisu-stone-rustic-pub-wide-panoramic-generative-ai_918839-10384.jpg?w=1380' className={styles.pic}  />
      <div className={styles.middle}>
        <h3 className={styles.header} style={{fontSize:'33px'}}>Featured Dishes</h3>
        <form>
          <input className={styles.search} type="text" placeholder="Search..." value={searchTerm} onChange={handleChange}/>
          <button type="submit" className={styles.button}>Search</button>
        </form>
        <div className={styles.tagsContainer}>
          <span className={`${styles.tag} ${selectedCategory === null ? styles.active : ''}`} onClick={() => handleCategoryClick(null)}>All</span>
          {categories.map(category => (
            <span key={category} className={`${styles.tag} ${selectedCategory === category ? styles.active : ''}`} onClick={() => handleCategoryClick(category)}>{category}</span>
          ))}
        </div>
            {selectedCategory && (
               <h2 className={styles.categoryName}>{selectedCategory}</h2>
            )}

        <div className={styles.searchResults}>
          {filteredResults.length > 0 ? (
            filteredResults.map(dish => (
              <div key={dish.id} className={styles.searchResult} onClick={() => setSelectedDish(dish)}>                
              <div className={styles.dishDetails}>
                  <h4 className={styles.dishTitle}>{dish.dishTitle}</h4>
                  <p className={styles.dishInfo}>{dish.dishCategory}</p>
                  <p className={styles.dishInfo} style={{fontWeight:'bold'}}> {dish.dishCurrency}{dish.dishPrice.toFixed(2)}</p>
                </div>
                <img style={{marginBottom:'20px', marginTop:'20px'}} src={dish.dishImage} alt={dish.dishTitle} className={styles.dishImage} />
              </div>
            ))
          ) : (
            <p className={styles.categoryName}>No results found</p>
          )}
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div>
            <h3 className={styles.title}>Your Cart</h3>
            <div className={styles.horizontalLine}></div>
            {selectedDish ? (
              <>
                <div className={styles.selectedDish}>
                  <dev className={styles.totalContainer}>
                  <h4 className={styles.dishTitle}>{selectedDish.dishTitle} </h4>
                  <h4 style={{marginTop:'10px'}}>{selectedDish.dishCurrency}{subtotal.toFixed(2)}</h4>

                  </dev>
                  <dev className={styles.totalContainer}>
                  <h3 style={{marginTop:'10px'}}>Quantity</h3>
                  <div className={styles.quantityButtons}>
                    <button className={styles.priceButton} onClick={handleDecreaseQuantity}>-</button>
                    <div className={styles.priceDisplay}>{quantity}</div>
                    <button className={styles.priceButton} onClick={handleIncreaseQuantity}>+</button>
                  </div>
                  </dev>
                 
                </div>
                <div className={styles.horizontalLine}></div>
                <dev className={styles.totalContainer}>
                <h3 className={styles.text} style={{marginTop:'10px'}}>Subtotal: </h3>
                <h3 style={{marginTop:'10px'}}>{selectedDish.dishCurrency}{subtotal.toFixed(2)}</h3>

                </dev>
              </>
            ) : (
              <>
                <p className={styles.text}>Quantity</p>
                <div className={styles.quantityButtons}>
                  <button className={styles.priceButton} disabled>-</button>
                  <div className={styles.priceDisplay}>{quantity}</div>
                  <button className={styles.priceButton} disabled>+</button>
                </div>
                <div className={styles.horizontalLine}></div>
                <p className={styles.text}>Subtotal </p>
              </>
            )}
            <dev className={styles.totalContainer}>
            <h3 className={styles.text} style={{marginTop:'30px'}}>Delivery fee </h3>
            <h3 style={{marginTop:'30px'}}>${3.26}</h3>
            </dev>
            <dev className={styles.totalContainer}>
             <h1 className={styles.text} style={{ fontWeight: 'bold' ,fontSize: '20px',marginTop:'30px'}}>Total:</h1>
             <h1 style={{ fontWeight: 'bold' ,fontSize: '20px',marginTop:'30px'}}>{selectedDish ? selectedDish.dishCurrency : "$"}{totalPrice.toFixed(2)}</h1>
            </dev>
            
            <button className={styles.cardButton}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default SpecificPage;