"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full border-b items-center bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold">
                    <Image
                           className=" w-25 h-auto object-contain"
                           src="/next.svg"
                           alt="Next.js logo"
                           width={1200}
                           height={400}
                           priority
                         />
                </Link>

                {/* Navigation */}
                <nav>
                    <ul className="flex items-center gap-6">
                        <li>
                            <Link
                                href="/"
                                className="text-gray-700 transition hover:text-black"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/shop"
                                className="text-gray-700 transition hover:text-black"
                            >
                                Shop
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/contact"
                                className="text-gray-700 transition hover:text-black"
                            >
                                Contact
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/about"
                                className="text-gray-700 transition hover:text-black"
                            >
                                About
                            </Link>
                        </li>

                          <li>
                            <Link
                                href="/cart"
                                className="text-gray-700 transition hover:text-black"
                            >
                                Cart
                            </Link>
                        </li>
                         <li>
                            <Link
                                href="/profile"
                                className="text-gray-700 transition hover:text-black"
                            >
                                Profile
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>  
        </footer>
    );
};

export default Footer;