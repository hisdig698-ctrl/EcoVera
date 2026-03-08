import { Header } from "@/components/ecovera/header"
import { Footer } from "@/components/ecovera/footer"
import { RotateCcw, Shield, Clock, Mail } from "lucide-react"

const steps = [
    { icon: Mail, title: "Contact Us", description: "Email hello@ecovera.com with your order number and reason for return." },
    { icon: RotateCcw, title: "Ship It Back", description: "We'll send you a free prepaid return label within 24 hours." },
    { icon: Clock, title: "Processing", description: "Returns are processed within 3-5 business days of receipt." },
    { icon: Shield, title: "Refund", description: "Full refund to your original payment method within 5-7 business days." },
]

export default function ReturnsPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <div className="pt-28 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">Returns</span>
                        <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4 text-balance">Returns & Exchanges</h1>
                        <p className="text-base sm:text-lg text-muted-foreground">Hassle-free returns within 30 days. Your satisfaction is our priority.</p>
                    </div>

                    {/* Steps */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {steps.map((step, index) => (
                            <div key={step.title} className="text-center">
                                <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center mx-auto mb-4 ecovera-shadow">
                                    <step.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                                </div>
                                <div className="text-xs text-primary font-medium mb-1">Step {index + 1}</div>
                                <h3 className="font-medium text-foreground mb-1 text-sm">{step.title}</h3>
                                <p className="text-xs text-muted-foreground">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-8 text-muted-foreground">
                        <div className="bg-card rounded-2xl p-6 sm:p-8 ecovera-shadow">
                            <h2 className="font-serif text-xl text-foreground mb-3">Return Policy</h2>
                            <ul className="space-y-2 text-sm">
                                <li>• Unused and sealed products may be returned within <strong className="text-foreground">30 days</strong> of purchase for a full refund.</li>
                                <li>• Opened products may be returned within <strong className="text-foreground">14 days</strong> if you&apos;re unsatisfied with the results.</li>
                                <li>• Sale items are final sale and cannot be returned.</li>
                                <li>• Gift cards are non-refundable.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-2xl p-6 sm:p-8 ecovera-shadow">
                            <h2 className="font-serif text-xl text-foreground mb-3">Exchanges</h2>
                            <p className="text-sm">Want a different product or size? We&apos;re happy to exchange. Contact us and we&apos;ll arrange a seamless swap. Exchange shipping is on us.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
