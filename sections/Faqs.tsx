import { twMerge } from "tailwind-merge";

const faqs= [
    {question:"Can I use Gray Dock without design experience?",
     answer:"Absolutely. Our platform is built for ease of use, with an intuitive interface and templates that make it easy to start, even if you're not a professional designer." 
    },
    {question:"Does Gray Dock support team collaboration?",
     answer:"Yes! You can invite team members, assign tasks, leave comments, and work on designs in real time. It's built for smooth collaboration across departments." 
    },
     {question:"Can I integrate Gray Dock with other tools we already use?",
     answer:"Yes, we support integrations with popular tools like Slack, Figma,  Notion, and more." 
    },

     {question:"How is Gray Dock different from other design tools",
     answer:"Unlike traditional design software, Gray Dock combines design tools with workflow automation, task management, and team collaboration—all in one place, in the cloud."},
    
     {question:"Can I cancel or change my plan anytime?",
     answer:"Yes, our subscriptions are flexible. You can upgrade, downgrade, or cancel your plan at any time."   
    }
]

export default function Faqs(){
    const selectedIndex=0;
    return(
        <section className="py-24">
            <div className="container">
            <div className='flex justify-center'>
            <div className='inline-flex border border-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full uppercase items-center'>
               📝 FAQS
            </div>
            </div>
            <h2 className="text-6xl font-medium text-center mt-6 max-w-xl mx-auto">Questions? Got You <span className="text-lime-400">Covered!</span></h2>
            
            <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                {faqs.map((faq,faqIndex) =>(
                    <div key={faq.question} className="bg-neutral-900  rounded-2xl border border-white/10 p-6">
                        <div className="flex justify-between items-center">
                            <h3>{faq.question}</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" className={twMerge("flex-shrink-0", selectedIndex === faqIndex && "rotate-45")}>
                            <path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z">
                            </path>
                            <path fill="#fff" d="M21,14h6v20h-6V14z"></path>
                            <path fill="#fff" d="M14,21h20v6H14V21z"></path>
                            </svg>
                        </div>
                        <div className={twMerge("mt-6", selectedIndex !==faqIndex && "hidden")}>
                        <p className="text-white/50 ">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>

            </div>
        </section>
    )
}