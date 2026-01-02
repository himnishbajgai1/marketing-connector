import { MagneticButton } from "./MagneticButton";

interface NavbarProps {
  scrollToSection: (index: number) => void;
}

export function Navbar({ scrollToSection }: NavbarProps) {
  return (
    <nav className="fixed left-0 right-0 top-0 z-40 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-xl font-bold text-primary-foreground">T</span>
          </div>
          <div>
            <div className="font-sans text-xl font-bold text-foreground">Tradesmen Marketing</div>
            <div className="font-mono text-xs text-foreground/60">AI Automation Agency</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <MagneticButton
            size="sm"
            variant="secondary"
            onClick={() => scrollToSection(1)}
            className="hidden md:inline-flex"
          >
            Services
          </MagneticButton>
          <MagneticButton size="sm" variant="primary" onClick={() => scrollToSection(4)}>
            Book Call
          </MagneticButton>
        </div>
      </div>
    </nav>
  );
}
