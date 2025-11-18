import { useScrollReveal } from "@/hooks/useScrollReveal";

const Education = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollReveal();

  const education = [
    {
      degree: "Bootcamp in UI UX Designing",
      institution: "School of Accelerated Learning (SOAL)",
      period: "2022 - 2023"
    },
    {
      degree: "MBA in Business Intelligence",
      institution: "BK School of Management",
      period: "2020 - 2022"
    },
    {
      degree: "BCA (Bachelor of Computer Applications)",
      institution: "GLS University",
      period: "2017 - 2020"
    }
  ];

  return (
    <section id="education" className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-16">
          <div 
            ref={titleRef}
            className={`space-y-4 scroll-reveal ${titleVisible ? 'revealed' : ''}`}
          >
            <div className="flex items-center gap-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient uppercase">Education</h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-primary to-transparent"></div>
            </div>
          </div>

          <div 
            ref={contentRef}
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 scroll-reveal ${contentVisible ? 'revealed' : ''}`}
          >
            {education.map((edu, index) => (
              <div 
                key={index}
                className="space-y-3"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-foreground">
                  {edu.degree}
                </h3>
                <div className="space-y-1">
                  <p className="text-muted-foreground text-sm">
                    {edu.institution}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {edu.period}
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

export default Education;
