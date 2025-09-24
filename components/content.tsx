import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32" id='about'>
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Ivy Creatives brings together your ideas.</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-6 sm:mb-0">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl ">
                            <Image src="/logo.png" className="hidden rounded-[15px] dark:block" alt="payments illustration dark" width={1207} height={929} />
                            <Image src="/payments-light.png" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
                        </div>
                    </div>

                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">

                            Ivy Creatives is evolving to be more than a design agency. <span className="text-accent-foreground font-bold">It supports an entire ecosystem </span> — from branding to digital platforms helping businesses and creators grow.
                        </p>


                        <div className="pt-6">
                            <blockquote className="border-l-4 pl-4">
                                <p>At Ivy Creatives, we stand for innovation with purpose. Every project is an opportunity to merge design with functionality in a way that moves businesses forward. We are committed to building tools, stories, and platforms that help our clients thrive in a fast-moving digital world. Our mission is simple: create work that makes a measurable difference.</p>

                                <div className="mt-6 space-y-3">
                                    <cite className="block font-medium">David ODAT, CEO</cite>
                                    <img className="h-5 w-fit" src="/logofull.png" alt="Nvidia Logo" height="20" width="auto" />
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
