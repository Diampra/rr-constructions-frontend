import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Mail, Clock, Send, Landmark } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  segment: string;
  message: string;
}

const ContactPage = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    segment: "",
    message: "",
  });

  const contactInfoData = [
    {
      id: "1",
      icon: MapPin,
      title: "Registered Office",
      content: "#18, 2nd Floor, 3rd Cross, Sanjeevappa Layout, Kolar – 563101, Karnataka, India",
    },
    {
      id: "2",
      icon: Phone,
      title: "Phone Lines",
      content: "+91 94480 85212\n+91 94482 52081",
    },
    {
      id: "3",
      icon: Mail,
      title: "Email & Web",
      content: "info@rrinfra.co.in\nwww.rrinfra.co.in",
    },
    {
      id: "4",
      icon: Clock,
      title: "Office Hours",
      content: "Monday - Saturday: 9:30 AM - 6:30 PM\nSunday: By Appointment",
    },
  ];

  const nearbyLandmarks = [
    "Kolar Bus Stand",
    "District Court, Kolar",
    "Kolar Railway Station",
    "Kolar City Center"
  ];

  const segments = [
    "Commercial Building",
    "Residential Development",
    "Hospital & Healthcare Facility",
    "Educational Institution",
    "Industrial Facility & Warehouse",
    "Resort & Hospitality Project",
  ];

  const faqData = [
    {
      q: "What construction segments do you specialize in?",
      a: "We specialize in Commercial Buildings, Residential Projects, Multi-specialty Hospital Buildings, Educational Institutions, Industrial Facilities, and Resort/Hospitality developments."
    },
    {
      q: "What is your track record and experience?",
      a: "RR Constructions & RR Infra brings over 40+ years of rich industry experience, with 500+ completed projects and over 5 Million+ Sq. Ft. constructed across Karnataka."
    },
    {
      q: "Who leads project planning and execution?",
      a: "Our company is led by Partners Mr. V. Rajashekhar (B.E. Civil, 40+ Yrs Exp) and Mr. T. M. Raghu (B.E. Civil, 40+ Yrs Exp) alongside a team of experienced civil engineers."
    },
    {
      q: "How do I request a project proposal or consultation?",
      a: "Fill out the contact form on this page or reach out directly to our leadership via phone at +91 94480 85212 or email at info@rrinfra.co.in."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 800));
    
    toast({
      title: "Inquiry Received Successfully",
      description: "Thank you for reaching out to RR Constructions & RR Infra. Our team will contact you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", phone: "", segment: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us & Office Location | RR Constructions & RR Infra</title>
        <meta name="description" content="Get in touch with RR Constructions & RR Infra. Registered office at Sanjeevappa Layout, Kolar, Karnataka. Call +91 94480 85212 or email info@rrinfra.co.in." />
      </Helmet>
      
      <Header />
      
      <main className="pt-24">
        {/* Hero Banner */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">
                Building Trust • Delivering Excellence
              </span>
              <div className="w-12 h-px bg-gold" />
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-foreground font-bold mb-6">
              Get In Touch With Us
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              We welcome the opportunity to work with you and build a better tomorrow together. Let's discuss your next landmark project.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl text-foreground font-bold mb-4">Registered Office & Contact Lines</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Reach out to our project management team or visit our head office in Kolar, Karnataka.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {contactInfoData.map((info) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={info.id} className="bg-card p-6 border border-gold/20 rounded-xl shadow-sm">
                        <div className="w-12 h-12 bg-gold/10 text-gold rounded-lg flex items-center justify-center mb-4 border border-gold/20">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h4 className="font-serif text-lg font-bold text-foreground mb-2">{info.title}</h4>
                        <p className="text-muted-foreground text-xs leading-relaxed whitespace-pre-line">{info.content}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Nearby Landmarks */}
                <div className="bg-card p-6 border border-gold/20 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Landmark className="w-5 h-5 text-gold" />
                    <h4 className="font-serif text-base font-bold text-foreground">Nearby Office Landmarks</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {nearbyLandmarks.map((landmark, idx) => (
                      <span key={idx} className="text-xs bg-secondary text-foreground/80 px-3 py-1 rounded-full border border-border">
                        📍 {landmark}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Map */}
                <div className="h-72 bg-card shadow-soft overflow-hidden rounded-xl border border-gold/20">
                  <iframe
                    title="RR Constructions Kolar Location"
                    src="https://maps.google.com/maps?q=Kolar+Karnataka+India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card p-8 md:p-10 border border-gold/20 rounded-xl shadow-sm">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Send Us a Project Inquiry</h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Fill out the project details below and our leadership team will contact you within 24 hours.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground text-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-gold outline-none transition-all"
                        placeholder="e.g. Ritesh Sinha"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground text-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-gold outline-none transition-all"
                        placeholder="info@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground text-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-gold outline-none transition-all"
                        placeholder="+91 94480 85212"
                      />
                    </div>
                    <div>
                      <label htmlFor="segment" className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">
                        Project Segment
                      </label>
                      <select
                        id="segment"
                        name="segment"
                        value={formData.segment}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground text-sm focus:ring-2 focus:ring-gold outline-none transition-all"
                      >
                        <option value="">Select project segment</option>
                        {segments.map((segment, idx) => (
                          <option key={idx} value={segment}>
                            {segment}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">
                      Project Specifications & Scope
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground text-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-gold outline-none transition-all resize-none"
                      placeholder="Tell us about built-up area, site location, timeline, and structural scope..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="gold" 
                    size="lg" 
                    className="w-full font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting Inquiry..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Project Inquiry
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-card border-t border-border/60">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl text-foreground font-bold mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-background p-6 rounded-xl border border-gold/20 shadow-sm">
                  <h4 className="font-serif text-lg font-bold text-foreground mb-2">{faq.q}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ContactPage;