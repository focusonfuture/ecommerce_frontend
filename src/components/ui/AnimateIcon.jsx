import { motion } from "framer-motion";

export function AnimateIcon({ children, animateOnHover = false }) {
  return (
    <motion.span
      whileHover={animateOnHover ? { scale: 1.15, rotate: -10 } : undefined}
      style={{ display: "inline-flex" }}
    >
      {children}
    </motion.span>
  );
}
