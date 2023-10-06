import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch,useSelector} from "react-redux";
import { addCart } from '../Redux/Action';



const ProductDetails = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.handelCart);
    const addProduct = (details) => {
      dispatch(addCart(details));
      console.log(details);
    };
    console.log(state);
  const[details , setDetsils]=useState({});
  const [cart , setCart]=useState({});
  const history = useNavigate();
    const params = useParams();
    console.log(params);
    const productID = params.id;
    useEffect(()=>{
axios.get("https://fakestoreapi.com/products/"+productID)
.then(res=>{
  setDetsils(res.data)
  console.log(res.data);
})
    },[])
    const handleBack =()=>{
history("/")
    }
 
  return (
    <div className="container-fluid background">
    
             <div className="row my-3">
<div className="col-sm-6 col-md-6">
  <div className="card carddetailsstyle">
    <div className='card-body'>
    <img className="poductimage w-100" src ={details.image} />
      </div>
      </div>
      </div>
      <div className="col-sm-6 col-md-6 ">
  <div className="card carddetailsstyle">
    <div className='card-body'>
    <div className="my-3"><strong>Title:-</strong>{details.title}</div>
    <div className="my-3 "><strong>Category:-</strong>{details.category}</div>
    <div className="my-3 fs-5"><strong>Discription:-</strong>{details.description}</div>
    <div className="my-3"><strong>Price:-</strong>${details.price}</div>
    {/* <div><strong>Rating:-</strong>{details.rating}</div> */}
    <div className='d-flex justify-content-around my-3'>
    <button className="btn btn-primary btn-sm" onClick={()=>{addProduct(details)}}>add to cart</button>
    <button className="btn btn-primary btn-sm" onClick={handleBack}>Back to home</button>
    </div>
      </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default ProductDetails;
