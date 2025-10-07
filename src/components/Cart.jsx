import React, { useContext , useReduce} from 'react';
import { CartContext } from "../context/Cart";

const Cart = () => {
    const cart  = useContext(CartContext);
    console.log("cart item here" ,cart)
    const total = cart.items.reduce((a,b) => a + b.price , 0)
    return (
        <div>
            <h1>Cart Items</h1>
            {
                cart && cart.items.map ((item) =>(
                    <li>
                        {item.name} - ${item.price}
                    </li>
                    )
                )
            }
            <h5>Total Price: ${total}</h5>
        </div>
    );
};

export default Cart;

