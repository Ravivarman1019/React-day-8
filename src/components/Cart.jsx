import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { CartContext } from '../CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  useEffect(() => {
    axios.get('https://drive.google.com/file/d/1mBA4azCOF4ouh5iVie-Pe7F_CX2d-qYD/view?usp=sharing')
      .then(response => {
        dispatch({ type: 'SET_ITEMS', payload: response.data });
      })
      .catch(error => console.error('Error fetching cart data:', error));
  }, [dispatch]);

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
