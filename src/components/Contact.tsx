import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

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
    content: "#18, 2nd Floor, 3rd Cross,\nSanjeevappa Layout,\nKolar, Karnataka 563101",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 94480 85212",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@rrinfra.co.in",
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Monday - Saturday: 9:30 AM - 6:30 PM\nSunday: By Appointment",
  },
];

const segments = [
  "Commercial Building",
  "Residential Development",
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
    await new Promise((resolve) => setTimeout(resolve, 800));
    toast({
      title: "Inquiry Received Successfully",
      description: "Thank you for reaching out to RR Constructions & RR Infra. Our team will contact you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", segment: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">
              Get In Touch
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground font-medium mb-4">
            Contact RR Constructions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Share your project requirements and our leadership team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((item) => (
              <div key={item.title} className="bg-background p-6 shadow-sm border border-border/60 rounded-xl">
                <item.icon className="w-5 h-5 text-gold mb-4" />
                <h4 className="font-serif text-lg text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm whitespace-pre-line">{item.content}</p>
              </div>
            ))}
          </div>

          <div className="bg-background p-6 md:p-8 shadow-sm border border-border/60 rounded-xl">
            <h3 className="font-serif text-2xl text-foreground mb-6">Send Us a Project Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-gold outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-gold outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-gold outline-none transition-all"
                    placeholder="+91 94480 85212"
                  />
                </div>
                <div>
                  <label htmlFor="segment" className="block text-sm font-medium text-foreground mb-2">
                    Project Segment
                  </label>
                  <select
                    id="segment"
                    name="segment"
                    value={formData.segment}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:ring-2 focus:ring-gold outline-none transition-all"
                  >
                    <option value="">Select project segment</option>
                    {segments.map((segment) => (
                      <option key={segment} value={segment}>
                        {segment}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Project Specifications & Scope
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-gold outline-none transition-all resize-none"
                  placeholder="Tell us about built-up area, site location, timeline, and structural scope..."
                />
              </div>

              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting Inquiry..." : (
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
  );
};

export default Contact;