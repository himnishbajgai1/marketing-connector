import { useEffect, useRef } from "react";

export function GradientBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };

      if (containerRef.current) {
        const orbs = containerRef.current.querySelectorAll<HTMLDivElement>(".gradient-orb");
        orbs.forEach((orb, index) => {
          const factor = (index + 1) * 15;
          const x = (mouseRef.current.x - 0.5) * factor;
          const y = (mouseRef.current.y - 0.5) * factor;
          orb.style.transform = `translate(${x}px, ${y}px)`;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden bg-background"
    >
      {/* Main gradient orbs */}
      <div
        className="gradient-orb absolute -left-[20%] -top-[20%] h-[80vh] w-[80vh] rounded-full opacity-60 blur-3xl transition-transform duration-700 ease-out animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, hsl(263 70% 58%) 0%, hsl(263 70% 45% / 0) 70%)",
        }}
      />
      <div
        className="gradient-orb absolute -right-[10%] top-[20%] h-[60vh] w-[60vh] rounded-full opacity-50 blur-3xl transition-transform duration-700 ease-out animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, hsl(263 70% 68%) 0%, hsl(263 60% 50% / 0) 70%)",
          animationDelay: "1s",
        }}
      />
      <div
        className="gradient-orb absolute bottom-[10%] left-[30%] h-[50vh] w-[50vh] rounded-full opacity-40 blur-3xl transition-transform duration-700 ease-out animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, hsl(263 60% 80%) 0%, hsl(263 50% 60% / 0) 70%)",
          animationDelay: "2s",
        }}
      />
      <div
        className="gradient-orb absolute -bottom-[15%] -right-[15%] h-[70vh] w-[70vh] rounded-full opacity-50 blur-3xl transition-transform duration-700 ease-out animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, hsl(280 70% 50%) 0%, hsl(263 70% 40% / 0) 70%)",
          animationDelay: "3s",
        }}
      />
      
      {/* Overlay gradient for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, hsl(240 10% 3.9% / 0.4) 100%)",
        }}
      />
    </div>
  );
}
