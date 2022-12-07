import { Variants } from 'framer-motion';

const dropIn: Variants = {
  hidden: {
    y: '-10vh',
    opacity: 0,
    scale: 0.75,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.05,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: 0,
    opacity: 0,
    scale: 0.75,
  },
};

const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.05,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
};

export { dropIn, fadeIn };
