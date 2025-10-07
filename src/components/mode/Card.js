
import React, { useContext } from 'react';
import { CartContext } from "../../context/Cart";

const Card = (props) => {
    
    const cart = useContext(CartContext);
    console.log("cart",cart)
    const handleClick = () => {
        
        cart.setItems([...cart.items, { name: props.name, price: props.price }]);
    };

    return (
        <div>
            <h1>Item: {props.name}</h1>
            <p>Price: {props.price}</p>
            <button onClick={handleClick}>Add to Cart</button>
        </div>
    );
};

export default Card;