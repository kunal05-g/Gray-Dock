"use client"

import Logo from '@/public/icons/GDLogo2.svg'
import Image from 'next/image';
import Button from '@/components/Button';
import { useState } from 'react';
import { AnimatePresence,motion } from "motion/react"


const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <section className='py-4 lg:py-8 fixed w-full top-0 z-50'>
            <div className="container lg:ml-24 max-w-5xl">
            <div className='border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur'>   
                <div className="grid grid-cols-2 lg:grid-cols-3 items-center p-2 px-4 md:pr-2">
                    <div>
                     <Image src={Logo} alt='Logo' className='h-10 w-auto'/>
                    </div>

                    <div className='lg:flex justify-center items-center hidden'>
                        <nav className='flex gap-6 font-medium'>
                            {navLinks.map((Link)=>(
                                <a key={Link.label} href={Link.href}>{Link.label}</a>
                            ))}
                        </nav>
                    </div>

                    <div className='flex justify-end gap-4'>
                    <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
                    <Button variant='secondary' className='hidden md:inline-flex items-center'>Log In</Button>
                    <Button variant='primary' className='hidden md:inline-flex items-center'>Sign Up</Button>
                    </div>
                </div> 
                <AnimatePresence>
                {isOpen && (
                <motion.div
                initial={{height:0}}
                animate={{height:'auto'}}
                exit={{height:0}}
                 className='overflow-hidden'>
                <div className='flex flex-col items-center gap-4 py-4 '>    
                    {navLinks.map(Link=>(
                        <a key={Link.label} href={Link.href} className=''>{Link.label}</a>
                    ))}
                    <Button variant='secondary'>Log In</Button>
                    <Button variant='primary'>Sign Up</Button>
                </div>    
                </motion.div>
                )}
                </AnimatePresence>
            </div>     
            </div>
        </section>
        <div className='pb-[86px] md:pb-[96px] lg:px-[130px]'></div>
        </>
    );
}
