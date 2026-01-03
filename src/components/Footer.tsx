import { Sparkles } from "lucide-react";

const Footer = () => {
  // All skills from Skills component
  const allSkills = [
    "Figma",
    "Figjam",
    "Design Systems",
    "Prototyping",
    "User Research",
    "Usability Testing",
    "Problem Solving",
    "HTML/CSS",
  ];

  // Duplicate skills for seamless loop
  const marqueeSkills = [...allSkills, ...allSkills];

  return (
    <footer className="py-8 border-t border-border bg-background overflow-hidden">
      {/* Marquee Section - Full Width */}
      <div className="mb-8 relative w-full">
        {/* Top Marquee */}
        <div className="marquee-container mb-4 relative">
          {/* Gradient fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="marquee-content">
            {marqueeSkills.map((skill, index) => (
              <div key={`top-${index}`} className="inline-flex items-center gap-6">
                <span className="marquee-text funky-text text-xs">
                  {skill}
                </span>
                {index < marqueeSkills.length - 1 && (
                  <Sparkles size={20} className="text-muted-foreground flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Marquee (reverse direction) */}
        <div className="marquee-container marquee-reverse relative">
          {/* Gradient fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="marquee-content">
            {marqueeSkills.slice().reverse().map((skill, index) => (
              <div key={`bottom-${index}`} className="inline-flex items-center gap-6">
                <span className="marquee-text funky-text text-xs">
                  {skill}
                </span>
                {index < marqueeSkills.length - 1 && (
                  <Sparkles size={20} className="text-muted-foreground flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ruchi R. All rights reserved.
          </div>
          <div className="text-sm text-muted-foreground">
            crafted with ❤️
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
