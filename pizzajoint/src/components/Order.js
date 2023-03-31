import React,{useEffect} from 'react';
import {motion} from "framer-motion";

const containerVarient = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.2,
      type: "spring",
      mass: 0.1,
      when: "beforeChildren",
      staggerChildren: 1
    },
  }
};

const childVarient = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const Order = ({ pizza,setModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setModal(true)
    },3000)
  },[])

  return (
    <motion.div className="container order" variants={containerVarient} initial="hidden" animate="visible">
      <h2>Thank you for your order :)</h2>  
      <motion.p variants={childVarient}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVarient}>
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;