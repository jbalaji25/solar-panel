import PageBanner from "@/components/PageBanner";
import projectCivil from "@/assets/project-civil.jpg";
import projectEng from "@/assets/project-engineering.jpg";
import { Building2, Ruler, Paintbrush, HardHat, CheckCircle2 } from "lucide-react";

const CivilPage = () => {
  return (
    <>
      <PageBanner title="Civil Construction" breadcrumb="Project" />

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="animate-fade-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-8 bg-gold rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-bold navy-text font-heading uppercase tracking-tight">Infrastructure Development</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed font-body mb-6 text-lg">
                <strong className="navy-text">Metallica</strong> is a recognized leader in the Kuwaiti construction industry, providing comprehensive building and infrastructure solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed font-body mb-8">
                We emerge as one of the most successful construction companies by tackling the ever-evolving challenges of the modern landscape. Our reputation for efficiency and reliability is built on numerous successfully completed ventures across the State of Kuwait.
              </p>
              <ul className="space-y-4">
                {[
                  "Comprehensive building construction",
                  "Large-scale infrastructure developments",
                  "Expert project management",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 navy-text font-semibold">
                    <CheckCircle2 size={18} className="text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative animate-fade-right">
              <div className="rounded-2xl overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-500 border-4 border-white">
                <img src={projectCivil} alt="Civil Construction Site" className="w-full h-[450px] object-cover" loading="lazy" />
              </div>
              <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              { icon: Building2, title: "New Construction", text: "State-of-the-art building projects from foundation to finish." },
              { icon: Paintbrush, title: "Interior Design", text: "Modern and functional interior aesthetics for commercial and residential." },
              { icon: Ruler, title: "Remodeling", text: "Premium renovation contracts for homes, offices, and apartments." },
              { icon: HardHat, title: "Consulting", text: "Expert engineering support and project feasibility studies." },
            ].map((feature, i) => (
              <div
                key={feature.title}
                className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:translate-y-[-8px] transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <feature.icon className="text-gold mb-4" size={32} />
                <h3 className="text-xl font-bold navy-text mb-2 font-heading">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>

          <div className="relative rounded-3xl overflow-hidden bg-navy py-20 px-8 md:px-16 text-center shadow-2xl">
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2000&auto=format')] bg-cover bg-center"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-5xl font-bold text-white font-heading mb-6 tracking-tight">Building the Future of Kuwait</h3>
              <p className="text-white/80 text-lg leading-relaxed mb-10">
                From luxury apartments to complex commercial offices, our focus remains on delivering efficiency and reliability at every scale.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <span className="block text-3xl font-bold gold-text">100+</span>
                  <span className="text-xs text-white/60 uppercase tracking-widest font-bold">Projects</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <span className="block text-3xl font-bold gold-text">15+</span>
                  <span className="text-xs text-white/60 uppercase tracking-widest font-bold">Experts</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 col-span-2 md:col-span-1">
                  <span className="block text-3xl font-bold gold-text">Gold</span>
                  <span className="text-xs text-white/60 uppercase tracking-widest font-bold">Standard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CivilPage;
