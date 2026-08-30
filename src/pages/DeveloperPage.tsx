import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DeveloperPage = () => {
  return (
    <>
      <Helmet>
        <title>Developer Credits | RR Constructions</title>
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Header />

      <main className="pt-32 pb-24 min-h-[70vh] bg-rr-cream flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-rr-navy-deep mb-8">
            Developer Credits
          </h1>
          <p className="text-lg text-rr-navy-deep/80 max-w-2xl mx-auto leading-relaxed">
            This website was developed and designed by{" "}
            <a href="https://macrossys.com/" target="_blank" rel="noopener noreferrer" className="text-rr-gold font-bold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rr-gold rounded px-1">
              Macrossys
            </a>{" "}
            in collaboration with{" "}
            <a href="https://wishingindia.com/" target="_blank" rel="noopener noreferrer" className="text-rr-gold font-bold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rr-gold rounded px-1">
              Wishingindia
            </a>.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default DeveloperPage;
