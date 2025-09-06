import React, { useEffect, useState } from 'react';

function Publications() {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );
        
        const element = document.getElementById('publications');
        if (element) observer.observe(element);
        
        return () => observer.disconnect();
    }, []);

    const publications = [
        {
            title: "Determining the Optimal Parameters for Wheat and Paddy Crops using Smart Farming",
            conference: "IEEE - ICCCI 2023",
            link: "https://ieeexplore.ieee.org/document/10128276",
            icon: "🌾"
        },
        {
            title: "Identification of Soil Features Suitable for Barley, Maize and Sugarcane Cultivation using Precision Agriculture",
            conference: "ICMED - ICMPC 2023",
            link: "https://www.e3s-conferences.org/articles/e3sconf/abs/2023/28/e3sconf_icmed-icmpc2023_01158/e3sconf_icmed-icmpc2023_01158.html",
            icon: "🌱"
        }
    ];

    return (
        <section id="publications" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Matching background elements from Skills component */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-10 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="text-green-400 font-semibold text-lg mb-4">Research Contributions</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Publications</h2>
                    
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {publications.map((pub, index) => (
                        <div 
                            key={index}
                            className={`bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all duration-300 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-center mb-4">
                                <span className="text-2xl mr-3">{pub.icon}</span>
                                <h3 className="text-xl font-bold text-white">{pub.conference}</h3>
                            </div>
                            <p className="text-gray-300 mb-4">{pub.title}</p>
                            <a 
                                href={pub.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-slate-600 text-green-400 px-6 py-3 rounded-lg hover:bg-green-700 hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                Read Paper
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>

                
            </div>
        </section>
    );
}

export default Publications;