import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cartTotal, setCount] = useState(0); // setcount is the updating function
  const [cartTotalItems, setCountItems] = useState(0); // setcount is the updating function
  const [nameCartItems, addItemName] = useState([]);
  
  function addToCart(price, name) {
    //  setCount(cartTotal + price);
    //  setCountItems(cartTotalItems + 1);
    // nameCartItems = [name];

    //  addItemName(nameCartItems,...name);


    // addItem([...items, { name: name, count: count}]);
    //add an array of strings
    // cartTotal = cartTotal + price;
}
    

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem name={item.name} description={item.description} price={item.price} image={item.image}
          cartTotal={cartTotal} cartTotalItems={cartTotalItems} nameCartItems={nameCartItems}
          setCount={setCount} setCountItems={setCountItems} addItemName={addItemName} />
        
      ))}

      <div>
        <h2>Cart</h2>
        {/* <div className="cardItem">
         
        </div> */}
        <p>Total price of the cart:</p>
        {cartTotal}
        <p>No. of items in the cart:</p>
        {cartTotalItems}
        <p> Items Added:</p>
        {nameCartItems.map((item) => (
              <p>{item.name}</p>
          ))}
        {/* <p>{ nameCartItems[0]}</p> */}
        {/* TODO: render a list of items in the cart */}
      </div>
    </div>
  );
}

export default App;
