import { useState, useEffect } from "react";
import MasonryGallery from "./PixelTransition8";

import img1  from "@/assets/projects/proj_mirdif_villa.jpg";
import img2  from "@/assets/projects/proj_mudon_villa.jpg";
import img3  from "@/assets/projects/proj_diamond_business.webp";
import img4  from "@/assets/projects/proj_sustain_dubai.webp";
import img5  from "@/assets/projects/proj_lumi_glass.jpg";
import img6  from "@/assets/projects/proj_off_grid_island.jpg";
import img7  from "@/assets/projects/proj_waitrose.jpg";
import img8  from "@/assets/projects/proj_see_institute_parking.jpg";
import img9  from "@/assets/projects/proj_econ_station.jpg";
import img10 from "@/assets/projects/proj_nad_al_sheba.jpg";
import img11 from "@/assets/projects/proj_expo2020.jpg";
import img12 from "@/assets/projects/proj_emirates_hills.jpg";
import img13 from "@/assets/projects/proj_sustain_sharjah.webp";
import img14 from "@/assets/projects/proj_camelicious.webp";
import img15 from "@/assets/projects/proj_dsi_jebel_ali.webp";
import img16 from "@/assets/projects/proj_ener_plastics.webp";
import img17 from "@/assets/projects/proj_gulf_drug.webp";
import img18 from "@/assets/projects/proj_see_institute.webp";
import img19 from "@/assets/projects/proj_thomsun.webp";
import img20 from "@/assets/projects/proj_warqa_villa.webp";

const projectItems = [
  { image: img1,  title: "Mirdif Villa",               category: "Residential" },
  { image: img2,  title: "Mudon Villa",                 category: "Residential" },
  { image: img3,  title: "Diamond Business Center",     category: "Commercial" },
  { image: img4,  title: "Sustainable City Dubai",      category: "Green Energy" },
  { image: img5,  title: "Lumi Glass",                  category: "Commercial" },
  { image: img6,  title: "Off Grid Island",             category: "Off-Grid" },
  { image: img7,  title: "Waitrose",                    category: "Retail" },
  { image: img8,  title: "SEE Institute Parking",       category: "Canopy" },
  { image: img9,  title: "Econ Station",                category: "Industrial" },
  { image: img10, title: "Nad Al Sheba",                category: "Residential" },
  { image: img11, title: "Expo 2020 Station",           category: "Commercial" },
  { image: img12, title: "Emirates Hills",              category: "Luxury" },
  { image: img13, title: "Sustainable City Sharjah",    category: "Green Energy" },
  { image: img14, title: "Camelicious",                 category: "Industrial" },
  { image: img15, title: "DSI Jebel Ali",               category: "Industrial" },
  { image: img16, title: "Ener Plastics",               category: "Factory" },
  { image: img17, title: "Gulf Drug",                   category: "Commercial" },
  { image: img18, title: "SEE Institute",               category: "Education" },
  { image: img19, title: "Thomsun",                     category: "Commercial" },
  { image: img20, title: "Warqa Villa",                 category: "Residential" },
];

const useColumns = () => {
  const [cols, setCols] = useState(4);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCols(2);
      else if (window.innerWidth < 1024) setCols(3);
      else setCols(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return cols;
};

const ProjectGallery = () => {
  const columns = useColumns();

  return (
    <section className="section-padding" style={{ background: "hsl(var(--gray-light))" }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-title">OUR PORTFOLIO</p>
          <h2 className="section-heading">Featured Projects</h2>
          <div className="h-1 w-24 bg-gold mx-auto mt-4 rounded-full" />
        </div>


        <MasonryGallery items={projectItems} columns={columns} />
      </div>
    </section>
  );
};

export default ProjectGallery;

