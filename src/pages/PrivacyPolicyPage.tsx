import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-rr-cream flex flex-col">
      <Helmet>
        <title>Privacy Policy | RR Infra</title>
        <meta name="description" content="Privacy Policy for RR Constructions & RR Infra" />
      </Helmet>
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif text-rr-navy-deep mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none text-rr-gray">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <h2 className="text-2xl font-serif mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">Welcome to RR Constructions & RR Infra ("we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. This privacy policy describes how we collect, use, and share your information when you use our website and services.</p>
            <h2 className="text-2xl font-serif mt-8 mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, or otherwise when you contact us. This may include your name, email address, phone number, and any other details you choose to share.</p>
            <h2 className="text-2xl font-serif mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
            <h2 className="text-2xl font-serif mt-8 mb-4">4. Sharing Your Information</h2>
            <p className="mb-4">We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
            <h2 className="text-2xl font-serif mt-8 mb-4">5. Contact Us</h2>
            <p className="mb-4">If you have questions or comments about this notice, you may email us at contact@rrinfra.co.in or by post to:</p>
            <p className="mb-4">No.216/1, 1st Floor, 5th Main, 4th Cross Road<br/>Ganganagar, Bangalore-560032</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
