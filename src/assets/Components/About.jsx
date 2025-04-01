// import photo from "/images/About.dng";
import { about_content } from "../..";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section>
      <div className="border-b border-neutral-900 lg:mb-35">
        <h2 className="my-20 text-center text-4xl">
          About <span className="text-neutral-500">Me</span>
        </h2>
        <div className="flex flex-wrap">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 lg:p-8"
          >
            <div className="flex items-center justify-center w-[20rem] lg:w-[30rem]">
              <img className="rounded-2xl" src="/images/About.png" alt="Not" />
            </div>
          </motion.div>
          <div className="w-full lg:w-1/2">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.7 }}
              className="flex justify-center lg:justify-start"
            >
              <p className="my-6 max-w-xl py-6">{about_content}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
