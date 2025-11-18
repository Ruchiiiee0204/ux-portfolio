import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { elementRef: content1Ref, isVisible: content1Visible } = useScrollReveal();
  const { elementRef: content2Ref, isVisible: content2Visible } = useScrollReveal();
  const { elementRef: content3Ref, isVisible: content3Visible } = useScrollReveal();
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div 
            ref={titleRef}
            className={`space-y-4 scroll-reveal ${titleVisible ? 'revealed' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">About</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent transition-all duration-700 ease-out border-glow" style={{ width: titleVisible ? '80px' : '0px' }}></div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p 
              ref={content1Ref}
              className={`text-foreground/90 scroll-reveal ${content1Visible ? 'revealed' : ''}`}
              style={{ transitionDelay: '0.1s' }}
            >
              My passion lies at the intersection of design and human behavior, dedicated to 
              architecting experiences that are both powerful and inherently intuitive.
            </p>
            
            <p 
              ref={content2Ref}
              className={`text-foreground/90 scroll-reveal ${content2Visible ? 'revealed' : ''}`}
              style={{ transitionDelay: '0.2s' }}
            >
              I specialize in transforming complex user problems into elegant, accessible 
              solutions. My approach combines thorough user research, iterative prototyping, 
              and data-driven design decisions to create products that users love.
            </p>

            <p 
              ref={content3Ref}
              className={`text-foreground/90 scroll-reveal ${content3Visible ? 'revealed' : ''}`}
              style={{ transitionDelay: '0.3s' }}
            >
              My core focus is on robust information architecture and designing products 
              that prioritize usability, accessibility, and delight in every interaction.
            </p>
          </div>

          <div 
            ref={statsRef}
            className={`grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 scroll-reveal ${statsVisible ? 'revealed' : ''}`}
          >
            {[
              { number: "3", label: "Years Experience" },
              { number: "15+", label: "Projects Completed" },
              { number: "∞", label: "Cups of Coffee" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center space-y-2 hover:scale-110 transition-all duration-300 cursor-default group"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient group-hover:glow-text transition-all duration-300">{stat.number}</div>
                <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
