import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-gradient hover:scale-110 transition-transform duration-300 cursor-pointer">
            RR
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href="https://drive.google.com/file/d/16kGbl1vFMuQQZQtOlLFgG3Pp5Xcs5kBS/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90">
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="https://drive.google.com/file/d/16kGbl1vFMuQQZQtOlLFgG3Pp5Xcs5kBS/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90">
                Resume
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
