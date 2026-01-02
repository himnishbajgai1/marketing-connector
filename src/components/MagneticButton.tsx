import type React from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "default" | "lg";
  onClick?: () => void;
  type?: "button" | "submit";
}

export function MagneticButton({
  children,
  className = "",
  variant = "primary",
  size = "default",
  onClick,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>();

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    positionRef.current = { x: x * 0.15, y: y * 0.15 };

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (ref.current) {
        ref.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`;
      }
    });
  };

  const handleMouseLeave = () => {
    positionRef.current = { x: 0, y: 0 };
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (ref.current) {
        ref.current.style.transform = "translate3d(0px, 0px, 0)";
      }
    });
  };

  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-purple hover:shadow-purple-lg",
    secondary: "glass-card text-foreground hover:border-primary/40 hover:bg-foreground/10",
    ghost: "bg-transparent text-foreground hover:bg-foreground/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-full font-medium",
        "transition-all duration-300 ease-out will-change-transform",
        "active:scale-[0.98] hover:scale-[1.02]",
        variants[variant],
        sizes[size],
        className
      )}
      style={{
        transform: "translate3d(0px, 0px, 0)",
        contain: "layout style paint",
      }}
    >
      <span className="relative z-10 leading-5">{children}</span>
    </button>
  );
}
