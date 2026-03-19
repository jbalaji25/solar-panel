import ServicePageTemplate from "@/components/ServicePageTemplate";
import img from "@/assets/service-hospitality.jpg";

const HospitalityPage = () => (
  <ServicePageTemplate
    title="Hospitality Services"
    image={img}
    description='"The Focus of Entertaining is impressing Others, The Focus of True Hospitality is Serving Others." We provide comprehensive hospitality solutions that ensure exceptional guest experiences and service excellence.'
    details={[
      "Catering and food service management",
      "Event planning and coordination",
      "Facility management for hospitality venues",
      "Staff training and service optimization",
      "Quality assurance and guest satisfaction",
    ]}
  />
);

export default HospitalityPage;
