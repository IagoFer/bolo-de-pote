"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Magnetic } from "./Magnetic";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  magnetic?: boolean;
}

export function Button({
  children,
  className,
  variant = "primary",
  magnetic = false,
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-accent text-accent-foreground hover:opacity-90",
    secondary: "bg-muted text-foreground hover:bg-muted/80",
    outline: "border border-border bg-transparent hover:bg-muted",
    ghost: "bg-transparent hover:bg-muted",
  };

  const content = (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={cn(
        "px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );

  if (magnetic) {
    return <Magnetic>{content}</Magnetic>;
  }

  return content;
}
