// components/Gallery.tsx
"use client"

import { useEffect, useRef } from "react"

// 1. Setup a config object to specify custom width/height for certain images.
//    The key can be the image src, or you could use the index if you prefer.
const imageDimensions: Record<
  string,
  { width?: number | string; height?: number | string }
> = {
  // Example usage:
  "/brand2.jpg": { width: "500px" },
  "/brand4.jpg": { width: "500px" },
  "/brand5.jpg": { width: "500px" },
  "/brand6.jpg": { width: "400px" },
  "/brand7.jpg": { width: "500px" },
  "/brand8.jpg": { width: "500px" },
  "/brand9.jpg": { width: "500px" },

  // "/brand2.jpg": { width: "350px", height: "500px" },
  // "/image12.jpg": { width: 500 }, // Only width, height will be auto
  // Add your custom dimensions here!

}

const images = [
  "/image1.png",
  "/brand1.jpg",
  "/image5.png",
  "/brand2.jpg",
  "/image2.png",
  "/brand3.jpg",
  "/image3.png",
  "/brand4.jpg",
  // "/image4.png",
  "/image6.png",
  "/brand5.jpg",
  "/image7.png",
  "/brand6.jpg",
  // "/image8.png",
  "/image9.png",
  // "/image10.png",
  // "/image11.png",
  "/brand7.jpg",
  "/brand8.jpg",
  "/brand9.jpg",
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
        className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth no-scrollbar gap-2 items-start h-[350px] md:h-[600px] overflow-y-hidden"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex-shrink-0 md:w-[30px] w-[20px] snap-start" />
        {images.map((src, i) => {
          // 2. Get custom dimensions for this image, if any
          const customDims = imageDimensions[src] || {}

          // 3. Build style prop for the <img> if custom dimensions are set
          const imgStyle: React.CSSProperties = {}
          // Only apply custom dimensions on large screens (md and above)
          if (customDims.width) imgStyle.width = typeof customDims.width === "number" ? `${customDims.width}px` : customDims.width
          if (customDims.height) imgStyle.height = typeof customDims.height === "number" ? `${customDims.height}px` : customDims.height

          // 4. Adjust the parent div's width based on custom dimensions
          const containerStyle: React.CSSProperties = {}
          let containerClassName = `snap-start flex-shrink-0 h-full flex items-start justify-center`

          // If custom width is set, use it for the container, otherwise use default classes
          if (customDims.width) {
            containerStyle.width = typeof customDims.width === "number" ? `${customDims.width}px` : customDims.width
          } else {
            // Use default responsive classes when no custom width
            containerClassName += ` ${i === images.length - 1 ? "w-[200px] md:w-[400px]" : "w-[350px] md:w-[800px]"} max-w-[350px] md:max-w-[800px]`
          }

          return (
            <div
              key={i}
              className={containerClassName}
              style={containerStyle}
            >
              <img
                src={src}
                alt={`Gallery ${i}`}
                className="w-full h-auto object-cover cursor-zoom-in opacity-85 hover:opacity-100 transition-opacity duration-300"
                style={imgStyle}
              />
            </div>
          )
        })}
        <div className="flex-shrink-0 w-[30px]" />
      </div>
    </section>
  )
}
