
import React from 'react'
import { useState, useEffect } from 'react';
import styles from "./styles.module.css";

function Testt() {

  const [dish, setDish] = useState([]);
  


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

 useEffect(()=>{
    fetch(dishesData)
    .then(response => response.json())
    .then(data => setDish(data));
    return () => {
        return false
    }
 },[])

 useEffect(()=>{
    if(dish.length >0){
        console.log(dish)
    }
 },[dish]) 

 const handleChange=(e)=>{
    e.target.value
console.log('h')
 }

  return (
    <div className={styles.main}>
        <div className={styles.header}>
            <div className={styles.logo}>
            <h1>DISCOVER</h1> 
            <h1>DELICIOUS</h1>
            </div>
            <div className={styles.btnContainer}>
                <button className={styles.btn}>Log In</button>
                <button className={styles.btn}>Sign Up</button>
            </div>
        </div>
        <img src='https://img.freepik.com/premium-photo/tiramisu-stone-rustic-pub-wide-panoramic-generative-ai_918839-10384.jpg?w=1380' className={styles.img}  />

        <div className={styles.content}>
            <h1 className={styles.text}>Featured Dishes</h1>
            <form className={styles.form}>
                <input onInput={handleChange} className={styles.searchBar} type="text" placeholder="Search..."/>
                <button className={styles.btnSearch} type="submit">Search</button>            
             </form>
             {dish.map(
                dish=> <h3 key={dish.id}>{dish.dishTitle}</h3>
             )}
             
        </div>
      
    </div>
  )
}

export default Testt
