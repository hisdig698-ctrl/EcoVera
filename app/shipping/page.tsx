import { Header } from "@/components/ecovera/header"
import { Footer } from "@/components/ecovera/footer"
import { Truck, Package, Globe, Clock } from "lucide-react"

const shippingOptions = [
    { icon: Package, title: "Standard Shipping", time: "3-5 Business Days", price: "Free over Rs. 50", description: "Our most popular option. Orders are processed within 1-2 business days." },
    { icon: Truck, title: "Express Shipping", time: "1-2 Business Days", price: "Rs. 9.99", description: "Need it fast? Express gets your order to you in 1-2 business days." },
    { icon: Globe, title: "International", time: "7-14 Business Days", price: "Free over Rs. 100", description: "We ship to over 30 countries. International orders over Rs. 100 ship free." },
    { icon: Clock, title: "Same-Day (Select Cities)", time: "Same Day", price: "Rs. 14.99", description: "Available in Portland, Seattle, and San Francisco for orders placed before 12 PM." },
]

export default function ShippingPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <div className="pt-28 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">Shipping</span>
                        <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4 text-balance">Shipping Information</h1>
                        <p className="text-base sm:text-lg text-muted-foreground">Fast, reliable shipping with eco-friendly packaging.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 mb-16">
                        {shippingOptions.map((option) => (
                            <div key={option.title} className="bg-card p-6 sm:p-8 rounded-2xl ecovera-shadow">
                                <option.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                                <h3 className="font-serif text-lg text-foreground mb-1">{option.title}</h3>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">{option.time}</span>
                                    <span className="text-xs text-muted-foreground font-medium">{option.price}</span>
                                </div>
                                <p className="text-sm text-muted-foreground">{option.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
                        <h2 className="font-serif text-2xl text-foreground">Packaging</h2>
                        <p>All orders are shipped in our signature recycled kraft boxes with biodegradable packing peanuts. Products are wrapped in tissue made from 100% post-consumer waste paper.</p>
                        <h2 className="font-serif text-2xl text-foreground">Order Tracking</h2>
                        <p>You&apos;ll receive a shipping confirmation email with a tracking link once your order ships. You can also track your order on our website using your order number and email address.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
