import React, { useEffect, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function Shop() {
        

        useEffect(( ) => {
            fetchItems();
            
        },[])
       const  [items ,setitems] = useState([]);

        const fetchItems = async ( )=> {
            const data = await fetch('https://ecommerce-response.herokuapp.com/');
            const items = await data.json();
            console.log(items);
            setitems(items);
        };
       


  return (
    <div className="cont" >

     
     {  
           
   
        
         items.map(item =>(
             <div className="card">
                <div>
             <h1 key={item.id}> 
                  
                 <Link className="a0" to= {`/shop/${item.id}`}> {item.name}</Link>
                 </h1>
                 <p key={item.price}>Price : 
                   { item.price}</p>
                   <p key={item.added}>Added : 
                   { item.added}</p>
                   
                   </div> 
                  <img key={item.photo} src={item.photo} alt="" />
                  
                  

                 </div>
                 
         ))
     }
     </div>
  );
}

export default Shop;