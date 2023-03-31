import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVarient = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.2,
      type: "spring",
    },
  }
};

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];
  const orderButtonVarient = {
    start: {
      opacity: 0,
      scale: 1.4,
      x: "-100vw"
    },
    end: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
      }
    },
    hover: {
      boxShadow: "0px 0px 4px rgba(255,255,255,0.7)",
      textShadow: "0px 0px 6px rgba(255,255,255,0.7)",
      scale: 1.1,
      transition: {
        yoyo: Infinity
      }
    }
  }

  return (
    <motion.div className="toppings container" variants={containerVarient} initial="hidden" animate="visible">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              whileHover={{
                scale: 1.3,
                originX: 0,
              }}
              transition={{ type: "spring",stiffness: 300}}
              key={topping}
              onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button
          variants={orderButtonVarient}
          initial="start"
          whileHover="hover"
          animate="end"
        >
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
