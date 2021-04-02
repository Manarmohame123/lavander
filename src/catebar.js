import './App.css';
import React, { useEffect, useState } from 'react';




const categories=[
  {
    "_id" : 1,
    "_category" :"Headphones"
  },

  {
    "_id" : 2,
    "_category" :"mobile"
  },

  {
    "_id" : 3,
    "_category" :"laptops"
  },


]


function Cate(props) {



  /*useEffect(( ) => {
    fetchItems();
    
},[])
const  [items ,setitems] = useState([]);

const fetchItems = async ( )=> {
    const data = await fetch('https://ecommerce-response.herokuapp.com/');
    const items = await data.json();
    console.log(items);
    setitems(items);
};*/
const  [Checked ,setChecked] = useState([]);
const handleToggle= (val) =>{
    const currentInd = Checked.indexOf(val);
    const newchecked =[...Checked];

    if(currentInd===-1){
      newchecked.push(val)
    } 
    else{
      newchecked.splice(currentInd ,1)
    }
    setChecked(newchecked)
    props.handleFilters(newchecked)
}



 
  return (
    
    <div >
      {
        categories.map((val , ind ) => (
            <div key={ind._id}>
            <input type ="checkbox"
             checked={Checked.indexOf(val._id)===-1 ? false : true}
             onChange={()=>handleToggle(val._id)}/>   
            <span>{val._category} </span>
            </div> 
                
       ))}

    </div>
  );
}
export default Cate;