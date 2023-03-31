import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];
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
  const nextButtonVarient = {
    hidden: {
      x: "-100vw",
      opacity: 0,
      scale: 1.4
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1
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
    <motion.div
      className="base container"
      variants={containerVarient}
      initial="hidden"
      animate="visible"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              whileHover={{
                scale: 1.3,
                originX: 0,
              }}
              transition={{ type: "spring" }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <div className="next">
          <Link to="/toppings">
            <motion.button
              variants={nextButtonVarient}
              initial="hidden"
              whileHover="hover"
              animate="visible"
            >
              Next
            </motion.button>
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default Base;
