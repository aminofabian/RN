"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, X } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";

const announcements = [
  {
    id: 1,
    text: "🎯 Special Launch Offer: 50% off all practice tests!",
    link: "/offers",
  },
  {
    id: 2,
    text: "🌟 New: Interactive study materials available",
    link: "/study",
  },
  {
    id: 3,
    text: "📚 Access 1000+ practice questions for free",
    link: "/practice",
  },
];

const AnnouncementBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isVisible || isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 12000); // Increased to 12 seconds for much longer display time
    return () => clearInterval(timer);
  }, [isVisible, isPaused]);

  if (!isVisible) return null;

  const slideVariants = {
    enter: { x: "100%" },
    center: { x: 0 },
    exit: { x: "-100%" }
  };

  const slideTransition = {
    duration: 3.5, // Slower slide animation
    times: [0, 0.6, 1], // Longer pause in the center
    ease: [0.22, 1, 0.36, 1]
  };

  return (
    <div 
      className="bg-[#2563eb] h-7 relative overflow-hidden border-b border-blue-500/50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-full flex items-center max-w-7xl mx-auto px-4">
        <motion.div
          animate={{
            rotate: [0, 14, -8, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 3
          }}
          className="shrink-0 mr-3"
        >
          <Bell size={12} className="text-white/80" />
        </motion.div>
        
        <div className="flex-1 overflow-hidden h-7">
          <div className="relative h-full flex items-center">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                className="absolute left-0 right-0 whitespace-nowrap"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.01, 1], // Subtler scale effect
                    opacity: [0.95, 1, 0.95] // Subtler opacity change
                  }}
                  transition={{
                    duration: 4,
                    times: [0, 0.5, 1],
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <Link 
                    href={announcements[currentIndex].link}
                    className="text-xs font-medium text-white hover:underline inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
                  >
                    {announcements[currentIndex].text}
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 ml-4">
          <div className="hidden sm:flex items-center gap-1">
            {announcements.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-1 h-1 rounded-full transition-all duration-700 ${
                  idx === currentIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                }`}
                whileHover={{ scale: 1.2 }}
                animate={idx === currentIndex ? {
                  scale: [1, 1.2, 1],
                  transition: { duration: 4, repeat: Infinity }
                } : {}}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="h-5 w-5 text-white/70 hover:text-white hover:bg-white/10 rounded-full"
            onClick={() => setIsVisible(false)}
          >
            <X size={10} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar; 