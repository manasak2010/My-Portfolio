import React, { useEffect, useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState({ email: false, phone: false });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const emailAddress = "manasakumari2024@gmail.com";
  const phoneNumber = "+1 (934) 263-2033";
  const phoneNumberForLink = "+19342632033";

  useEffect(() => {
    emailjs.init("NiSEokbCeIiRY4RvO");
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.3 });
    const element = document.getElementById('contact');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const handleCopy = (field, text) => {
    navigator.clipboard.writeText(text);
    setCopied(prevState => ({ ...prevState, [field]: true }));
    setTimeout(() => {
      setCopied(prevState => ({ ...prevState, [field]: false }));
    }, 1500);
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("loading");

    const autoReply = emailjs.send(
      "service_qa6i5w5",
      "template_wwcwbch",
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      "NiSEokbCeIiRY4RvO"
    );

    const notifyMe = emailjs.send(
      "service_qa6i5w5",
      "template_38l9y88",
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      "NiSEokbCeIiRY4RvO"
    );

    Promise.all([autoReply, notifyMe])
      .then(() => {
        setStatus("success");
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus("idle"), 3000);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      });
  };

  return (
    <section id="contact" className='py-24 bg-slate-800 relative overflow-hidden'>
      {/* background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className='text-green-400 font-semibold text-lg mb-4'>Get in touch</p>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>Let's work Together</h2>
          <p className='text-gray-300 text-lg mx-auto'>
            I’d love to hear from you! Whether it’s a project idea, a question, or just to say hi, drop me a message below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className='text-2xl font-bold text-white'>Contact Information</h3>
            <div
              onClick={() => handleCopy('email', emailAddress)}
              role="button"
              className="flex items-center gap-4 p-4 bg-slate-900 rounded-lg hover:bg-slate-700 border border-slate-700 hover:border-green-500 transition-all cursor-pointer"
            >
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-white">Email</p>
                <p className='text-gray-300'>{copied.email ? "Copied!" : emailAddress}</p>
              </div>
            </div>

            <a href={`tel:${phoneNumberForLink}`} className="flex items-center gap-4 p-4 bg-slate-900 rounded-lg border border-slate-700 hover:border-green-500" onClick={(e) => { e.preventDefault(); handleCopy('phone', phoneNumber); }}>
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-white">Phone</p>
                <p className='text-gray-300'>{copied.phone ? "Copied!" : phoneNumber}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-lg border border-slate-700 hover:border-green-500">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-white">Location</p>
                <p className='text-gray-300'>Stony Brook, NY</p>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a href="https://github.com/manasak2010" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-800 border border-slate-700 hover:border-green-500">
                <Github className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.linkedin.com/in/manasakumari/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-800 border border-slate-700 hover:border-green-500">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-green-500/50">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className='w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white' placeholder='Your name' />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className='w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white' placeholder='Email address' />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              <div className="mt-5">
                <label className="block text-sm font-semibold text-gray-300 mb-2">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} className='w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white' placeholder='What’s on your mind?' />
                {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
              </div>
              <div className="mt-5">
                <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className='w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white resize-none' placeholder='Write me a quick message!'></textarea>
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className={`mt-5 w-full bg-green-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center cursor-pointer gap-2 shadow-lg transition-all ${status === "loading" ? 'opacity-70 cursor-not-allowed' : 'hover:bg-green-700 hover:scale-105'
                  }`}
              >
                {status === "loading" ? "Sending..." : <> Send Message<Send className="w-5 h-5" /></>}
                {status === "success" && <CheckCircle className="w-5 h-5 text-green-400" />}
                {status === "error" && <AlertCircle className="w-5 h-5 text-red-400" />}
              </button>
              {status === "success" && <p className="text-green-400 mt-3 text-center">Thanks for reaching out! I’ll get back to you soon 😄</p>}
              {status === "error" && <p className="text-red-400 mt-3 text-center">Something went wrong. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
