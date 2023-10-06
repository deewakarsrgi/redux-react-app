import React from 'react'
import { addCart,delCart, rmvCart } from '../Redux/Action'


const CartItem = ({ cartProduct, dispatch }) => {
    const handleRemove = () => {
        dispatch(rmvCart(CartItem));
      };
      const handleReduce = (e) => {
        if (CartItem.qty === 0) return;
        dispatch(delCart(CartItem));
      };
      const handleAdd = () => {
        dispatch(addCart(CartItem));
      };
      console.log(cartProduct);
  return (
    <div>
      <div className="CartItemContainer row">
      <img
        src={cartProduct.image}
        className="img-fluid col-3 p-2"
        alt={cartProduct.title}
      />
      <div className="CartItemDescription col-7 p-2">
        <p>{cartProduct.title}</p>
        <p>
          Quantity:
          <br />
          <button className="btn btn-light" onClick={handleReduce}>
            -
          </button>
          <span> {cartProduct.count}</span>{" "}
          <button className="btn btn-light" onClick={handleAdd}>
            +
          </button>
        </p>
        <p>Item - Price: ₹ {cartProduct.price}</p>
        <p>Sub - Total: ₹ {cartProduct.sub_total}</p>
      </div>
      <div
        className="col-md-2 d-flex p-2"
        style={{ flexDirection: "column", justifyContent: "space-around" }}
      >
        <div className="p-3">
        <button className="btn btn-outline-danger mt-3" onClick={handleRemove}>
          Remove
        </button>
        </div>
        {/* <button className="btn btn-light">Buy Now</button> */}
      </div>
    </div>
    </div>
  )
}

export default CartItem
