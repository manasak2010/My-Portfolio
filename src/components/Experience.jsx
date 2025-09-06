import { Award, Briefcase, Calendar, MapPin } from 'lucide-react';
import React,{use, useEffect,useState} from 'react'

function Experience() {
    const [isVisible, setIsVisible] = useState([]);
    const [timelineVisible, setTimelineVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    if(entry.target.classList.contains('timeline-line')){
                        setTimelineVisible(true);
                    }
                    else{
                        const index = parseInt(entry.target.dataset.index);
                        setIsVisible((prev) => [...new Set([...prev, index])]);
                    }
                }
            });
        }, { 
            threshold: 0.1, // Lower threshold
        });
        const timelineElement = document.querySelector('.timeline-line');
        const experienceItems = document.querySelectorAll('.experience-item');
        if (timelineElement) observer.observe(timelineElement);
        experienceItems.forEach((item) => observer.observe(item));
        return()=> observer.disconnect();
        
    }, []);

    

    const experience=[
        {
            company: "Hawl Technologies LLC",
            position:"Backend & AI Engineer Intern",
            period: "May 2025 – Present",
            location:"Remote, USA",
            description: "Developed and deployed scalable backend systems and AI-powered features, including secure payment processing, and advanced semantic search capabilities using RAG pipelines.",
            achievements: [
               " Built and deployed full-stack backend systems using Python and FastAPI, including complete user authentication flow with email verification, password reset, session management, and MongoDB integration.",
                "Integrated Stripe for secure payment processing and subscription handling.",
                "Developed data pipelines for web scraping, document chunking, and vector embedding generation using OpenAI and FAISS to support semantic search.",
                "Applied Retrieval-Augmented Generation (RAG) for intelligent querying over large unstructured datasets.",
                "Designed a localhost deployment pipeline to enable offline testing and development of AI-driven features."
            ],
            skills: ["FastAPI", "MongoDB", "Stripe API", "OpenAI", "FAISS", "RAG"]
        },
        {
            company: "Blue Cloud Softech Solutions",
            position: "Software Engineering Intern",
            period: "February 2024 – April 2024",
            location: "Hyderabad, India",
            description: "Engineered a scalable data warehousing backend and developed Python pipelines to process and analyze over 1,500 news articles, driving data-informed product decisions.",
            achievements: [
                "Developed a scalable backend system using PHP and SQL to support data warehousing and transformation, integrating with Python pipelines that processed 1,500+ news articles for category tagging and trend analysis.",
                "Engineered a multilingual data management system with automated categorization to dynamically organize articles by language and subcategory, leading to a 20% increase in user engagement.",
                "Designed and deployed an interactive dashboard using Pandas, Matplotlib to analyze user behavior, leading to data-driven improvements in content recommendation and a 20% increase in returning users."
            ],
            skills: ["Pandas", "Matplotlib", "Data Pipelines", "SQL", "PHP"]
        },
        {
            company: "Techsture Technologies India Private Limited",
            position: "Machine Learning Intern",
            period: "August 2023 – October 2023",
            location: "Ahmedabad, India",
            description: "Designed and implemented a high-accuracy computer vision pipeline for vehicle license plate recognition, significantly improving processing speed and model efficiency.",
            achievements: [
                "Engineered a vehicle license plate recognition pipeline using Python, Haar Cascade, and OpenCV, achieving a 40% speed improvement and a 25% reduction in errors.",
                "Designed and optimized a three-layer CNN model, using TensorFlow to streamline data processing, improving model throughput by 30% and reduced training time; enhancing system efficiency and reducing costs.",
                "Built a high-accuracy recognition pipeline, achieving a 95% accuracy rate in plate recognition across varied lighting conditions, contributing to the robustness and reliability of the application in real-world scenarios."
            ],
            skills: ["OpenCV", "TensorFlow", "Keras", "Computer Vision", "CNN"]
        },
    ]
    const timelineFillPercentage = isVisible.length > 0  ? (Math.max(...isVisible) / (experience.length - 1) * 100) : 0;

  return (
    <section id="experience" className="py-24 bg-slate-800 relative overflow-hidden">
        {/* animated background elements */}
        <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl "></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-10 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <p className="text-green-400 font-semibold text-lg mb-4">All Company</p>
                <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>My Experience</h2>
                <p className='text-gray-300 text-lg max-w-2xl mx-auto delay-300'>
                    My experience spans from building intelligent AI pipelines to architecting robust backend systems. Here are some of the key projects I've contributed to.
                    </p>
            </div>
            </div>
            <div className="max-w-5xl mx-auto">
                <div className="relative" style={{ minHeight: `${experience.length * 400}px` }}>
                    {/* animate timeline */}
                    <div className="timeline-line absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-slate-700 rounded-full overflow-hidden">
  <div className={`w-full bg-gradient-to-b from-green-500 via-green-400 to-green-300 rounded-full transition-all duration-2000 ease-out`} style={{ height: `${timelineFillPercentage}%` }}>
    <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-green-300 to-transparent"></div>
  </div>
</div>
                    {experience.map((exp, index) => {
                    return (
                        <div key={index} className={`experience-item relative flex items-center mb-32 ${index%2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} transition-all duration-300 ${isVisible.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' }`} data-index={index} style={{transitionDelay: `${index * 300+800}ms`,
                            transform: isVisible.includes(index) ? 'translateY(0)' : index%2===0 ? 'translateX(-50px) translateY(20px)' : 'translateX(50px) translateY(20px)'}}>
                            {/* animated timeline dots */}
                            <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-2 shadow-lg ${isVisible.includes(index) ? 'scale-110' : 'scale-0'} `} style={{transitionDelay: `${index * 300 + 1200}ms`}}>
                                <div className='absolute inset-0 bg-green-500 rounded-full'></div>
                                <div className='absolute inset-0 bg-green-400 rounded-full'></div>
                            </div>
                            {/* content cards */}
                            <div className={`ml-20 md:ml-0 md:w-1/2 ${ index %2===0? "md:pr-12":"md:pl-12"}`}>
                            <div className={`bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700 hover:border-green-500 transition-all duration-500 transform hover:scale-105 hover:shadow-blue-800/20 group`}>
                            <div className="flex items-center gap-3 mb-6 group-hover:transform group-hover:scale-105 transition-all duration-300">
                            <div className='w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-all duration-300 group-hover:rotate-6'>
                                <Briefcase className='w-6 h-6 text-white' />
                            </div>
                            <div>
                                <h3 className='text-xl font-black text-white group-hover:text-green-400 transition-colors duration-300'>{exp.company}</h3>
                                <div className='flex items-center gap-2 text-green-400 text-sm'>
                                    <Calendar className='w-4 h-4' />
                                    {exp.period}
                                </div>
                            </div>
                            </div>
                            {/* position element */}
                            <div className="mb-4">
                                <h4 className='text-lg font-semibold text-green-400 mb-2 group:hover:text-green-300 transition-colors duration-300'>{exp.position}</h4>
                                <div className="flex items-center gap-2 text-green-400 text-sm">
                                    <MapPin className='w-4 h-4' />
                                    {exp.location}
                                </div>
                            </div>
                            {/* Description */}
                            <div className="text-gray-300 mb-6 leading-relaxed group-hover:Text-white transition-all duration-300">{exp.description}</div>
                            {/* Achievements */}
                            <div className="mb-6">
                                <h5 className='font-semilbold text-white mb-3 flex items-center gap-2 group-hover:text-green-400 transition-all duration-300'>
                                    <Award className='w-4 h-4 text-green-400' />
                                    Key Achievements
                                </h5>
                                <ul className='space-y-2'>
                                    {exp.achievements.map((ach, achindex) => {
                                        return(
                                            <li key={achindex} className='text-gray-300 text-sm flex group-hover:text-white items-start gap-3 transition-all duration-300' style={{animationDelay: `${index * 300+achindex*200+1500}ms`}}>
                                            <span className='w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0 animate-pulse-dot'>
                                                
                                            </span>
                                            {ach}
                                            
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            {/* Skills */}
                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, skillindex) => {
                                    return(
                                        <span key={skillindex} className='bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300 hover:bg-green-400' style={{animationDelay: `${index * 300+skillindex*200+1800}ms`}}>{skill}</span>
                                    );
                                })}
                            </div>
                            </div>
                            </div>
                            </div>
                        );
                    })}                    
                
            </div>
        </div>
    </section>
  )
}


export default Experience