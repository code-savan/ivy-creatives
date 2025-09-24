'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQs() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'What services does Ivy Creatives offer?',
            answer: 'We build websites, create media content, and design graphics that help your brand grow online.',
        },
        {
            id: 'item-2',
            question: 'Who do you work with?',
            answer: 'We work with businesses, brands, and stores of all sizes looking to improve their digital presence.',
        },
        {
            id: 'item-3',
            question: 'How long does a project take?',
            answer: 'Timelines vary by project, but we focus on delivering fast without compromising quality.',
        },
        {
            id: 'item-4',
            question: 'Can you handle ongoing updates and support?',
            answer: "Yes, we provide email and web support, plus analytics to monitor your digital performance.",
        },
        {
            id: 'item-5',
            question: 'Do you customize designs for my brand?',
            answer: 'Absolutely. Everything we create is tailored to match your brand identity and goals.',
        },
    ]

    return (
        <section className="py-16 md:py-24" id='faq'>
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-4 text-balance">Discover quick and comprehensive answers to common questions about our platform, services, and features.</p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dashed">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6 px-8 text-center">
                        Can&apos;t find what you&apos;re looking for? Contact our{' '}
                        <Link
                            href="#"
                            className="text-primary font-medium hover:underline">
                            customer support team
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
