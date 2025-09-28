import { Shield, ExternalLink, Github, Code, Award } from 'lucide-react'
import React from 'react'
import SpotlightCard from './SportLightCard'

const Projects = () => {
    return (
        < section id="projects" className="px-4 sm:px-6 lg:px-8 py-16 scroll-mt-10" >
            <div className="mx-auto max-w-6xl container">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 font-bold text-white text-3xl md:text-4xl">Projects</h2>
                    <p className="text-slate-300 text-lg">Featured cybersecurity and development projects</p>
                </div>

                <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
                    {/* Project 1 */}
                    <SpotlightCard
                        className={`bg-slate-800/45 border-slate-700 transform transition-all duration-700 delay-100 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 p-4 rounded-2xl flex flex-col gap-4`}
                        data-animate
                    >
                        <div>
                            <div className="flex items-center text-white">
                                <Shield className="mr-2 w-5 h-5 text-cyan-400 animate-pulse" />
                                Security Monitoring Dashboard
                            </div>
                            <div className="text-slate-300">Real-time security event monitoring system</div>
                        </div>
                        <div>
                            <p className="mb-4 text-slate-300">
                                Built a comprehensive dashboard for monitoring security events across enterprise networks using Microsoft Defender and custom PowerShell scripts.
                            </p>
                            <div className="flex space-x-2">
                                <div className="flex items-center bg-transparent hover:bg-cyan-400 border-cyan-400 text-cyan-400 hover:text-slate-900 hover:scale-110 transition-all duration-300 transform"
                                >
                                    <ExternalLink className="mr-1 w-4 h-4" />
                                    Demo
                                </div>
                                <a
                                    href="https://github.com/KUDZAI1998/security-monitoring-dashboard"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div


                                        className="flex items-center bg-transparent hover:bg-cyan-400 border-cyan-400 text-cyan-400 hover:text-slate-900 hover:scale-110 transition-all duration-300 transform"
                                    >
                                        <Github className="mr-1 w-4 h-4" />
                                        Code
                                    </div>
                                </a>
                            </div>
                        </div>
                    </SpotlightCard>

                    {/* Project 2 */}
                    <SpotlightCard
                        className={`bg-slate-800/45 border-slate-700 transform transition-all duration-700 delay-100 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 p-4 rounded-2xl flex flex-col gap-4`}
                        data-animate
                    >
                        <div>
                            <div className="flex items-center text-white">
                                <Code className="mr-2 w-5 h-5 text-cyan-400 animate-bounce" />
                                Network Analysis Tool
                            </div>
                            <div className="text-slate-300">
                                Wireshark-based network traffic analyzer
                            </div>
                        </div>
                        <div>
                            <p className="mb-4 text-slate-300">
                                Developed a Python-based network analysis tool that integrates with Wireshark for automated threat detection and network performance monitoring.
                            </p>
                            <div className="flex space-x-2">
                                <div className="flex items-center bg-transparent hover:bg-cyan-400 border-cyan-400 text-cyan-400 hover:text-slate-900 hover:scale-110 transition-all duration-300 transform"  >
                                    <ExternalLink className="mr-1 w-4 h-4" />
                                    Demo
                                </div>
                                <a
                                    href="https://github.com/KUDZAI1998/network-analysis-tool"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="flex items-center bg-transparent hover:bg-cyan-400 border-cyan-400 text-cyan-400 hover:text-slate-900 hover:scale-110 transition-all duration-300 transform"  >
                                        <Github className="mr-1 w-4 h-4" />
                                        Code
                                    </div>
                                </a>
                            </div>
                        </div>
                    </SpotlightCard>

                    {/* Project 3 */}
                    <SpotlightCard
                        className={`bg-slate-800/45 border-slate-700 transform transition-all duration-700 delay-100 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 p-4 rounded-2xl flex flex-col gap-4`}
                        data-animate
                    >
                        <div>
                            <div className="flex items-center text-white">
                                <Award className="mr-2 w-5 h-5 text-cyan-400 animate-spin" style={{ animationDuration: "3s" }} />
                                AI-Powered Threat Detection
                            </div>
                            <div className="text-slate-300">Machine learning security solution</div>
                        </div>
                        <div>
                            <p className="mb-4 text-slate-300">
                                Created an AI-powered threat detection system using machine learning algorithms to identify and classify security threats in real-time.
                            </p>
                            <div className="flex space-x-2">
                                <div className="flex items-center bg-transparent hover:bg-cyan-400 border-cyan-400 text-cyan-400 hover:text-slate-900 hover:scale-110 transition-all duration-300 transform" >
                                    <ExternalLink className="mr-1 w-4 h-4" />
                                    Demo
                                </div>
                                <a
                                    href="https://github.com/KUDZAI1998/ai-threat-detection"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="flex items-center bg-transparent hover:bg-cyan-400 border-cyan-400 text-cyan-400 hover:text-slate-900 hover:scale-110 transition-all duration-300 transform">
                                        <Github className="mr-1 w-4 h-4" />
                                        Code
                                    </div>
                                </a>
                            </div>
                        </div>
                    </SpotlightCard>
                </div>
            </div>
        </section >
    )
}

export default Projects