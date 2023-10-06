import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const [products ,setProducts]= useState([]);
  const [selected ,setSelected]=useState({});
  const [selected_cart ,setSelectedCart]=useState({});
  const [filter, setFilter] = useState(products);
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  const handleDetails =(data)=>{
    setSelected(data)
    history("/productDetails/"+data.id)
  }
  const handleCart = (data) =>{
    setSelectedCart(data)
    history("/cart/" +data.id)
  }
  const handleProducts =()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
      setProducts(res.data)
      setFilter(res.data)
      setLoading(false)
console.log(res.data);
    })
  }
  useEffect(()=>{
    handleProducts()
  },[])
  return (
    
      <div>
    <div className='container-fluid background'>
       
        
        <div className="row my-3">
          {products.map((data,index)=>{
            return(

          
<div className="col-sm-6 col-md-6 col-lg-4">
  <div className="card my-3 cardstyle">
    <div className='card-body'>
      <div><img className="w-100 imagestyle" src ={data.image} onClick={()=>handleDetails(data)}/></div>
      <div>{data.title}</div>
      <div>${data.price}</div>
      <div className='d-flex justify-content-around'>  
      {/* <button className="btn btn-primary btn-sm" onClick={()=>handleCart(data)}>add to cart</button>
      <button className="btn btn-info btn-sm" onClick={()=>handleDetails(data)}>Details</button> */}
      </div>
      </div>
     
      </div>
   
    </div>
     
        
        
       
        )
      })}
      </div>
      </div>
      </div>
  )
}

export default Product;
