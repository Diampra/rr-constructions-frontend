import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Calendar, User, ArrowRight, Search, Building2, HardHat, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Article {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
}

const staticArticles: Article[] = [
  {
    id: "1",
    title: "Engineering Multi-Specialty Hospital Infrastructure: Lessons from R L Jalappa Hospital",
    category: "Healthcare Engineering",
    excerpt: "Constructing over 2,20,000+ Sq. Ft. of medical infrastructure requires strict sterility protocols, heavy structural load balancing, and advanced emergency planning.",
    author: "Mr. V. Rajashekhar, Partner",
    date: "July 15, 2026",
  },
  {
    title: "40 Years of Civil Engineering Excellence in Karnataka",
    id: "2",
    category: "Corporate Legacy",
    excerpt: "How RR Constructions & RR Infra built over 500+ projects through ethical business practices, technical precision, and unwavering safety standards.",
    author: "Mr. T. M. Raghu, Partner",
    date: "June 28, 2026",
  },
  {
    id: "3",
    title: "Key Structural Safety Standards for Commercial Complexes",
    category: "Commercial Construction",
    excerpt: "Understanding seismic load resistance, high-grade steel reinforcements, and fire safety systems in modern commercial building construction.",
    author: "Engineering Team",
    date: "May 10, 2026",
  },
  {
    id: "4",
    title: "Designing Sustainable Educational & Institutional Facilities",
    category: "Educational Infrastructure",
    excerpt: "Creating safe, future-ready learning environments with acoustic insulation, natural ventilation, and durable educational grounds.",
    author: "Project Planning Dept.",
    date: "April 04, 2026",
  }
];

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Healthcare Engineering", "Corporate Legacy", "Commercial Construction", "Educational Infrastructure"];

  const filteredArticles = staticArticles.filter((article) => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Engineering Insights & Articles | RR Constructions & RR Infra</title>
        <meta name="description" content="Technical insights, construction case studies, and engineering updates from RR Constructions & RR Infra leadership." />
      </Helmet>

      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-secondary text-center">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">
                Technical Insights & Legacy
              </span>
              <div className="w-12 h-px bg-gold" />
            </div>
            <h1 className="font-serif text-4xl md:text-6xl mb-6 font-bold text-foreground">
              Construction & Engineering Insights
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Knowledge and case studies from 40+ years of building commercial, medical, and residential infrastructure in Karnataka.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            {/* Search + Categories */}
            <div className="flex flex-col md:flex-row gap-6 justify-between mb-12 items-center">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full pl-11 py-2.5 bg-card border border-gold/20 rounded-lg text-sm text-foreground outline-none focus:ring-2 focus:ring-gold"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setActiveCategory(c)}
                    className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
                      activeCategory === c
                        ? "bg-gold text-foreground shadow-sm"
                        : "bg-card text-foreground/80 hover:bg-gold/10 hover:text-gold border border-border"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredArticles.map((article) => (
                <div key={article.id} className="bg-card border border-gold/20 rounded-xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <span className="text-xs font-bold text-gold uppercase tracking-wider bg-gold/10 px-3 py-1 rounded-full border border-gold/20 inline-block mb-4">
                      {article.category}
                    </span>
                    <h3 className="font-serif text-2xl font-bold mb-3 text-foreground leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground font-medium">
                    <span className="flex items-center gap-1.5 text-foreground font-semibold">
                      <User className="w-3.5 h-3.5 text-gold" />
                      {article.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      {article.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <p className="text-center text-muted-foreground mt-16">
                No engineering insights found matching your search query.
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BlogPage;
