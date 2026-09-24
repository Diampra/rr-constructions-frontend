import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import { WhatsAppIcon } from "./WhatsAppButton";

interface FormData {
  name: string;
  email: string;
  phone: string;
  segment: string;
  message: string;
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Registered Office",
    content: "No.216/1, 1st Floor, 5th Main,\n4th Cross Road\nGanganagar, Bangalore-560032",
    href: "https://maps.google.com/maps?q=Ganganagar+Bangalore+India",
  },
  {
    icon: Phone,
    title: "Phone Lines",
    content: "+91 98450 78828\n080-49901901",
    href: "tel:+919845078828",
  },
  {
    icon: WhatsAppIcon,
    title: "WhatsApp Chat",
    content: "+91 99458 65862\nDirect Project Consultation",
    href: "https://wa.me/919945865862?text=Hello%20RR%20Constructions,%20I%20would%20like%20to%20inquire%20about%20a%20project.",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@rrinfra.co.in\nrrconstruct1709@gmail.com",
    href: "mailto:contact@rrinfra.co.in",
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Monday - Saturday: 9:30 AM - 6:30 PM\nSunday: By Appointment",
  },
];

const segments = [
  "Commercial Building",
  "Residential Building",
  "Hospital & Healthcare Facility",
  "Educational Institution",
  "Industrial Facility & Warehouse",
  "Resort & Hospitality Project",
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    segment: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const bodyData = new FormData();
      bodyData.append('name', formData.name);
      bodyData.append('email', formData.email);
      bodyData.append('phone', formData.phone);
      bodyData.append('segment', formData.segment);
      bodyData.append('message', formData.message);

      let response = await fetch('/api/send-inquiry.php', {
        method: 'POST',
        body: bodyData,
      });

      if (!response.ok && response.status === 404) {
        // Fallback to contact.php if send-inquiry.php isn't deployed yet
        response = await fetch('/api/contact.php', {
          method: 'POST',
          body: bodyData,
        });
      }

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        toast({
          title: "Inquiry Received Successfully",
          description: "Thank you for reaching out to RR Constructions & RR Infra. Our team will contact you within 24 hours.",
        });
        setFormData({ name: "", email: "", phone: "", segment: "", message: "" });
      } else {
        toast({
          variant: "destructive",
          title: "Inquiry Submission Error",
          description: result?.message || "Could not send inquiry. Please call us directly at +91 98450 78828 or use WhatsApp.",
        });
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Network Connection Error",
        description: "Could not connect to the server. Please call us directly at +91 98450 78828 or reach out via WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses =
    "w-full px-4 py-3 bg-white border border-black/10 rounded-[2px] text-rr-navy-deep placeholder:text-rr-navy-deep/40 focus:ring-1 focus:ring-rr-gold focus:border-rr-gold outline-none transition-all text-sm font-medium";

  return (
    <section id="contact" className="py-24 bg-rr-navy-mid relative overflow-hidden">
      {/* Background blueprint elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-rr-gold" />
            <span className="font-mono text-rr-gold text-xs uppercase tracking-[0.3em] font-bold">
              Get In Touch
            </span>
            <div className="w-12 h-px bg-rr-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-rr-cream font-bold mb-6">
            Contact RR Constructions
          </h2>
          <p className="text-rr-cream/70 max-w-2xl mx-auto text-base md:text-lg font-light">
            Share your project requirements and our leadership team will get back to you within 24 hours to discuss your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Contact Info (Left Side - Takes 2 cols) */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {contactInfo.map((item) => {
              const Element = item.href ? "a" : "div";
              return (
                <Element
                  key={item.title}
                  {...(item.href ? { 
                    href: item.href, 
                    target: item.href.startsWith("http") ? "_blank" : undefined, 
                    rel: item.href.startsWith("http") ? "noopener noreferrer" : undefined 
                  } : {})}
                  className="group bg-rr-cream p-5 shadow-xl shadow-black/10 transition-all duration-300 rounded-[2px] flex flex-col justify-center hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rr-gold"
                >
                  <div className="w-10 h-10 rounded-full bg-rr-navy-deep/5 text-rr-navy-deep flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-rr-navy-deep group-hover:text-white transition-all duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-sans text-sm font-bold tracking-wide text-rr-navy-deep mb-1">{item.title}</h4>
                  <p className="text-rr-navy-deep/70 text-xs md:text-sm whitespace-pre-line leading-relaxed font-light">{item.content}</p>
                </Element>
              );
            })}
          </div>

          {/* Form (Right Side - Takes 3 cols) */}
          <div className="lg:col-span-3 bg-rr-cream p-8 md:p-12 shadow-2xl shadow-black/10 rounded-[2px] relative overflow-hidden">
            {/* Subtle gold accent on the form */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-rr-gold/10 rounded-bl-full pointer-events-none" />
            
            <h3 className="font-serif text-3xl font-bold text-rr-navy-deep mb-8">Send Us a Project Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-rr-navy-deep/70 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-rr-navy-deep/70 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-rr-navy-deep/70 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="+91 98450 78828"
                  />
                </div>
                <div>
                  <label htmlFor="segment" className="block text-xs font-bold uppercase tracking-wider text-rr-navy-deep/70 mb-2">
                    Project Segment
                  </label>
                  <select
                    id="segment"
                    name="segment"
                    value={formData.segment}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="" disabled hidden>Select project segment</option>
                    {segments.map((segment) => (
                      <option key={segment} value={segment}>
                        {segment}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-rr-navy-deep/70 mb-2">
                  Project Specifications & Scope
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={inputClasses}
                  placeholder="Tell us about built-up area, site location, timeline, and structural scope..."
                />
              </div>

              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full uppercase tracking-[0.1em]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting Inquiry..." : (
                  <>
                    <Send className="w-5 h-5 mr-3" />
                    Project Inquiry
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
