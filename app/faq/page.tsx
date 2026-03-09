"use client"

import { useState } from "react"
import { Header } from "@/components/ecovera/header"
import { Footer } from "@/components/ecovera/footer"
import { ChevronDown } from "lucide-react"

const faqCategories = [
    {
        title: "Products",
        items: [
            { q: "What is Artemisia Vulgaris (Titepati)?", a: "Artemisia Vulgaris, locally known as Titepati in Nepal, is a powerful medicinal herb. We use it as the core ingredient in our products for its natural anti-bacterial, anti-inflammatory, and healing properties." },
            { q: "Are EcoVera products safe for daily use?", a: "Yes! All our products, including the Hand Sanitizer, Soaps, and Cosmetics Set, are formulated with natural ingredients and are safe for daily use. We avoid harsh synthetic chemicals." },
            { q: "How should I use the Tibetan Mugwort Incense?", a: "Light the tip of the incense stick, gently blow out the flame, and place it in a heat-resistant holder. It's excellent for air purification, meditation, and creating a calming environment." },
            { q: "Is the Mugwort Essential Oil pure?", a: "Absolutely. Our Mugwort Essential Oil is 100% pure and extracted using traditional distillation methods. We recommend diluting it with a carrier oil before applying directly to the skin." },
        ]
    },
    {
        title: "Sourcing & Impact",
        items: [
            { q: "How does EcoVera support local farmers?", a: "We partner directly with rural farmers in Nepal to cultivate Artemisia on previously underutilized land. By purchasing at fair prices and eliminating middlemen, we guarantee fair income and promote sustainable agriculture." },
            { q: "Where are the products manufactured?", a: "Our raw materials are cultivated and initially processed in rural farming communities to maximize local economic impact. Formulation and quality control are then finalized in our central facilities." },
        ]
    },
    {
        title: "Orders & Shipping",
        items: [
            { q: "Do you ship internationally?", a: "Yes, we ship globally! We are meeting the growing international demand for Artemisia-based products. International shipping typically takes 7-14 business days depending on the destination." },
            { q: "How can I track my order?", a: "Once your order is processed and shipped, you will receive a confirmation email with a tracking number that you can use on our website." },
        ]
    }
]

export default function FAQPage() {
    const [openItem, setOpenItem] = useState<string | null>(null)

    return (
        <main className="min-h-screen">
            <Header />

            <div className="pt-28 pb-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
                            Support
                        </span>
                        <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4 text-balance">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-base sm:text-lg text-muted-foreground">
                            Find quick answers to common questions about our products, shipping, and returns.
                        </p>
                    </div>

                    <div className="space-y-10">
                        {faqCategories.map((category) => (
                            <div key={category.title}>
                                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-4">{category.title}</h2>
                                <div className="border-t border-border/50">
                                    {category.items.map((item) => {
                                        const key = `${category.title}-${item.q}`
                                        return (
                                            <div key={key} className="border-b border-border/50">
                                                <button
                                                    type="button"
                                                    onClick={() => setOpenItem(openItem === key ? null : key)}
                                                    className="w-full flex items-center justify-between py-4 sm:py-5 text-left gap-4"
                                                >
                                                    <span className="font-medium text-foreground text-sm sm:text-base">{item.q}</span>
                                                    <ChevronDown className={`w-5 h-5 text-muted-foreground ecovera-transition flex-shrink-0 ${openItem === key ? "rotate-180" : ""}`} />
                                                </button>
                                                <div className={`overflow-hidden ecovera-transition ${openItem === key ? "max-h-96 pb-5" : "max-h-0"}`}>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
