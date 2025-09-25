import React from 'react'
import FoodCard from '../components/FoodCard';
import '../css/cart.css';

function Cart() {
  return (
    <div className="cart-container">
      <h2 className="cart-heading">My Cart</h2>

      <FoodCard
        title="Burger"
        image="https://b.zmtcdn.com/data/pictures/6/18237356/1d2ce99176f4175da183422241a5a994.jpg"
        description="Juicy grilled burger with fries."
        price={99}
        status={true}
      />
      <FoodCard
        title="Pizza"
        image="https://b.zmtcdn.com/data/pictures/chains/7/18843927/bf70548183393ce79bfcbcd2598a15fc.jpg"
        description="Delicious cheesy pizza with toppings."
        price={179}
        status={true}
      />
    </div>
  );
}

export default Cart;

