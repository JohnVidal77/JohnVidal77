import {FC} from 'react';
import {motion} from 'framer-motion';

import Image from 'next/image';
import CardHeader from '../components/CardHeader';

const card =
  'relative h-full bg-white box-border border-2 border-black shadow-hard flex justify-center items-center p-4';

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

const Home: FC = () => {
  return (
    <motion.main
      className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8 w-screen h-screen"
      variants={container}
      initial="hidden"
      animate="visible">
      <div className="w-full">
        <motion.div className={card} variants={item}>
          <CardHeader title="RESUMO" />
          <div className="flex-1">
            <figure>
              <Image
                src="/logo.png"
                alt="John Vidal"
                width={500}
                height={125}
              />
            </figure>
          </div>
        </motion.div>
      </div>
      <div className="w-full md:col-span-2 grid md:grid-rows-2 gap-4">
        <motion.div className={card} variants={item}>
          <CardHeader title="EXPERIÊNCIA" />
        </motion.div>
        <motion.div className={card} variants={item}>
          <CardHeader title="PROJETOS" />
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Home;
