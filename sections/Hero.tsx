import React from 'react';
import {Button} from "@/components/ui/button";

const Hero = () => {
    return (
        <section className={'py-24 mt-6 overflow-x-clip'}>
            <div className={'container'}>
            <div className={'flex justify-center'}>
            <div className={'inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold'}>10k + monthly customers</div>
            </div>
                <h1 className={"text-6xl md:text-7xl font-medium text-center mt-6"}>Inspired by Laws. Designed for Change.</h1>
            <p className={"text-center text-xl mt-8"}>At Gray Dock, we merge precision engineering with bold design to deliver future-ready solutions</p>
            <div className={"flex justify-center"}>
                <form className={"flex border border-white rounded-full p-2 mt-8"}>
                    <input type={'email'} placeholder={'Enter your email'} className={'bg-transparent px-4'} />
                    <Button type={'submit'} className={'bg-lime-400 h-10 rounded-full px-6 font-medium whitespace-nowrap'} variant={'secondary'}>Sign up</Button>
                </form>
            </div>
            </div>
        </section>
    );
};

export default Hero;