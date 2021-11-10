import React, { useState } from 'react';
import './Product.css';

const products = [
    {
        emoji: '🍦',
        name: 'ice cream',
        price: 5
    },
    {
        emoji: '🍩',
        name: 'donuts',
        price: 2.5,
    },
    {
        emoji: '🍉',
        name: 'watermelon',
        price: 4
    }
];

const Product = () => {
    const [cart, setCart] = useState([]);
    return(
        <div className='wrapper'>
            <div>
                Shopping Cart: {cart.length} total items.
            </div>
            <div>Total: 0</div>

            <div className='product'><span role='img' aria-label='ice-cream'></span></div>
            <button>Add</button> <button>Remove</button>
        </div>
    );
}

export default Product;