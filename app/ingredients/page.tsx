import { Header } from "@/components/ecovera/header"
import { Footer } from "@/components/ecovera/footer"
import { Leaf, Droplets, Sun, Flower2, Shell, TreePine } from "lucide-react"
import Image from "next/image"

const ingredients = [
    {
        icon: Leaf,
        name: "Rosehip Seed Oil",
        origin: "Chile",
        benefit: "Brightening & Anti-aging",
        description: "Cold-pressed from organic rosehip seeds, rich in vitamins A and C. Helps reduce scars, fine lines, and uneven skin tone."
    },
    {
        icon: Droplets,
        name: "Hyaluronic Acid",
        origin: "Plant-derived",
        benefit: "Deep Hydration",
        description: "Our plant-derived hyaluronic acid holds up to 1000x its weight in water, providing multi-layer hydration that lasts all day."
    },
    {
        icon: Sun,
        name: "Vitamin C",
        origin: "Kakadu Plum",
        benefit: "Brightening & Protection",
        description: "Sourced from Australian Kakadu plum — the world's richest natural source of Vitamin C. Powerful antioxidant protection."
    },
    {
        icon: Flower2,
        name: "Chamomile Extract",
        origin: "Egypt",
        benefit: "Soothing & Calming",
        description: "Organic Egyptian chamomile flower extract that calms irritation, reduces redness, and soothes sensitive skin."
    },
    {
        icon: Shell,
        name: "Squalane",
        origin: "Olive-derived",
        benefit: "Moisture Lock",
        description: "Plant-derived squalane from olives mimics your skin's natural oils, providing lightweight moisture without clogging pores."
    },
    {
        icon: TreePine,
        name: "Bakuchiol",
        origin: "India",
        benefit: "Natural Retinol Alternative",
        description: "A gentle plant-based alternative to retinol. Reduces wrinkles and firms skin without irritation or sun sensitivity."
    }
]

const promises = [
    "No parabens or sulfates",
    "No synthetic fragrances",
    "No artificial colors",
    "No phthalates",
    "No mineral oils",
    "No formaldehyde",
    "No animal testing",
    "No microplastics"
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
                                src="/images/bento-application.jpg"
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
                                We work directly with organic farms and cooperatives in over 12 countries. Every ingredient is traceable back to its source, ensuring the highest quality and ethical standards.
                            </p>
                            <p>
                                Our botanists visit partner farms annually to verify organic practices, fair labor conditions, and sustainable harvesting methods. This hands-on approach ensures that every product you use is truly pure.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
