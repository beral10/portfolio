'use client';
import { motion } from 'motion/react';
import { useRef } from 'react';
import { FaGithub } from 'react-icons/fa';

const PortfolioGitHub = () => {
  const constraintsRef = useRef(null);

  return (
    <>
      {/* Contenedor invisible que ocupa toda la pantalla */}
      <div
        ref={constraintsRef}
        className="fixed inset-0 z-40 pointer-events-none"
      ></div>

      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.2}
        whileHover={{ scale: 1.05 }}
        className="fixed top-5 right-5 z-50 bg-black/30 md:hover:bg-gray-500 text-white px-4 py-2 rounded-full shadow-lg shadow-amber-500 flex items-center justify-center gap-2 border-2 border-sky-700 cursor-pointer"
        onDoubleClick={() => window.open('https://github.com/beral10/portfolio.git', '_blank')}
      >
        
          <FaGithub className="text-xl" />
          <span>Código portafolio — 2 clicks</span>
      </motion.div>
    </>
  );
};

export default PortfolioGitHub;
