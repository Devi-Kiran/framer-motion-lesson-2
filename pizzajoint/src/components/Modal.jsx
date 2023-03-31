import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import {motion,AnimatePresence} from 'framer-motion';

const modalContainer = {
    start: {
        opacity: 0
    },
    end: {
        opacity: 1,
        transition: {
            duration: 0.5,
            when: "beforeChildren"
        }
    }
}

const modalVarient = {
    start: {
        y: "-100vh"
    },
    end: {
        y: 200,
        transition: {
            delay: 0.3,
            type: "spring",
            stiffness: 100
        }
    }
}

function Modal({modal,setModal}) {
  return (
    <AnimatePresence exitBeforeEnter>
        {modal && (
        <motion.div  className="modal-box" variants={modalContainer} initial="start" animate="end" exit="start">
            <motion.div className="popup-box" variants={modalVarient}>
                <h2>THANKYOU FOR SHOPPING</h2>
                <Link to="/"><button onClick={() => setModal(false)}>shop again</button></Link>
                {/* <button onClick={() => setModal(false)}>shop again</button> */}
            </motion.div>
        </motion.div>)}
  </AnimatePresence>)
}

export default Modal