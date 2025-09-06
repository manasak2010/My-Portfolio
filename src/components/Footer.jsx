import React from 'react';

function Footer() {
  return (
    <div className="bg-slate-900 text-white py-2 border-t border-slate-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-10 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="flex flex-col items-center text-center"> {/* Center both lines */}
          <div className="text-xl font-bold">
            <span className="text-green-500">Manasa</span>
            <span className="text-white"> Kumari</span>
            <span className="text-green-500">.</span>
          </div>
          <div className="text-gray-400">AI Engineer · Software Developer · Data Scientist</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;