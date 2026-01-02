import { useRef, useEffect, useState, useCallback } from "react";
import { GradientBackground } from "@/components/GradientBackground";
import { GrainOverlay } from "@/components/GrainOverlay";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { SectionDots } from "@/components/SectionDots";
import {
  HeroSection,
  ServicesSection,
  ProcessSection,
  TestimonialsSection,
  FAQSection,
  CTASection,
} from "@/components/sections/Sections";

const Index = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);
  const scrollThrottleRef = useRef<number>();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = useCallback((index: number) => {
    if (scrollContainerRef.current) {
      const sectionWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: sectionWidth * index,
        behavior: "smooth",
      });
      setCurrentSection(index);
    }
  }, []);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (Math.abs(e.touches[0].clientY - touchStartY.current) > 10) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const touchEndX = e.changedTouches[0].clientX;
      const deltaY = touchStartY.current - touchEndY;
      const deltaX = touchStartX.current - touchEndX;

      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 50) {
        if (deltaY > 0 && currentSection < 5) {
          scrollToSection(currentSection + 1);
        } else if (deltaY < 0 && currentSection > 0) {
          scrollToSection(currentSection - 1);
        }
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("touchstart", handleTouchStart, { passive: true });
      container.addEventListener("touchmove", handleTouchMove, { passive: false });
      container.addEventListener("touchend", handleTouchEnd, { passive: true });
    }

    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
        container.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [currentSection, scrollToSection]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (scrollThrottleRef.current) {
        return;
      }

      scrollThrottleRef.current = window.setTimeout(() => {
        scrollThrottleRef.current = undefined;
      }, 800);

      if (e.deltaY > 0 && currentSection < 5) {
        scrollToSection(currentSection + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        scrollToSection(currentSection - 1);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
      if (scrollThrottleRef.current) {
        clearTimeout(scrollThrottleRef.current);
      }
    };
  }, [currentSection, scrollToSection]);

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-background">
      <CustomCursor />
      
      <div className={`transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <GradientBackground />
      </div>
      
      <GrainOverlay />

      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
          <div className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-foreground/20 border-t-primary" />
            <p className="font-mono text-sm text-foreground/60">Loading experience...</p>
          </div>
        </div>
      )}

      <Navbar scrollToSection={scrollToSection} />

      <div
        ref={scrollContainerRef}
        className="no-scrollbar relative z-10 flex h-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden"
      >
        <HeroSection scrollToSection={scrollToSection} />
        <ServicesSection scrollToSection={scrollToSection} />
        <ProcessSection scrollToSection={scrollToSection} />
        <TestimonialsSection scrollToSection={scrollToSection} />
        <FAQSection scrollToSection={scrollToSection} />
        <CTASection />
      </div>

      <SectionDots currentSection={currentSection} scrollToSection={scrollToSection} totalSections={6} />
    </main>
  );
};

export default Index;
