"use client"

import { useState } from "react"
import { Header } from "@/components/ecovera/header"
import { Footer } from "@/components/ecovera/footer"
import { ChevronDown } from "lucide-react"

const faqCategories = [
    {
        title: "Products",
        items: [
            { q: "Are EcoVera products suitable for sensitive skin?", a: "Yes! All our products are dermatologist-tested and formulated for sensitive skin. We avoid common irritants like synthetic fragrances, parabens, and sulfates. If you have specific allergies, please check our full ingredients list on each product page." },
            { q: "How long do your products last once opened?", a: "Most of our products have a shelf life of 12 months once opened. Each product features a PAO (Period After Opening) symbol indicating the exact timeframe. Store products in a cool, dry place away from direct sunlight." },
            { q: "Are your products vegan and cruelty-free?", a: "Absolutely. All EcoVera products are 100% vegan and cruelty-free. We never test on animals and are certified by Leaping Bunny and PETA." },
            { q: "Can I use multiple EcoVera products together?", a: "Yes, our products are designed to work beautifully together. We recommend starting with the Gentle Cleanser, followed by a serum, and finishing with a cream or oil. Check our product pages for recommended routines." },
        ]
    },
    {
        title: "Orders & Shipping",
        items: [
            { q: "How long does shipping take?", a: "Standard shipping takes 3-5 business days within the US. Express shipping (1-2 business days) is available at checkout. International shipping typically takes 7-14 business days." },
            { q: "Is there free shipping?", a: "Yes! We offer free standard shipping on all US orders over Rs. 50. International orders over Rs. 100 also qualify for free shipping." },
            { q: "Can I track my order?", a: "Absolutely. Once your order ships, you'll receive a tracking number via email. You can also track your order through our website using your order number." },
        ]
    },
    {
        title: "Returns & Refunds",
        items: [
            { q: "What is your return policy?", a: "We accept returns within 30 days of purchase for unused and sealed products. Opened products may be returned within 14 days if you're unsatisfied. We'll provide a full refund or exchange." },
            { q: "How do I initiate a return?", a: "Contact us at hello@ecovera.com with your order number and reason for return. We'll provide a prepaid return label and process your refund within 5-7 business days of receiving the product." },
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
