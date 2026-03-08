import { Header } from "@/components/ecovera/header"
import { Footer } from "@/components/ecovera/footer"
import { Leaf, Heart, Globe, Sparkles, Recycle, Users } from "lucide-react"
import Image from "next/image"

const values = [
    {
        icon: Leaf,
        title: "100% Natural",
        description: "Every ingredient is sourced from nature. No synthetic chemicals, parabens, or artificial fragrances ever touch our formulas."
    },
    {
        icon: Heart,
        title: "Cruelty-Free",
        description: "We never test on animals and never will. All our products are certified cruelty-free and vegan-friendly."
    },
    {
        icon: Globe,
        title: "Ethically Sourced",
        description: "We partner with fair-trade certified suppliers who share our commitment to environmental and social responsibility."
    },
    {
        icon: Recycle,
        title: "Eco Packaging",
        description: "Our packaging is made from recycled and biodegradable materials. We're working toward a zero-waste future."
    },
    {
        icon: Sparkles,
        title: "Clean Beauty",
        description: "Our clean beauty standards exceed industry norms. Every product undergoes rigorous purity testing."
    },
    {
        icon: Users,
        title: "Community First",
        description: "We invest in the communities where our ingredients are sourced, supporting education and sustainable farming."
    }
]

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero */}
            <section className="pt-28 pb-16 sm:pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
                            Our Story
                        </span>
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground mb-6 text-balance">
                            Beauty that breathes with nature
                        </h1>
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                            EcoVera was born from a simple belief: skincare should be as pure and gentle as nature intended. We create products that honor your skin and the planet.
                        </p>
                    </div>
                </div>
            </section>

            {/* Image + Story */}
            <section className="pb-20 sm:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden ecovera-shadow">
                            <Image
                                src="/images/bento-skincare-1.jpg"
                                alt="EcoVera natural skincare"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">
                                From seed to skin
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Founded in 2020, EcoVera started as a small kitchen experiment — a quest to create skincare that actually felt natural. We were tired of &ldquo;natural&rdquo; labels hiding behind long lists of chemicals we couldn&apos;t pronounce.
                                </p>
                                <p>
                                    Today, we source our ingredients from organic farms and fair-trade cooperatives around the world. Every formula is crafted by our team of botanists and dermatologists to deliver real results without compromising on purity.
                                </p>
                                <p>
                                    Our commitment goes beyond skincare. We&apos;re dedicated to sustainability across our entire supply chain — from biodegradable packaging to carbon-neutral shipping. Because caring for your skin shouldn&apos;t cost the earth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-20 sm:py-24 bg-card">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
                            Our Values
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground text-balance">
                            What we stand for
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="bg-background p-6 sm:p-8 rounded-2xl ecovera-shadow"
                            >
                                <value.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                                <h3 className="font-serif text-xl text-foreground mb-2">{value.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sustainability */}
            <section id="sustainability" className="py-20 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
                            Sustainability
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 text-balance">
                            Our pledge to the planet
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed text-left sm:text-center">
                            <p>
                                By 2025, we achieved 100% recyclable packaging across all product lines. Our glass bottles are infinitely recyclable, and our labels are printed with soy-based inks on FSC-certified paper.
                            </p>
                            <p>
                                We offset 150% of our carbon emissions through verified reforestation projects. Every order you place contributes to planting trees in areas affected by deforestation.
                            </p>
                            <p>
                                Our refill program reduces packaging waste by 80%. Simply return your empty containers to any EcoVera partner store and receive a discount on your next refill.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
