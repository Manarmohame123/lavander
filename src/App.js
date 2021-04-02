import React, { useState } from 'react';
import './App.css';
import Signin from './Signin';
import Signup from './Signup';
import  {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Shop from './Shop';
import Details from './Details';
import Nav from './Navbar'

import Cate from './catebar';



function App() {
  const [Filters,setFilters] = useState({
    categories: [],
  })

  const handleFilters= (filters, category) =>{
    const newFilters ={...Filters}
    
    setFilters(newFilters)

  }
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Cate 
        handleFilters={filters =>handleFilters(filters,"categories")

      }
        
        />
        
        <Switch>
          <Route path="/signin" component={Signin}/>
          <Route path="/" exact component={Shop}/>
          <Route path="/signup" exact component={Signup}/>
          
          <Route path="/shop/:id" exact component={Details}/>
          
         
          

        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
