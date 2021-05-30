import {motion} from 'framer-motion';

const container = {
  hidden: {opacity: 1, scale: 0},
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {y: 20, opacity: 0},
  visible: {
    y: 0,
    opacity: 1,
  },
};

const card =
  'relative md:h-full bg-white box-border border-2 border-black shadow-hard items-center pt-20 p-4';

export default function Home() {
  return (
    <motion.main
      className="flex flex-wrap box-border mb-4 p-8 w-screen h-full min-h-screen"
      variants={container}
      initial="hidden"
      animate="visible">
      <div className="w-full md:w-1/3 md:p-2">
        <motion.div className={card} variants={item} />
      </div>
      <div className="w-full md:w-2/3 md:p-2">
        <motion.div className={card} variants={item} />
      </div>
    </motion.main>
  );
}
