import { Activity, Camera, DraftingCompass, Mail, Zap } from 'lucide-react'
import Image from 'next/image'

export default function ServicesSection() {
    return (
        <section className="py-16 md:py-32" id='services'>
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-6 lg:gap-24">
                    <div className="lg:col-span-3">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl">Our Services</h2>
                            <p className="mt-6">We help brands scale with websites and digital content designed for performance and impact.</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-start *:gap-3 *:py-3">
                            <li className='flex items-start gap-3'>
                                <Mail className="size-5 mt-1" />
                                <div>
                                    <span>Web & Content Design</span>
                                    <p className='text-muted-foreground text-xs'>Beautiful, functional websites that reflect your brand.</p>
                                </div>
                            </li>
                            <li className='flex items-start gap-3'>
                                <Camera className="size-5 mt-1" />
                                <div>
                                    <span>Media & Content</span>
                                    <p className='text-muted-foreground text-xs'>Engaging digital content that connects with your audience.</p>
                                </div>
                            </li>
                            <li className='flex items-start gap-3'>
                                <DraftingCompass className="size-5 mt-1" />
                                <div>
                                    <span>Graphic Design</span>
                                    <p className='text-muted-foreground text-xs'>Custom visuals that make your brand stand out.</p>
                                </div>
                            </li>
                            <li className='flex items-start gap-3'>
                                <Activity className="size-5 mt-1" />
                                <div>
                                    <span>Analytics & Support</span>
                                    <p className='text-muted-foreground text-xs'>Track performance and get fast, reliable help when needed.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="border-border/50 relative p-3 lg:col-span-3 ">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px flex justify-center items-center">
                            {/* Invert the image colors using CSS filter */}
                            <Image
                                src="/services1.png"
                                className="hidden rounded-[15px] dark:block opacity-80"
                                alt="services illustration dark"
                                width={500}
                                height={400}
                                // style={{ filter: "invert(1)" }}
                            />
                            {/* <Image
                                src="/payments-light.png"
                                className="rounded-[15px] shadow dark:hidden"
                                alt="payments illustration light"
                                width={1207}
                                height={929}
                                style={{ filter: "invert(1)" }} */}
                            {/* /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
