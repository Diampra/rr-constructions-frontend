import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-rr-cream flex flex-col">
      <Helmet>
        <title>Terms of Service | RR Infra</title>
        <meta name="description" content="Terms of Service for RR Constructions & RR Infra" />
      </Helmet>
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif text-rr-navy-deep mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none text-rr-gray">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <h2 className="text-2xl font-serif mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and RR Constructions & RR Infra ("we", "us", or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.</p>
            <h2 className="text-2xl font-serif mt-8 mb-4">2. Intellectual Property Rights</h2>
            <p className="mb-4">Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the website and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us.</p>
            <h2 className="text-2xl font-serif mt-8 mb-4">3. User Representations</h2>
            <p className="mb-4">By using the website, you represent and warrant that all registration information you submit will be true, accurate, current, and complete. You also agree to maintain the accuracy of such information and promptly update such registration information as necessary.</p>
            <h2 className="text-2xl font-serif mt-8 mb-4">4. Modifications and Interruptions</h2>
            <p className="mb-4">We reserve the right to change, modify, or remove the contents of the website at any time or for any reason at our sole discretion without notice. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the website.</p>
            <h2 className="text-2xl font-serif mt-8 mb-4">5. Contact Us</h2>
            <p className="mb-4">In order to resolve a complaint regarding the website or to receive further information regarding use of the website, please contact us at:</p>
            <p className="mb-4">Email: contact@rrinfra.co.in<br/>Phone: +91 98450 78828</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
