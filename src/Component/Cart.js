import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import CartItem from "./CartItem";

const Cart = () => {
    const state = useSelector((state) => state.handelCart);
    console.log(state);
    const dispatch = useDispatch();
    let total = 0;
  return (
    <div>
     <div className="cartContainer container">
      <div className="row">
        <div className="col-md-6">
          {state?.map((cartProduct) => {
            return (
              <CartItem cartProduct={cartProduct} dispatch={dispatch} />
            );
          })}
          {state && state.length === 0 && (
            <div className="emptyCart container text-center">
              <h1 className="row heading m-3 text-center">
                {" "}
                Your Cart is Empty...!
              </h1>
              <div className="row text-center">
                <Link to="/" className="btn btn-large btn-primary">
                  Start Shopping...
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="col-md-6 statusContainer">
          <h2>Cart Status</h2>
          {state && state.map((x) => {
            total += x.sub_total;
          })}
          <div className="total"> $ {parseFloat(total).toFixed(2)}</div>
        </div>
      </div>
    </div> 
    </div>
  )
}

export default Cart
