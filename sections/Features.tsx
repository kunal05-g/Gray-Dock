import FeatureCard from "@/components/FeatureCard";
import avatar1 from '@/assets/images/avatar-ashwin-santiago.jpg'
import avatar2 from '@/assets/images/avatar-lula-meyers.jpg'
import avatar3 from '@/assets/images/avatar-florence-shaw.jpg'
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Keyboard from "@/components/Key";



const features =[
  "Smart Workflow",
  "Sync- on the Go",
  "Integrations",
  "Visualization",
  "Auto Save",
  "AI Suggestions"
  
];

const Features = () => {
  return (
    <section className="py-24">
      <div className="container">
      <div className='flex justify-center'>
            <div className='inline-flex border border-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full uppercase items-center'>
               ⚡ Features
            </div>
            </div>
            <h2 className="text-white text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">Where power meets <span className="text-lime-400">Simplicity.</span></h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 ">
            {/* Card 1 */}
            <FeatureCard title="Real-time Collabration" description="Work Together seamlessly without any Hassle" className=" md:col-span-2 lg:col-span-1">
              <div className="aspect-video flex items-center justify-center">
                <Avatar className="z-40">
                  <Image src={avatar1} alt="Avatar 1" className="rounded-full"/>
                </Avatar>
                <Avatar className="-ml-6 border-indigo-500 z-30 ">
                  <Image src={avatar2} alt="Avatar 2" className="rounded-full"/>
                </Avatar>
                <Avatar className="-ml-6 border-amber-500 z-20">
                  <Image src={avatar3} alt="Avatar 3" className="rounded-full"/>
                </Avatar>
                <Avatar className="-ml-6 border-transparent">
                  <div className="bg-neutral-700 size-full rounded-full inline-flex items-center justify-center gap-1">
                    {Array.from({length:3}).map((_,i)=>(
                      <span className="size-1.5 rounded-full bg-white inline-flex" key={i}></span>
                    ))}
                     
                  </div>
                </Avatar>
              </div>
            </FeatureCard>
            {/* Card 2 */}
            <FeatureCard title="Drag-and-Drop Design" description="Users can build workflow processes visually and instantly see how changes affect flow" className="md:col-span-2 lg:col-span-1">
              <div className="aspect-video flex items-center justify-center">
                <p className="text-4xl font-extrabold text-white/20 text-center">
                  We've Achieved{" "} <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">Incredible</span>{" "} growth this year.
                </p>
              </div>
            </FeatureCard>
            
            {/* Card 3 */}  
            <FeatureCard title="Keyboard Quick Actions" description="Powerful commands to help you design faster and cleaner" className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto">
              <div className="aspect-video flex items-center justify-center gap-4">
                <Keyboard className="w-28">Shift</Keyboard>
                <Keyboard>Alt</Keyboard>
                <Keyboard>C</Keyboard>
              </div>
            </FeatureCard>

           {/* <div className="mt-8 flex flex-wrap gap-3 justify-center">
              {features.map(feature =>(
              <div key={feature} className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center">
                <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl">&#10038;</span>
                <span className="font-medium md:text-lg">{feature}</span>
              </div>
              ))}
            </div>  */}
            </div>
      </div>
    </section>
  )
}

export default Features
