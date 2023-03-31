import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVarient = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3
    }
  }
}

const buttonVarient = {
  hover: {
    boxShadow: "0px 0px 8px rgba(255,255,255,0.7)",
    textShadow: "0px 0px 6px rgba(255,255,255,0.7)",
    //x: [0,-20,20,-20,20,0],
    //x: -20,
    scale: 1.1,
    transition: {
      yoyo: Infinity
    }
  }
}

const Home = () => {

  return (
    <motion.div
      className="home container"
      variants={containerVarient}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 animate={{}}>Welcome to Pizza Joint</motion.h2>
      <Link to="/base">
        <motion.button
          variants={buttonVarient}
          animate="start"
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
