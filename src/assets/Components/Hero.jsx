import { easeIn } from "framer-motion/dom";
import { hero_content } from "../..";
import Profile from "/images/hari.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut", delay: delay },
  },
});

export default function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2 p-8">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="pb-12 text-4xl font-thin tracking-tight lg:mt-20 lg:text-6xl"
            >
              HARIHARAN M S
            </motion.h1>
            <motion.span
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-red-300 via-slate-500 to-pink-800 bg-clip-text text-transparent tracking-tight text-3xl lg:text-[2rem]"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tight"
            >
              {hero_content}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 ">
          <div className="flex justify-center rotate-270 w-[20rem] lg:w-[30rem]">
            <motion.img
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: easeIn, delay: 1.2 }}
              src={Profile}
              alt="hari"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
