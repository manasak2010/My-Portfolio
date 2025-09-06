import React, { useEffect, useState } from 'react'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import ManasaPic from '../assets/headshot.jpg';
import { TypeAnimation } from 'react-type-animation';


function Hero() {
    const [isVisible, setIsVisible] = React.useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section id="home" className='min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-900 '>
            {/* animated bg elements */}
            <div className="absolute inset-0">
                {/* <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full-blur-3xl"></div> */}
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
            </div>

            <div className="container mx-auto px-12 py-2 relative z-10">
                <div className="grid lg:grid-cols-[60%_40%] gap-8 items-center">
                    {/* left content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <p className={`text-green-400 font-semibold text-lg transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}> Hi there!</p>
                            <h1 className={`text-5xl md:text-7xl font-black text-white leading-tight transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <span className="text-white">I'm </span>
                                <TypeAnimation
                                    wrapper="span"
                                    className="whitespace-nowrap max-w-xl text-green-400"
                                    sequence={[
                                        "Software Engineer",
                                        2000,                                        
                                        "Full Stack Engineer",
                                        2000,
                                        "AI/ML Engineer",
                                        2000,
                                        "Developer",
                                        2000
                                        
                                    ]}
                                    cursor={true}
                                    repeat={Infinity}
                                    style={{ display: 'inline-block' }}
                                />
                                <br />
                                <span className='text-white'>Manasa Kumari</span>
                            </h1>

                            <p className={`text-gray-300 text-lg leading-relaxed max-w-xl transition-all duration-1000 delay-400 white-space: nowrap ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                {/* AI Engineer optimizing models, <br />
                        Full Stack Developer building their interfaces. <br />
                        My passion lives where tensor calculations meet user interactions...</p> */}
                                I build intelligent applications end-to-end, from optimizing the AI model to crafting the user interface. </p>
                            <button onClick={scrollToAbout} className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-xl font-medium hover:scale-105 cursor-pointer">
                                LEARN MORE
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </button>

                            {/* Social Icons */}
                            <div className={`flex gap-4 pt-6 transition-all duration-100 delay-800 text-white ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <a href="https://github.com/manasak2010" className='w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 group hover:scale-110 hover:rotate-3' >
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="https://www.linkedin.com/in/manasakumari/" className='w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 group hover:scale-110 hover:rotate-3' >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="mailto:manasakumari2024@gmail.com" className='w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 group hover:scale-110 hover:rotate-3' >
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* right content */}
                    <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="relative">
                            <div className="w-full max-w-lg mx-auto">
                                <div className="relative group border-4 border-green-500 rounded-2xl p-3 group-hover:border-green-400">
                                    <img src={ManasaPic} alt="Manasa Kumari" className="w-120 rounded-2xl text-white shadow-2xl transition-all duration-500 group-hover:scale-105" />
                                </div>
                            </div>
                            <div className="absolute -top-4 right-4 w-20 h-20 bg-green-600 rounded-2xl opacity-20"></div>
                            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-500 rounded-2xl opacity-20"></div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Hero