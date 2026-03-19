import PageBanner from "@/components/PageBanner";
import { CheckCircle } from "lucide-react";
import aboutImg from "@/assets/about.jpeg";
import Lottie from "lottie-react";
import windmillsSolar from "@/assets/animations/windmills_house_with_solar_panel.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const AboutPage = () => {
  return (
    <>
      <PageBanner title="About Us" breadcrumb="Our Profile" />

      <section className="section-padding relative bg-gradient-to-br from-blue-50 via-cyan-50/80 to-teal-50/80 overflow-hidden">
        {/* High-Impact Cooling Ambient Orbs */}
        <div className="absolute top-[-20%] right-[-10%] -z-10 w-[1000px] h-[1000px] bg-cyan-400/30 rounded-[100%] blur-[140px] pointer-events-none mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] left-[-20%] -z-10 w-[900px] h-[900px] bg-blue-400/20 rounded-[100%] blur-[130px] pointer-events-none mix-blend-multiply"></div>
        <div className="absolute top-[30%] left-[20%] -z-10 w-[800px] h-[800px] bg-teal-300/25 rounded-[100%] blur-[120px] pointer-events-none mix-blend-multiply"></div>

        <div className="container mx-auto relative z-10">
          {/* Profile Image */}
          <div className="grid lg:grid-cols-2 gap-10 items-start mb-16">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src={aboutImg} alt="About Metallica" className="w-full h-auto object-cover" loading="lazy" />
            </div>
            <div>
              <p className="section-title">ABOUT US</p>
              <h2 className="section-heading mb-6">Our Profile</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed font-body text-sm">
                <p>
                  The group has always worked on the guiding principles of Honesty, Integrity, Mutual Respect and Foresightedness, and hence the family has great acceptance in The State of Kuwait among Natives and Expats.
                </p>
                <p>
                  With a Group Employee Strength of more than 100, the Company has now decided to unleash its Vision and hence the EMERGENCE of <strong className="navy-text">METALLICA</strong> GENERAL TRADING & CONTRACTING COMPANY W.L.L. with a specific Vision, defined Mission and preconceived Values become a reality.
                </p>
                <p>
                  Our Objective is to provide innovative products to consumers, value to stakeholders, manage a sustainable and ethical organization that takes into account the concerns and interests of all the stakeholders, community and society. We have a genuine desire to serve our customers efficiently and cost effectively.
                </p>
                <p>
                  <strong className="navy-text">METALLICA</strong> is focused on the growing economy of the State of Kuwait, with major contributions in the construction industry serving Kuwait in various ways. METALLICA has significant operations throughout the great nation of Kuwait at the same time serving organizations in both the private and public sector, including many Government establishments and corporations.
                </p>
              </div>

              <div className="mt-6 space-y-2">
                {[
                  "Impeccable Industry Markets",
                  "All Construction & Contracting Solutions",
                  "Reasonable Costing & Services",
                  "Outstanding Building & Renovations",
                  "Appreciable Quality Products",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-gold flex-shrink-0" />
                    <span className="text-sm font-body text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="mb-16">
            <p className="section-title text-center">ABOUT METALLICA</p>
            <h2 className="section-heading text-center mb-12">Mission & Vision</h2>

            <div className="w-full px-12 xl:px-16 text-center">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="bg-gradient-to-br from-white to-slate-50/80 p-9 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] border border-slate-100 hover:border-gold/30 border-t-4 border-t-gold hover:-translate-y-2 transition-all duration-500 h-full relative overflow-hidden group">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                        <span className="font-heading font-bold gold-text">1</span>
                      </div>
                      <h3 className="font-heading font-bold text-lg navy-text mb-3">Our Mission</h3>
                      <p className="navy-text text-sm font-body leading-relaxed">
                        METALLICA aims to be a company of recognition, empowered by introducing the finest in latest engineering techniques and using the highest standard of quality raw materials and at the same time offering competitive prices in an evolving marketplace of oil and gas with a team of skilled and committed manpower.
                      </p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="bg-gradient-to-br from-white to-slate-50/80 p-9 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] border border-slate-100 hover:border-gold/30 border-t-4 border-t-gold hover:-translate-y-2 transition-all duration-500 h-full relative overflow-hidden group">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                        <span className="font-heading font-bold gold-text">2</span>
                      </div>
                      <h3 className="font-heading font-bold text-lg navy-text mb-3">Our Vision</h3>
                      <p className="navy-text text-sm font-body leading-relaxed">
                        To continuously improve our processes and grow to provide professional excellence in all spheres of construction, oil & gas and trading sectors. Multi skilled and socially enlightened, the versatile role-based work force enriched through professional investment, workforce is excelling in a multi win situation.
                      </p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="bg-gradient-to-br from-white to-slate-50/80 p-9 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] border border-slate-100 hover:border-gold/30 border-t-4 border-t-gold hover:-translate-y-2 transition-all duration-500 h-full relative overflow-hidden group">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                        <span className="font-heading font-bold gold-text">3</span>
                      </div>
                      <h3 className="font-heading font-bold text-lg navy-text mb-3">Core Values</h3>
                      <p className="navy-text text-sm font-body leading-relaxed mb-3">
                        Overall excellence in the respect for doing best in corporate responsibility and social sustainability that forms the cornerstone of the following entities as stated in priority:
                      </p>
                      <ul className="text-sm navy-text font-body space-y-1">
                        <li>• Our Valued Clients</li>
                        <li>• Our People</li>
                        <li>• Our Partners, Suppliers and Business Functions</li>
                      </ul>
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>

          {/* QHSE Section */}
          <div className="mb-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] transition-all duration-500 bg-gradient-to-br from-white to-slate-50/80 border border-slate-100 h-full flex items-center justify-center p-6 group relative">
                <Lottie animationData={windmillsSolar} loop={true} className="w-full h-auto relative z-10 group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div>
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <span className="font-heading font-bold gold-text">4</span>
                </div>
                <h3 className="font-heading font-bold text-xl navy-text mb-4">Quality, Health, Safety And Environment</h3>
                <div className="space-y-4 navy-text text-sm font-body leading-relaxed">
                  <p>
                    <strong className="navy-text">METALLICA</strong> Co. understands the current and future needs of the oil and gas companies and meets their requirements with innovative solutions.
                  </p>
                  <p>
                    <strong className="navy-text">METALLICA</strong> is committed to achieving a culture of health and safety, systems and processes to identify, address and alleviate all risks in the areas of quality, safety, wellbeing and environmental management by delivering best in class products and services to our customers.
                  </p>
                  <p>
                    <strong className="navy-text">METALLICA</strong> Co. is committed to furnishing and equipping a safe workplace on the construction site.
                  </p>
                  <p>
                    We are aware that our QHSE performance is integral to the successful growth of Metallica in an evolving landscape of the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
