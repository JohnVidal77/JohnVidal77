import React from 'react';
import {motion} from 'framer-motion';
import CardHeader from './CardHeader';

const item = {
  hidden: {y: 20, opacity: 0},
  visible: {
    y: 0,
    opacity: 1,
  },
};

function WindowCard({children, title}) {
  return (
    <motion.div
      variants={item}
      className="relative md:h-full w-full bg-white box-border border-2 border-black shadow-hard items-center pt-20 p-4">
      <CardHeader title={title} />
      {children}
    </motion.div>
  );
}

export default WindowCard;
