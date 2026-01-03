import { useScrollReveal } from "@/hooks/useScrollReveal";

const Experience = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollReveal();

  const experiences = [
    {
      title: "UX/UI Designer",
      company: "Labra.io",
      type: "Full-time",
      period: "November 2024 - Present",
      
    },
    {
      title: "UX/UI Designer",
      company: "Instrive softlabs",
      type: "Full-time",
      period: "June 2023 - November 2024",
      
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-16">
          <div 
            ref={titleRef}
            className={`space-y-4 scroll-reveal ${titleVisible ? 'revealed' : ''}`}
          >
            <div className="flex items-center gap-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient uppercase">Experience</h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-primary to-transparent"></div>
            </div>
          </div>

          <div 
            ref={contentRef}
            className={`grid md:grid-cols-2 gap-12 scroll-reveal ${contentVisible ? 'revealed' : ''}`}
          >
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="space-y-4"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {exp.title}
                </h3>
                <div className="space-y-1">
                  <p className="text-muted-foreground text-lg">
                    {exp.company} - {exp.type}
                  </p>
                  <p className="text-muted-foreground">
                    {exp.period}
                  </p>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
