import React, { useEffect, useState } from 'react'; 
import './App.css';
import axios from 'axios';
const Details = (props) => {

    const[product, setproduct] = useState();
    useEffect(()=>{ 
        Item();
       console.log(product);
     },[]);

    

    const Item =() =>{
        axios.get("https://ecommerce-response.herokuapp.com/")
    .then(Response =>{
        setproduct(Response.data.filter(el => (el.id===props.match.params.id)));})
        

       }
    
  return (
    <div  className="card">
      <div>
    {product && <h1 key={product.id}>{product[0].name}</h1>}
    {product && <p key={product.price}>Price : { product[0].price}</p>}
    {product && <p key={product.added}>Added : { product[0].added}</p>}
    {product && <p key={product.category}>Category : { product[0].category}</p>}
    {product && <p key={product.quantity}>Quantity : { product[0].quantity}</p>}
    {product && <p key={product.seller}>Seller : { product[0].seller}</p>}
    {product && <p key={product.sold}>Sold : { product[0].sold}</p>}          
      </div>
      {product && <img key={product.photo} src={product[0].photo} alt="" />}
     </div>
  );
  
}


export default Details;