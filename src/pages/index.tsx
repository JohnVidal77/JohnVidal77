import {FC} from 'react';
import Image from 'next/image';

const Home: FC = () => {
  return (
    <main className="p-8 w-screen h-screen">
      <div className="bg-white h-full border-2 border-black shadow-hard flex justify-center items-center p-4">
        <figure className="w-96 h-24">
          <Image src="/logo.png" alt="John Vidal" width={500} height={125} />
        </figure>
      </div>
    </main>
  );
};

export default Home;
