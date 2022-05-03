import { motion, Variants } from "framer-motion";
const cardVariants: Variants = {
  offscreen: {
    y: 250
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2
    }
  }
};
export default function Item(producto) {
  
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0}}
    >
      <motion.div className="card" variants={cardVariants}>
        <div class="col">
          <div class="card h-10">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-center">{producto.modelo}</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <a class="card-footer" href="https://portfolio-agustinllados.000webhostapp.com/">
              COMPRAR
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
