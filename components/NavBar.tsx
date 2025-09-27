import React, { useEffect, useState } from 'react'
import { User, GraduationCap, Briefcase, Code, FolderOpen, Trophy, MessageCircle, X, Menu, BadgeIcon as Certificate, } from 'lucide-react'


const navItems = [
    { id: "about", label: "About", icon: User },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "certifications", label: "Certifications", icon: Certificate },
    { id: "achievements", label: "Achievements", icon: Trophy },
    { id: "contact", label: "Contact", icon: MessageCircle },
]

const NavBar = () => {
    const [activeSection, setActiveSection] = useState("about")

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.id
                    if (entry.isIntersecting) {
                        if (entry.target.hasAttribute("data-section")) {
                            setActiveSection(id)
                        }
                    }
                })
            },
            { threshold: 0.6, rootMargin: "0px 0px -30% 0px" }, // better for sections
        )

        const elements = document.querySelectorAll("[data-animate], [data-section]")
        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        setIsMenuOpen(false)
    }

    return (
        <nav className="top-0 z-50 fixed bg-slate-900/75 backdrop-blur-sm border-slate-700 border-b w-full">
            <div className="flex justify-center space-x-5 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center space-x-5 py-4">
                    <span className="font-bold text-white text-xl">Kudzai Netsiyanwa</span>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors  cursor-pointer ${activeSection === item.id
                                        ? "text-cyan-400 bg-slate-800"
                                        : "text-slate-300 hover:text-cyan-400 hover:bg-slate-800"
                                        }`}
                                >
                                    <item.icon className="w-4 h-4" />
                                    <span>{item.label}</span>
                                </div>
                            )
                        })}
                    </div>

                    {/* Mobile menu div */}
                    <div className="md:hidden">
                        <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white">
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {
                isMenuOpen && (
                    <div className="md:hidden bg-slate-800 border-slate-700 border-t">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navItems.map((item) => {
                                const Icon = item.icon
                                return (
                                    <div
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`flex items-center space-x-2 w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${activeSection === item.id
                                            ? "text-cyan-400 bg-slate-700"
                                            : "text-slate-300 hover:text-cyan-400 hover:bg-slate-700"
                                            }`}
                                    >
                                        <Icon className="w-5 h-5" />
                                        <span>{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            }
        </nav >
    )
}

export default NavBar