import { motion } from "framer-motion";

interface IChildrenProps {
  children: React.ReactNode;
}

export const MotionContainer = ({ children }: IChildrenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.6 }}
    >
      {children}
    </motion.div>
  );
};
