import { Header } from "@/components/ecovera/header"
import { Footer } from "@/components/ecovera/footer"
import { Leaf, Heart, Globe, Sparkles, Recycle, Users } from "lucide-react"
import Image from "next/image"

const values = [
    {
        icon: Leaf,
        title: "Community-Centered",
        description: "We partner directly with farmers to cultivate Artemisia on idle land using improved agricultural practices."
    },
    {
        icon: Heart,
        title: "Fair Income",
        description: "Our direct partnerships guarantee fair income opportunities and transform rural agriculture into a profitable pursuit."
    },
    {
        icon: Globe,
        title: "Global Demand",
        description: "Meeting the rapidly expanding global demand for Artemisia in pharmaceutical, health, and wellness sectors."
    },
    {
        icon: Recycle,
        title: "Land Utilization",
        description: "We focus on the productive utilization of unused agricultural land, reducing waste and boosting rural productivity."
    },
    {
        icon: Sparkles,
        title: "Value Creation",
        description: "From supplying raw biomass to creating high-margin therapeutic and cosmetic products derived from Artemisia."
    },
    {
        icon: Users,
        title: "Social Impact",
        description: "Directly contributing to UN SDGs, including No Poverty, Good Health, Economic Growth, and Life on Land."
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
                            EcoVera Artemisia™ BioSolution
                        </span>
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground mb-6 text-balance">
                            Transforming Rural Resources
                        </h1>
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                            EcoVera Artemisia™ BioSolution is a sustainable agribusiness and social impact venture designed to transform underutilized rural resources into profitable, health-oriented, and environmentally responsible products.
                        </p>
                    </div>
                </div>
            </section>

            {/* Problem & Solution */}
            <section className="pb-20 sm:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        <div>
                            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">
                                The Problem We Address
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Many rural communities face persistent economic challenges. Farmers often struggle with low and unstable incomes, while traditional agriculture offers limited profitability. At the same time, large areas of agricultural land remain underutilized, and significant amounts of agricultural waste are not effectively managed.
                                </p>
                                <p>
                                    These issues contribute to increasing youth migration from rural areas, as young people leave their communities in search of better economic opportunities. As a result, rural regions experience declining productivity and weakened local economies.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">
                                Our Solution
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Our solution is based on community-centered Artemisia farming and processing. We partner directly with farmers to cultivate Artemisia on idle or underused land using improved agricultural practices and modern cultivation techniques that enhance productivity and yield.
                                </p>
                                <p>
                                    By integrating farmers into a value-driven supply chain, EcoVera helps transform rural agriculture into a sustainable and profitable economic activity, building local employment and agricultural capacity.
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
                            Our Vision
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 text-balance">
                            A scalable global bioenterprise
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed text-left sm:text-center">
                            <p>
                                Our vision is to build a scalable global Artemisia-based bioenterprise that empowers rural farmers, produces high-quality natural health products, and contributes to a more sustainable and inclusive agricultural economy.
                            </p>
                            <p>
                                We operate through a two-phase value creation strategy: initially generating early revenue by supplying raw Artemisia leaves and biomass to pharmaceutical companies, and later moving up the value chain by producing high-margin products like essential oils, therapeutic items, and natural disinfectants.
                            </p>
                            <p>
                                By combining low production costs with high-value market opportunities, we generate sustainable profits while maintaining strong social impact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
