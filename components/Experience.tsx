import SpotlightCard from './SportLightCard'
import { Briefcase, Shield, Code } from 'lucide-react'

const Experience = () => {
    return (
        <section id="experience" className="flex flex-col items-center mx-auto py-10 w-full h-full">
            <div className="mb-12 text-center">
                <h2 className="mb-4 font-bold text-white text-3xl md:text-4xl">Experience</h2>
                <p className="text-slate-300 text-lg">Professional journey in IT support and cybersecurity</p>
            </div>

            <div className="space-y-8">
                <SpotlightCard className={`bg-slate-800/45 border-slate-700 transform transition-all duration-700 delay-100 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 p-4 rounded-2xl flex flex-col gap-4`} data-animate >
                    <div>
                        <div className="flex items-center text-white">
                            <Briefcase className="mr-2 w-5 h-5 text-cyan-400 animate-pulse" />
                            IT Support and Security Services Technician
                        </div>
                        <div className="text-cyan-400">Synerger Care, Queensland, Brisbane • May 2023 - Current</div>
                    </div>
                    <div>
                        <ul className="space-y-2 text-slate-300">
                            <li className="hover:text-cyan-300 transition-all hover:translate-x-2 duration-500 delay-200 transform">
                                • Conducted security awareness training and supported compliance with relevant standards
                            </li>
                            <li className="hover:text-cyan-300 transition-all hover:translate-x-2 duration-500 delay-300 transform">
                                • Managed Microsoft 365 Office security settings, including user access controls, DLP, MFA, and secure email configurations
                            </li>
                            <li className="hover:text-cyan-300 transition-all hover:translate-x-2 duration-500 delay-400 transform">
                                • Implemented and maintained security measures including firewalls, antivirus solutions, and access controls
                            </li>
                            <li className="hover:text-cyan-300 transition-all hover:translate-x-2 duration-500 delay-500 transform">
                                • Provided first and second-level technical support for hardware, software, and network issues
                            </li>
                        </ul>
                    </div>
                </SpotlightCard>

                <SpotlightCard className={`bg-slate-800/45 border-slate-700 transform transition-all duration-700 delay-100 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 p-4 rounded-2xl flex flex-col gap-4`} data-animate >
                    <div>
                        <div className="flex items-center text-white">
                            <Shield className="mr-2 w-5 h-5 text-cyan-400 animate-spin" style={{ animationDuration: "3s" }} />
                            IT Support and Digital Marketing Officer (Part-Time)
                        </div>
                        <div className="text-cyan-400">Anchored Care, Queensland, Brisbane • May 2021 - Current</div>
                    </div>
                    <div>
                        <ul className="space-y-2 text-slate-300">
                            <li className="hover:text-cyan-300 transition-all hover:translate-x-2 duration-500 delay-200 transform">
                                • Provided first and second-level technical support for hardware, software, and network issues
                            </li>
                            <li className="hover:text-cyan-300 transition-all hover:translate-x-2 duration-500 delay-300 transform">
                                • Managed Microsoft 365 security settings, including access controls, DLP, MFA, and secure email
                            </li>
                            <li className="hover:text-cyan-300 transition-all hover:translate-x-2 duration-500 delay-400 transform">
                                • Provided IT support for ShiftCare, enabling effective use of rosters, client data, and service tools
                            </li>
                            <li className="hover:text-cyan-300 transition-all hover:translate-x-2 duration-500 delay-500 transform">
                                • Graphics Designing, Web management and Content Creation
                            </li>
                        </ul>
                    </div>
                </SpotlightCard>

                <SpotlightCard className={`bg-slate-800/45 border-slate-700 transform transition-all duration-700 delay-100 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 p-4 rounded-2xl flex flex-col gap-4`} data-animate >
                    <div>
                        <div className="flex items-center text-white">
                            <Code className="mr-2 w-5 h-5 text-cyan-400 animate-bounce" />
                            System Administrator Officer
                        </div>
                        <div className="text-cyan-400">William Bain (New Holland), Harare, Zimbabwe • May 2021 - December 2022</div>
                    </div>
                    <div>
                        <ul className="space-y-2 text-slate-300">
                            <li className="hover:text-cyan-300 transition-all hover:translate-x-2 duration-500 delay-200 transform">
                                • Maintained and monitored system performance, backups, and updates
                            </li>
                            <li className="hover:text-cyan-300 transition-all hover:translate-x-2 duration-500 delay-300 transform">
                                • Ensured data security, integrity, and compliance with IT policies
                            </li>
                            <li className="hover:text-cyan-300 transition-all hover:translate-x-2 duration-500 delay-400 transform">
                                • Provided technical support for hardware, software, and network issues
                            </li>
                            <li className="hover:text-cyan-300 transition-all hover:translate-x-2 duration-500 delay-500 transform">
                                • Managed user accounts, permissions, and system access controls
                            </li>
                            <li className="hover:text-cyan-300 transition-all hover:translate-x-2 duration-500 delay-600 transform">
                                • Administered Sage for accounting, payroll, and financial reporting
                            </li>
                        </ul>
                    </div>
                </SpotlightCard>
            </div>
        </section >
    )
}

export default Experience