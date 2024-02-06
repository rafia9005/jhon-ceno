import { motion } from "framer-motion";

export default function HeroLayout() {
  const backgroundVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={backgroundVariants}
        className="relative"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className=""></div>
          <div className="blur-[106px] lg:h-[600px] w-[100px] h-[100px] rounded-full lg:w-[600px] bg-gradient-to-r from-black to-black"></div>
        </div>
      </motion.div>

      <div className="relative flex justify-between items-center h-screen text-black">
        <div className="lg:mx-[200px] mx-[10px]">
          <motion.h1
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6 }}  
            className="lg:text-[200px] text-7xl font-bold noto"
          >
            Jhon Ceno.
          </motion.h1>

          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex justify-start items-center mt-[40px]"
          >
            <p className="lg:w-1/2">
              Jhon Ceno adalah seorang <b>Full-Stack Developer</b> yang sangat
              terampil dan berpengalaman. Ia memiliki pemahaman mendalam tentang
              semua aspek pengembangan web.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
