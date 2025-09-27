import { Shield, Globe, Code } from 'lucide-react'
import SpotlightCard from './SportLightCard'

const Skills = () => {
    return (
        <section id="skills" className="bg-slate-800/50 px-4 sm:px-6 lg:px-8 py-16 scroll-mt-10" >
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 font-bold text-white text-3xl md:text-4xl">Skills</h2>
                    <p className="text-slate-300 text-lg">Technical expertise and core competencies</p>
                </div>

                <div className="gap-8 grid md:grid-cols-3">
                    <SpotlightCard className={`bg-slate-800/45 border-slate-700 transform transition-all duration-700 delay-100 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 p-4 rounded-2xl flex flex-col gap-4`} data-animate>
                        <div>
                            <div className="flex items-center text-white">
                                <Shield className="mr-2 w-5 h-5 text-cyan-400 animate-pulse" />
                                Security & Networking
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-wrap gap-2">
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-2xl text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    Firewalls Configuration
                                </div>
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-2xl text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    Wireshark
                                </div>
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-2xl text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    Kali Linux
                                </div>
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-2xl text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    Cisco Security Tools
                                </div>
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-2xl text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    Metasploit
                                </div>
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-2xl text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    OSINT Tools
                                </div>
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-2xl text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    Log Analysis & Threat Hunting
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>

                    <SpotlightCard className={`bg-slate-800/45 border-slate-700 transform transition-all duration-700 delay-100 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 p-4 rounded-2xl flex flex-col gap-4`} data-animate>
                        <div>
                            <div className="flex items-center text-white">
                                <Globe className="mr-2 w-5 h-5 text-cyan-400 animate-spin" style={{ animationDuration: "4s" }} />
                                Microsoft & Cloud
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-wrap gap-2">
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-2xl text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    Microsoft Office 365
                                </div>
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-2xl text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    Microsoft Active Directory
                                </div>
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-2xl text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    Microsoft Defender for Endpoint
                                </div>
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-2xl text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    VMware
                                </div>
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-2xl text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    Remote Work Coordination
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>

                    <SpotlightCard
                        className={`bg-slate-800/45 border-slate-700 transform transition-all duration-700 delay-100 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 p-4 rounded-2xl flex flex-col gap-4`}
                        data-animate
                    >
                        <div>
                            <div className="flex items-center text-white">
                                <Code className="mr-2 w-5 h-5 text-cyan-400 animate-bounce" />
                                Development & Creative
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-wrap gap-2">
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-2xl text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    Python Programming
                                </div>
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-2xl text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    Digital Marketing
                                </div>
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-2xl text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    AI Model Training & Deployment
                                </div>
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-2xl text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    Content Creation
                                </div>
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-2xl text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    Graphics Design (Photoshop)
                                </div>
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-2xl text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    Procedure Documentation
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>
                </div>
            </div>
        </section >
    )
}

export default Skills