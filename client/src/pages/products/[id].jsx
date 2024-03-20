// pages/products/[id].js
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

    const dishesData = [
        {
          "id": 1,
          "dishTitle": "Caprese Salad",
          "dishPrice": 10.99,
          "dishCurrency": "$",
          "dishImage": "https://drive.google.com/uc?id=1IrBoykZsB9KBqdrdg4OxQqQe1tgXRmhJ",
          "dishCategory": "Appetizers",
          "dishDescription": "The Caprese Salad is a testament to the beauty of simplicity. Originating from the Isle of Capri, this dish is a vibrant combination of ripe tomatoes, fresh mozzarella cheese, and lush basil leaves, each component bringing its unique flavor and texture to the table. Seasoned with just a pinch of salt and a drizzle of extra virgin olive oil, the Caprese Salad is a celebration of the Italian summer. Its colors, mirroring the Italian flag, are not just a feast for the eyes but also a tantalizing promise of the flavors to come. The sweetness of the tomatoes, paired with the creamy texture of the mozzarella and the aromatic basil, creates a harmonious blend that is both refreshing and deeply satisfying. This dish is not just a salad; it's an experience, a journey to the heart of Italian culinary tradition, where quality ingredients and simplicity reign supreme. Whether served as a starter or a light main course, the Caprese Salad is a dish that captivates with its simplicity and delights with its rich flavors, making it a timeless classic in the world of gastronomy."
        },
        {
          "id": 2,
          "dishTitle": "Grilled Chicken Breast",
          "dishPrice": 18.50,
          "dishCurrency": "$",
          "dishImage": "https://drive.google.com/uc?id=12NueM0DyKUHBPu7lL9mxwixaSktWgHQT",
          "dishCategory": "Main Course",
          "dishDescription": "The Grilled Chicken Breast is a dish that stands as a paragon of healthy yet flavorful eating. Marinated in a blend of herbs and spices, the chicken is grilled to perfection, achieving a golden exterior while remaining succulently juicy on the inside. This culinary delight is served alongside a medley of steamed vegetables, each chosen for their freshness and vibrant colors, and a side of creamy mashed potatoes, providing a comforting balance to the dish. The mastery of this dish lies in its simplicity and the chef's ability to bring out the natural flavors of the chicken, complemented by the subtle seasoning. It's a testament to the fact that healthy eating doesn't have to be bland or boring but can be a delightful journey of flavors and textures. Ideal for those seeking a nutritious meal without compromising on taste, the Grilled Chicken Breast is a celebration of wholesome ingredients, expertly prepared to offer a satisfying and guilt-free dining experience. It's not just a meal; it's a statement on the joy of eating well, making it a favorite among health-conscious gourmets."
        },
        {
          "id": 3,
          "dishTitle": "Chocolate Lava Cake",
          "dishPrice": 8.99,
          "dishCurrency": "$",
          "dishImage": "https://drive.google.com/uc?id=1VPyhxdHfQG85emxT8MZjLJsO-b37MHC8",
          "dishCategory": "Desserts",
          "dishDescription": "The Chocolate Lava Cake is the epitome of indulgent desserts, a true masterpiece for the senses. At first glance, it presents itself as a simple chocolate cake, but upon the first bite, its molten chocolate center oozes out, creating a mesmerizing contrast of textures. The outer layer of the cake is baked to a delicate crisp, encasing the rich, flowing chocolate that lies within. Served with a scoop of vanilla ice cream, the warmth of the cake melds with the cold creaminess of the ice cream, offering a symphony of temperatures and flavors that dance on the palate. This dessert is not just about the taste but also the experience, the anticipation of breaking through the crust to reveal the liquid heart of the cake. It's a celebration of chocolate in its most luxurious form, appealing to both the eyes and the taste buds. The Chocolate Lava Cake is more than just a dessert; it's a moment of pure joy, a decadent escape from the ordinary, making it a beloved choice for those looking to indulge their sweet tooth in a truly spectacular fashion."
        },
        {
          "id": 4,
          "dishTitle": "Mango Mojito",
          "dishPrice": 6.50,
          "dishCurrency": "$",
          "dishImage": "https://drive.google.com/uc?id=1RPIHvo5igFA95vicsp1N5O8pd8ZXzVVY",
          "dishCategory": "Drinks",
          "dishDescription": "The Mango Mojito is a refreshing twist on the classic cocktail, blending the sweetness of ripe mangoes with the zesty tang of lime and the cool freshness of mint. This drink is a celebration of flavors, each sip bursting with a harmonious blend of sweetness, acidity, and minty freshness, perfectly balanced with the warmth of rum. The Mango Mojito is not just a drink; it's a tropical escape, a brief sojourn to sun-drenched shores and balmy breezes. The ripe mangoes add a lush, fruity sweetness that complements the traditional mojito ingredients, creating a beverage that's both familiar and excitingly novel. It's the perfect choice for warm summer evenings, outdoor gatherings, or anytime one desires a sip of something that's both invigorating and comforting. The Mango Mojito is more than just a cocktail; it's an experience, a delightful journey of flavors that promises to refresh and enchant with every sip."
        },
        {
          "id": 5,
          "dishTitle": "Bruschetta",
          "dishPrice": 9.75,
          "dishCurrency": "$",
          "dishImage": "https://drive.google.com/uc?id=1ogJD-ID83QKrHdg93YIWIe-SjJ1eeD4u",
          "dishCategory": "Appetizers",
          "dishDescription": "Bruschetta, the quintessential Italian starter, is a dish that celebrates the simplicity and flavors of its ingredients. A rustic loaf of bread is grilled to perfection, its surface becoming deliciously crisp, providing the perfect canvas for the toppings that follow. Rubbed with fresh garlic, the bread is then drizzled with the finest olive oil, each drop enhancing the bread's flavor. The crowning glory of the dish is the topping of fresh tomatoes, their juiciness and sweetness brought to the forefront, seasoned with a hint of salt to elevate their natural flavors. Often garnished with a sprinkle of basil, the Bruschetta offers a delightful contrast of textures and tastes, from the crunchy bread to the soft, flavorful topping. It's a dish that's both humble and luxurious, inviting diners to savor each bite and appreciate the beauty of simple, high-quality ingredients. Bruschetta is more than just an appetizer; it's a testament to the Italian culinary philosophy that less is more, and that great food comes from the love and care put into its preparation."
        },
        {
          "id": 6,
          "dishTitle": "Pasta Carbonara",
          "dishPrice": 15.99,
          "dishCurrency": "$",
          "dishImage": "https://drive.google.com/uc?id=1ZAYABYKUKvubAmf-31R1o7mqAKwUfnDs",
          "dishCategory": "Main Course",
          "dishDescription": "Pasta Carbonara is a dish that embodies the heart and soul of Roman cuisine, a testament to the magic that can be created with just a few, high-quality ingredients. At its core, this dish is a symphony of perfectly cooked pasta, coated in a silky sauce made from eggs, hard cheese, pancetta, and a generous grinding of black pepper. The sauce clings to each strand of pasta, creating a dish that's both comforting and luxurious. The key to its success lies in the balance of flavors and textures; the creaminess of the sauce contrasts beautifully with the crispness of the pancetta, while the sharpness of the cheese and the warmth of the black pepper add depth and complexity. Pasta Carbonara is more than just a meal; it's a celebration of simplicity, a dish that relies on the quality of its ingredients and the skill of the cook to bring them together in perfect harmony. It's a reminder that sometimes, the simplest dishes are the most profoundly satisfying, making Pasta Carbonara a beloved classic in the world of Italian cuisine."
        },
        {
          "id": 7,
          "dishTitle": "Tiramisu",
          "dishPrice": 7.50,
          "dishCurrency": "$",
          "dishImage": "https://drive.google.com/uc?id=1JEk4sKWN7kK98c8WEskSJDiab7gq_rEM",
          "dishCategory": "Desserts",
          "dishDescription": "Tiramisu, the iconic coffee-flavored Italian dessert, is a masterpiece of culinary artistry, a delicate balance of flavors and textures that come together to create a dessert unlike any other. Layers of ladyfingers, each one soaked in a rich coffee mixture, are layered with a luxurious mascarpone cheese mixture, whipped to airy perfection. The dessert is then dusted with a fine layer of cocoa powder, adding a hint of bitterness that complements the sweetness of the other components. Each bite of Tiramisu is a journey through contrasting textures, from the soft, almost melt-in-your-mouth feel of the mascarpone layer to the slight resistance of the coffee-soaked ladyfingers. It's a dessert that speaks of indulgence, of taking the time to savor and enjoy the moment. Tiramisu is more than just a sweet treat; it's an experience, a celebration of the joy of eating and the pleasure that can be found in a perfectly crafted dessert. It's a dish that has captured the hearts of dessert lovers around the world, making it a timeless favorite that continues to delight and inspire."
        },
        {
          "id": 8,
          "dishTitle": "Classic Martini",
          "dishPrice": 10.25,
          "dishCurrency": "$",
          "dishImage": "https://drive.google.com/uc?id=1JdrTIGNoHxe4HBA-kx6qq4_iCQvfXB4b",
          "dishCategory": "Drinks",
          "dishDescription": "The Classic Martini is the epitome of elegance in a glass, a cocktail that has stood the test of time and continues to be celebrated for its simplicity and sophistication. Composed of gin and vermouth, and garnished with either an olive or a lemon twist, the Martini is a study in balance, with the botanicals of the gin harmonizing with the herbal notes of the vermouth. The choice of garnish adds a final touch of flavor, the brininess of the olive or the bright zest of the lemon twist elevating the drink to new heights. The Martini is not just a cocktail; it's an icon, a symbol of refinement and taste. It's a drink that demands to be savored, each sip a moment of pleasure in an otherwise hectic world. Whether enjoyed in a dimly lit bar or at a festive gathering, the Classic Martini remains a timeless choice for those who appreciate the finer things in life, a testament to the enduring appeal of well-crafted simplicity."
        },
        {
          "id": 9,
          "dishTitle": "Caesar Salad",
          "dishPrice": 12.99,
          "dishCurrency": "$",
          "dishImage": "https://drive.google.com/uc?id=1M0gbyNRcboWzOrgISLIZc_GZQTaof1vD",
          "dishCategory": "Appetizers",
          "dishDescription": "The Caesar Salad is a classic dish that has transcended its origins to become a staple of menus worldwide. At its heart, it is a simple salad, combining crisp romaine lettuce with crunchy croutons, all dressed in a creamy Caesar dressing that is tangy, savory, and slightly salty. The dressing, a blend of lemon juice, olive oil, egg, Worcestershire sauce, anchovies, garlic, Dijon mustard, Parmesan cheese, and black pepper, is the soul of the salad, imparting a depth of flavor that is both bold and nuanced. The Caesar Salad is a study in contrasts, the freshness of the lettuce playing off the richness of the dressing, the crunch of the croutons adding texture to each bite. It's a dish that is both familiar and endlessly customizable, inviting chefs to add their own twist, be it grilled chicken, shrimp, or avocado. The Caesar Salad is more than just an appetizer; it's a testament to the power of simple ingredients, expertly combined to create a dish that is satisfying, nutritious, and universally loved."
        },
        {
          "id": 10,
          "dishTitle": "Fruit Sorbet",
          "dishPrice": 6.99,
          "dishCurrency": "$",
          "dishImage": "https://drive.google.com/uc?id=1fT4Am6F8xH-X6S1ysrSdr5kg2dBRuDSm",
          "dishCategory": "Desserts",
          "dishDescription": "Fruit Sorbet is the quintessence of refreshment, a frozen dessert that captures the essence of fruit in its purest form. Made from sweetened water flavored with fruit juice or puree, and sometimes enhanced with wine or liqueur, sorbet is a celebration of fruit's natural sweetness and vibrant flavors. Each spoonful is a burst of refreshment, the icy texture cooling and the fruit flavors tantalizing the taste buds. Sorbet is not just a dessert; it's a palate cleanser, a way to refresh and prepare for the next course, or a light and satisfying end to a meal. It's a versatile treat, able to capture the essence of any fruit, from the rich darkness of berries to the tropical sweetness of mango or the tartness of citrus. Fruit Sorbet is more than just a sweet treat; it's a moment of pure, unadulterated pleasure, a way to enjoy the bounty of nature in a form that's both simple and incredibly sophisticated."
        },
        {
          "id": 11,
          "dishTitle": "New Dish Title",
          "dishPrice": 9.99,
          "dishCurrency": "$",
          "dishImage": "https://drive.google.com/uc?id=1vSHaENBYRPBcw2uCjoyl4mY2Y1tQy-08",
          "dishCategory": "New Category",
          "dishDescription": "This new dish brings a unique blend of flavors to the table, combining traditional ingredients in an innovative way to delight your taste buds. It's a culinary adventure, a dish that challenges and excites, inviting diners to explore new combinations and sensations. The dish is a testament to the chef's creativity, a blend of textures and tastes that come together in perfect harmony. Each ingredient is chosen for its quality and its ability to contribute to the overall experience, creating a meal that is not just food, but art. It's a dish that speaks of passion, of the joy of cooking and the pleasure of eating. Whether it's the centerpiece of a special meal or part of a larger menu, this new dish is sure to become a favorite, a memorable experience that diners will want to return to again and again."
        }
];

export default function Product() {
  const router = useRouter();
  const { id } = router.query; 

  const product = dishesData.find(dish => dish.id.toString() === id);
  const [randomDishes, setRandomDishes] = useState([]);

  useEffect(() => {
    let randomIndexes = [];
    while(randomIndexes.length < 3){
      let r = Math.floor(Math.random() * dishesData.length);
      if(randomIndexes.indexOf(r) === -1) randomIndexes.push(r);
    }
    setRandomDishes(randomIndexes.map(index => dishesData[index]));
  }, [id]);

  return (
    <>
      <Head>
        <title>{product ? product.dishTitle : 'Product Not Found'} - Delicious Treat</title>
      </Head>
      <div style={{ fontFamily: 'Arial, sans-serif', display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: '20px' }}>
        <div style={{ width: '40%' }}>
          <img src={product?.dishImage} alt={product?.dishTitle} style={{ width: '100%', borderRadius: '50%', border: '1px solid lightgray' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            {randomDishes.map((dish, index) => (
              <img key={index} src={dish.dishImage} alt={`Random Dish ${index + 1}`} style={{ width: '32%', borderRadius: '50%', border: '1px solid lightgray' }} />
            ))}
          </div>
        </div>
        <div style={{ width: '40%', textAlign: 'left' }}>
          <h1>{product?.dishTitle}</h1>
          <p>{product?.dishDescription}</p>
          <p>Category: <span style={{ backgroundColor: 'black', color: 'white', borderRadius: '10px', padding: '5px' }}>{product?.dishCategory}</span></p>
          <p>{`Price: ${product?.dishCurrency}${product?.dishPrice}`}</p>
        <button style={{ backgroundColor: 'black', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}