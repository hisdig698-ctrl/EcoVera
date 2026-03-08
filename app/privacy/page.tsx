import { Header } from "@/components/ecovera/header"
import { Footer } from "@/components/ecovera/footer"

export default function PrivacyPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <div className="pt-28 pb-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4 text-balance">Privacy Policy</h1>
                        <p className="text-sm text-muted-foreground">Last updated: March 2026</p>
                    </div>

                    <div className="space-y-8 text-muted-foreground text-sm leading-relaxed">
                        <section>
                            <h2 className="font-serif text-xl text-foreground mb-3">1. Information We Collect</h2>
                            <p>When you visit our site or make a purchase, we collect certain information including your name, email address, shipping address, and payment information. We also collect browsing data through cookies to improve your shopping experience.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-foreground mb-3">2. How We Use Your Information</h2>
                            <p>We use your information to process orders, communicate about your purchases, send marketing emails (with your consent), improve our website, and comply with legal obligations. We never sell your personal data to third parties.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-foreground mb-3">3. Data Protection</h2>
                            <p>We implement industry-standard security measures including SSL encryption, secure payment processing through Stripe, and regular security audits. Your payment information is never stored on our servers.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-foreground mb-3">4. Cookies</h2>
                            <p>We use essential cookies for site functionality and analytics cookies (with your consent) to understand how visitors interact with our site. You can manage cookie preferences through your browser settings.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-foreground mb-3">5. Your Rights</h2>
                            <p>You have the right to access, correct, or delete your personal data at any time. You can also opt out of marketing communications by clicking &ldquo;unsubscribe&rdquo; in any email or contacting us directly.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-foreground mb-3">6. Third-Party Services</h2>
                            <p>We use trusted third-party services for payment processing (Stripe), shipping (USPS, FedEx), and analytics (Vercel Analytics). Each of these services has their own privacy policies governing data use.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-foreground mb-3">7. Contact Us</h2>
                            <p>If you have questions about this privacy policy or your data, please contact us at <a href="mailto:privacy@ecovera.com" className="text-primary hover:underline">privacy@ecovera.com</a>.</p>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
