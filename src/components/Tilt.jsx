import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Tilt = ({ children, className = '', max = 10, glare = true }) => {
  const ref = useRef(null);
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(pointerY, [0, 1], [max, -max]), {
    stiffness: 180,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-max, max]), {
    stiffness: 180,
    damping: 20,
  });

  const glareX = useTransform(pointerX, [0, 1], ['0%', '100%']);
  const glareY = useTransform(pointerY, [0, 1], ['0%', '100%']);

  const handlePointerMove = (event) => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width);
    pointerY.set((event.clientY - rect.top) / rect.height);
  };

  const handlePointerLeave = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={`tilt ${className}`.trim()}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
    >
      {children}
      {glare && <motion.span className="tilt-glare" style={{ '--gx': glareX, '--gy': glareY }} />}
    </motion.div>
  );
};

export default Tilt;
