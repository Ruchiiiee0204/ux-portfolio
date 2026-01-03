import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Projects = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollReveal();
  const projects = [
    {
      title: "DashHR",
      category: "HR Management System",
      description: "Comprehensive HR Management Web Application featuring employee management, attendance tracking, payroll processing, and performance analytics.",
      tags: ["Dashboard Design", "Data Visualization", "SaaS Platform", "UI/UX"],
      color: "from-blue-300 to-cyan-300",
      image: "/images/dashhr-placeholder.jpg",
      iframe: "https://www.behance.net/embed/project/209131391?ilo0=1",
      link: "https://www.behance.net/gallery/209131391/DashHR-HR-Management-Web-Application",
    },
    {
      title: "Ecomania",
      category: "Eco-Friendly Mobile App",
      description: "Sustainable scrap collection app promoting environmental responsibility through easy recycling and waste management solutions.",
      tags: ["Mobile UI", "Sustainability", "UX Design", "Eco-Friendly"],
      color: "from-green-300 to-emerald-300",
      image: "/images/ecomania-placeholder.jpg",
      iframe: "https://www.behance.net/embed/project/163494149?ilo0=1",
      link: "https://www.behance.net/gallery/163494149/Ecomania/modules/922154909",
    },
    {
      title: "Dunzo",
      category: "Online Grocery App",
      description: "Mobile app UX design for online grocery shopping platform focused on seamless ordering and delivery experience.",
      tags: ["Mobile App", "UX Design", "Grocery", "User Research"],
      color: "from-orange-300 to-yellow-300",
      image: null,
      iframe: "https://www.behance.net/embed/project/161993941?ilo0=1",
      link: "https://www.behance.net/gallery/161993941/Dunzo-Online-Grocery-App",
    },
    {
      title: "Practo",
      category: "Online Healthcare App",
      description: "Healthcare platform design enabling seamless online doctor consultations, appointment booking, and medical services.",
      tags: ["Healthcare", "Mobile App", "UX Design", "Telemedicine"],
      color: "from-blue-300 to-indigo-300",
      image: null,
      iframe: "https://www.behance.net/embed/project/163485265?ilo0=1",
      link: "https://www.behance.net/gallery/163485265/Practo-Online-Healthcare",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div 
            ref={titleRef}
            className={`space-y-4 scroll-reveal ${titleVisible ? 'revealed' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent transition-all duration-700 ease-out" style={{ width: titleVisible ? '80px' : '0px' }}></div>
            <p className="text-muted-foreground max-w-2xl">
              A selection of recent work showcasing my approach to solving complex design challenges
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <section aria-roledescription="carousel">
                <ul
                  className="flex gap-6 px-2 py-4 overflow-x-auto scroll-smooth"
                  style={{
                    padding: 0,
                    margin: 0,
                    listStyle: 'none',
                    scrollSnapType: 'x mandatory',
                    WebkitOverflowScrolling: 'touch'
                  }}
                >
                  {projects.map((project, index) => {
                    const { elementRef, isVisible } = useScrollReveal();
                    return (
                      <li
                        key={index}
                        ref={elementRef}
                        className={`scroll-reveal ${isVisible ? 'revealed' : ''}`}
                        aria-label={`${index + 1} of ${projects.length}`}
                        style={{
                          scrollSnapAlign: 'center',
                          flexShrink: 0,
                          width: 'calc((100% - 72px) / 4)'
                        }}
                      >
                        <a href={project.link || '#'} target={project.link ? '_blank' : undefined} rel={project.link ? 'noopener noreferrer' : undefined}>
                          <Card className="group cursor-pointer border-border hover:border-primary transition-all duration-500 overflow-hidden h-full">
                            <CardContent className="p-0">
                              <div className="h-48 bg-gradient-to-br relative overflow-hidden">
                                {project.iframe ? (
                                  <iframe
                                    src={project.iframe}
                                    className="absolute inset-0 w-full h-full"
                                    loading="lazy"
                                    allowFullScreen
                                    frameBorder="0"
                                    allow="clipboard-write"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                  />
                                ) : project.image ? (
                                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                                ) : (
                                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} animate-gradient`}></div>
                                )}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              </div>

                              <div className="p-4 space-y-3">
                                <div>
                                  <div className="text-sm text-primary font-medium mb-1">{project.category}</div>
                                  <h3 className="text-lg font-bold truncate">{project.title}</h3>
                                </div>
                                <p className="text-muted-foreground text-sm truncate">{project.description}</p>
                              </div>
                            </CardContent>
                          </Card>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </section>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
