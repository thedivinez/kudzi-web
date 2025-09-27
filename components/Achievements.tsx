import { Trophy, Globe, Code, Award } from 'lucide-react'
import React from 'react'

const Achievements = () => {
    return (
        <section id="achievements" className="px-4 sm:px-6 lg:px-8 py-16 scroll-mt-10" >
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 font-bold text-white text-3xl md:text-4xl">Achievements</h2>
                    <p className="text-slate-300 text-lg">Notable accomplishments and recognitions</p>
                </div>

                <div className="gap-8 grid md:grid-cols-2">
                    <div
                        className={`bg-slate-800/45 border-slate-700 transform transition-all duration-700 delay-100 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 p-4 rounded-2xl flex flex-col gap-4`}
                        data-animate
                        id="achievement-card-1"
                    >
                        <div>
                            <div className="flex items-center text-white">
                                <Trophy className="mr-2 w-5 h-5 text-cyan-400 animate-bounce" />
                                Best Capstone Design Project
                            </div>
                            <div className="text-cyan-400">Academic Excellence Award</div>
                        </div>
                        <div>
                            <p className="text-slate-300">
                                Awarded for outstanding innovation and technical excellence in capstone project design, demonstrating
                                exceptional problem-solving skills and practical application of cybersecurity principles.
                            </p>
                        </div>
                    </div>

                    <div
                        className={`bg-slate-800/45 border-slate-700 transform transition-all duration-700 delay-100 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 p-4 rounded-2xl flex flex-col gap-4`}
                        data-animate
                        id="achievement-card-2"
                    >
                        <div>
                            <div className="flex items-center text-white">
                                <Globe className="mr-2 w-5 h-5 text-cyan-400 animate-spin" style={{ animationDuration: "3s" }} />
                                2020 Dubai Expo Presentation
                            </div>
                            <div className="text-cyan-400">International Recognition</div>
                        </div>
                        <div>
                            <p className="text-slate-300">
                                Selected to present innovative technology project at the prestigious 2020 Dubai Expo, showcasing
                                cutting-edge solutions to an international audience of industry professionals.
                            </p>
                        </div>
                    </div>

                    <div
                        className={`bg-slate-800/45 border-slate-700 transform transition-all duration-700 delay-100 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 p-4 rounded-2xl flex flex-col gap-4`}
                        data-animate
                        id="achievement-card-3"
                    >
                        <div>
                            <div className="flex items-center text-white">
                                <Code className="mr-2 w-5 h-5 text-cyan-400 animate-pulse" />
                                First Automated Reprographic System in Zimbabwe
                            </div>
                            <div className="text-cyan-400">Innovation Pioneer</div>
                        </div>
                        <div>
                            <p className="text-slate-300">
                                Developed and implemented Zimbabwe's first automated reprographic system, revolutionizing document
                                processing and establishing new industry standards for efficiency and automation.
                            </p>
                        </div>
                    </div>

                    <div
                        className={`bg-slate-800/45 border-slate-700 transform transition-all duration-700 delay-100 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 p-4 rounded-2xl flex flex-col gap-4`}
                        data-animate
                        id="achievement-card-4"
                    >
                        <div>
                            <div className="flex items-center text-white">
                                <Award className="mr-2 w-5 h-5 text-cyan-400 animate-spin" style={{ animationDuration: "2s" }} />
                                3D Printing Development Machine
                            </div>
                            <div className="text-cyan-400">Technical Leadership</div>
                        </div>
                        <div>
                            <p className="text-slate-300">
                                Led the design and implementation of a 3D printing development machine, demonstrating advanced
                                engineering skills and innovative approach to manufacturing technology solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Achievements