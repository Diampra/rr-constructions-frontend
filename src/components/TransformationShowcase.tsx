import { useEffect, useState } from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { useLanguage } from "@/contexts/LanguageContext";

type Transformation = {
  id: string;
  beforeImage: string;
  afterImage: string;
};

const TransformationShowcase = () => {
  const { t } = useLanguage();
  const [items, setItems] = useState<Transformation[]>([]);

  useEffect(() => {
    setItems([]);
  }, []);

  if (items.length === 0) return null; // hide section if empty

  return (
    <section id="transformations" className="py-24 bg-rr-navy-deep relative overflow-hidden border-y border-white/5">
      {/* Background flair */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-rr-gold/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-rr-gold" />
            <span className="font-mono text-rr-gold text-xs uppercase tracking-[0.3em] font-bold">
              {t.transformationShowcase || "Transformations"}
            </span>
            <div className="w-12 h-px bg-rr-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 font-bold text-rr-cream leading-tight">
            {t.seeOurTransformations || "Before & After Excellence"}
          </h2>
          <p className="text-rr-cream/60 max-w-2xl mx-auto text-base md:text-lg font-light tracking-wide">
            {t.transformationDescription || "Witness the sheer scale and quality of our infrastructural upgrades from inception to final handover."}
          </p>
        </div>

        {/* Sliders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {items.map((item) => (
            <div key={item.id} className="bg-white/5 p-2 rounded-[4px] shadow-xl shadow-black/40 transition-colors duration-500 overflow-hidden group">
              <div className="relative rounded-[2px] overflow-hidden">
                <BeforeAfterSlider
                  beforeImage={item.beforeImage}
                  afterImage={item.afterImage}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationShowcase;
