import { useState, useRef, useEffect } from "react";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // Reduced speed for cinematic feel
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden flex items-center justify-center min-h-[700px]">
      {/* Background Video Wrapper */}
      <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden bg-black">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/hero_vedio_1080_new.mp4" type="video/mp4" media="(min-width:1200px)" />
          <source src="/video/hero_vedio_720_new.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Simple Semi-transparent Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        <div className="text-center mb-16 px-4">
          <p className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-3">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6">Contact Us</h2>
          <div className="h-1 w-20 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className={`grid lg:grid-cols-2 gap-16 items-start ${visible ? "animate-fade-up" : "opacity-0"}`}>
          {/* Individual Contact Info Cards */}
          <div className="space-y-6">
            <div className="p-8 bg-slate-950/40 backdrop-blur-xl rounded-3xl border border-gold/20 shadow-xl flex gap-6 hover:bg-slate-900/50 transition-all group">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gold/20 flex-shrink-0 border border-gold/30 group-hover:scale-110 transition-transform">
                <MapPin className="text-gold" size={26} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-lg mb-2">Office Address</h4>
                <p className="text-slate-300 font-body text-sm leading-relaxed">
                  Office No: 10, Floor: 3, Building No: 1,<br />Block No: 7, Fahaheel, Kuwait
                </p>
              </div>
            </div>

            <div className="p-8 bg-slate-950/40 backdrop-blur-xl rounded-3xl border border-gold/20 shadow-xl flex gap-6 hover:bg-slate-900/50 transition-all group">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gold/20 flex-shrink-0 border border-gold/30 group-hover:scale-110 transition-transform">
                <Phone className="text-gold" size={26} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-lg mb-2">Phone Numbers</h4>
                <div className="text-slate-300 font-body text-sm space-y-1">
                  <span className="block">+965 9898 8281</span>
                  <span className="block">+965 6002 6630</span>
                  <span className="block">+965 9220 6549</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-slate-950/40 backdrop-blur-xl rounded-3xl border border-gold/20 shadow-xl flex gap-6 hover:bg-slate-900/50 transition-all group">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gold/20 flex-shrink-0 border border-gold/30 group-hover:scale-110 transition-transform">
                <Mail className="text-gold" size={26} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-lg mb-2">Email Addresses</h4>
                <div className="flex flex-col gap-2">
                  <a href="mailto:info@metallicakw.com" className="text-slate-300 font-body text-sm hover:text-gold transition-colors">info@metallicakw.com</a>
                  <a href="mailto:Info@metallicagcc.com" className="text-slate-300 font-body text-sm hover:text-gold transition-colors">Info@metallicagcc.com</a>
                </div>
              </div>
            </div>

            <div className="p-8 bg-slate-950/40 backdrop-blur-xl rounded-3xl border border-gold/20 shadow-xl flex gap-6 hover:bg-slate-900/50 transition-all group">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gold/20 flex-shrink-0 border border-gold/30 group-hover:scale-110 transition-transform">
                <Globe className="text-gold" size={26} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-lg mb-2">Websites</h4>
                <div className="flex flex-col gap-2">
                  <a href="https://www.metallicakw.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 font-body text-sm hover:text-gold transition-colors">www.metallicakw.com</a>
                  <a href="https://www.metallicagcc.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 font-body text-sm hover:text-gold transition-colors">www.metallicagcc.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100 h-full">
            <h3 className="text-2xl font-heading font-bold navy-text mb-8">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
              />
              <textarea
                placeholder="Your Message..."
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all resize-none"
              />
              <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-navy to-slate-800 text-white font-heading font-bold hover:shadow-lg transition-all active:scale-[0.98]">
                Submit inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
