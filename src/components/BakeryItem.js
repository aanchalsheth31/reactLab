// TODO: create a component that displays a single bakery item
import { useState } from "react";
export default function BakeryItem({ name, description, price, image,
    cartTotal, cartTotalItems, nameCartItems,
    setCount, setCountItems, addItemName }) {
    //const [count, setCount] = useState(0);
    // const [cartTotal, setCount] = useState(0); // setcount is the updating function
    // const [cartTotalItems, setCountItems] = useState(0); // setcount is the updating function
    // 
    function updateCart(price, name) {
        setCountItems(cartTotalItems + 1);
        setCount(cartTotal + price);
        addItemName([...nameCartItems, { name: name, count: cartTotal}]);
        
        // addItemName(nameCartItems.push(name));
    }
    
    return (
     <div className="itemBakery">
            <p>Bakery Item <br></br>
            <img src= {image} class="images"></img><br></br>
               Name: {name} <br></br>
                About: {description}<br></br>
                Price: { price}<br></br>
                <button onClick={() => updateCart(price, name)}>Add to Cart</button>
                
        </p>
        </div>
    );
}
  