import { Header } from "@/components/ecovera/header"
import { Footer } from "@/components/ecovera/footer"

export default function TermsPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <div className="pt-28 pb-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4 text-balance">Terms of Service</h1>
                        <p className="text-sm text-muted-foreground">Last updated: March 2026</p>
                    </div>

                    <div className="space-y-8 text-muted-foreground text-sm leading-relaxed">
                        <section>
                            <h2 className="font-serif text-xl text-foreground mb-3">1. Acceptance of Terms</h2>
                            <p>By accessing and using the EcoVera website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-foreground mb-3">2. Products & Pricing</h2>
                            <p>All prices are listed in US dollars and are subject to change without notice. We make every effort to display accurate product information, but we do not warrant that descriptions, pricing, or images are error-free. We reserve the right to correct any errors and to cancel or refuse orders placed at incorrect prices.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-foreground mb-3">3. Orders & Payment</h2>
                            <p>By placing an order, you represent that you are at least 18 years old and that the payment information you provide is accurate. We reserve the right to cancel any order for any reason, including suspected fraud.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-foreground mb-3">4. Shipping & Delivery</h2>
                            <p>Shipping times are estimates and not guaranteed. EcoVera is not responsible for delays caused by carriers, customs, or circumstances beyond our control. Risk of loss passes to you upon delivery to the carrier.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-foreground mb-3">5. Returns & Refunds</h2>
                            <p>Please refer to our Returns page for complete details on our return and refund policies. All returns must be initiated within 30 days of purchase.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-foreground mb-3">6. Intellectual Property</h2>
                            <p>All content on this website — including text, images, logos, and designs — is the property of EcoVera and is protected by copyright and trademark laws. You may not reproduce, distribute, or use any content without our written permission.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-foreground mb-3">7. Limitation of Liability</h2>
                            <p>EcoVera is not liable for any indirect, incidental, or consequential damages arising from your use of our products or website. Our total liability shall not exceed the amount you paid for the relevant product.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-foreground mb-3">8. Changes to Terms</h2>
                            <p>We may update these terms from time to time. Continued use of our website after changes constitutes acceptance of the updated terms. We encourage you to review this page periodically.</p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl text-foreground mb-3">9. Contact</h2>
                            <p>For questions about these terms, contact us at <a href="mailto:legal@ecovera.com" className="text-primary hover:underline">legal@ecovera.com</a>.</p>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
