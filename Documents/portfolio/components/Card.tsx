"use client";
import { motion } from "framer-motion";

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`relative overflow-hidden bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all ${className}`}
    >
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};