import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import projectMech from "@/assets/project-mechanical.jpg";
import projectCivil from "@/assets/project-civil.jpg";
import projectEng from "@/assets/project-engineering.jpg";
import CardSwap, { Card } from "./PixelTransition4";

const projects = [
  { image: projectMech, title: "Mechanical", category: "Mechanical", path: "/projects/mechanical" },
  { image: projectCivil, title: "Civil", category: "Civil", path: "/projects/civil" },
  { image: projectEng, title: "Engineering", category: "Engineering", path: "/projects/mechanical" },
];

const ProjectsSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding overflow-hidden" style={{ background: "hsl(var(--gray-light))" }}>
      <div className="container mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="section-title">RECENTLY COMPLETED</p>
          <h2 className="section-heading">Our Latest Projects</h2>
        </div>

        {/* Animation Container */}
        <div className="relative h-[650px] w-full flex items-center justify-center mt-32 md:mt-48">
          <div className="w-[300px] sm:w-[400px] md:w-[500px] h-full relative">
            <CardSwap
              width="100%"
              height={350}
              cardDistance={40}
              verticalDistance={50}
              delay={2000}
              pauseOnHover={true}
              onCardClick={(idx) => navigate(projects[idx].path)}
            >
              {projects.map((p, i) => (
                <Card key={i} className="overflow-hidden shadow-2xl border-navy/10">
                  <div className="relative w-full h-full group">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent flex flex-col justify-end p-6">
                      <span className="text-xs uppercase tracking-widest text-gold font-bold mb-1">{p.category}</span>
                      <h3 className="text-white font-heading font-bold text-2xl">{p.title}</h3>
                      <div className="w-10 h-1 bg-gold mt-3 transform origin-left transition-transform duration-300 group-hover:scale-x-150"></div>
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
