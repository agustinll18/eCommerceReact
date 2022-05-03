import React, { useRef } from "react";
import { motion } from "framer-motion";
const Goal = () => {
  const constraintsRef = useRef(null);
  return (
    <div className="goal col-9">
      <motion.div className="carrera" ref={constraintsRef}>
        <motion.div className="men" drag="x" dragConstraints={constraintsRef}>{/* 
          <img src="https://img.icons8.com/ios-filled/100/000000/exercise.png" alt="menRunning"/> */}
        </motion.div>
      </motion.div>
      <img className="meta" src={require('../../icons8-phone-ringing.gif')} style={{transform: 'scale(50%) rotatez(90deg)'}}/>
    </div>
  );
};
export default Goal;
