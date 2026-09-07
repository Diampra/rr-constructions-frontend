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
        <title>RR Constructions & RR Infra | Premier Construction Company in Bangalore</title>
        <meta 
          name="description" 
          content="RR Constructions & RR Infra is a leading civil construction and infrastructure company in Bangalore with 25+ years of experience in commercial buildings, residential projects, hospitals, and institutional developments across Karnataka."
        />
        <meta name="keywords" content="construction company in bangalore, civil contractors bangalore, commercial building contractors bangalore, hospital construction company karnataka, top builders bangalore, residential construction bangalore, turnkey civil contractors karnataka, rr constructions, rr infra bangalore" />
        <link rel="canonical" href="https://www.rrinfra.co.in" />
        
        {/* Open Graph */}
        <meta property="og:title" content="RR Constructions & RR Infra | Premier Construction Company in Bangalore" />
        <meta property="og:description" content="25+ years of building excellence across Bangalore and Karnataka. Commercial, residential, hospital, and educational landmark infrastructure." />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GeneralContractor",
            "name": "RR Constructions & RR Infra",
            "description": "Professionally managed construction and infrastructure development company with 25+ years of experience.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "No.216/1, 1st Floor, 5th Main, 4th Cross Road, Ganganagar",
              "addressLocality": "Bangalore",
              "addressRegion": "Karnataka",
              "postalCode": "560032",
              "addressCountry": "IN"
            },
            "telephone": "+91-9845078828",
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
