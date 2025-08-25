import React from 'react';
import { motion } from 'framer-motion';

const AnimatedInView = ({ children, delay = 0, duration = 0.5, yOffset = 50 }) => {
  const variants = {
    hidden: { opacity: 0, y: yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedInView;
