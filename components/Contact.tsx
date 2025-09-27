import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'
import React from 'react'
import SpotlightCard from './SportLightCard'

const Contact = () => {
    return (
        < section id="contact" className="bg-slate-800/50 px-4 sm:px-6 lg:px-8 py-16 scroll-mt-10" >
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 font-bold text-white text-3xl md:text-4xl">Get In Touch</h2>
                    <p className="text-slate-300 text-lg">Let's discuss cybersecurity opportunities and collaborations</p>
                </div>

                <div className="gap-12 grid md:grid-cols-2">
                    {/* Contact Info */}
                    <div
                        className={`transform transition-all duration-700 delay-100`}
                        data-animate
                        id="contact-info"
                    >
                        <h3 className="mb-6 font-semibold text-white text-xl">Contact Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 hover:text-cyan-300 transition-all hover:translate-x-2 duration-300 transform">
                                <Mail className="w-5 h-5 text-cyan-400 animate-bounce" />
                                <span className="text-slate-300">Carlington.kn@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-3 hover:text-cyan-300 transition-all hover:translate-x-2 duration-300 transform">
                                <Phone className="w-5 h-5 text-cyan-400 animate-pulse" />
                                <span className="text-slate-300">0480 400 866</span>
                            </div>
                            <div className="flex items-center space-x-3 hover:text-cyan-300 transition-all hover:translate-x-2 duration-300 transform">
                                <MapPin className="w-5 h-5 text-cyan-400 animate-ping" />
                                <span className="text-slate-300">Rothwell, QLD 4022, Australia</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8">
                            <h4 className="mb-4 font-semibold text-white text-lg">Connect With Me</h4>
                            <div className="flex space-x-4">
                                <div



                                    className="bg-transparent hover:bg-cyan-400 hover:shadow-cyan-500/25 hover:shadow-lg border-cyan-400 text-cyan-400 hover:text-slate-900 hover:scale-110 transition-all duration-300 transform"
                                >
                                    <a className="flex items-center space-x-2" href="https://www.linkedin.com/in/kudzai-carlington-netsiyanwa-9524a8192" target="_blank" rel="noopener noreferrer">
                                        <Linkedin className="mr-2 w-4 h-4" />
                                        LinkedIn
                                    </a>
                                </div>
                                <div



                                    className="bg-transparent hover:bg-cyan-400 hover:shadow-cyan-500/25 hover:shadow-lg border-cyan-400 text-cyan-400 hover:text-slate-900 hover:scale-110 transition-all duration-300 transform"
                                >
                                    <a className="flex items-center space-x-2" href="https://github.com/KUDZAI1998" target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 w-4 h-4" />
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* References */}
                        <div className="mt-8">
                            <h4 className="mb-4 font-semibold text-white text-lg">References</h4>
                            <div className="space-y-4">
                                <SpotlightCard className="bg-slate-700/50 p-4 rounded-lg">
                                    <p className="font-medium text-white">Nash M.</p>
                                    <p className="text-slate-300 text-sm">Operations Manager, Synerger Care</p>
                                    <p className="text-cyan-400 text-sm">nash@synergercare.com.au</p>
                                    <p className="text-slate-400 text-sm">+61 404 666 142</p>
                                </SpotlightCard>
                                <SpotlightCard className="bg-slate-700/50 p-4 rounded-lg">
                                    <p className="font-medium text-white">Tafa</p>
                                    <p className="text-slate-300 text-sm">General Manager, Bain New Holland</p>
                                    <p className="text-cyan-400 text-sm">tafadzwa.makiwa@bain.co.zw</p>
                                    <p className="text-slate-400 text-sm">+263 773 195 537</p>
                                </SpotlightCard>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <SpotlightCard
                        className={`flex flex-col space-y-3 bg-slate-800 border-slate-700 transform transition-all duration-700 delay-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20`}
                        data-animate
                    >
                        <div>
                            <div className="text-white text-2xl">Send a Message</div>
                            <div className="text-slate-300">I'll get back to you within 24 hours</div>
                        </div>
                        <div>
                            <form className="space-y-4">
                                <div>
                                    <label className="block mb-2 font-medium text-slate-300 text-sm">Name</label>
                                    <input
                                        type="text"
                                        className="bg-slate-700 px-3 py-2 border border-slate-600 hover:border-cyan-500 focus:border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full text-white transition-all duration-300"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 font-medium text-slate-300 text-sm">Email</label>
                                    <input
                                        type="email"
                                        className="bg-slate-700 px-3 py-2 border border-slate-600 hover:border-cyan-500 focus:border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full text-white transition-all duration-300"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 font-medium text-slate-300 text-sm">Message</label>
                                    <textarea
                                        rows={4}
                                        className="bg-slate-700 px-3 py-2 border border-slate-600 hover:border-cyan-500 focus:border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full text-white transition-all duration-300"
                                        placeholder="Your message..."
                                    />
                                </div>
                                <button className="bg-cyan-600 hover:bg-cyan-700 hover:shadow-cyan-500/25 hover:shadow-lg mr-auto p-2 w-full text-white hover:scale-105 transition-all duration-300 transform">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </SpotlightCard>
                </div>
            </div>
        </section >
    )
}

export default Contact