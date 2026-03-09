import { Header } from "@/components/ecovera/header"
import { Footer } from "@/components/ecovera/footer"
import { Leaf, Droplets, Sun, Flower2, Shell, TreePine } from "lucide-react"
import Image from "next/image"

const ingredients = [
    {
        icon: Leaf,
        name: "Artemisia Vulgaris (Titepati)",
        origin: "Nepal",
        benefit: "Anti-bacterial & Healing",
        description: "Our core ingredient, sustainably harvested by local farmers. Known for its powerful natural antiseptic, anti-inflammatory, and healing properties."
    },
    {
        icon: Droplets,
        name: "Pure Essential Oils",
        origin: "Himalayas",
        benefit: "Aromatherapy & Calming",
        description: "Extracted using traditional distillation methods to preserve their therapeutic benefits. Used to promote relaxation and skin health."
    },
    {
        icon: Sun,
        name: "Ayurvedic Okhati",
        origin: "Locally Sourced",
        benefit: "Skin Treatment",
        description: "A traditional blend of medicinal herbs used for centuries to treat skin conditions, provide deep nourishment, and restore natural balance."
    },
    {
        icon: Flower2,
        name: "Wildcrafted Botanicals",
        origin: "Forests",
        benefit: "Soothing & Rejuvenating",
        description: "Hand-picked natural extracts that calm irritation, reduce redness, and offer gentle care for sensitive and compromised skin."
    },
    {
        icon: Shell,
        name: "Natural Beeswax",
        origin: "Community Apiaries",
        benefit: "Moisture Lock",
        description: "Creates a protective, breathable barrier on the skin that locks in moisture while allowing it to heal without clogging pores."
    },
    {
        icon: TreePine,
        name: "Himalayan Spring Water",
        origin: "High Altitudes",
        benefit: "Pure Hydration",
        description: "Crystal clear water sourced directly from uncontaminated springs, providing the purest base for our formulations."
    }
]

const promises = [
    "No synthetic pesticides",
    "No artificial fragrances",
    "No chemical preservatives",
    "No animal testing",
    "100% natural extraction",
    "Fair trade guaranteed",
    "Community sourced",
    "Zero waste processing"
]

export default function IngredientsPage() {
    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero */}
            <section className="pt-28 pb-16 sm:pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
                            Our Ingredients
                        </span>
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground mb-6 text-balance">
                            Nature&apos;s finest, nothing less
                        </h1>
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                            We believe in full transparency. Every ingredient in our products is carefully selected for its purity, efficacy, and sustainability.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Ingredients */}
            <section className="pb-20 sm:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ingredients.map((ingredient) => (
                            <div
                                key={ingredient.name}
                                className="bg-card p-6 sm:p-8 rounded-2xl ecovera-shadow group hover:scale-[1.02] ecovera-transition"
                            >
                                <ingredient.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                                <h3 className="font-serif text-xl text-foreground mb-1">{ingredient.name}</h3>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">{ingredient.origin}</span>
                                    <span className="text-xs text-muted-foreground">{ingredient.benefit}</span>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">{ingredient.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clean Promise */}
            <section className="py-20 sm:py-24 bg-card">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
                                Our Promise
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 text-balance">
                                What you&apos;ll never find in our products
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                We maintain a strict NO-list of over 200 potentially harmful ingredients. Here are the most important ones we never use:
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                {promises.map((promise) => (
                                    <div key={promise} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                        <span className="text-sm text-foreground">{promise}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative aspect-square rounded-3xl overflow-hidden ecovera-shadow">
                            <Image
                                src="/images/healing-ritual-application.png"
                                alt="Natural ingredients"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Sourcing */}
            <section className="py-20 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
                            Sourcing
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 text-balance">
                            From farm to formula
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                We work directly with rural farming communities. Every batch of Artemisia is traceable back to its source, ensuring the highest quality, fair compensation for farmers, and ethical sourcing standards.
                            </p>
                            <p>
                                Our supply chain promotes the utilization of idle land and supports the local agrarian economy. This community-centered approach ensures that every product you use actively contributes to sustainable rural development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
