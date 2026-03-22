import React from "react";
import PageBanner from "@/components/PageBanner";
import { Droplets, Shield, CheckCircle2, Zap } from "lucide-react";

import pump7_5hp from "@/assets/product_pump_7_5hp.png";
import pump5hp from "@/assets/product_pump_5hp.png";
import pump2hp from "@/assets/product_pump_2hp.png";

const SolarPumpsDetailed = () => {
    const products = [
        {
            title: "7.5 HP Solar Pump",
            price: "INR 4,12,000",
            image: pump7_5hp,
            features: [
                "ideal choice",
                "traditional electricity",
                "reduces reliance",
                "remote areas",
                "robust motor",
                "largescale irrigation",
                "agriculture industrial",
                "ecofriendly solution",
                "offgrid water management",
                "ensures smooth operation",
                "highefficiency solar panels",
                "consistent water supply",
                "highvolume water pumping"
            ],
            description: "A 7.5HP solar pump is a reliable and eco-friendly solution for high-volume water pumping needs. It efficiently utilizes solar power to provide a consistent water supply for agriculture, industrial use, and large-scale irrigation. With a robust motor and high-efficiency solar panels, it ensures smooth operation even in remote areas. The system requires minimal maintenance and reduces reliance on traditional electricity or fuel-powered pumps. Offering long-term savings and sustainability, it is an ideal choice for off-grid water management."
        },
        {
            title: "5 HP Solar Pump",
            price: "INR 2,50,000",
            image: pump5hp,
            features: [
                "remote areas",
                "corrosionresistant components",
                "durable motor",
                "solar energy",
                "sustainable water supply",
                "efficient water flow",
                "maximizes power utilization",
                "advanced mppt technology",
                "rural applications designed"
            ],
            description: "A 5HP solar pump is a high-performance, energy-efficient water pumping system powered by solar energy. It is ideal for large-scale irrigation, industrial water supply, and rural applications. Designed with advanced MPPT technology, it maximizes power utilization for efficient water flow. With a durable motor and corrosion-resistant components, it ensures long-lasting, maintenance-free operation. This eco-friendly solution reduces electricity costs and provides a sustainable water supply even in remote areas."
        },
        {
            title: "2 HP Solar Pump",
            price: "INR 1,45,000",
            image: pump2hp,
            features: [
                "sustainability benefits",
                "minimal maintenance",
                "durable motor",
                "solar energy",
                "highquality solar panels",
                "low operational costs",
                "pumps work efficiently",
                "ensures reliable performance"
            ],
            description: "A 2HP solar pump is an efficient and eco-friendly water pumping solution powered by solar energy. It is ideal for agricultural irrigation, livestock watering, and domestic water supply. Equipped with high-quality solar panels and a durable motor, it ensures reliable performance with minimal maintenance. These pumps work efficiently even in remote areas, reducing dependency on electricity or diesel. With low operational costs and sustainability benefits, they provide a cost-effective water pumping solution"
        }
    ];

    return (
        <>
            <PageBanner title="Solar Water Pumps" breadcrumb="Services / Solar Energy / Water Pumps" />

            <section className="py-20 bg-background relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold/5 rounded-full blur-[120px] -z-10" />

                <div className="container mx-auto px-4 md:px-10">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="section-heading mb-6">Sustainable Water Solutions</h2>
                        <p className="text-muted-foreground text-lg font-body">
                            Harness the power of the sun to solve your water management challenges.
                            Our high-efficiency solar pumps provide zero-cost pumping solutions for agriculture, industry, and home use.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {products.map((product, idx) => (
                            <div key={idx} className="flex flex-col bg-white rounded-[40px] overflow-hidden shadow-2xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-500 group">
                                <div className="h-[250px] overflow-hidden relative">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-6 left-6">
                                        <div className="bg-blue-600/80 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
                                            <span className="text-white font-bold">{product.price}</span>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="mb-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Droplets className="text-blue-500" size={24} />
                                            <h3 className="text-xl font-bold text-navy">{product.title}</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-relaxed font-body">
                                            {product.description}
                                        </p>
                                    </div>

                                    <div className="space-y-4 mb-8 h-full flex flex-col justify-start">
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-navy/40">Specifications</h4>
                                        <ul className="space-y-2">
                                            {product.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-start gap-3 text-navy/80 font-body">
                                                    <CheckCircle2 className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                                                    <span className="text-xs">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-auto pt-8 border-t border-navy/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                                        <div className="flex items-center gap-2">
                                            <Shield className="text-gold" size={18} />
                                            <span className="text-navy font-medium text-xs">Warranty Included</span>
                                        </div>
                                        <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 shadow-lg shadow-blue-500/20">
                                            Enquire
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default SolarPumpsDetailed;
