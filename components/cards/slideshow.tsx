"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import BlurIn from "@/components/magicui/blur-in";
import { IKImage } from "imagekitio-next";

export type SlideType = {
  title: string;
  description: string;
  imagePath: string; // ImageKit path
};

interface SlideShowProps {
  slides: SlideType[];
  autoPlayInterval?: number;
  autoPlay?: boolean; // New prop to control if slideshow should auto-play
}

export function SlideShow({ 
  slides,
  autoPlayInterval = 5000, // Default to 5 seconds
  autoPlay = true // Default to true
}: SlideShowProps) {
  // Add a mounting check to prevent hydration mismatch
  const [isMounted, setIsMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Don't set up interval if autoPlay is false or isAutoPlaying is false
    if (!autoPlay || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, autoPlayInterval);

    // Cleanup interval on unmount or when autoPlay/isAutoPlaying changes
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length, autoPlayInterval, autoPlay]);

  // Return null or a loading state until the component is mounted
  if (!isMounted) {
    return null; // Or return a loading placeholder
  }

  return (
    <div className="relative flex h-full w-full mx-auto items-center justify-center overflow-hidden rounded-lg">
      {/* Background elements */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-full w-full"
          >
            {/* Background Image with gradient overlay */}
            <div className="absolute inset-0 transition-all duration-300">
              <BlurIn duration={0.5} className="h-full">
                <IKImage
                  path={slides[currentIndex].imagePath}
                  alt={slides[currentIndex].title}
                  loading="eager"
                  width={1920}
                  height={1080}
                  className="object-cover object-center h-full w-full"
                  transformation={[{
                    quality: "75",
                  }]}
                />
              </BlurIn>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
      
      {/* Main content */}
      <div className="flex flex-col items-start justify-end h-full w-full p-6 z-10 relative">
        <BlurIn duration={0.5}>
          <h2 className="text-3xl font-bold text-white mb-2">
            {slides[currentIndex].title}
          </h2>
          <p className="text-white/80 max-w-md">
            {slides[currentIndex].description}
          </p>
        </BlurIn>
        
        {/* Navigation */}
        <div className="w-full flex justify-between items-center mt-6">
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  currentIndex === index
                    ? "bg-white w-6"
                    : "bg-white/50 w-2 hover:bg-white/75"
                )}
              />
            ))}
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-white/10 text-white hover:bg-white/20"
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
              }}
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-white/10 text-white hover:bg-white/20"
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex((prev) => (prev + 1) % slides.length);
              }}
            >
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
