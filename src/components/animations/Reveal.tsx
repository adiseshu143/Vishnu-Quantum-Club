'use client';

import React, { useRef } from 'react';
import { motion, useInView, UseInViewOptions } from 'motion/react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  scale?: number;
  threshold?: number;
  once?: boolean;
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 0.65,
  yOffset = 24,
  xOffset = 0,
  scale = 1,
  threshold = 0.15,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    amount: threshold as UseInViewOptions['amount'],
  });

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{
          opacity: 0,
          y: yOffset,
          x: xOffset,
          scale: scale < 1 ? scale : 1,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
              }
            : {
                opacity: 0,
                y: yOffset,
                x: xOffset,
                scale: scale < 1 ? scale : 1,
              }
        }
        transition={{
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1] as const,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
