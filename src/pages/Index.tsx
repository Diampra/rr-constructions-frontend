import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import LeadershipSection from "@/components/LeadershipSection";
import Portfolio from "@/components/Portfolio";
import TransformationShowcase from "@/components/TransformationShowcase";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>RR Constructions & RR Infra | Premier Construction & Infrastructure Development</title>
        <meta 
          name="description" 
          content="RR Constructions & RR Infra brings 40+ years of expertise in commercial buildings, residential projects, multi-specialty hospital infrastructure, educational institutions, and industrial developments in Karnataka."
        />
        <meta name="keywords" content="RR Constructions, RR Infra, Construction Company Kolar, Infrastructure Development Karnataka, Hospital Construction, Commercial Buildings, Residential Apartments" />
        <link rel="canonical" href="https://www.rrinfra.co.in" />
        
        {/* Open Graph */}
        <meta property="og:title" content="RR Constructions & RR Infra | Building Excellence Through Experience" />
        <meta property="og:description" content="Professionally managed construction and infrastructure development company with over 40+ years of rich experience in Karnataka." />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GeneralContractor",
            "name": "RR Constructions & RR Infra",
            "description": "Professionally managed construction and infrastructure development company with 40+ years of experience.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "#18, 2nd Floor, 3rd Cross, Sanjeevappa Layout",
              "addressLocality": "Kolar",
              "addressRegion": "Karnataka",
              "postalCode": "563101",
              "addressCountry": "IN"
            },
            "telephone": "+91-9448085212",
            "openingHours": "Mo-Sa 09:30-18:30"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Services />
          <LeadershipSection />
          <Portfolio />
          <TransformationShowcase />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
