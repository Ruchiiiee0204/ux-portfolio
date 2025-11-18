import { Mail, Linkedin, Globe } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-16">
          {/* Header Section */}
          <div 
            ref={titleRef}
            className={`text-center space-y-4 scroll-reveal ${titleVisible ? 'revealed' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Let's Work Together</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto transition-all duration-700 ease-out" style={{ width: titleVisible ? '80px' : '0px' }}></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision.
            </p>
          </div>

          {/* Main Content - Centered Contact Information */}
          <div 
            ref={contentRef}
            className={`flex flex-col items-center justify-center scroll-reveal ${contentVisible ? 'revealed' : ''}`}
          >
            <div className="space-y-8 text-center max-w-2xl">
              <h3 className="text-2xl font-bold text-foreground">
                Looking to start a project or you need consultation? Feel free to contact me.
              </h3>
              
              <div className="space-y-4">
                <div className="flex flex-col items-center gap-4">
                  <a 
                    href="mailto:chruchi0204@gmail.com" 
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Mail size={20} />
                    <span className="font-medium">chruchi0204@gmail.com</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/ruchi-r-/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                  >
                    <Linkedin size={20} />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                  
                  <a 
                    href="https://zaap.bio/ruchich" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                  >
                    <Globe size={20} />
                    <span className="font-medium">zaap.bio/ruchich</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
