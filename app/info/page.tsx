import { Header } from "@/components/ecovera/header"
import { Footer } from "@/components/ecovera/footer"
import { Leaf, Zap, TrendingUp, Award, Globe, DollarSign, Users, ExternalLink, CheckCircle2, Zap as Lightning, Sprout, MapPin, Heart, Handshake } from "lucide-react"
import Image from "next/image"

const sources = {
  nihArtemisia: { label: "NIH - Artemisia Vulgaris", url: "https://www.ncbi.nlm.nih.gov/pubmed/?term=artemisia+vulgaris" },
  artemisinin: { label: "Artemisinin & Malaria Research", url: "https://www.ncbi.nlm.nih.gov/pubmed/?term=artemisinin+antimalarial" },
  artemisiaMarket: { label: "Global Artemisinin Market Report", url: "https://www.businessresearchinsights.com/artemisinin-market" },
  textiles: { label: "Artemisia Textile Innovation", url: "https://www.tandfonline.com/doi/full/10.1080/15440478.2021.1900623" },
  nutrition: { label: "Artemisia Nutritional Properties", url: "https://www.ncbi.nlm.nih.gov/pubmed/?term=artemisia+nutrition+functional+food" },
  sdgs: { label: "UN Sustainable Development Goals", url: "https://sdgs.un.org/" }
}

const artemisiaAdvantages = [
  {
    feature: "Primary Strength",
    artemisia: "Aggressive antibacterial & rapid tissue healing",
    lavender: "Mild soothing & hydration",
    teatree: "Strong acne & fungal clearance",
    artemisiaIcon: true
  },
  {
    feature: "Sourcing Cost",
    artemisia: "Very Low (Locally sourced from bare lands)",
    lavender: "High (Often imported)",
    teatree: "High (Often imported)",
    artemisiaIcon: true
  },
  {
    feature: "Scalability",
    artemisia: "Extremely high due to local climate adaptability",
    lavender: "Moderate",
    teatree: "Moderate",
    artemisiaIcon: true
  }
]

const triadPillars = [
  {
    icon: Leaf,
    title: "Local Resources",
    subtitle: "The Foundation",
    description: "We identified a massive gap: high demand for herbal products paired with low utilization of local raw materials. We tap into Nepal's bare, unused village lands to cultivate mass quantities of raw Artemisia at phenomenally low costs."
  },
  {
    icon: Users,
    title: "Local People",
    subtitle: "The Engine",
    description: "We operate a Farmer-Integrated Model, collaborating directly with local farming networks. This eliminates the middleman, ensures fair compensation, and directly uplifts the local rural economy.",
    withIcon: true
  },
  {
    icon: Globe,
    title: "Global Brand",
    subtitle: "The Execution",
    description: "By controlling our local supply chain, our unit economics are built for global scale. Cost per unit: NPR 40-50. Retail price: NPR 80-100. This ensures healthy margins for both B2B and B2C channels."
  }
]

const sdgGoals = [
  {
    icon: TrendingUp,
    title: "SDG 8: Decent Work & Economic Growth",
    description: "We actively create sustainable income streams for local farmers, industry workers, and the youth."
  },
  {
    icon: Leaf,
    title: "SDG 12 & 15: Responsible Consumption & Life on Land",
    description: "We promote environmental sustainability by utilizing bare lands responsibly and elevating native herbal agriculture."
  },
  {
    icon: Award,
    title: "SDG 3: Good Health & Well-being",
    description: "We provide affordable, chemical-free hygiene products that genuinely improve skin health."
  }
]

const UsersIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-2a6 6 0 0112 0v2zm0 0h6v-2a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)

const SourceLink = ({ source }: { source: { label: string; url: string } }) => (
  <a
    href={source.url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition underline text-xs"
  >
    {source.label}
    <ExternalLink className="w-3 h-3" />
  </a>
)

export default function InfoPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block font-semibold">
              Our Vision & Mission
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-foreground mb-8 leading-tight">
              The EcoVera Artemisia Vision
            </h1>
            <p className="text-2xl sm:text-2xl text-foreground mb-8 leading-relaxed">
              "We are not just selling soap; we are building a regenerative system that transforms under-utilized resources into sustainable, global opportunities."
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Harnessing the ancient wisdom of Titepati (Artemisia) with modern science to create a scalable, community-first business model that regenerates land, uplifts farmers, and delivers genuine wellness at global scale.
            </p>
          </div>
        </div>
      </section>

      {/* Why Artemisia */}
      <section className="py-16 sm:py-20 border-t border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-8">
              Why Artemisia? <span className="text-primary text-lg">(The Unsung Hero of Herbs)</span>
            </h2>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                The EcoVera journey started with a simple, personal problem: severe, lifelong skin sensitivity. During a village holiday, a traditional paste made from crushed Titepati (Artemisia) completely healed the stubborn rashes and brought back a natural glow.
              </p>
              
              <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                When we realized that organic, natural remedies in the city were dominated by incredibly expensive foreign brands, we knew something had to change. We turned to Artemisia for three undeniable reasons:
              </p>
            </div>

            {/* Three Reasons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="flex items-start gap-3 mb-4">
                  <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <h3 className="font-semibold text-lg text-foreground">Clinically Backed Healing</h3>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Artemisia is globally recognized as the "mother of herbs." It is a powerhouse of anti-inflammatory, antimicrobial, and antioxidant properties, making it highly effective for treating skin conditions, wounds, and infections.
                </p>
                <div className="text-xs mt-3">
                  <SourceLink source={sources.nihArtemisia} />
                </div>
              </div>

              <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="flex items-start gap-3 mb-4">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <h3 className="font-semibold text-lg text-foreground">The Ultimate Multi-Tasker</h3>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Unlike other botanicals, Artemisia is incredibly versatile. It has active compounds (like Artemisinin) that are critical in fighting malaria, and its extracts are rapidly growing in demand for modern phytotherapy and cosmetics.
                </p>
                <div className="text-xs mt-3">
                  <SourceLink source={sources.artemisinin} />
                </div>
              </div>

              <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="flex items-start gap-3 mb-4">
                  <Leaf className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <h3 className="font-semibold text-lg text-foreground">Adaptable & Resilient</h3>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  It grows easily and abundantly on bare, under-utilized land without the need for intense chemical interventions or complex traditional farming techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artemisia vs The Rest */}
      <section className="py-16 sm:py-20 border-t border-border/30 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4 text-center">
              The Ultimate Showdown: Artemisia vs. The Rest
            </h2>
            <p className="text-foreground/70 text-center mb-12">
              While Tea Tree and Lavender are great, they are heavily imported and drive up costs for the average consumer. By utilizing local Artemisia, we bridge the gap between premium herbal quality and actual affordability.
            </p>

            {/* Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/30">
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Feature</th>
                    <th className="text-left py-4 px-4 font-semibold text-primary">Artemisia (Titepati)</th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground/70">Lavender Oil</th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground/70">Tea Tree Oil</th>
                  </tr>
                </thead>
                <tbody>
                  {artemisiaAdvantages.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-background/40" : ""}>
                      <td className="py-4 px-4 font-semibold text-foreground">{row.feature}</td>
                      <td className="py-4 px-4 text-primary">{row.artemisia}</td>
                      <td className="py-4 px-4 text-foreground/60">{row.lavender}</td>
                      <td className="py-4 px-4 text-foreground/60">{row.teatree}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Global Market */}
      <section className="py-16 sm:py-20 border-t border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-8">
              The Global Market & Our Boundless Potential
            </h2>

            <p className="text-foreground/80 text-lg leading-relaxed mb-2">
              The demand for natural, clean-label products is exploding. The global Artemisinin market alone is projected to reach <span className="font-semibold text-primary">$0.45 Billion by 2035</span>, driven largely by a shift toward organic extracts and phytotherapy.
            </p>
            <div className="text-sm mb-12">
              <SourceLink source={sources.artemisiaMarket} />
            </div>

            <p className="text-foreground/80 text-lg leading-relaxed mb-8">
              Our vision extends far beyond our initial line of high-quality herbal soaps. Because we control the raw material, we aim to build a global brand that utilizes every single part of the Artemisia plant across massive global industries:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-border/30 rounded-lg hover:border-primary/50 transition">
                <h3 className="font-semibold text-lg text-foreground mb-3">Health & Hygiene</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Expanding our current line to include organic sanitizers, hand washes, essential oils, and moxa.
                </p>
              </div>

              <div className="p-6 border border-border/30 rounded-lg hover:border-primary/50 transition">
                <h3 className="font-semibold text-lg text-foreground mb-3">Advanced Textiles</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Artemisia fibers are now being engineered into yarns to create breathable, naturally anti-bacterial, and mosquito-repellent clothing.
                </p>
                <div className="text-xs mt-3">
                  <SourceLink source={sources.textiles} />
                </div>
              </div>

              <div className="p-6 border border-border/30 rounded-lg hover:border-primary/50 transition">
                <h3 className="font-semibold text-lg text-foreground mb-3">Food & Nutrition</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Artemisia species possess high nutritional value and are increasingly utilized as functional food ingredients, spices, and health beverages to regulate gastrointestinal systems.
                </p>
                <div className="text-xs mt-3">
                  <SourceLink source={sources.nutrition} />
                </div>
              </div>

              <div className="p-6 border border-border/30 rounded-lg hover:border-primary/50 transition">
                <h3 className="font-semibold text-lg text-foreground mb-3">Future Categories</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Pharmaceutical, cosmeceuticals, biodegradable packaging, and agricultural applications across global markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Triad Ecosystem */}
      <section className="py-16 sm:py-20 border-t border-border/30 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
              How We Operate: The "Triad" Ecosystem
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Our business model is built on a highly optimized, scalable foundation. We don't just extract value; we create it at every level of the supply chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {triadPillars.map((pillar, idx) => {
              const IconComponent = pillar.icon
              return (
                <div key={idx} className="p-8 bg-background border border-border/30 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-serif text-xl text-foreground">{pillar.title}</h3>
                      <p className="text-xs text-primary/70 tracking-widest uppercase">{pillar.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                  {idx === 0 && (
                    <div className="mt-4 p-3 bg-primary/10 rounded text-sm text-primary/80">
                      <span className="font-semibold">Unit Economics:</span> 1 kg soap base yields 10-16 high-quality soaps
                    </div>
                  )}
                  {idx === 2 && (
                    <div className="mt-4 p-3 bg-primary/10 rounded text-sm text-primary/80">
                      <span className="font-semibold">Margins:</span> Cost per unit NPR 40-50, retail NPR 80-100
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Driving Real World Impact */}
      <section className="py-16 sm:py-20 border-t border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
              From Farm to Soap: Our Visual Journey
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Real people, real farms, real impact. Every stage of our process is grounded in transparency and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-lg overflow-hidden border border-border/30 hover:border-primary/50 transition">
              <div className="relative aspect-video bg-linear-to-br from-primary/20 to-primary/10 flex items-center justify-center text-foreground/50">
                <Image
                  src="/images/story/farm-cultivation.jpg"
                  alt="Artemisia fields - Fresh cultivation"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Step 1: Pristine Cultivation</h3>
                <p className="text-sm text-foreground/70">Local farmers cultivate Artemisia on bare, under-utilized land using sustainable practices. No chemical interventions—just nature and care.</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-border/30 hover:border-primary/50 transition">
              <div className="relative aspect-video bg-linear-to-br from-primary/20 to-primary/10 flex items-center justify-center text-foreground/50">
                <Image
                  src="/images/story/harvesting-drying.jpg"
                  alt="Harvesting and drying process"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Step 2: Traditional Harvesting</h3>
                <p className="text-sm text-foreground/70">Premium Artemisia is carefully harvested at peak potency, then traditionally dried to preserve all bioactive compounds and essential oils.</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-border/30 hover:border-primary/50 transition">
              <div className="relative aspect-video bg-linear-to-br from-primary/20 to-primary/10 flex items-center justify-center text-foreground/50">
                <Image
                  src="/images/story/soap-production.jpg"
                  alt="Handcrafted soap production"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Step 3: Handcrafted Production</h3>
                <p className="text-sm text-foreground/70">Using cold-pressed methods, we transform premium Artemisia into luxurious soaps. Each batch is carefully formulated for maximum efficacy.</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-border/30 hover:border-primary/50 transition">
              <div className="relative aspect-video bg-linear-to-br from-primary/20 to-primary/10 flex items-center justify-center text-foreground/50">
                <Image
                  src="/images/story/finished-products.jpg"
                  alt="Finished EcoVera products ready for retail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Step 4: Retail Ready</h3>
                <p className="text-sm text-foreground/70">Premium packaged soaps reach your hands—backed by scientific research, Made in Nepal, and ready to transform your skincare routine.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Driving Real World Impact */}
      <section className="py-16 sm:py-20 border-t border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
              Driving Real World Impact (SDGs)
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed">
              EcoVera Artemisia is engineered from the ground up to align with the <SourceLink source={sources.sdgs} />. We are proud to directly drive impact in three major areas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sdgGoals.map((goal, idx) => {
              const IconComponent = goal.icon
              return (
                <div key={idx} className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg">
                  <IconComponent className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-lg text-foreground mb-3">{goal.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team & Partnership Section */}
      <section className="py-16 sm:py-20 border-t border-border/30 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
              The EcoVera Team & Partners
            </h2>
            <p className="text-lg text-foreground/80">
              A passionate team of innovators, farmers, and change-makers united by a mission to regenerate communities and transform wellness globally.
            </p>
          </div>

          {/* Made in Nepal Partnership */}
          <div className="mb-16 p-8 bg-background border-2 border-primary/30 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-6">
              <div className="md:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0" />
                  <h3 className="font-serif text-2xl text-foreground">Proudly Made In Nepal</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We partner with <span className="font-semibold text-primary">Made In Nepal Store</span> to bring authentic, locally-sourced Artemisia products to the global market. This partnership ensures:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">100% Authentic</span>
                      <p className="text-sm text-foreground/70">Genuine Nepali cultivation and production methods</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">Direct Support</span>
                      <p className="text-sm text-foreground/70">Every purchase directly supports local communities</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">Global Reach</span>
                      <p className="text-sm text-foreground/70">Bringing Nepali heritage to the world</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="md:col-span-1">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-primary/20">
                  <Image
                    src="/images/story/made-in-nepal-store.jpg"
                    alt="Made In Nepal Store Partnership"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Team Highlights */}
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-8 text-center">Meet Our Dedicated Team</h3>
            <p className="text-center text-foreground/80 mb-8 max-w-2xl mx-auto">
              Our diverse team brings together agricultural expertise, sustainable business practices, and an unwavering commitment to regenerative impact.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="relative w-full aspect-square bg-linear-to-br from-primary/20 to-primary/10 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/story/team-member-1.jpg"
                    alt="Team Founder"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h4 className="font-semibold text-foreground text-sm">Founder & Vision</h4>
                <p className="text-xs text-foreground/60">Leading the regenerative movement</p>
              </div>
              <div className="text-center">
                <div className="relative w-full aspect-square bg-linear-to-br from-primary/20 to-primary/10 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/story/team-member-2.jpg"
                    alt="Operations Lead"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-semibold text-foreground text-sm">Operations</h4>
                <p className="text-xs text-foreground/60">Ensuring quality & scale</p>
              </div>
              <div className="text-center">
                <div className="relative w-full aspect-square bg-linear-to-br from-primary/20 to-primary/10 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/story/team-member-3.jpg"
                    alt="Community Manager"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-semibold text-foreground text-sm">Community Relations</h4>
                <p className="text-xs text-foreground/60">Farmer partnerships & impact</p>
              </div>
              <div className="text-center">
                <div className="relative w-full aspect-square bg-linear-to-br from-primary/20 to-primary/10 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/story/team-member-4.jpg"
                    alt="Product Specialist"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-semibold text-foreground text-sm">Product Development</h4>
                <p className="text-xs text-foreground/60">Formulation & quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Collaboration Section */}
      <section className="py-16 sm:py-20 border-t border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
              Working Together for Impact
            </h2>
            <p className="text-lg text-foreground/80">
              Our team collaborates daily to bring the vision of regenerative agriculture to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-lg overflow-hidden border border-border/30 hover:border-primary/50 transition">
              <Image
                src="/images/team-collaboration-1.jpg"
                alt="Team collaboration - Working together"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden border border-border/30 hover:border-primary/50 transition">
              <Image
                src="/images/team-collaboration-2.jpg"
                alt="Team collaboration - Product development"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 border-t border-border/30 bg-primary/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">
            Join the Regenerative Movement
          </h2>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            Be part of a transformative journey that combines heritage wisdom with modern sustainability. Every purchase supports local farmers, protects our planet, and delivers genuine benefits to your skin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/shop" className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition">
              Explore Our Products
            </a>
            <a href="/contact" className="px-8 py-3 border border-primary/50 text-foreground rounded-lg font-semibold hover:bg-primary/10 transition">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
