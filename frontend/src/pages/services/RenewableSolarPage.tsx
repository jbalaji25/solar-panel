import ServicePageTemplate from "@/components/ServicePageTemplate";
import img from "@/assets/renewable_solar_daytime.png";
import Lottie from "lottie-react";
import animationData from "@/assets/animations/solar_green_energy.json";
import { Link } from "react-router-dom";

import { Shield, Zap, Sun, Battery, Lightbulb, Droplets } from "lucide-react";

const RenewableSolarPage = () => (
    <ServicePageTemplate
        title="Renewable Solar Energy"
        image=""
        backgroundImg={img}
        layout="side-by-side"
        sectionStyle={{
            background: 'transparent',
        }}
        description="We provide comprehensive and clean solar energy solutions for a brighter future. Our high-performance solar photovoltaic systems are tailored to reduce your operational costs while promoting environmental stewardship."
        details={[
            "Expert installation of On-Grid and Off-Grid power plants",
            "Solar water pumping solutions for agricultural and industrial use",
            "Energy-efficient solar street lighting systems",
            "Industrial and residential solar water heaters",
            "High-capacity solar battery and storage solutions",
        ]}
        imageCompanion={
            <div className="w-full h-full flex items-center justify-center p-4 relative">
                <div className="relative z-20 w-full h-full flex items-center justify-center">
                    <Lottie
                        animationData={animationData}
                        loop={true}
                        className="w-full h-full max-w-2xl"
                        style={{
                            filter: 'saturate(1.2) brightness(1.05)',
                        }}
                    />
                </div>
            </div>
        }
    >
        <div className="mt-20">
            <h3 className="text-3xl font-heading font-bold text-navy mb-12 text-center">Solar Energy Products</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Solar Power Plants */}
                <Link to="/services/solar-power-plants" className="block group">
                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gold/20 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300 h-full">
                        <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mb-6">
                            <Zap className="text-gold" size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-navy mb-4">Solar Power Plants</h4>
                        <ul className="space-y-3 text-muted-foreground font-body">
                            <li className="flex items-center gap-2">
                                <Sun size={16} className="text-gold" /> Off Grid Solar Power Plant
                            </li>
                            <li className="flex items-center gap-2">
                                <Sun size={16} className="text-gold" /> On Grid Solar Power Plant
                            </li>
                        </ul>
                        <div className="mt-6 flex items-center gap-2 text-gold font-bold text-sm">
                            View Details <span>→</span>
                        </div>
                    </div>
                </Link>

                {/* Solar Pumps */}
                <Link to="/services/solar-pumps" className="block group">
                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gold/20 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300 h-full">
                        <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                            <Droplets className="text-blue-500" size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-navy mb-4">Solar Pumps</h4>
                        <ul className="space-y-3 text-muted-foreground font-body">
                            <li className="flex items-center gap-2">
                                <Sun size={16} className="text-gold" /> 7.5 HP Solar Pump
                            </li>
                            <li className="flex items-center gap-2">
                                <Sun size={16} className="text-gold" /> 5 HP Solar Pump
                            </li>
                            <li className="flex items-center gap-2">
                                <Sun size={16} className="text-gold" /> 2 HP Solar Pump
                            </li>
                        </ul>
                        <div className="mt-6 flex items-center gap-2 text-blue-500 font-bold text-sm">
                            View Details <span>→</span>
                        </div>
                    </div>
                </Link>

                {/* Solar Street Lights */}
                <Link to="/services/solar-street-lights" className="block group">
                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gold/20 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300 h-full">
                        <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
                            <Lightbulb className="text-amber-500" size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-navy mb-4">Solar Street Lights</h4>
                        <ul className="space-y-3 text-muted-foreground font-body">
                            <li className="flex items-center gap-2">
                                <Sun size={16} className="text-gold" /> High Mass Street Lights
                            </li>
                            <li className="flex items-center gap-2">
                                <Sun size={16} className="text-gold" /> All-in-One Street Lights
                            </li>
                            <li className="flex items-center gap-2">
                                <Sun size={16} className="text-gold" /> Semi-Integrated Lights
                            </li>
                        </ul>
                        <div className="mt-6 flex items-center gap-2 text-amber-500 font-bold text-sm">
                            View Details <span>→</span>
                        </div>
                    </div>
                </Link>

                {/* Solar Water Heaters */}
                <Link to="/services/solar-water-heaters" className="block group">
                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gold/20 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300 h-full">
                        <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6">
                            <Droplets className="text-orange-500" size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-navy mb-4">Solar Water Heaters</h4>
                        <ul className="space-y-3 text-muted-foreground font-body">
                            <li className="flex items-center gap-2">
                                <Sun size={16} className="text-gold" /> Kamal Solar Water Heater
                            </li>
                            <li className="flex items-center gap-2">
                                <Sun size={16} className="text-gold" /> Supreme Solar Water Heater
                            </li>
                        </ul>
                        <div className="mt-6 flex items-center gap-2 text-orange-500 font-bold text-sm">
                            View Details <span>→</span>
                        </div>
                    </div>
                </Link>

                {/* Solar Batteries */}
                <Link to="/services/solar-batteries" className="block group">
                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gold/20 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300 h-full">
                        <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
                            <Battery className="text-green-500" size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-navy mb-4">Solar Batteries</h4>
                        <ul className="space-y-3 text-muted-foreground font-body">
                            <li className="flex items-center gap-2">
                                <Sun size={16} className="text-gold" /> Microtek Solar Battery
                            </li>
                            <li className="flex items-center gap-2">
                                <Sun size={16} className="text-gold" /> Luminous Solar Battery
                            </li>
                        </ul>
                        <div className="mt-6 flex items-center gap-2 text-green-500 font-bold text-sm">
                            View Details <span>→</span>
                        </div>
                    </div>
                </Link>

                {/* Quality & Warranty */}
                <div className="bg-navy p-8 rounded-3xl border border-white/10 shadow-xl flex flex-col justify-center items-center text-center">
                    <Shield className="text-gold mb-6" size={48} />
                    <h4 className="text-xl font-bold text-white mb-2">Quality Assurance</h4>
                    <p className="text-white/70 text-sm font-body">
                        All our solar products undergo rigorous quality testing and come with comprehensive manufacturer warranties for your peace of mind.
                    </p>
                </div>
            </div>
        </div>
    </ServicePageTemplate>
);

export default RenewableSolarPage;
