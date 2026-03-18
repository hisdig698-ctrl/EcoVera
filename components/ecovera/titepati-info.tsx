import { Leaf, Droplets, Shield, Sprout, TrendingUp, Heart } from "lucide-react"

interface TitepatiInfoProps {
  expanded?: boolean
}

export function TitepatiInfo({ expanded = false }: TitepatiInfoProps) {
  const facts = [
    {
      icon: Leaf,
      title: "Ancient Tradition",
      description: "Used in Nepali culture for centuries in traditional medicine and spiritual practices"
    },
    {
      icon: Droplets,
      title: "Rich In Compounds",
      description: "Contains powerful antimicrobial, anti-inflammatory, and antioxidant properties"
    },
    {
      icon: Shield,
      title: "Natural Purity",
      description: "Sustainably harvested without synthetic pesticides or harmful chemicals"
    },
    {
      icon: Sprout,
      title: "Eco-Friendly Growth",
      description: "Drought-tolerant, requires minimal water, and regenerates after harvesting"
    },
    {
      icon: TrendingUp,
      title: "Rising Demand",
      description: "Global market increasingly embracing herbal and natural wellness products"
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Supports rural farmers and promotes sustainable agricultural practices"
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
            About Our Ingredient
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 text-balance">
            Titepati (Artemisia Vulgaris)
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A treasured Nepali herb with remarkable healing properties, sustainably sourced to support rural communities
          </p>
        </div>

        {/* Facts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 sm:mb-16">
          {facts.map((fact) => (
            <div
              key={fact.title}
              className="bg-background p-6 sm:p-8 rounded-2xl ecovera-shadow hover:scale-[1.02] ecovera-transition"
            >
              <fact.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="font-serif text-lg sm:text-xl text-foreground mb-2">{fact.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{fact.description}</p>
            </div>
          ))}
        </div>

        {/* Detailed Information */}
        {expanded && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-background p-6 sm:p-10 rounded-2xl ecovera-shadow space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-3">What Is Titepati?</h3>
                <p>
                  Titepati (Artemisia vulgaris) is a medicinal and aromatic plant that grows naturally in the hills and rural areas of Nepal. For generations, it has been used in traditional medicine, religious rituals, and spiritual cleansing practices. The plant's strong medicinal properties and increasing global demand for natural herbal products make it an ideal ingredient for sustainable, eco-friendly wellness products.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-3">Health Benefits</h3>
                <ul className="space-y-2 ml-4">
                  <li>• <span className="text-foreground font-semibold">Antimicrobial Properties</span> - Natural defense against bacteria and viruses</li>
                  <li>• <span className="text-foreground font-semibold">Anti-inflammatory Effects</span> - Helps reduce inflammation and swelling</li>
                  <li>• <span className="text-foreground font-semibold">Skin Healing</span> - Traditional use for treating wounds and skin conditions</li>
                  <li>• <span className="text-foreground font-semibold">Digestive Support</span> - Used in traditional medicine for wellness</li>
                  <li>• <span className="text-foreground font-semibold">Therapeutic Warmth</span> - Central to moxibustion and traditional heat therapy</li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-3">Sustainable Sourcing</h3>
                <p>
                  Our titepati is ethically harvested from rural farming communities using sustainable, low-impact methods. The plant grows naturally, requires minimal water, and regenerates after harvesting—making it an environmentally responsible choice. Every purchase directly supports farmers and promotes eco-friendly agriculture while reducing reliance on underutilized agricultural land.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-3">Our Commitment</h3>
                <p>
                  We partner directly with rural farmers to ensure fair compensation and sustainable practices. By choosing products made with titepati, you're not just investing in your health—you're supporting rural economic development, promoting natural wellness, and contributing to a more sustainable world. Each product represents our commitment to quality, sustainability, and social impact.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
