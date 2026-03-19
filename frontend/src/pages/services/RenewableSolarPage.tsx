import ServicePageTemplate from "@/components/ServicePageTemplate";
import img from "@/assets/renewable_solar_daytime.png";
import Lottie from "lottie-react";
import animationData from "@/assets/animations/solar_green_energy.json";

const RenewableSolarPage = () => (
    <ServicePageTemplate
        title="Renewable Solar Energy"
        image={img}
        sectionStyle={{
            background: 'linear-gradient(135deg, #f0f7ff 0%, #e0efff 50%, #d0e7ff 100%)',
        }}
        description="We provide comprehensive and clean solar energy solutions for a brighter future. Our high-performance solar photovoltaic systems are tailored to reduce your operational costs while promoting environmental stewardship."
        details={[
            "High-performance solar photovoltaic system installation",
            "Maintenance and monitoring of solar infrastructure",
            "Energy storage and battery solutions",
            "Consulting on energy efficiency and sustainability",
            "Customized solar designs for commercial and industrial setups",
        ]}
        imageCompanion={
            <div className="w-full h-full flex items-center justify-center p-4 relative">
                {/* Bright sky blue tint overlay */}
                <div
                    className="absolute inset-0 pointer-events-none z-10 rounded-2xl"
                    style={{
                        background: 'linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(30,58,138,0.08) 100%)',
                        mixBlendMode: 'color',
                    }}
                />
                <Lottie
                    animationData={animationData}
                    loop={true}
                    className="w-full h-full relative z-0"
                    style={{
                        maxHeight: '100%',
                        filter: 'saturate(1.4) brightness(1.05)',
                    }}
                />
            </div>
        }
    />
);

export default RenewableSolarPage;
