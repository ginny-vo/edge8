"use client";
import React from "react";
import { motion, MotionProps } from "motion/react";

import { cn } from "@/lib/utils";

interface GradientTextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

function GradientText({
  className,
  children,
  as: Component = "span",
  ...props
}: GradientTextProps) {
  const MotionComponent = motion.create(Component);

  return (
    <MotionComponent
      className={cn(
        "relative inline-flex",
        className,
      )}
      style={{
        background: "linear-gradient(135deg, rgb(111, 242, 193) 0%, rgb(40, 123, 232) 50%, rgb(209, 69, 139) 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

export { GradientText };
