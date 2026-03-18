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

            {/* Titepati Deep Dive */}
            <section className="py-20 sm:py-24 bg-card">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
                                Our Core Ingredient
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 text-balance">
                                Why Titepati (Artemisia Vulgaris)?
                            </h2>
                        </div>

                        <div className="space-y-10 text-muted-foreground leading-relaxed">
                            <div>
                                <h3 className="font-serif text-2xl text-foreground mb-4">A Traditional Treasure with Modern Potential</h3>
                                <p>
                                    Titepati, scientifically known as Artemisia vulgaris, has been used in Nepali culture for generations. It grows naturally in the hills and rural areas of Nepal, making it an ideal crop for sustainable agricultural development. With strong medicinal value and increasing global demand for herbal products, titepati represents a tremendous opportunity for rural communities to generate income while promoting natural, eco-friendly products.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-serif text-2xl text-foreground mb-4">Market Opportunity</h3>
                                <p className="mb-3">
                                    The market demand for titepati is increasing rapidly due to growing popularity of herbal medicine and organic products. In Nepali markets, dried titepati leaves sell for approximately NPR 80–100 per kilogram. When processed into value-added products, the value increases significantly:
                                </p>
                                <ul className="space-y-2 ml-4">
                                    <li>• <span className="text-foreground font-semibold">Herbal incense (dhup)</span> - Traditional religious and wellness product</li>
                                    <li>• <span className="text-foreground font-semibold">Essential oils</span> - Premium aromatherapy and cosmetic products</li>
                                    <li>• <span className="text-foreground font-semibold">Herbal powders</span> - Medicinal and therapeutic applications</li>
                                    <li>• <span className="text-foreground font-semibold">Mugwort therapy products</span> - Traditional moxibustion and wellness</li>
                                    <li>• <span className="text-foreground font-semibold">Natural cosmetics</span> - Skin care and treatment products</li>
                                </ul>
                                <p className="mt-3">
                                    Herbal industries, Ayurvedic companies, and religious product manufacturers are primary buyers, with potential for international export markets.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-serif text-2xl text-foreground mb-4">Sustainable Farming Methods</h3>
                                <p className="mb-3">
                                    Titepati farming is particularly suited for small farmers because the plant requires minimal input while delivering high returns:
                                </p>
                                <div className="bg-background/50 p-6 rounded-lg space-y-3">
                                    <p><span className="text-foreground font-semibold">Soil & Climate:</span> Grows well in various soil types; prefers well-drained soil with moderate sunlight</p>
                                    <p><span className="text-foreground font-semibold">Cultivation:</span> Can be grown from seeds or cuttings; requires only land preparation and occasional weeding</p>
                                    <p><span className="text-foreground font-semibold">Water:</span> Naturally drought-tolerant; requires minimal irrigation</p>
                                    <p><span className="text-foreground font-semibold">Growth Timeline:</span> Ready for harvest in 4–6 months</p>
                                    <p><span className="text-foreground font-semibold">Harvesting:</span> Leaves and tender stems are cut and shade-dried to preserve medicinal quality. The plant regrows after cutting, allowing multiple harvests per year</p>
                                </div>
                                <p className="mt-3">
                                    This sustainability makes titepati ideal for farmer training and capacity building in rural areas.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-serif text-2xl text-foreground mb-4">Community Training & Knowledge Transfer</h3>
                                <p>
                                    Successful adoption of titepati farming requires effective communication and farmer engagement. Our approach includes community meetings, field demonstrations, and training programs covering cultivation techniques, harvesting methods, and product processing. Demonstration plots help farmers see direct results, while educational materials in Nepali language make learning accessible. By collaborating with agricultural experts, local cooperatives, and community leaders, we build farmer confidence and knowledge about this opportunity.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-serif text-2xl text-foreground mb-4">Market Connection & Sales Strategy</h3>
                                <p>
                                    Our integrated approach includes multiple sales channels: direct sales of raw leaves to herbal companies, farmer cooperative bulk sales, and branded value-added products. Marketing through social media, local fairs, and organic product stores increases market reach. With proper packaging and branding, titepati products can access national and international herbal markets.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Sustainable */}
            <section className="py-20 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
                            Sustainability
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 text-balance">
                            Building a sustainable business model
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                Titepati farming has strong potential to become a sustainable business model. The plant grows easily, requires low investment, and supports eco-friendly agriculture. Our three-pillar approach focuses on farmer training, value-added product production, and market connection, creating stable income for rural communities while promoting natural health products and environmental sustainability.
                            </p>
                            <p>
                                The plant's ability to regrow after harvesting, minimal water requirements, and lack of need for synthetic chemicals make it an environmentally responsible choice that directly contributes to UN Sustainable Development Goals including No Poverty, Good Health, Economic Growth, and Life on Land.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
