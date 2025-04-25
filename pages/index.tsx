import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

export default function Home() {
  const nftImages = ['/nft1.png', '/nft2.png', '/nft3.png'];

  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-black">
      <Head>
        <title>MintStars - Mint Your Star NFTs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <video autoPlay loop muted className="absolute w-full h-full object-cover opacity-20">
        <source src="/galaxy.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen p-8">
        <motion.h1 
          className="text-5xl md:text-6xl font-extrabold text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-purple-400">MintStars</span>
        </motion.h1>
        <motion.p 
          className="text-lg md:text-2xl text-gray-300 text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Discover, Create, and Mint your Star NFTs on Monad Testnet
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link href="/mint">
            <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 px-8 py-4 rounded-full text-lg font-bold text-white hover:scale-110 transform transition shadow-lg">
              Start Minting
            </button>
          </Link>
        </motion.div>
      </div>

      {/* NFT Showcase */}
      <section className="relative z-10 bg-black bg-opacity-80 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Featured NFTs</h2>
        <div className="flex justify-center px-6">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            className="w-full max-w-md"
          >
            {nftImages.map((src, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="rounded-lg overflow-hidden shadow-lg"
                >
                  <img src={src} alt="NFT Showcase" className="w-full h-96 object-cover" />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Countdown Coming Soon */}
      <section className="relative z-10 bg-black py-16 text-center">
        <motion.h2 
          className="text-4xl font-bold text-purple-400 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Minting Launch Coming Soon
        </motion.h2>
        <p className="text-gray-400">Stay tuned and prepare your wallet!</p>
      </section>
    </div>
  );
}