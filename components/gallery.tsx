// components/Gallery.tsx
"use client"

import { useEffect, useRef } from "react"

const images = [
"/image1.png",
"/image5.png",
"/image2.png",
"/image3.png",
// "/image4.png",
"/image6.png",
"/image7.png",
// "/image8.png",
"/image9.png",
// "/image10.png",
// "/image11.png",
"/image12.jpg",


]

export default function Gallery() {
const containerRef = useRef<HTMLDivElement>(null)

useEffect(() => {
const el = containerRef.current
if (!el) return

const onWheel = (e: WheelEvent) => {
  const rect = el.getBoundingClientRect()
  if (rect.top <= 0 && rect.bottom > window.innerHeight) {
    e.preventDefault()
    el.scrollLeft += e.deltaY
  }
}

window.addEventListener("wheel", onWheel, { passive: false })
return () => window.removeEventListener("wheel", onWheel)


}, [])

return (
<section className="h-fit flex flex-col  text-white justify-between" id='portfolio'>
<div className="md:flex justify-between items-start p-8">
<h2 className="text-4xl font-bold mb-8 md:mb-0">What We Create</h2>
<p className="max-w-md text-gray-300">
We design systems that move brands forward. From high-converting websites and distinct brand identities to growth assets that drive awareness, every project is built to scale with clarity and impact.
</p>
</div>

  <div
    ref={containerRef}
    className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth no-scrollbar gap-2 items-start h-[350px] md:h-[600px]"
    style={{ WebkitOverflowScrolling: "touch" }}
  >
    <div className="flex-shrink-0 md:w-[30px] w-[20px] snap-start" />
    {images.map((src, i) => (
      <div
        key={i}
        className={`snap-start flex-shrink-0 ${i === images.length - 1 ? "w-[200px] md:w-[400px]" : "w-[350px] md:w-[800px]"} max-w-[350px] md:max-w-[800px] h-full flex items-start justify-center`}
      >
        <img src={src} alt={`Gallery ${i}`} className="w-full h-auto object-cover cursor-zoom-in opacity-85 hover:opacity-100 transition-opacity duration-300" />
      </div>
    ))}
    <div className="flex-shrink-0 w-[30px]" />
  </div>
</section>


)
}
