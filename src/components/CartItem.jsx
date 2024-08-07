import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const CartItem = ({ item }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <div>
        <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item })}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: item })}>+</button>
      </div>
      <p>Total: ${item.price * item.quantity}</p>
    </div>
  );
};

export default CartItem;
