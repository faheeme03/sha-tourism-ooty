import React from 'react';
import { motion } from 'framer-motion';

/**
 * FadeIn Component
 * Gently fades & translates elements when they enter the viewport.
 * Works both scrolling down and up when once=false, or once=true for performance.
 */
export function FadeIn({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  yOffset = 24, 
  className = "",
  once = false 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.15 }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger Container
 * Animates child elements in sequence
 */
export function StaggerContainer({ 
  children, 
  staggerChildren = 0.1, 
  className = "",
  once = false 
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger Item
 * Child of StaggerContainer
 */
export function StaggerItem({ 
  children, 
  yOffset = 20, 
  duration = 0.45, 
  className = "" 
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration, 
            ease: [0.21, 0.47, 0.32, 0.98] 
          } 
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
