import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import {motion} from 'framer-motion';
import {FaTwitterSquare, FaGithubSquare, FaInstagram} from 'react-icons/fa';

import WindowCard from '../components/WindowCard';

import PostController from '../controllers/post.controller';

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

export default function Home({allPosts}) {
  return (
    <>
      <Head>
        <title>John Vidal</title>
        <meta name="description" content="John Vidal's personal site & blog" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Development, Web Development"
        />
        <meta name="author" content="John Vidal" />
      </Head>
      <motion.main
        className="flex flex-col md:flex-row gap-4 box-border mb-4 p-4 md:p-8 w-screen h-full min-h-screen"
        variants={container}
        initial="hidden"
        animate="visible">
        <div className="w-full md:w-1/3 md:p-2">
          <WindowCard title="RESUME">
            <>
              <div className="w-full text-left mb-8">
                <h1 className="text-3xl font-bold mb-4">John Vidal</h1>
                <ul>
                  <li className="flex items-center mb-4">
                    <FaTwitterSquare size="1.5rem" />
                    <span className="ml-2">@johnvidal77</span>
                  </li>
                  <li className="flex items-center mb-4">
                    <FaInstagram size="1.5rem" />
                    <span className="ml-2">@johnvidal77</span>
                  </li>
                  <li className="flex items-center mb-4">
                    <FaGithubSquare size="1.5rem" />
                    <span className="ml-2">github.com/johnvidal77</span>
                  </li>
                </ul>
              </div>
              <div className="hidden md:block mb-8 w-full text-left">
                <h2 className="text-xl font-bold mb-4">Stack</h2>
                <ul className="flex flex-wrap">
                  <li className="w-16 h-16 mr-1 mb-1 border border-black flex items-center justify-center">
                    <img
                      src="https://img.icons8.com/color/48/000000/javascript.png"
                      alt="Javascript"
                    />
                  </li>
                  <li className="w-16 h-16 mr-1 mb-1 border border-black flex items-center justify-center">
                    <img
                      src="https://img.icons8.com/color/48/000000/typescript.png"
                      alt="Typescript"
                    />
                  </li>
                  <li className="w-16 h-16 mr-1 mb-1 border border-black flex items-center justify-center">
                    <img
                      src="https://img.icons8.com/color/48/000000/css3.png"
                      alt="CSS"
                    />
                  </li>
                  <li className="w-16 h-16 mr-1 mb-1 border border-black flex items-center justify-center">
                    <img
                      src="https://img.icons8.com/color/48/000000/html-5--v1.png"
                      alt="HTML"
                    />
                  </li>
                  <li className="w-16 h-16 mr-1 mb-1 border border-black flex items-center justify-center">
                    <img
                      src="https://img.icons8.com/color/48/000000/react-native.png"
                      alt="React"
                    />
                  </li>
                  <li className="w-16 h-16 mr-1 mb-1 border border-black flex items-center justify-center">
                    <img
                      src="https://img.icons8.com/color/48/000000/flutter.png"
                      alt="Flutter"
                    />
                  </li>
                  <li className="w-16 h-16 mr-1 mb-1 border border-black flex items-center justify-center">
                    <img
                      src="https://img.icons8.com/color/48/000000/docker.png"
                      alt="Docker"
                    />
                  </li>
                  <li className="w-16 h-16 mr-1 mb-1 border border-black flex items-center justify-center">
                    <img
                      src="https://img.icons8.com/color/48/000000/mongodb.png"
                      alt="MongoDB"
                    />
                  </li>
                  <li className="w-16 h-16 mr-1 mb-1 border border-black flex items-center justify-center">
                    <img
                      src="https://img.icons8.com/color/48/000000/python.png"
                      alt="Python"
                    />
                  </li>
                </ul>
              </div>
              <div className="hidden md:block w-full text-left">
                <h2 className="text-xl font-bold mb-4">Experience</h2>
                <ul>
                  <li className="mb-2 pb-2 border-b border-gray-400">
                    <strong className="block">Frontend Developer Senior</strong>
                    <span className="block">2020 - Currently</span>
                    <span className="block">Octa Mais</span>
                  </li>
                  <li className="mb-2 pb-2 border-b border-gray-400">
                    <strong className="block">
                      FullStack Developer Senior
                    </strong>
                    <span className="block">2019 - Currently</span>
                    <span className="block">JV Inc</span>
                  </li>
                  <li className="mb-2 pb-2 border-b border-gray-400">
                    <strong className="block">Frontend Web Developer</strong>
                    <span className="block">2019 - 2019</span>
                    <span className="block">Duee Brasil</span>
                  </li>
                  <li className="mb-2 pb-2 border-b border-gray-400">
                    <strong className="block">Frontend Web Developer</strong>
                    <span className="block">2017 - 2019</span>
                    <span className="block">Atlas Inovações</span>
                  </li>
                  <li className="mb-2 pb-2 border-b border-gray-400">
                    <strong className="block">Mobile Developer</strong>
                    <span className="block">2014 - 2016</span>
                    <span className="block">Exla - Software Estrátegico</span>
                  </li>
                </ul>
              </div>
            </>
          </WindowCard>
        </div>
        <div className="w-full md:w-2/3 md:p-2">
          <WindowCard title="BLOG">
            <ul>
              {allPosts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/post/${post.slug}`}>
                    <div className="flex flex-col md:flex-row gap-4 p-2 border-b">
                      <div className="w-full md:w-36 h-40 md:h-28 relative">
                        <Image
                          layout="fill"
                          objectFit="cover"
                          alt={post.slug}
                          src={post.cover}
                        />
                      </div>
                      <div className="flex-1">
                        <h2 className="font-bold mb-2">{post.title}</h2>
                        <p>{post.excerpt}</p>
                        <span className="block text-right text-sm">
                          See more
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </WindowCard>
        </div>
      </motion.main>
    </>
  );
}

export async function getStaticProps() {
  const postController = new PostController();

  const allPosts = postController.getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'cover',
    'excerpt',
  ]);

  return {
    props: {allPosts},
  };
}
