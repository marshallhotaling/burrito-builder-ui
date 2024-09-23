import React from "react";
import "./Orders.css";

export function Orders(props) {
    console.log('order', props)
  const orderEls = props.orders.map((order, index) => {
      console.log('d', order)
    return (
      <div className="order" key={index}>
        <h3>{order.name}</h3>
        <ul className="ingredient-list">
          {order.ingredients.map((ingredient, index) => {
            return <li key={index}>{ingredient}</li>;
          })}
        </ul>
      </div>
    );
  });

  return (
    <section>{orderEls.length ? orderEls : <p>No orders yet!</p>}</section>
  );
};
export default Orders;
