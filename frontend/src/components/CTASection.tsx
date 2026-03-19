import { Phone } from "lucide-react";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${ctaBg})` }} />
      <div className="overlay-dark" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground font-heading mb-4">
          GET A FREE ESTIMATE
        </h2>
        <p className="text-primary-foreground/80 text-lg font-body mb-2">
          Our online scheduling and payment system is safe.
        </p>
        <p className="text-2xl md:text-3xl font-bold gold-text font-heading mb-8">
          +965 9898 8281 , +965 6002 6630 , +965 9220 6549
        </p>
        <a href="tel:+96598988281" className="btn-primary rounded inline-flex items-center gap-2">
          <Phone size={18} />
          Call Now
        </a>
      </div>
    </section>
  );
};

export default CTASection;
