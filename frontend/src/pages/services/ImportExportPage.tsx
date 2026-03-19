import ServicePageTemplate from "@/components/ServicePageTemplate";
import img from "@/assets/service-import.jpg";
import Lottie from "lottie-react";
import animationData from "@/assets/animations/supply_chain_and_shipping.json";

const ImportExportPage = () => (
  <ServicePageTemplate
    title="Import and Export"
    image={img}
    sectionStyle={{
      background: 'linear-gradient(135deg, #eaf4fb 0%, #f0f8ff 50%, #e6f2f8 100%)',
    }}
    description="Our company facilitates trades of goods and commodities between domestic and foreign companies. We handle the complete process from sourcing to delivery, ensuring smooth international trade operations."
    details={[
      "International sourcing and procurement",
      "Customs clearance and documentation",
      "Quality inspection and compliance",
      "Logistics coordination for global shipments",
      "Trade facilitation between domestic and foreign markets",
    ]}
    imageCompanion={
      <div
        className="w-full h-full rounded-3xl relative overflow-hidden group transition-all duration-700 shadow-2xl flex items-center justify-center p-6 md:p-10"
        style={{
          background: 'linear-gradient(145deg, #12304e 0%, #1a4a6e 40%, #0f2740 100%)',
          border: '1.5px solid rgba(232, 100, 50, 0.35)',
          boxShadow: '0 8px 40px rgba(232, 100, 50, 0.18), 0 2px 12px rgba(43, 181, 176, 0.12)',
        }}
      >
        {/* Orange crane glow — top-left */}
        <div
          className="absolute -top-10 -left-10 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(232,100,50,0.22) 0%, transparent 70%)' }}
        />
        {/* Teal container glow — bottom-right */}
        <div
          className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(43,181,176,0.20) 0%, transparent 70%)' }}
        />
        {/* Hover shimmer */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl"
          style={{ background: 'linear-gradient(135deg, rgba(232,100,50,0.08) 0%, transparent 50%, rgba(43,181,176,0.08) 100%)' }}
        />
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-full h-full drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-700 ease-out relative z-10"
          style={{ filter: 'drop-shadow(0px 8px 24px rgba(232, 100, 50, 0.30))', maxHeight: '100%' }}
        />
      </div>
    }
  />
);


export default ImportExportPage;
