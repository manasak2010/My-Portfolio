import React, { useEffect, useState } from 'react'

function Skills() {
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

        const element = document.getElementById('skills');
        if (element) observer.observe(element);
        
        return () => observer.disconnect();
    }, []);

    const skillCategories = [
    {
        title: "Languages",
        skills: [
            "Python", "Java", "C/C++", "Go", "SQL", "JavaScript", "TypeScript",
            "HTML", "CSS", "R", "MATLAB", "PHP", "Bash/Shell"
        ],
        icon: "💻"
    },
    {
        title: "Data Analysis & Visualization",
        skills: [
            "Pandas", "NumPy", "Matplotlib", "Seaborn",
            "Tableau", "Power BI", "Excel", "Business Intelligence"
        ],
        icon: "📊"
    },
    {
        title: "Developer Tools",
        skills: [
            "Git", "GitHub", "GitLab", "CI/CD Pipelines", "REST APIs",
            "Agile Methodology", "Docker", "Kubernetes"
        ],
        icon: "🛠️"
    },
    {
        title: "AI & ML Libraries",
        skills: [
            "TensorFlow", "PyTorch", "Keras", "Scikit-learn",
            "XGBoost", "LightGBM", "OpenCV", "FAISS",
            "LangChain", "Hugging Face Transformers", "NLTK",
            "CUDA", "Triton"
        ],
        icon: "📚"
    },
    {
        title: "Frameworks, Databases & APIs",
        skills: [
            "FastAPI", "Flask", "Django", "Streamlit",
            "MongoDB", "PostgreSQL", "MySQL", "Firebase",
             "Kafka", "Stripe (API)",
            "OpenAI (API)", "Resend (Email API)"
        ],
        icon: "🗄️"
    },
    {
        title: "Technologies",
        skills: [
            "Machine Learning", "Deep Learning", "Computer Vision",
            "NLP", "RAG", "Vector Search", "Embeddings",
             "Big Data (Spark, Hadoop)", "Cloud (AWS, GCP, Azure)",
            "Reinforcement Learning", "API Development", "Full-Stack Development"
        ],
        icon: "⚙️"
    }
];


    return (
        <section id="skills" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-10 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="text-green-400 font-semibold text-lg mb-4">Technical Expertise</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">My Skills</h2>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                        The tools and technologies I use to build intelligent applications, from model to interface.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div 
                            key={index}
                            className={`bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all duration-300 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-center mb-4">
                                <span className="text-2xl mr-3">{category.icon}</span>
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span 
                                        key={skillIndex}
                                        className="bg-slate-700 text-white px-3 py-2 rounded-lg text-sm hover:bg-green-600 hover:text-white transition-all duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills