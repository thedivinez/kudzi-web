import React from 'react'
import TextType from './TextType'
import { Download, MessageCircle } from 'lucide-react'

const HeroSection = () => {
    return (
        <section id="about" className="mt-15 px-4 sm:px-6 lg:px-8 pt-20 pb-16 scroll-mt-15" >
            <div className="flex-y space-y-3 mx-auto mt-20 max-w-7xl text-center">
                <div className='flex flex-col justify-self-center text-left'>
                    <span className='text-xl'>Hello I'm</span>
                    <h1 className={`text-4xl md:text-6xl font-bold text-white mb-4 transform transition-all duration-500 delay-300`} data-animate id="hero-name" >
                        <span className="inline-block animate-pulse delay-1500">Kudzai Netsiyanwa</span>
                    </h1>
                </div>
                <div className="mb-6 h-8 text-cyan-400 text-4xl md:text-5xl">
                    <TextType
                        text={[
                            "Cybersecurity Professional",
                            "Digital Forensics Expert",
                            "IT Support Specialist",
                            "System Administrator",
                            "Security Analyst",
                        ]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        className='text-2xl md:text-4xl'
                        textColors={["oklch(78.9% 0.154 211.53)"]}
                    />
                </div>
                <div className={` text-slate-300 max-w-4xl mx-auto mb-8 transform transition-all duration-1000 delay-700 my-10`} data-animate id="hero-description" >
                    Detail-oriented team player with strong organizational skills. Ability to handle multiple projects simultaneously with high accuracy.
                    Excellent communicator with a track record of building great connections and surpassing objectives.
                </div>

                <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-1000 mt-10`} data-animate id="hero-divs" >
                    <a href="/CARLINGTON_RESUME_FN_2025.pdf" download>
                        <div className="flex items-center space-x-1 bg-cyan-600 hover:bg-cyan-700 hover:shadow-cyan-500/25 hover:shadow-lg p-2 px-3 py-2 rounded-md font-medium text-white text-sm hover:scale-105 transition-colors duration-300 transform">
                            <Download className="mr-2 w-4 h-4" />
                            Download Resume
                        </div>
                    </a>
                    <a href="#contact">
                        <div className="flex items-center space-x-1 bg-transparent hover:shadow-cyan-500/25 hover:shadow-lg p-2 border border-cyan-400 rounded-md font-medium text-cyan-400 text-sm hover:scale-105 transition-all duration-300 transform">
                            <MessageCircle className="mr-2 w-4 h-4" />
                            Get In Touch
                        </div>
                    </a>
                </div>
            </div>
        </section >
    )
}

export default HeroSection