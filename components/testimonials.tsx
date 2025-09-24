import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

type Testimonial = {
    name: string
    role: string
    image: string
    quote: string
}

const testimonials: Testimonial[] = [
    {
        name: 'Eric Johnson',
        role: 'Software Engineer',
        image: 'https://images.unsplash.com/photo-1531384698654-7f6e477ca221?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        quote: 'Working with Ivy Creatives has completely transformed our digital presence.  The level of professionalism and attention to detail they bring is unmatched.',
    },
    {
        name: 'Paul Smith',
        role: 'Founder',
        image: 'https://images.unsplash.com/photo-1531299102504-fc718f23c100?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        quote: 'Ivy Creatives went above and beyond for our project. They didn’t just build us a website; they created a complete digital ecosystem. The results exceeded our expectations, and working with them has made scaling our online presence easier and more effective than ever.',
    },
    {
        name: 'John Ade',
        role: 'Marketing Manager',
        image: 'https://images.unsplash.com/photo-1532332248682-206cc786359f?q=80&w=989&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        quote: 'From the moment we engaged Ivy Creatives, we knew we were in good hands. They managed our social media channels, developed compelling posts, and ensured consistency in our brand messaging.',
    },
    {
        name: 'Harry Evans',
        role: 'Founder',
        image: 'https://images.unsplash.com/photo-1621817356451-9a270f4e8296?q=80&w=3015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        quote: 'Ivy Creatives made an incredible impact on our business by taking our digital presence to the next level. Working with them was smooth, professional, and highly rewarding.',
    },
    {
        name: 'Wisdom Chukwuma',
        role: 'Software Engineer',
        image: 'https://images.unsplash.com/photo-1533056344954-8acef6d63650?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        quote: 'Partnering with Ivy Creatives was one of the best decisions for our digital growth. The team’s communication, professionalism, and attention to detail made the entire process effortless.',
    },
    {
        name: 'Tunde Williams',
        role: 'Fullstack Developer',
        image: 'https://images.unsplash.com/photo-1695640479993-73a1f7a1b909?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        quote: 'Ivy Creatives provided a comprehensive solution for our digital presence. They built a responsive, modern website that perfectly represents our brand, and their media team created social content that consistently engages our audience. Their dedication, expertise, and creative insight have made a real difference in how our brand is perceived online.',
    },
    {
        name: 'Chuka Obi',
        role: 'Founder',
        image: 'https://images.unsplash.com/photo-1603659703645-9ce85f32dabe?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        quote: 'The Ivy Creatives team delivered exceptional results for our brand. They completely revamped our website, focusing on design, functionality, and performance. Beyond the site, they took control of our content creation for social media, producing posts and visuals that align perfectly with our messaging and brand tone.',
    },
    {
        name: 'Emeka Nnaji',
        role: 'Fullstack Developer',
        image: 'https://images.unsplash.com/photo-1611738960247-040979f95c9b?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        quote: 'Ivy Creatives helped us create a cohesive online presence. They built our website from the ground up, ensuring it is responsive, fast, and visually appealing. Their content team also managed social media posting and graphics, maintaining a consistent brand voice that resonates with our audience.',
    },
    {
        name: 'Femi Clarke',
        role: 'Marketing Lead',
        image: 'https://images.unsplash.com/photo-1749372229042-69f537b37544?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        quote: 'Ivy Creatives completely transformed how we present ourselves online. The team is professional, creative, and highly responsive, making it easy to implement changes or updates.',
    },
    // {
    //     name: 'Adaeze Collins',
    //     role: 'Product Manager',
    //     image: 'https://randomuser.me/api/portraits/women/12.jpg',
    //     quote: 'Ivy Creatives exceeded all expectations. They not only built a website that is sleek, fast, and user-friendly, but also created content for social media that genuinely connects with our audience. The impact on our online visibility and audience interaction has been remarkable, and their guidance throughout the project was invaluable.',
    // },
    {
        name: 'Chinwe Taylor',
        role: 'Brand Strategist',
        image: 'https://images.unsplash.com/photo-1640495016203-8939764b84fb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        quote: 'Working with Ivy Creatives was an outstanding experience. They redesigned our website, making it modern, intuitive, and visually appealing. We’ve seen increased engagement and positive feedback thanks to their work.',
    },
    {
        name: 'Paul Robinson',
        role: 'Founder',
        image: 'https://images.unsplash.com/photo-1598708068391-e559f1d26aea?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        quote: 'Ivy Creatives provided a full-service solution for our digital presence. They built a website that is modern, functional, and visually appealing, and also created social media content that reflects our brand’s personality. The results have had a real impact on our brand visibility and customer engagement.',
    },
    {
        name: 'Zainab Moore',
        role: 'Marketing Lead',
        image: 'https://images.unsplash.com/photo-1656373907331-beb8ef72ce63?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        quote: 'Ivy Creatives took our digital presence to a new level. They handled our website design, content creation, and social media management with precision and creativity. Every element was carefully crafted to align with our brand voice and objectives.',
    },
]



const chunkArray = (array: Testimonial[], chunkSize: number): Testimonial[][] => {
    const result: Testimonial[][] = []
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize))
    }
    return result
}

const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3))

export default function WallOfLoveSection() {
    return (
        <section id='testimonials'>
            <div className="py-16 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold">Loved by the Community</h2>
                        <p className="md:mt-6 mt-4 text-muted-foreground ">Take a look at what our clients have to say about us</p>
                    </div>
                    <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
                        {testimonialChunks.map((chunk, chunkIndex) => (
                            <div
                                key={chunkIndex}
                                className="space-y-3">
                                {chunk.map(({ name, role, quote, image }, index) => (
                                    <Card key={index}>
                                        <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                                            <Avatar className="size-9">
                                                <AvatarImage
                                                    alt={name}
                                                    src={image}
                                                    loading="lazy"
                                                    width="120"
                                                    height="120"
                                                    className='object-cover object-top'
                                                />
                                                <AvatarFallback>ST</AvatarFallback>
                                            </Avatar>

                                            <div>
                                                <h3 className="font-medium">{name}</h3>

                                                <span className="text-muted-foreground block text-sm tracking-wide">{role}</span>

                                                <blockquote className="mt-3">
                                                    <p className="text-gray-700 dark:text-gray-300">{quote}</p>
                                                </blockquote>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
