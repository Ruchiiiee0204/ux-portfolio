import { ArrowDown, Sparkles } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-30 blur-3xl"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
              hsl(var(--primary) / 0.3) 0%, 
              hsl(var(--accent) / 0.2) 50%, 
              transparent 100%)`
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles 
          className="absolute top-1/4 left-1/4 text-primary/50 animate-float" 
          size={24}
          style={{ animationDelay: '0s' }}
        />
        <Sparkles 
          className="absolute top-1/3 right-1/4 text-primary/60 animate-float" 
          size={32}
          style={{ animationDelay: '1s' }}
        />
        <Sparkles 
          className="absolute bottom-1/4 left-1/3 text-primary/55 animate-float" 
          size={20}
          style={{ animationDelay: '2s' }}
        />
        <Sparkles 
          className="absolute top-1/2 right-1/3 text-accent/50 animate-float" 
          size={28}
          style={{ animationDelay: '1.5s' }}
        />
        <Sparkles 
          className="absolute top-1/5 left-1/5 text-primary/45 animate-float" 
          size={18}
          style={{ animationDelay: '0.5s' }}
        />
        <Sparkles 
          className="absolute top-3/4 right-1/5 text-accent/50 animate-float" 
          size={22}
          style={{ animationDelay: '2.5s' }}
        />
        <Sparkles 
          className="absolute bottom-1/5 left-1/2 text-primary/40 animate-float" 
          size={26}
          style={{ animationDelay: '3s' }}
        />
        <Sparkles 
          className="absolute top-1/6 right-2/5 text-accent/60 animate-float" 
          size={20}
          style={{ animationDelay: '0.8s' }}
        />
        <Sparkles 
          className="absolute bottom-1/3 right-2/3 text-primary/50 animate-float" 
          size={24}
          style={{ animationDelay: '1.8s' }}
        />
        <Sparkles 
          className="absolute top-2/3 left-2/5 text-accent/45 animate-float" 
          size={16}
          style={{ animationDelay: '3.5s' }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div 
          className="text-center space-y-8"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Bridging Complexities with User Needs
          </p>
          
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
              <span className="block text-gradient animate-slide-in-left opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                RUCHI
              </span>
              <div className="relative inline-block my-4 animate-scale-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                <span className="text-gradient">R</span>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl hover:scale-110 transition-all duration-500 hover:rotate-6 hover:shadow-primary/50 group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img 
                    src={profileImage} 
                    alt="Ruchi R - UI/UX Designer" 
                    className="w-full h-full object-cover relative z-0"
                  />
                </div>
              </div>
            </h1>
          </div>

          <p className="text-lg md:text-xl max-w-2xl mx-auto text-foreground/80 leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            I'm Ruchi R, a UI/UX Designer focused on creating intuitive digital experiences 
            that bridge user needs with beautiful, functional design
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground animate-bounce pt-8 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <ArrowDown size={20} className="animate-pulse" />
            <span>Scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
