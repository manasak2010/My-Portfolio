import React, { useEffect, useState } from 'react'

import { MapPin } from 'lucide-react';

function About() {
    const [isVisible, setIsVisible] = React.useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            }, { threshold: 0.3 });
        const element = document.getElementById('about');
        if (element) observer.observe(element);
        return () => { observer.disconnect(); };
    }, []);


    const education = [
        {
            year: "2024 - Expected May 2026",
            title: "Master of Science in Data Science",
            institution: "Stony Brook University",
            location: "Stony Brook, New York, USA",  // Added location

        },
        {
            year: "2020 - 2024",
            title: "Bachelor of Technology in Computer Science and Business Systems",
            institution: "Jawaharlal Nehru Technological University Hyderabad",
            location: "Hyderabad, Telangana, India",  // Added location

        }
    ];


    return (
        <section id="about" className='py-24 bg-slate-950 relative overflow-hidden'>
            {/* Animated background elements */}
            <div className='absolute inset-0'>
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Education */}
                    <div>
                        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <div className="mb-4">
                                <p className="text-green-400 font-semibold text-lg mb-4">Qualification</p>
                                <p className='text-green-400 text-4xl font-bold mb-8'>Education</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <div key={index} className={`border-l-2 border-green-500 pl-6 relative group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                                    <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full group-hover:scale-125 transition-all duration-300"></div>
                                    <div className='text-green-400 text-sm font-semibold mb-2 group-hover:text-green-300 transition-all duration-300'>{edu.year}</div>
                                    <h3 className='text-xl font-black text-white mb-2 group-hover:text-green-400 transition-all duration-300'>{edu.title}</h3>
                                    <p className='text-gray-400 mb-2 group-hover:text-gray-300 transition-all duration-300'>{edu.institution}</p>

                                    <div className="flex items-center gap-2 text-green-400 text-sm">
                                        <MapPin className='w-4 h-4' />
                                        {edu.location}
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - About Me */}
                    <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                        <div className="space-y-4">
                            <p className="text-green-400 font-semibold text-lg">About Me</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-white">Why hire me for your <br /><span>next project?</span></h2>
                            <p className="text-green-400 font-semibold">AI Engineer & Full Stack Developer</p>
                        </div>
                        <div className="space-y-6 text-gray-300 leading-relaxed ">
                            <p className={`text-lg transition-all duration-100 delay-500  ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                                I've always been fascinated by the intersection of complex data and human-centered design. As a Master's student in Data Science, I'm pursuing that passion through a strong technical foundation in languages and frameworks like Python, TensorFlow, and React.<br /> <br />
                                My experience as both a Software Development and Machine Learning Intern has allowed me to apply these skills to real-world projects, building robust backend architectures and optimizing machine learning models. I am dedicated to continuous learning and am eager to leverage my skills to contribute to innovative projects and team success.
                            </p>

                        </div>
                        <div className="flex flex-wrap gap-4 transition-all duration-1000 delay-1100">
                            
                            <button 
    onClick={() => {
        const link = document.createElement('a');
        link.href = '/documents/ManasaKumari_Resume.pdf'; // make sure this path is correct
        link.download = 'ManasaKumari_Resume.pdf';
        link.click();
    }}
    className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
>
    Download Resume
</button>

                            {/* <button className="border-3 border-slate-600 text-white px-8 py-3 rounded-lg hover:border-green-600 hover:text-green-400 transition-all duration-300 font-medium hover:scale-105">
                        Learn More
                    </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About