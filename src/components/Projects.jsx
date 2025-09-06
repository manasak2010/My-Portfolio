import { Github } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import clgbotpic from '../assets/clgbotpic.png';
import slipstreamPic from '../assets/slipstreamPic.png';
import traverapic from '../assets/traverapic.png';
import iotpic from '../assets/iotpic.png';
import trafficpic from '../assets/trafficpic.png';
import adpic from '../assets/adpic.png';

function Projects() {
    // State for the main section's scroll animation
    const [isVisible, setIsVisible] = useState(false);
    // State to control how many projects are shown
    const [visibleProjects, setVisibleProjects] = useState(3);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Optional: stop observing after it's visible
                }
            }, { threshold: 0.1 });

        const element = document.getElementById('projects');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    // The complete and polished project data
    const projects = [
        {
            id: 1,
            title: "Slipstream",
            description: "Optimized Mistral-7B with custom Triton kernels and speculative decoding, achieving a 2x increase in throughput and a 30% reduction in latency.",
            image: slipstreamPic,
            technologies: ["PyTorch", "Triton", "FlashAttention", "CUDA", "Mistral-7B"],
            link: "https://github.com/manasak2010/Slipstream", // Replace with your actual GitHub link
            category: "AI Model Optimization",
        },
        {
            id: 2,
            title: "CollegeDataBot",
            description: "Built a LangChain-powered chatbot to streamline access to college information, reducing query time from minutes to seconds.",
            image: clgbotpic, // Remember to replace image paths
            technologies: ["LangChain", "BeautifulSoup", "Streamlit", "CSV", "Google Cloud API"],
            link: "https://github.com/manasak2010/CollegeDataBot", // Replace with your actual GitHub link
            category: "Conversational AI",
        },
        {
            id: 3,
            title: "Travera",
            description: "Designed a real-time video analysis system that improved retrieval accuracy by 25% and reduced redundant data storage by 40%.",
            image: traverapic, // Remember to replace image paths
            technologies: ["OpenCV", "Clustering Algorithms", "Cloud Databases", "Deep Learning"],
            link: "https://github.com/manasak2010/Travera",
            category: "Computer Vision",
        },
        {
            id: 4,
            title: "FirstSow",
            description: "An IoT-powered smart agriculture system using Arduino sensors and an Android app for real-time crop monitoring and data-driven farming decisions.",
            image: iotpic, // Remember to replace image paths
            technologies: ["Data Analytics", "Android", "Arduino", "IoT", "Kodular", "Firebase"],
            link: "https://github.com/Srigana/FirstSow",
            category: "IoT & Smart Agriculture",
        },
        {
            id: 5,
            title: "RoadSignNet",
            description: "A real-time traffic sign detector for autonomous vehicles using optimized deep learning models, achieving 95% classification accuracy.",
            image: trafficpic, // Remember to replace image paths
            technologies: ["OpenCV", "CNN", "TensorFlow", "Keras", "Image Processing"],
            link: "https://github.com/manasak2010/road-sign-detection",
            category: "Computer Vision",
        },
        {
            id: 3,
            title: "UCB-Ad-Prediction",
            description: "Developed a reinforcement learning model to optimize decision-making in uncertain environments using the Upper Confidence Bound algorithm. Benchmarked its performance against Random Selection and Epsilon-Greedy, demonstrating superior reward maximization.",
            image: adpic, // Replace with actual image path
            technologies: ["Python", "Reinforcement Learning", "UCB", "Epsilon-Greedy", "Matplotlib"],
            link: "https://github.com/manasak2010/UCB-Ad-Prediction", 
            category: "Reinforcement Learning",
        }
    ];

    // Function to handle the "View All Projects" button click
    const handleViewAll = () => {
        setVisibleProjects(projects.length);
    };

    return (
        <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="text-green-400 font-semibold text-lg mb-4">My Work</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
                    <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
                        From optimizing AI models to building full-stack applications, here's a look at my work.
                    </p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-16'>
                    {projects.slice(0, visibleProjects).map((project, index) => (
                        <div
                            key={project.id}
                            className={`group bg-slate-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden border border-slate-700 hover:border-green-500 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${(index) * 150}ms` }}
                        >
                            <div className="relative overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-6 flex flex-col">
                                <span className='bg-slate-800 text-green-400 px-3 py-1 rounded-full text-xs font-medium self-start mb-4'>{project.category}</span>
                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">{project.title}</h4>
                                <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-grow">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="bg-slate-800 border border-slate-700 text-green-400 text-xs font-medium px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-green-600 text-white w-full px-4 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
                                >
                                    <Github className='w-5 h-5' />
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {visibleProjects < projects.length && (
                    <div className={`text-center transition-opacity duration-1000 mt-16 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <button
                            onClick={handleViewAll}
                            className='bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer'
                        >
                            View All Projects
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Projects;