"use client";

import { motion } from "framer-motion";
import Technologies from "@/components/cards/technologies";

export default function Tech() {
  return (
    <div className="flex justify-center w-full max-w-2xl mx-auto p-6">
      <div>
        <div className="flex flex-col items-center mt-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-4xl font-bold text-center">Platforms</div>
            <p className="font-thin">
              The platforms I specialize in.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Technologies liveLinks={false} />
        </motion.div>
      </div>
    </div>
  );
}
