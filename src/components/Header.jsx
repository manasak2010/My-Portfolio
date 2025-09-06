import React, { useEffect,useState } from 'react'
import { Menu, X } from 'lucide-react';

function Header() {
    const [isMenuOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    useEffect(() => {
        // 1. Immediately scroll to top on load
        window.scrollTo(0, 0);
        
        // 2. Clear any existing hash from URL
        window.history.replaceState(null, null, ' ');
        
        // 3. Scroll to home section after a tiny delay (ensures DOM is ready)
        const timer = setTimeout(() => {
            const homeSection = document.getElementById('home');
            if (homeSection) {
                homeSection.scrollIntoView({ behavior: 'auto' });
            }
        }, 50);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection= (href)=>{
        const element=document.querySelector(href);
        if(element){
            element.scrollIntoView({behavior:"smooth"});
            setTimeout(() => {
                window.history.pushState(null, null, href);
            }, 100);
        }
        setIsOpen(false);
    };

    const navitems=[
        {name:"Home", href:"#home"},
        {name:"About", href:"#about"},
        {name:"Experience", href:"#experience"},
        {name:"Skills", href:"#skills"},
        
        {name:"Projects", href:"#projects"},
        {name:"Publications", href:"#publications"},
        
        {name:"Contact", href:"#contact"}
    ]

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-900 shadow-lg backdrop-blur-lg border-b border-slate-800' : 'bg-transparent'}`}
        >
     <div className="container mx-auto py-4 px-6">
       <div className="flex items-center justify-between">
        <div className="text-2xl font-bold" onClick={() => scrollToSection('#home')}>
            <span className="text-green-400">MANASA</span>
            <span className="text-white">KUMARI</span>
            <span className="text-green-400">.</span>
        </div>

        {/* Desktop Menus */}
        <nav className="hidden md:flex space-x-8 ">
            {navitems.map((item, index) => {
                return <button key={item.name}
                                onClick={() => scrollToSection(item.href)} className="text-gray-300 hover:text-green-400 transition-all duration-300 font-medium relative group cursor-pointer" style={{animationDelay: `${index * 0.1}s`}} >{item.name}
                <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>  
                {/* {for the line underlining the text} */}
                </button>
            })}       </nav>
        <button 
                onClick={() => {
            const link = document.createElement('a');
            link.href = '/documents/ManasaKumari_Resume.pdf';
            link.download = 'ManasaKumari_Resume.pdf';
            link.click();
        }}
        className="hidden md:flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer">
          Download Resume Now
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white cursor-pointer" onClick={() => setIsOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-slate-800 pt-4 bg-slate-800 rounded-lg shadow-lg ">
                {navitems.map((item)=>{
                    return <button key={item.name}
                                onClick={() => scrollToSection(item.href)} className="block text-gray-300 hover:text-green-400 hover:bg-slate-700 transition-all duration-300 font-medium py-3 px-4 w-full text-left rounded-lg cursor-pointer">{item.name}</button>
                })}
            <button 
                        onClick={() => {
                const link = document.createElement('a');
                link.href = '/documents/ManasaKumari_Resume.pdf';
                link.download = 'ManasaKumari_Resume.pdf';
                link.click();
                setIsOpen(false); // Close mobile menu after download
            }}
            className="mt-4 w-full flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-all duration-300 cursor-pointer">
                Download Resume Now
            </button>
        </nav>
        )}
     </div>
    </header>
  )
}

export default Header   