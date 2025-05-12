import figmaLogo from '@/assets/images/figma-logo.svg'
import notionLogo from '@/assets/images/notion-logo.svg'
import slackLogo from '@/assets/images/slack-logo.svg'
import relumeLogo from '@/assets/images/relume-logo.svg'
import framerLogo from '@/assets/images/framer-logo.svg'
import githubLogo from '@/assets/images/github-logo.svg'
import IntegrationColumn from '@/components/IntegrationColumn'

const integrations = [
    {name:"Figma" , icon:figmaLogo, description: "Figma is a collabrative interface design tool"},
    {name:"Notion", icon:notionLogo, description:"Notion is an all-in-one workspace for notes and docs"},
    {name: "Slack", icon:slackLogo ,description:"Slack is a powerful team communication platform "},
    {name: "Relume", icon:relumeLogo ,description:"Relume is a no code AI based website builder"},
    {name: "Framer", icon:framerLogo ,description:"Framer is professional website prototyping tool"},
    {name: "Github", icon:githubLogo ,description:"Github is the leading platform for code collabration"},
]

export type IntegrationsType = typeof integrations; 

const Integrations = () => {
  return (
    <section className='py-24 overflow-hiddden'>
    <div className="container">
        <div className='grid lg:grid-cols-2 items-center lg:gap-16 '>
        <div className='ml-4'>
        <div className='flex justify-center'>
            <div className='inline-flex border border-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full uppercase items-center'>
               🔗 Integrations
            </div>
        </div>
        <h2 className='text-6xl font-medium mt-6'>Your favorite tools can <span className='text-lime-400'>high-five</span></h2>
        <p className='text-white/50 mt-4 text-lg '>Connect your workflow.Your favorite tools, finally talking to each other — all in one place to streamline your productivity</p>
        </div>   
        <div className='h-[400px] lg:h-[800px] overflow-hidden grid md:grid-cols-2 gap-4 mt-8 lg:mt-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]'>
        <IntegrationColumn integrations={integrations}/>
        <IntegrationColumn integrations={integrations.slice().reverse()} className='hidden md:flex' />
        </div>
        </div>
    </div>
    </section>
  )
}

export default Integrations
