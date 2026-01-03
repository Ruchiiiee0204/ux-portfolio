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
