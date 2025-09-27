import React from 'react'
import SpotlightCard from './SportLightCard'
import { Award, ExternalLink } from 'lucide-react'

const Certifications = () => {
    return (
        < section id="certifications" className="bg-slate-800/50 px-4 sm:px-6 lg:px-8 py-16 scroll-mt-10" >
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 font-bold text-white text-3xl md:text-4xl">Certifications</h2>
                    <p className="text-slate-300 text-lg">Professional certifications and achievements</p>
                </div>

                <div className="gap-8 grid md:grid-cols-2">
                    {/* Microsoft SC-900 */}
                    <SpotlightCard className={`bg-slate-800/45 border-slate-700 transform transition-all duration-700 delay-100 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 p-4 rounded-2xl flex flex-col gap-4`} data-animate >
                        <div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="flex items-center mb-2 text-white text-xl">
                                        <Award className="mr-2 w-5 h-5 text-cyan-400 animate-pulse" />
                                        Microsoft: Security Compliance and Identity Fundamentals
                                    </div>
                                    <div className="text-cyan-400">Microsoft • SC-900</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="mb-4 text-slate-300">
                                Demonstrates functional understanding of security, compliance, and identity (SCI) across cloud-based
                                and related Microsoft services.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-lg text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    Azure Security
                                </div>
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-lg text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    Compliance Management
                                </div>
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-lg text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    Identity Management
                                </div>
                            </div>
                            <a className="flex items-center text-cyan-300" href="https://www.credly.com/badges/cb2f15a8-a0bc-41aa-8e31-13747b0706e3" target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-1 w-4 h-4" />
                                View div
                            </a>
                        </div>
                    </SpotlightCard>

                    {/* Microsoft AI and ML */}
                    <SpotlightCard
                        className={`bg-slate-800/45 border-slate-700 transform transition-all duration-700 delay-100 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 p-4 rounded-2xl flex flex-col gap-4`}
                        data-animate
                    >
                        <div>
                            <div className="flex items-center mb-2 text-white text-xl">
                                <Award className="mr-2 w-5 h-5 text-cyan-400 animate-bounce" />
                                Microsoft: Fundamentals of AI and Machine Learning
                            </div>
                            <div className="text-cyan-400">Microsoft</div>
                        </div>
                        <div>
                            <p className="mb-4 text-slate-300">
                                Foundational knowledge in artificial intelligence and machine learning applications in cybersecurity
                                and data analysis.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-lg text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    Machine Learning
                                </div>
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-lg text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    AI Security
                                </div>
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-lg text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    Data Analysis
                                </div>
                            </div>
                            <a className="flex items-center text-cyan-300" href="https://www.coursera.org/account/accomplishments/verify/J6T1JFJ5IYXA" target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-1 w-4 h-4" />
                                View Certificate
                            </a>
                        </div>
                    </SpotlightCard>

                    {/* Codio ISO Standards */}
                    <SpotlightCard
                        className={`bg-slate-800/45 border-slate-700 transform transition-all duration-700 delay-100 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 p-4 rounded-2xl flex flex-col gap-4`}
                        data-animate
                    >
                        <div>
                            <div className="flex items-center mb-2 text-white text-xl">
                                <Award className="mr-2 w-5 h-5 text-cyan-400 animate-spin" style={{ animationDuration: "2s" }} />
                                Codio: Understanding ISO Security Standards
                            </div>
                            <div className="text-cyan-400">Codio</div>
                        </div>
                        <div>
                            <p className="mb-4 text-slate-300">
                                Comprehensive understanding of ISO security standards implementation and organizational security
                                framework development.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-lg text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    ISO 27001
                                </div>
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-lg text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    Security Standards
                                </div>
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-lg text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    Compliance
                                </div>
                            </div>
                            <a className="flex items-center text-cyan-300" href="https://www.coursera.org/account/accomplishments/verify/4UXWK4J3HKGB" target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-1 w-4 h-4" />
                                View Certificate
                            </a>
                        </div>
                    </SpotlightCard>

                    {/* John Hopkins IT Support in Healthcare */}
                    <SpotlightCard
                        className={`bg-slate-800/45 border-slate-700 transform transition-all duration-700 delay-100 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 p-4 rounded-2xl flex flex-col gap-4`}
                        data-animate
                    >
                        <div>
                            <div className="flex items-center mb-2 text-white text-xl">
                                <Award className="mr-2 w-5 h-5 text-cyan-400 animate-pulse" />
                                John Hopkins University: IT Support in Healthcare
                            </div>
                            <div className="text-cyan-400">John Hopkins University</div>
                        </div>
                        <div>
                            <p className="mb-4 text-slate-300">
                                Specialized knowledge in healthcare IT support, HIPAA compliance, and healthcare security
                                requirements.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-lg text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    Healthcare IT
                                </div>
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-lg text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    HIPAA
                                </div>
                                <div className="bg-slate-700 hover:bg-cyan-600 px-1.5 py-0.5 rounded-lg text-slate-300 hover:text-white hover:scale-110 transition-all duration-300 transform">
                                    IT Support
                                </div>
                            </div>

                            <a className="flex items-center text-cyan-300" href="https://www.coursera.org/account/accomplishments/verify/PCFQZJBM5PAR" target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-1 w-4 h-4" />
                                View Certificate
                            </a>
                        </div>
                    </SpotlightCard>
                </div>
            </div>
        </section >
    )
}

export default Certifications