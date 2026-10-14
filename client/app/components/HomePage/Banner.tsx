"use client"

import Image from "next/image"
import { useState } from "react"


const Banner = () => {
  const [banners, setBanners] = useState<string[]>(["/BANNER1.png","/BANNER2.png","/BANNER3.png","/BANNER4.png"]);

  return (
    <>
      <div >
        <Image
          className="dark:invert w-full h-auto object-contain"
          src="/BANNER1.png"
          alt="Next.js logo"
          width={1200}
          height={400}
          priority
        />
      </div>
    </>)
}

export default Banner 