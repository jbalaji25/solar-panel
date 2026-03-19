import ServicePageTemplate from "@/components/ServicePageTemplate";
import img from "@/assets/service-logistics.jpg";
import Lottie from "lottie-react";
import animationData from "@/assets/animations/logistics.json";

const LogisticsPage = () => (
  <ServicePageTemplate
    title="Logistics & Warehouse Management"
    image={img}
    sectionStyle={{
      background: 'linear-gradient(135deg, #fdf4ec 0%, #fef8f2 50%, #faeee0 100%)',
    }}
    description="End-to-end logistics and warehouse management solutions for optimized supply chain operations. Our comprehensive warehousing services ensure efficient storage, inventory management, and distribution."
    details={[
      "Warehouse design and optimization",
      "Inventory management systems",
      "Distribution and fulfillment services",
      "Supply chain coordination",
      "Cold storage and specialized handling",
    ]}
    imageCompanion={
      <div className="w-full h-full flex items-center justify-center p-4 relative">
        {/* Orange forklift tint overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-10 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(232,96,26,0.14) 0%, rgba(200,134,74,0.08) 100%)',
            mixBlendMode: 'multiply',
          }}
        />
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-full h-full relative z-0"
          style={{
            maxHeight: '100%',
            filter: 'hue-rotate(15deg) saturate(1.4) brightness(0.98)',
          }}
        />
      </div>
    }
  />
);

export default LogisticsPage;
