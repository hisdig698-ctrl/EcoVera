"use client"

import { useState } from "react"
import { Header } from "@/components/ecovera/header"
import { Footer } from "@/components/ecovera/footer"
import { Mail, MapPin, Phone, Send, Check } from "lucide-react"

const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@ecovera.com", href: "mailto:hello@ecovera.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, label: "Address", value: "123 Green Lane, Portland, OR 97201", href: null },
]

export default function ContactPage() {
    const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitted(true)
        setFormState({ name: "", email: "", subject: "", message: "" })
    }

    return (
        <main className="min-h-screen">
            <Header />

            <div className="pt-28 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
                        <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
                            Get in Touch
                        </span>
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground mb-4 text-balance">
                            We&apos;d love to hear from you
                        </h1>
                        <p className="text-base sm:text-lg text-muted-foreground">
                            Have a question, suggestion, or just want to say hello? Reach out and we&apos;ll get back to you within 24 hours.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                        {/* Contact Info */}
                        <div className="lg:col-span-2 space-y-6">
                            {contactInfo.map((item) => (
                                <div key={item.label} className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center ecovera-shadow flex-shrink-0">
                                        <item.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground mb-0.5">{item.label}</p>
                                        {item.href ? (
                                            <a href={item.href} className="text-foreground hover:text-primary ecovera-transition font-medium">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-foreground font-medium">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}

                            <div className="pt-6 border-t border-border/50">
                                <h3 className="font-medium text-foreground mb-2">Business Hours</h3>
                                <div className="space-y-1 text-sm text-muted-foreground">
                                    <p>Monday – Friday: 9:00 AM – 6:00 PM PST</p>
                                    <p>Saturday: 10:00 AM – 4:00 PM PST</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-3">
                            {isSubmitted ? (
                                <div className="bg-card rounded-2xl p-8 sm:p-12 text-center ecovera-shadow">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                                        <Check className="w-8 h-8 text-primary" />
                                    </div>
                                    <h2 className="font-serif text-2xl text-foreground mb-3">Thank you!</h2>
                                    <p className="text-muted-foreground mb-6">Your message has been received. We&apos;ll get back to you within 24 hours.</p>
                                    <button
                                        type="button"
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-primary hover:underline text-sm"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 sm:p-8 ecovera-shadow space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">Name</label>
                                            <input
                                                id="name"
                                                type="text"
                                                required
                                                value={formState.name}
                                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary ecovera-transition placeholder:text-muted-foreground/60"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">Email</label>
                                            <input
                                                id="email"
                                                type="email"
                                                required
                                                value={formState.email}
                                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary ecovera-transition placeholder:text-muted-foreground/60"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                                        <input
                                            id="subject"
                                            type="text"
                                            required
                                            value={formState.subject}
                                            onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary ecovera-transition placeholder:text-muted-foreground/60"
                                            placeholder="How can we help?"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">Message</label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={5}
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary ecovera-transition placeholder:text-muted-foreground/60 resize-none"
                                            placeholder="Tell us more..."
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm tracking-wide ecovera-transition hover:bg-primary/90 ecovera-shadow w-full sm:w-auto"
                                    >
                                        Send Message
                                        <Send className="w-4 h-4 group-hover:translate-x-1 ecovera-transition" />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
