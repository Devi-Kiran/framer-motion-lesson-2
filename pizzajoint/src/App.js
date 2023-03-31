import React, { useState } from 'react';
import { Route,useLocation,Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import Modal from './components/Modal';

function App() {
  const location = useLocation();
  const [modal,setModal] = useState(false);
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }
  
  const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  return (
    <>
      <Modal modal={modal} setModal={setModal}/>
      <Header />
      <Switch>
        <Route path="/base">
          <Base addBase={addBase} pizza={pizza} />
        </Route>
        <Route path="/toppings">
          <Toppings addTopping={addTopping} pizza={pizza} />
        </Route>
        <Route path="/order">
          <Order pizza={pizza} setModal={setModal}/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      
      {/* <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/base" element={<Base addBase={addBase}/>}/>
        <Route path="/toppings" element={<Toppings pizza={pizza}/>}/>
        <Route path="/order" element={<Order pizza={pizza}/>}/>
      </Routes> */}
    </>
  );
}

export default App;