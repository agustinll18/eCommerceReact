import React, { useRef } from "react";
import { motion } from "framer-motion";

const QuienesSomos = () => {
  const constraintsRef = useRef(null);
  return (
    <div className="quienesSomos"/*  id="quienesSomos" */>
      <motion.div className="pesasBR" ref={constraintsRef}>
        <motion.div className="item" drag="y" dragConstraints={constraintsRef}>
          <div className="barra"></div>
          <div className="discos"></div>
          <div className="discos"></div>
          <div className="discos"></div>
          <div className="discos"></div>
          <div className="discos"></div>
          <div className="discos"></div>
        </motion.div>
      </motion.div>

      <h2>Quienes Somos</h2>
      <p>lorem ipsum dolor sit amet, consectetur123</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
      <p>lorem ipsum dolor sit amet, consectetur</p>
    </div>
  );
};
export default QuienesSomos;