import { useScrollReveal } from "@/hooks/useScrollReveal";

const Skills = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollReveal();
  const skillCategories = [
    {
      title: "Design Tools",
      skills: [
        { name: "Figma", level: "Expert" },
        { name: "Figjam", level: "Advanced" },
        { name: "Design Systems", level: "Advanced" },
        { name: "Prototyping", level: "Intermediate" },
      ],
    },
    {
      title: "Research & Testing",
      skills: [
        { name: "User Research", level: "Expert" },
        { name: "Usability Testing", level: "Expert" },
        { name: "Problem Solving", level: "Advanced" },
        { name: "HTML/CSS", level: "Advanced" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div 
            ref={titleRef}
            className={`space-y-4 scroll-reveal ${titleVisible ? 'revealed' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent transition-all duration-700 ease-out" style={{ width: titleVisible ? '80px' : '0px' }}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const { elementRef, isVisible } = useScrollReveal();
              return (
                <div 
                  key={index} 
                  ref={elementRef}
                  className={`space-y-6 scroll-reveal ${isVisible ? 'revealed' : ''}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-2xl font-semibold text-gradient">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2 group">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium group-hover:text-primary transition-colors duration-300">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out group-hover:scale-105 origin-left"
                            style={{
                              width: isVisible ? 
                                (skill.level === "Expert" ? "95%" : 
                                 skill.level === "Advanced" ? "80%" : "65%") : "0%",
                              transitionDelay: `${skillIndex * 0.1}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
