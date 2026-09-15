"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { scenes } from "./data";

export default function StoryAnimation() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % scenes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scene = scenes[index];

  return (
    <div className="w-full flex justify-start items-center mt-20 md:mt-0 ps-4 lg:ps-0 pr-4 py-12 md:py-2 bg-transparent relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={scene.icon}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="max-w-4xl w-full text-center flex flex-col items-center space-y-6 md:space-y-10 px-4 md:px-8 mt-10"
        >
          <motion.div
            whileHover={{ scale: 1.12 }}
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-40 h-40 md:w-56 md:h-56 p-6 rounded-full shadow-primary shadow-lg flex items-center justify-center bg-white bg-opacity-60 backdrop-blur-md"
          >
            <Image
              src={scene.icon}
              alt={scene.heading}
              width={200}
              height={200}
              className="w-full h-full object-contain"
            />
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold text-primary drop-shadow-sm">
            {scene.heading}
          </h2>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
            {scene.text}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
