import { Header } from "@/components/ecovera/header"
import { Footer } from "@/components/ecovera/footer"
import { User, Lock, Heart, Package } from "lucide-react"
import Link from "next/link"

const features = [
    { icon: Package, title: "Order Tracking", description: "Track your orders in real-time from dispatch to delivery." },
    { icon: Heart, title: "Wishlist", description: "Save your favorite products and get notified about sales." },
    { icon: User, title: "Profile", description: "Manage your address, preferences, and payment methods." },
    { icon: Lock, title: "Secure", description: "Your data is encrypted and never shared with third parties." },
]

export default function AccountPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <div className="pt-28 pb-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
                        My Account
                    </span>
                    <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4 text-balance">
                        Your EcoVera account
                    </h1>
                    <p className="text-base sm:text-lg text-muted-foreground mb-12">
                        Sign up to track orders, save favorites, and get exclusive member offers.
                    </p>

                    {/* Coming Soon Card */}
                    <div className="bg-card rounded-2xl p-8 sm:p-12 ecovera-shadow mb-12">
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                            <User className="w-10 h-10 text-primary" strokeWidth={1.5} />
                        </div>
                        <h2 className="font-serif text-2xl text-foreground mb-3">Coming Soon</h2>
                        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                            We&apos;re building a beautiful account experience for you. In the meantime, you can still shop and checkout as a guest.
                        </p>
                        <Link
                            href="/shop"
                            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm tracking-wide ecovera-transition hover:bg-primary/90 ecovera-shadow"
                        >
                            Continue Shopping
                        </Link>
                    </div>

                    {/* Features Preview */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {features.map((feature) => (
                            <div key={feature.title} className="bg-card p-6 rounded-xl ecovera-shadow text-left">
                                <feature.icon className="w-6 h-6 text-primary mb-3" strokeWidth={1.5} />
                                <h3 className="font-medium text-foreground mb-1 text-sm">{feature.title}</h3>
                                <p className="text-xs text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
