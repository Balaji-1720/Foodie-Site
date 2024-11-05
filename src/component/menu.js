import React, { useState } from 'react';

function Cart() {
    const [cart, setCart] = useState([]);

    const items = [
        { id: 1, name: 'Chicken Biryani', price: 150, description: 'Spiced rice, tender chicken, aromatic.', img: './assets/biriyani.jpg' },
        { id: 2, name: 'Grill', price: 250, description: 'Juicy, seasoned chicken, smoky flavor.',img: './assets/grill.jpg' } ,
        { id: 3, name: 'Chicken Fried Rice', price: 125, description: 'Savory rice, tender chicken, vegetables.',img: './assets/cfr.jpg' },
        { id: 4, name: 'Momos', price: 100, description: 'Steamed dumplings, flavorful filling, delicious.',img: './assets/momos.jpg' },
        { id: 5, name: 'Veg Soup', price: 100, description: 'Hearty broth, fresh vegetables, comforting.',img: './assets/veg-soup.jpg' },
        { id: 6, name: 'Mushroom Soup', price: 100, description: 'Creamy, rich, mushrooms, savory, comforting.',img: './assets/mushroom soup.jpg' },
        { id: 7, name: 'Chicken Soup', price: 100, description: 'Warm, hearty, chicken, vegetables, soothing.',img: './assets/cv.jpg' },
        { id: 8, name: 'Chicken Noodles', price: 100, description: 'Tender chicken, noodles, savory broth, flavorful.',img: './assets/noodles.jpg' }
    ];

    const addToCart = (item) => {
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            const updatedCart = cart.map((cartItem) =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            );
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const updateQuantity = (id, amount) => {
        const updatedCart = cart.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + amount };
            }
            return item;
        }).filter(item => item.quantity > 0); // Ensure only items with quantity > 0 are kept

        setCart(updatedCart);
    };

    const totalItems = cart.reduce((sum, item) =>
        sum + item.quantity, 0);
        const totalPrice = cart.reduce((sum, item ) =>
        sum + item.price * item.quantity, 0);

    return (
        <div className='content'>
            <h1 className='text-center text-white'>Items</h1>
            <div className='container-xl cart'>
                {items.map((item) => (
                    <div className='cart-box' key={item.id}>
                        <h3>{item.name}</h3>
                        <img src={item.img} alt={item.name} style={{ width: '100px', height: 'auto' }} />
                        <p className='desc'>{item.description}</p>
                        <p className='price'>Price: {item.price}</p>
                        <button onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                    
                ))}
            </div >
            <h1  >Cart</h1>
            {cart.length === 0 && <p>No Items in the cart</p>}
            {cart.length > 0 && (
                <div className=' container-xl result text-light border border-light p-3'>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                <img src={item.img} alt={item.name} style={{ width: '200px', height: 'auto', marginRight: '10px' }} />
                                <span className='middle'>
                                    {item.name} - Quantity: {item.quantity}
                                </span>
                                <div className='text-light content2'>
                                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p> Total Items : <span>
                    {totalItems}</span></p>
                    <p> Total Price : <span>
                    {totalPrice}</span></p>
                </div>
            )}
        </div>
    );
}

export default Cart;
