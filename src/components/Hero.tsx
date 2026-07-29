import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowUpRight, ChevronUp, ChevronDown, Settings2, Copy, Check, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import layoutConfig from "./hero-config.json";

/* ============================================================
   DESIGN TOKENS
   Swap the orange "trend" accent for the RR brand system
   (navy + gold, matched to the company profile / logo).
   Keep these as CSS custom properties so the whole hero can
   be retinted from one place.
   ------------------------------------------------------------
   --rr-navy-deep   #0A1B33   base dark surface
   --rr-navy-mid    #12233F   secondary dark surface
   --rr-cream       #F5F1E8   light surface / on-dark text
   --rr-gold        #C99A46   primary accent (CTA, active state)
   --rr-gold-bright #E8B85C   hover / highlight
   ============================================================ */

const slides = [
  {
    id: "1",
    sectorTag: "Commercial Buildings",
    bgText: "COMMERCIAL",
    title: "Office Towers, Business Parks & Corporate Complexes",
    description:
      "State-of-the-art office towers and corporate hubs engineered for modern enterprises.",
    highlights: ["Business Parks", "IT Parks", "Corporate HQs"],
    desktopImage: "/images/rr-hero-1-desktop.png",
    mobileImage: "/images/rr-hero-1.png",
    alt: "Commercial building edifice",
    imageTransform: { scale: 1, x: 0, y: 0, kenBurns: false, kenBurnsScale: 1.06 },
  },
  {
    id: "2",
    sectorTag: "Residential Projects",
    bgText: "RESIDENTIAL",
    title: "Apartments, Villas & Gated Communities",
    description:
      "Luxury apartments and private villas built for comfort, durability and sustainable living.",
    highlights: ["Luxury Apartments", "Private Villas", "Gated Communities"],
    desktopImage: "/images/rr-hero-2-desktop.png",
    mobileImage: "/images/rr-hero-3.png",
    alt: "Residential infrastructure",
    imageTransform: { scale: 1, x: 0, y: 0, kenBurns: false, kenBurnsScale: 1.06 },
  },
  {
    id: "3",
    sectorTag: "Hospital Buildings",
    bgText: "HEALTHCARE",
    title: "Multi-Specialty Hospitals & Healthcare Facilities",
    description:
      "Landmark medical infrastructure - including R L Jalappa Hospital, 2,20,000+ sq. ft. - built to global clinical standards.",
    highlights: ["R L Jalappa Hospital", "Medical Colleges", "ICU Suites"],
    desktopImage: "/images/rr-hero-1-desktop.png",
    mobileImage: "/images/rr-hero-1.png",
    alt: "Hospital building infrastructure",
    imageTransform: { scale: 1, x: 0, y: 0, kenBurns: false, kenBurnsScale: 1.06 },
  },
  {
    id: "4",
    sectorTag: "Educational Institutions",
    bgText: "EDUCATION",
    title: "Schools, Colleges, Universities & Research Centers",
    description:
      "Safe, future-ready campus facilities and specialized research laboratories.",
    highlights: ["AHS Building - 75k Sq. Ft.", "Universities", "Research Labs"],
    desktopImage: "/images/rr-hero-2-desktop.png",
    mobileImage: "/images/rr-hero-3.png",
    alt: "Educational campus structure",
    imageTransform: { scale: 1.29, x: -242, y: 124, kenBurns: false, kenBurnsScale: 1.06 },
  },
  {
    id: "5",
    sectorTag: "Industrial Buildings",
    bgText: "INDUSTRIAL",
    title: "Manufacturing Units, Warehouses & Facilities",
    description:
      "Heavy-duty industrial infrastructure and logistics hubs built with high-load precision.",
    highlights: ["Manufacturing Units", "Warehouses", "Logistics Hubs"],
    desktopImage: "/images/rr-hero-1-desktop.png",
    mobileImage: "/images/rr-hero-1.png",
    alt: "Industrial facility structure",
    imageTransform: { scale: 1, x: 0, y: 0, kenBurns: false, kenBurnsScale: 1.06 },
  },
  {
    id: "6",
    sectorTag: "Resorts & Hospitality",
    bgText: "HOSPITALITY",
    title: "Resorts, Hotels & Hospitality Spaces",
    description:
      "Hospitality developments combining scenic aesthetics with premium guest comfort.",
    highlights: ["Luxury Resorts - 35k Sq. Ft.", "Boutique Hotels", "Eco Hospitality"],
    desktopImage: "/images/rr-hero-2-desktop.png",
    mobileImage: "/images/rr-hero-3.png",
    alt: "Resort and hospitality landmark",
    imageTransform: { scale: 1.28, x: -242, y: 129, kenBurns: false, kenBurnsScale: 1.06 },
  },
];

const AUTOPLAY_MS = 6000;

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editTab, setEditTab] = useState<"image" | "bg" | "card" | "bottomBar">("image");
  const [copied, setCopied] = useState(false);
  const [copyPrompt, setCopyPrompt] = useState<{
    isOpen: boolean;
    tab: "image" | "bg" | "card" | "bottomBar" | null;
    propertyKey: string;
    value: any;
    inputStr: string;
  }>({ isOpen: false, tab: null, propertyKey: "", value: null, inputStr: "all" });

  // Per-slide image transform state
  const [transforms, setTransforms] = useState(() => layoutConfig.transforms);

  // Per-slide BG config - controls large background text individually
  const [bgConfigs, setBgConfigs] = useState(() => layoutConfig.bgConfigs);

  const [cardConfigs, setCardConfigs] = useState(() => layoutConfig.cardConfigs);
  const [bottomBarConfig, setBottomBarConfig] = useState(() => layoutConfig.bottomBarConfig);

  const slide = slides[currentSlide];
  const t = transforms[slide.id];
  const bg = bgConfigs[slide.id];
  const card = cardConfigs[slide.id];

  const prefersReducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ).current;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const goTo = useCallback((idx) => {
    setCurrentSlide(((idx % slides.length) + slides.length) % slides.length);
  }, []);
  const handleNext = useCallback(() => goTo(currentSlide + 1), [currentSlide, goTo]);
  const handlePrev = useCallback(() => goTo(currentSlide - 1), [currentSlide, goTo]);

  const updateTransform = (key, value) => {
    setTransforms((prev) => ({
      ...prev,
      [slide.id]: { ...prev[slide.id], [key]: value },
    }));
  };

  const handleCopyProperty = (tab: "image" | "bg" | "card" | "bottomBar", propertyKey: string, value: any) => {
    setCopyPrompt({ isOpen: true, tab, propertyKey, value, inputStr: "all" });
  };

  const executeCopyProperty = () => {
    const { tab, propertyKey, value, inputStr } = copyPrompt;
    if (!tab) return;

    let targetIds: string[] = [];
    if (inputStr.trim().toLowerCase() === "all") {
      targetIds = slides.map((s) => s.id).filter(id => id !== slide.id);
    } else {
      targetIds = inputStr
        .split(",")
        .map((n) => n.trim())
        .filter((n) => slides.some((s) => s.id === n) && n !== slide.id);
    }

    if (targetIds.length > 0) {
      if (tab === "image") {
        setTransforms((prev) => {
          const next = { ...prev };
          targetIds.forEach((id) => {
            if (next[id]) next[id] = { ...next[id], [propertyKey]: value };
          });
          return next;
        });
      } else if (tab === "bg") {
        setBgConfigs((prev) => {
          const next = { ...prev };
          targetIds.forEach((id) => {
            if (next[id]) next[id] = { ...next[id], [propertyKey]: value };
          });
          return next;
        });
      } else if (tab === "card") {
        setCardConfigs((prev) => {
          const next = { ...prev };
          targetIds.forEach((id) => {
            if (next[id]) next[id] = { ...next[id], [propertyKey]: value };
          });
          return next;
        });
      }
    }
    setCopyPrompt(prev => ({ ...prev, isOpen: false }));
  };

  const resetTransform = () => {
    // @ts-ignore
    setTransforms((prev) => ({ ...prev, [slide.id]: { ...layoutConfig.transforms[slide.id] } }));
  };
  const resetBg = () => {
    // @ts-ignore
    setBgConfigs((prev) => ({ ...prev, [slide.id]: { ...layoutConfig.bgConfigs[slide.id] } }));
  };
  const resetCard = () => {
    // @ts-ignore
    setCardConfigs((prev) => ({ ...prev, [slide.id]: { ...layoutConfig.cardConfigs[slide.id] } }));
  };
  const copyConfig = () => {
    const json = JSON.stringify({ transforms, bgConfigs, cardConfigs, bottomBarConfig }, null, 2);
    navigator.clipboard?.writeText(json).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };
  const resetAll = () => {
    setBgConfigs(layoutConfig.bgConfigs);
    setCardConfigs(layoutConfig.cardConfigs);
    setTransforms(layoutConfig.transforms);
    setBottomBarConfig(layoutConfig.bottomBarConfig);
  };

  // Autoplay - pauses on hover/focus/edit mode, respects reduced motion
  useEffect(() => {
    if (prefersReducedMotion || paused || editMode) return;
    const timer = setInterval(handleNext, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, editMode, prefersReducedMotion, handleNext]);

  // Keyboard navigation + edit-mode toggle ("E")
  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === "INPUT") return; // don't hijack slider focus
      if (e.key === "ArrowRight" || e.key === "ArrowDown") handleNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") handlePrev();
      if (e.key.toLowerCase() === "e" && import.meta.env.DEV) setEditMode((v) => !v);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleNext, handlePrev]);

  return (
    <section
      id="hero"
      role="region"
      aria-roledescription="carousel"
      aria-label="RR Constructions - sectors we build"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative w-full overflow-hidden bg-rr-navy-deep text-rr-cream transition-colors duration-500"
      style={{ height: "100svh", minHeight: "640px", paddingTop: "56px" }}
    >
      {/* Ambient depth - replaces the flat grid + gradient with a single
          warm glow anchored low, echoing the lit windows in the photos */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-x-0 bottom-0 h-2/3"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(201,154,70,0.16) 0%, rgba(201,154,70,0) 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Eyebrow - top left, quiet metadata, clear of the image entirely */}
      <div className="absolute top-6 left-4 md:left-6 z-10 font-mono text-[11px] tracking-[0.25em] text-rr-cream/60">
        {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        <span className="ml-2 text-rr-gold">{slide.sectorTag}</span>
      </div>

      {/* LAYER 1 - the sector name, big and solid, sitting BEHIND the
          building. The roofline physically crosses through the bottom
          of the letterforms once the image (z-20) stacks on top of it -
          this is the hero's one signature move. */}
      <div
        key={`bg-word-${slide.id}`}
        aria-hidden="true"
        className={`absolute inset-x-0 z-10 flex ${isMobile ? 'justify-start pl-4' : 'justify-center'} pointer-events-none select-none`}
        style={{
          top: isMobile ? '28%' : `${bg.topPct}%`,
          animation: `${
            bg.entrance === "left"
              ? "slideInLeft"
              : bg.entrance === "right"
              ? "slideInRight"
              : bg.entrance === "down"
              ? "slideInDown"
              : bg.entrance === "up"
              ? "slideInUp"
              : "fadeIn"
          } 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
        }}
      >
        <span
          className="font-serif font-black uppercase leading-[0.85] tracking-tight text-rr-cream"
          style={{
            fontSize: isMobile ? `clamp(28px, 11vw, 52px)` : `clamp(52px, ${bg.fontSize}vw, 1000px)`,
            letterSpacing: isMobile ? `0em` : `${bg.letterSpacing}em`,
            opacity: bg.opacity * 10, // 0.07 → displayed as 0.7 on slider
          }}
        >
          {slide.bgText}
        </span>
      </div>

      {/* LAYER 2 - the building. Sits on top of the headline, under
          everything else. Pan/scale come from the wrapper (static);
          the optional Ken Burns drift animates the img itself so the
          two transforms don't collide. */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex justify-center items-end pointer-events-none h-[78%]">
        <div
          className="h-full flex justify-center items-end"
          style={{
            transform: isMobile ? 'scale(1)' : `translate(${t.x}px, ${t.y}px) scale(${t.scale})`,
            transformOrigin: `${t.originX ?? 50}% ${t.originY ?? 100}%`,
            transition: editMode ? "none" : "transform 0.4s ease",
          }}
        >
          <div
            key={`entrance-${slide.id}`}
            className="h-full flex justify-center items-end"
            style={{
              animation: `${
                t.entrance === "left"
                  ? "slideInLeft"
                  : t.entrance === "right"
                  ? "slideInRight"
                  : t.entrance === "down"
                  ? "slideInDown"
                  : t.entrance === "fade"
                  ? "fadeIn"
                  : "slideInUp"
              } 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
            }}
          >
            <picture className="h-full flex justify-center items-end">
              <source media="(min-width: 768px)" srcSet={slide.desktopImage} />
            <img
              key={`png-img-${slide.id}`}
              src={slide.mobileImage}
              alt={slide.alt}
              className="h-full w-auto max-w-[86vw] object-contain object-bottom drop-shadow-[0_30px_50px_rgba(0,0,0,0.45)] animate-cinematic-up"
              style={
                t.kenBurns && !prefersReducedMotion
                  ? ({
                      transformOrigin: `${t.originX ?? 50}% ${t.originY ?? 100}%`,
                      animation: `kenBurns 14s ease-in-out infinite alternate`,
                      "--kb-scale": t.kenBurnsScale,
                    } as React.CSSProperties & { "--kb-scale": number })
                  : undefined
              }
            />
            </picture>
          </div>
        </div>
      </div>

      {/* LAYER 3 - title, description, highlights: no card, no box.
          Sits directly OVER the photo, lower-left, with just enough
          text-shadow to stay legible against the glass/facade behind it,
          plus a single gold rule doing the job a border would have. */}
      <div
        key={`copy-${slide.id}`}
        className="absolute pointer-events-none animate-fade-in"
        style={{
          left: isMobile ? '1rem' : `calc(1rem + ${card.x}px)`,
          top: isMobile ? '40%' : `calc(50% + ${card.y}px)`,
          width: isMobile ? 'min(90vw, 340px)' : (card.width ? `min(90vw, ${card.width}px)` : "min(78vw, 340px)"),
          zIndex: 25,
        }}
      >
        <div className="pl-3.5 border-l-2 border-rr-gold">
          <h2
            className="font-serif font-bold uppercase leading-tight text-rr-cream"
            style={{
              textShadow: `0 2px 14px rgba(0,0,0,${(card.shadowAlpha ?? 65) / 100})`,
              letterSpacing: "0.04em",
              fontSize: isMobile ? `24px` : `${card.titleSize}px`,
            }}
          >
            {slide.title}
          </h2>
          <p
            className="mt-2 font-barlow leading-relaxed text-rr-cream/80 font-normal"
            style={{
              textShadow: `0 2px 10px rgba(0,0,0,${(card.shadowAlpha ?? 65) / 100})`,
              fontSize: isMobile ? `14px` : `${card.descSize}px`,
            }}
          >
            {slide.description}
          </p>
          <div className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1">
            {slide.highlights.map((item) => (
              <span
                key={item}
                className="font-serif text-[11px] font-semibold uppercase tracking-widest text-rr-gold-bright"
                style={{ textShadow: `0 1px 8px rgba(0,0,0,${Math.min(1, ((card.shadowAlpha ?? 65) + 5) / 100)})`, letterSpacing: "0.12em" }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* LAYER 4 - bottom scrim strip. Full-bleed, flat, not a floating
          card: a soft gradient grounds the stats + CTAs against whatever
          part of the image or ambient glow sits behind them. */}
      <div
        className="absolute inset-x-0 bottom-0 z-30 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(8,17,33,0.92) 0%, rgba(8,17,33,0) 100%)",
          paddingTop: "48px",
        }}
      >
        <div 
          className="pointer-events-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-4"
          style={{ 
            paddingBottom: isMobile ? '16px' : `${bottomBarConfig.paddingBottom}px`,
            paddingLeft: isMobile ? '16px' : `${bottomBarConfig.paddingX ?? 24}px`,
            paddingRight: isMobile ? '16px' : `${bottomBarConfig.paddingX ?? 24}px`
          }}
        >
          {/* Mobile-only sector dots, folded into the strip instead of
              floating separately over the copy block */}
          <div className="md:hidden flex items-center justify-center gap-1.5" role="tablist" aria-label="Choose a sector">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={currentSlide === idx}
                aria-label={s.sectorTag}
                onClick={() => goTo(idx)}
                className="transition-all duration-300"
                style={{
                  width: currentSlide === idx ? "18px" : "6px",
                  height: "3px",
                   background: currentSlide === idx ? "var(--rr-gold-bright)" : "rgba(245,241,232,0.3)",
                }}
              />
            ))}
          </div>

          <div className="flex items-center gap-4 font-mono">
            {[
              { v: "40+", l: "Years" },
              { v: "500+", l: "Projects" },
              { v: "5M+", l: "Sq. Ft." },
            ].map((s, i) => (
              <div key={s.l} className={i > 0 ? "border-l border-white/15 pl-4" : ""}>
                 <span className="block font-bold text-rr-gold-bright leading-none" style={{ fontSize: isMobile ? '22px' : `${bottomBarConfig.statsValueSize}px` }}>{s.v}</span>
                 <span className="uppercase tracking-wider text-muted-foreground" style={{ fontSize: isMobile ? '11px' : `${bottomBarConfig.statsLabelSize}px` }}>{s.l}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <Link to="/portfolio">
              <Button className="bg-rr-gold hover:bg-rr-gold-bright text-rr-navy-deep font-bold text-xs tracking-wide rounded-[3px] px-4 py-2.5 h-auto">
                Explore Projects
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-rr-cream/20 bg-transparent hover:bg-rr-cream/10 text-rr-cream text-xs font-semibold tracking-wide rounded-[3px] px-4 py-2.5 h-auto"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* ── SECTOR RAIL - one navigation element instead of three.
          Thin line + progress-fill communicates the autoplay timer;
          labels appear on hover so it stays quiet by default ── */}
      <div
        className="hidden md:flex absolute z-30 flex-col items-end gap-0.5 pointer-events-auto"
        style={{ right: "24px", top: "50%", transform: "translateY(-50%)" }}
        role="tablist"
        aria-label="Choose a sector"
      >
        <button
          onClick={handlePrev}
          aria-label="Previous sector"
          className="mb-2 w-7 h-7 rounded-full flex items-center justify-center text-rr-cream/60 hover:text-rr-cream transition-colors"
        >
          <ChevronUp className="w-4 h-4" />
        </button>

        {slides.map((s, idx) => {
          const active = currentSlide === idx;
          return (
            <button
              key={s.id}
              role="tab"
              aria-selected={active}
              aria-label={s.sectorTag}
              onClick={() => goTo(idx)}
              className="group flex items-center gap-2.5 py-1.5"
            >
              <span
                className={`text-[10px] font-semibold tracking-wide whitespace-nowrap transition-all duration-300 ${
                  active
                    ? "opacity-100 text-rr-cream translate-x-0"
                    : "opacity-0 -translate-x-1 text-rr-cream/60 group-hover:opacity-70"
                }`}
              >
                {s.sectorTag}
              </span>
              <span
                className="relative block overflow-hidden transition-all duration-300"
                style={{
                  width: active ? "26px" : "6px",
                  height: "3px",
                  background: "rgba(245,241,232,0.22)",
                }}
              >
                {active && !prefersReducedMotion && (
                  <span
                    key={`fill-${slide.id}-${paused}`}
                    className="absolute inset-y-0 left-0 bg-rr-gold-bright"
                    style={{
                      animation: paused
                        ? "none"
                        : `railFill ${AUTOPLAY_MS}ms linear forwards`,
                      width: paused ? "40%" : undefined,
                    }}
                  />
                )}
                {active && prefersReducedMotion && (
                  <span className="absolute inset-0 bg-rr-gold-bright" />
                )}
              </span>
            </button>
          );
        })}

        <button
          onClick={handleNext}
          aria-label="Next sector"
          className="mt-2 w-7 h-7 rounded-full flex items-center justify-center text-rr-cream/60 hover:text-rr-cream transition-colors"
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          DEV-ONLY IMAGE ADJUSTMENT PANEL
          Toggle with the gear icon (bottom-left) or the "E" key.
          Adjust scale / position / Ken Burns per slide with sliders,
          then hit "Copy config" and paste the result into each slide's
          `imageTransform` field in the `slides` array above - then you
          can delete this whole block (and the toggle button) for
          production. It's inert otherwise: no visual footprint when
          editMode is false beyond the small toggle button.
          ══════════════════════════════════════════════════════════ */}
      {import.meta.env.DEV && (
        <button
          onClick={() => setEditMode((v) => !v)}
          aria-label="Toggle image adjustment panel"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0 z-40 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
          style={{
            background: editMode ? "var(--rr-gold)" : "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: editMode ? "var(--rr-navy-deep)" : "rgba(245,241,232,0.6)",
          }}
        >
          <Settings2 className="w-4 h-4" />
        </button>
      )}

      {import.meta.env.DEV && editMode && (
        <div
          className="absolute z-40 bottom-16 left-4 w-[300px] pointer-events-auto"
          style={{
            background: "var(--rr-navy-mid)",
            border: "1px solid rgba(201,154,70,0.35)",
            borderRadius: "8px",
            boxShadow: "0 24px 56px rgba(0,0,0,0.6)",
            overflow: "hidden",
          }}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
            <div className="relative">
              <select
                value={currentSlide}
                onChange={(e) => goTo(Number(e.target.value))}
                className="font-mono text-[10px] tracking-[0.1em] text-rr-gold-bright uppercase bg-rr-gold/10 border border-rr-gold/30 rounded px-2 py-1 pr-6 outline-none cursor-pointer appearance-none hover:bg-rr-gold/20 transition-colors"
              >
                {slides.map((s, idx) => (
                  <option key={s.id} value={idx} className="bg-rr-navy-mid text-rr-cream">
                    {idx + 1}. {s.sectorTag}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 text-rr-gold-bright pointer-events-none" />
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={resetAll}
                className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground hover:text-rr-cream transition-colors"
              >
                Reset all
              </button>
              <button onClick={() => setEditMode(false)} aria-label="Close panel" className="text-rr-cream/60 hover:text-rr-cream">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-white/10">
            {(["image", "bg", "card", "bottomBar"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setEditTab(tab)}
                className="flex-1 py-2 text-[10px] font-mono font-semibold uppercase tracking-wider transition-colors"
                style={{
                  color: editTab === tab ? "var(--rr-gold-bright)" : "var(--muted-foreground)",
                  borderBottom: editTab === tab ? "2px solid var(--rr-gold)" : "2px solid transparent",
                  background: "transparent",
                }}
              >
                {tab === "image" ? "🏗 Image" : tab === "bg" ? "🔤 BG Text" : tab === "card" ? "📐 Card" : "📊 Stats"}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="px-4 pb-4 pt-1">
            {/* ── IMAGE TAB ── */}
            {editTab === "image" && (
              <div className="space-y-1">
                <PanelSlider label="Scale" value={t.scale} min={0.5} max={2.5} step={0.01} onChange={(v) => updateTransform("scale", v)} onCopy={() => handleCopyProperty("image", "scale", t.scale)} />
                <PanelSlider label="Horizontal (x)" value={t.x} min={-800} max={800} step={1} onChange={(v) => updateTransform("x", v)} unit="px" onCopy={() => handleCopyProperty("image", "x", t.x)} />
                <PanelSlider label="Vertical (y)" value={t.y} min={-800} max={800} step={1} onChange={(v) => updateTransform("y", v)} unit="px" onCopy={() => handleCopyProperty("image", "y", t.y)} />
                
                <div className="mt-3 mb-1 pt-2 border-t border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Zoom Direction</span>
                </div>
                <PanelSlider label="Origin X (Left ↔ Right)" value={t.originX ?? 50} min={0} max={100} step={1} onChange={(v) => updateTransform("originX", v)} unit="%" onCopy={() => handleCopyProperty("image", "originX", t.originX ?? 50)} />
                <PanelSlider label="Origin Y (Top ↔ Bottom)" value={t.originY ?? 100} min={0} max={100} step={1} onChange={(v) => updateTransform("originY", v)} unit="%" onCopy={() => handleCopyProperty("image", "originY", t.originY ?? 100)} />

                <div className="flex items-center justify-between mt-3 mb-1 pt-2 border-t border-white/10">
                  <div className="flex items-center gap-1.5">
                     <span className="text-[11px] font-semibold text-rr-cream/80">Ken Burns zoom</span>
                     <button onClick={() => handleCopyProperty("image", "kenBurns", t.kenBurns)} className="p-0.5 text-white/30 hover:text-rr-gold-bright transition-colors rounded hover:bg-white/5" title="Apply to other slides"><Copy className="w-[10px] h-[10px]" /></button>
                  </div>
                  <input
                    type="checkbox"
                    checked={t.kenBurns}
                    onChange={(e) => updateTransform("kenBurns", e.target.checked)}
                     className="accent-rr-gold cursor-pointer"
                  />
                </div>
                {t.kenBurns && (
                  <PanelSlider label="Zoom intensity" value={t.kenBurnsScale} min={1.01} max={1.5} step={0.01} onChange={(v) => updateTransform("kenBurnsScale", v)} onCopy={() => handleCopyProperty("image", "kenBurnsScale", t.kenBurnsScale)} />
                )}

                <div className="flex items-center gap-1.5 mt-3 mb-1 pt-2 border-t border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Entrance Animation</span>
                  <button onClick={() => handleCopyProperty("image", "entrance", t.entrance || "up")} className="p-0.5 text-white/30 hover:text-rr-gold-bright transition-colors rounded hover:bg-white/5" title="Apply to other slides"><Copy className="w-[10px] h-[10px]" /></button>
                </div>
                <select
                  value={t.entrance || "up"}
                  onChange={(e) => updateTransform("entrance", e.target.value)}
                   className="w-full mt-1 bg-rr-navy-deep text-[11px] text-rr-cream/80 border border-rr-cream/15 rounded px-2 py-1.5 outline-none cursor-pointer focus:border-rr-gold"
                >
                  <option value="up">Slide Up</option>
                  <option value="down">Slide Down</option>
                  <option value="left">Slide from Left</option>
                  <option value="right">Slide from Right</option>
                  <option value="fade">Fade Only</option>
                </select>

                <button
                  onClick={resetTransform}
                  className="mt-4 w-full text-[11px] font-semibold text-rr-cream/80 border border-rr-cream/15 rounded-[3px] py-1.5 hover:bg-rr-cream/10 transition-colors"
                >
                  Reset this slide
                </button>
              </div>
            )}

            {/* ── BG TEXT TAB ── */}
            {editTab === "bg" && (
              <div>
                <PanelSlider
                  label="Opacity"
                  value={Math.round(bg.opacity * 1000) / 10}
                  min={0}
                  max={30}
                  step={0.5}
                  unit="%"
                  onChange={(v) => setBgConfigs((p) => ({ ...p, [slide.id]: { ...p[slide.id], opacity: v / 10 } }))}
                  onCopy={() => handleCopyProperty("bg", "opacity", bg.opacity)}
                />
                <PanelSlider
                  label="Font size"
                  value={bg.fontSize}
                  min={6}
                  max={60}
                  step={0.5}
                  unit="vw"
                  onChange={(v) => setBgConfigs((p) => ({ ...p, [slide.id]: { ...p[slide.id], fontSize: v } }))}
                  onCopy={() => handleCopyProperty("bg", "fontSize", bg.fontSize)}
                />
                <PanelSlider
                  label="Vertical position"
                  value={bg.topPct}
                  min={0}
                  max={60}
                  step={1}
                  unit="%"
                  onChange={(v) => setBgConfigs((p) => ({ ...p, [slide.id]: { ...p[slide.id], topPct: v } }))}
                  onCopy={() => handleCopyProperty("bg", "topPct", bg.topPct)}
                />
                <PanelSlider
                  label="Letter spacing"
                  value={bg.letterSpacing}
                  min={-0.08}
                  max={0.2}
                  step={0.005}
                  unit="em"
                  onChange={(v) => setBgConfigs((p) => ({ ...p, [slide.id]: { ...p[slide.id], letterSpacing: v } }))}
                  onCopy={() => handleCopyProperty("bg", "letterSpacing", bg.letterSpacing)}
                />
                <div className="flex items-center gap-1.5 mt-3 mb-1 pt-2 border-t border-white/10">
                   <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Entrance Animation</span>
                   <button onClick={() => handleCopyProperty("bg", "entrance", bg.entrance || "fade")} className="p-0.5 text-white/30 hover:text-rr-gold-bright transition-colors rounded hover:bg-white/5" title="Apply to other slides"><Copy className="w-[10px] h-[10px]" /></button>
                </div>
                <select
                  value={bg.entrance || "fade"}
                  onChange={(e) => setBgConfigs((p) => ({ ...p, [slide.id]: { ...p[slide.id], entrance: e.target.value } }))}
                   className="w-full mt-1 bg-rr-navy-deep text-[11px] text-rr-cream/80 border border-rr-cream/15 rounded px-2 py-1.5 outline-none cursor-pointer focus:border-rr-gold"
                >
                  <option value="fade">Fade Only</option>
                  <option value="up">Slide Up</option>
                  <option value="down">Slide Down</option>
                  <option value="left">Slide from Left</option>
                  <option value="right">Slide from Right</option>
                </select>
                <button
                  onClick={resetBg}
                  className="mt-4 w-full text-[11px] font-semibold text-rr-cream/80 border border-rr-cream/15 rounded-[3px] py-1.5 hover:bg-rr-cream/10 transition-colors"
                >
                  Reset this slide's BG
                </button>
              </div>
            )}

            {/* ── CARD TAB ── */}
            {editTab === "card" && (
              <div>
                <PanelSlider
                  label="Container width"
                  value={card.width || 340}
                  min={200}
                  max={800}
                  step={5}
                  unit="px"
                  onChange={(v) => setCardConfigs((p) => ({ ...p, [slide.id]: { ...p[slide.id], width: v } }))}
                  onCopy={() => handleCopyProperty("card", "width", card.width || 340)}
                />
                <PanelSlider
                  label="Nudge left/right (x)"
                  value={card.x}
                  min={-300}
                  max={300}
                  step={1}
                  unit="px"
                  onChange={(v) => setCardConfigs((p) => ({ ...p, [slide.id]: { ...p[slide.id], x: v } }))}
                  onCopy={() => handleCopyProperty("card", "x", card.x)}
                />
                <PanelSlider
                  label="Nudge up/down (y)"
                  value={card.y}
                  min={-300}
                  max={300}
                  step={1}
                  unit="px"
                  onChange={(v) => setCardConfigs((p) => ({ ...p, [slide.id]: { ...p[slide.id], y: v } }))}
                  onCopy={() => handleCopyProperty("card", "y", card.y)}
                />
                <PanelSlider
                  label="Title size"
                  value={card.titleSize}
                  min={12}
                  max={64}
                  step={1}
                  unit="px"
                  onChange={(v) => setCardConfigs((p) => ({ ...p, [slide.id]: { ...p[slide.id], titleSize: v } }))}
                  onCopy={() => handleCopyProperty("card", "titleSize", card.titleSize)}
                />
                <PanelSlider
                  label="Description size"
                  value={card.descSize}
                  min={10}
                  max={24}
                  step={1}
                  unit="px"
                  onChange={(v) => setCardConfigs((p) => ({ ...p, [slide.id]: { ...p[slide.id], descSize: v } }))}
                  onCopy={() => handleCopyProperty("card", "descSize", card.descSize)}
                />
                <PanelSlider
                  label="Text shadow intensity"
                  value={card.shadowAlpha ?? 65}
                  min={0}
                  max={100}
                  step={1}
                  unit="%"
                  onChange={(v) => setCardConfigs((p) => ({ ...p, [slide.id]: { ...p[slide.id], shadowAlpha: v } }))}
                  onCopy={() => handleCopyProperty("card", "shadowAlpha", card.shadowAlpha ?? 65)}
                />
                <button
                  onClick={resetCard}
                  className="mt-4 w-full text-[11px] font-semibold text-rr-cream/80 border border-rr-cream/15 rounded-[3px] py-1.5 hover:bg-rr-cream/10 transition-colors"
                >
                  Reset this slide's Card
                </button>
              </div>
            )}

            {/* ── BOTTOM BAR TAB ── */}
            {editTab === "bottomBar" && (
              <div>
                <PanelSlider
                  label="Stats value size"
                  value={bottomBarConfig.statsValueSize}
                  min={10}
                  max={40}
                  step={1}
                  unit="px"
                  onChange={(v) => setBottomBarConfig((p) => ({ ...p, statsValueSize: v }))}
                />
                <PanelSlider
                  label="Stats label size"
                  value={bottomBarConfig.statsLabelSize}
                  min={8}
                  max={20}
                  step={1}
                  unit="px"
                  onChange={(v) => setBottomBarConfig((p) => ({ ...p, statsLabelSize: v }))}
                />
                <PanelSlider
                  label="Bottom padding (y)"
                  value={bottomBarConfig.paddingBottom}
                  min={0}
                  max={80}
                  step={1}
                  unit="px"
                  onChange={(v) => setBottomBarConfig((p) => ({ ...p, paddingBottom: v }))}
                />
                <PanelSlider
                  label="Side padding (x)"
                  value={bottomBarConfig.paddingX ?? 24}
                  min={0}
                  max={120}
                  step={1}
                  unit="px"
                  onChange={(v) => setBottomBarConfig((p) => ({ ...p, paddingX: v }))}
                />
              </div>
            )}
          </div>

          {/* Footer: Copy config */}
          <div className="px-4 pb-3 pt-0 border-t border-white/10">
            <button
              onClick={copyConfig}
               className="mt-3 w-full flex items-center justify-center gap-1.5 text-[11px] font-bold text-rr-navy-deep bg-rr-gold hover:bg-rr-gold-bright rounded-[3px] py-2 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Copied!" : "Copy full config (all slides + layout)"}
            </button>
            <p className="mt-2 text-[9px] leading-relaxed text-muted-foreground text-center">
              Exports image transforms + bgConfig + cardConfig as JSON
            </p>
          </div>
        </div>
      )}

      {/* ── COPY PROPERTY MODAL ── */}
      {copyPrompt.isOpen && (
         <div className="fixed inset-0 z-[100] flex items-center justify-center bg-rr-navy-deep/60 backdrop-blur-sm pointer-events-auto">
          <div className="bg-rr-navy-mid border border-rr-cream/10 p-6 rounded-lg shadow-2xl w-[320px] animate-fade-in">
            <h3 className="text-rr-gold-bright font-semibold text-sm uppercase tracking-widest mb-2">Apply Property</h3>
            <p className="text-rr-cream/60 text-xs mb-4">
              Apply <strong className="text-rr-cream/80">{copyPrompt.propertyKey}</strong> to which slides?
              <br/>
              <span className="text-[10px] opacity-70">Enter comma-separated (1-{slides.length}) or 'all'</span>
            </p>
            <input 
              type="text" 
              value={copyPrompt.inputStr} 
              onChange={(e) => setCopyPrompt(prev => ({ ...prev, inputStr: e.target.value }))}
               className="w-full bg-rr-navy-deep border border-rr-cream/20 rounded px-3 py-2 text-sm text-rr-cream outline-none focus:border-rr-gold mb-5"
              autoFocus
              onKeyDown={(e) => e.key === "Enter" && executeCopyProperty()}
            />
            <div className="flex items-center justify-end gap-3">
              <button 
                onClick={() => setCopyPrompt(prev => ({ ...prev, isOpen: false }))}
                className="text-xs font-semibold text-rr-cream/60 hover:text-rr-cream"
              >
                Cancel
              </button>
              <button 
                onClick={executeCopyProperty}
                className="text-xs bg-rr-gold hover:bg-rr-gold-bright text-rr-navy-deep font-bold px-4 py-2 rounded transition-colors"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes kenBurns {
          from { transform: scale(1); }
          to { transform: scale(var(--kb-scale, 1.06)); }
        }
        @keyframes slideInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInDown { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes railFill {
          from { width: 0%; }
          to { width: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in, .animate-cinematic-up { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

/* ─── PanelSlider ─────────────────────────────────────────────────────────────
   Tiny reusable slider row used exclusively inside the dev adjustment panel.
   Renders a label, the current value, and a range input with gold accent.
────────────────────────────────────────────────────────────────────────────── */
function PanelSlider({
  label,
  value,
  min,
  max,
  step,
  unit = "",
  onChange,
  onCopy,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
  onChange: (v: number) => void;
  onCopy?: () => void;
}) {
  return (
    <div className="mt-2.5">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] font-semibold text-rr-cream/80">{label}</span>
          {onCopy && (
            <button 
              onClick={onCopy} 
              className="p-0.5 text-white/30 hover:text-rr-gold-bright transition-colors rounded hover:bg-white/5" 
              title="Apply this value to other slides"
            >
              <Copy className="w-[10px] h-[10px]" />
            </button>
          )}
        </div>
        <span className="font-mono text-[11px] text-rr-gold tabular-nums">
          {value.toFixed(step < 1 ? 2 : 0)}{unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-1 appearance-none rounded-full outline-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, var(--rr-gold) ${((value - min) / (max - min)) * 100}%, rgba(255,255,255,0.12) ${((value - min) / (max - min)) * 100}%)`,
          accentColor: "var(--rr-gold)",
        }}
      />
    </div>
  );
}

export default Hero;