"use client"

import Image from "next/image"

const Category = () => {
    return (<>

        <div className="flex flex-row gap-2 my-1">
            <Image className="dark:invert h-1/2 w-3/2"
                src="/BANNER1.png"
                alt="Next.js logo"
                width={100}
                height={20}
                priority
            />

            <Image className="dark:invert h-1/2 w-3/2"
                src="/BANNER1.png"
                alt="Next.js logo"
                width={100}
                height={20}
                priority
            />

            <Image className="dark:invert h-1/2 w-3/2"
                src="/BANNER1.png"
                alt="Next.js logo"
                width={100}
                height={20}
                priority
            />

            <Image className="dark:invert h-1/2 w-3/2"
                src="/BANNER1.png"
                alt="Next.js logo"
                width={100}
                height={20}
                priority
            />

            

        </div>
    </>)
}

export default Category 