import React from 'react'
const text="Big ideas shouldn't get stuck in clunky tools. But too often, creativity is tangled in busywork";


export default function Introduction(){
  return (
    <section className='py-28 lg:py-30'>
        <div className="container">
            <div className='flex justify-center'>
            <div className='inline-flex border border-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full uppercase items-center'>
               ⚡ Introducing Gray Dock
            </div>
            </div>
            <div className='text-2xl md:text-6xl text-center font-medium'>
                <span>Innovation shouldn&apos;t be slowed by outdated workflows. </span>{" "}
                <span className='text-gray-500'>{text}</span>
                <span className='text-lime-400 block'>Let innovation lead the way.Let Gray Dock power your next breakthrough.</span>
            </div>
        </div>
    </section>
  )
}




