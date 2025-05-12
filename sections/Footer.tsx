import Image from "next/image"
import GDLogo2 from '@/public/icons/GDLogo2.svg'

const footerLinks = [
  {label:"Contact", href:"#contact"},
  {label:"Privacy Policy", href:"#privacy-policy"},
  {label:"Terms & Conditions", href:"#T&C"}
]


const Footer = () => {
  return (
    <section className="py-16">
        <div className="container">
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
                <div className="ml-6">
                <Image src={GDLogo2} alt="GD Logo" width={60} height={40}/>
                </div>
                <div className="mr-6">
                <nav className="flex gap-6"> 
                 {footerLinks.map((Link)=>(
                  <a key={Link.label} href={Link.href} className="text-white/50 text-sm hover:text-blue-500">
                    {Link.label}
                    </a>
                 ))} 
                 </nav> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
