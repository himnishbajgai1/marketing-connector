interface SectionDotsProps {
  currentSection: number;
  scrollToSection: (index: number) => void;
  totalSections?: number;
}

export function SectionDots({ currentSection, scrollToSection, totalSections = 5 }: SectionDotsProps) {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
      {Array.from({ length: totalSections }).map((_, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(index)}
          className={`h-2 w-2 rounded-full transition-all duration-300 ${
            currentSection === index
              ? "scale-150 bg-primary"
              : "bg-foreground/30 hover:bg-foreground/50"
          }`}
          aria-label={`Go to section ${index + 1}`}
        />
      ))}
    </div>
  );
}
