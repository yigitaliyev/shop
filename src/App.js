
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar"
import Login from "./components/login"
import Signub from "./components/Signub";
import Products from "./components/products";
import Cart from "./components/cart";
import { useEffect } from "react";

function App() {



  function bosildi(product) {
    console.log(product)

  }


  return (
    <div className="App">
            
          <Navbar />
         
          
      <Routes>
           <Route path="/" element = {<Products bosildi = {()=>bosildi}  />}/>
           <Route path="/login" element ={<Login />}/>
           <Route path="/signub" element ={<Signub />}/>
           <Route path="/cart" element ={<Cart/>}/>

      </Routes>
    </div>
  );
}

export default App;
