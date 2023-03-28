import React from "react";
import "./Cart.css";

const Cart = ({cart}) => {
    console.log(cart);
  // const cart = props.cart;  //opn -1
  // const{cart} = props; opn-2

// total price + shipping
let total = 0;
let totalShipping = 0;
 for (const product of cart) {
    total = total + product.price
    totalShipping = totalShipping + product.shipping ;  
}  

// tax -7% 
const tax = total *7 /100
const grandTotal = total + tax;
  return (
    <div className="cart">
      <h2>Cart Summary </h2>
      <h4>Added Items:{cart.length}</h4>
      <p>Total Price:${total.toFixed(2)} </p>
      <p>Total Shipping Charge:${totalShipping}</p>
      <p>Tax:${tax.toFixed(2)}</p>
      <h4>Grand Total:${grandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
