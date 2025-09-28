import { BadgeIcon } from 'lucide-react'
import SpotlightCard from './SportLightCard'

const Education = () => {
    return (
        <section id="education" className="flex flex-col bg-transparent mx-auto px-4 sm:px-6 lg:px-8 pb-3 max-w-7xl" >
            <div className="mx-auto max-w-6xl container">

                <div className="mb-12 text-center">
                    <h2 className="mb-4 font-bold text-white text-3xl md:text-4xl">Education</h2>
                    <p className="text-slate-300 text-lg">Academic foundation in cybersecurity and information technology</p>
                </div>

                <div className="gap-8 grid md:grid-cols-2">
                    <SpotlightCard className={`bg-slate-800/50 p-4 rounded-xl flex flex-col space-y-2`} data-animate >
                        <div className="font-bold text-white text-lg">
                            <div className="flex items-cente">
                                <BadgeIcon className="mr-2 w-5 h-5 text-cyan-400 animate-pulse" />
                                Master of Science in Cyber Security and Digital Forensic
                            </div>
                            <p className="font-normal text-slate-400 text-base">
                                University of The Sunshine Coast, QLD • Feb 2024 - July 2025
                            </p>
                        </div>
                        <p className="text-slate-300">
                            Advanced studies in cybersecurity, digital forensics, incident response, and security management.
                            Focusing on cutting-edge security technologies and forensic investigation techniques.
                        </p>
                    </SpotlightCard>

                    <SpotlightCard className={`bg-slate-800/50 p-3 rounded-xl flex w-full`} data-animate                    >
                        <div className='flex flex-col space-y-2'>
                            <div className="font-bold text-white text-lg">
                                <div className="flex items-center">
                                    <BadgeIcon className="mr-2 w-5 h-5 text-cyan-400 animate-pulse" />
                                    Bachelor in Electronic Commerce & Information Technology
                                </div>
                                <p className="font-normal text-slate-400 text-base">
                                    Harare Institute of Technology, Zimbabwe • Aug 2018 - Oct 2022
                                </p>
                            </div>
                            <p className="text-slate-300">
                                Comprehensive foundation in information technology, electronic commerce, system administration, and
                                digital business solutions with hands-on experience in various IT domains.
                            </p>
                        </div>
                    </SpotlightCard>
                </div>
            </div>
        </section >
    )
}

export default Education