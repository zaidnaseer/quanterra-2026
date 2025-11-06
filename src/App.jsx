import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, BookOpen, Mail, Phone, ChevronDown } from 'lucide-react';

export default function QuanterraWebsite() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scheduleItems = [
    { date: 'Call for Papers', event: '1st October, 2025' },
    { date: 'Submission Deadline', event: '30th November, 2025' },
    { date: 'Acceptance Notification', event: '21st December, 2025' },
    { date: 'Camera Ready Papers', event: '10th January, 2026' },
    { date: 'Symposium Event', event: '20-21 February, 2026' }
  ];

  const tracks = [
    'Quantum Machine Learning and Hybrid AI-Quantum algorithms',
    'Quantum-inspired optimization methods for AI',
    'Quantum Natural Language Processing',
    'Quantum-enhanced Deep Learning',
    'Security and Privacy in AI using Quantum techniques',
    'Applications of AI-Quantum synergy in finance, healthcare, cryptography, and materials science'
  ];

  const organizers = [
    { role: 'Chief Patron', name: 'Dr. A. Ramakrishna' },
    { role: 'Symposium Chair', name: 'Dr. Arpita Gupta' },
    { role: 'Convenor', name: 'Dr. Sumit Hazra' },
    { 
      role: 'Co-Convenors', 
      name: 'Dr. Sushama Rani Dutta, Mr. Chanda Rajkumar, Mr. Chiranjeevi N, Mrs. P Sree Lakshmi' 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center font-bold">
                Q
              </div>
              <span className="text-xl font-bold">Quanterra-2026</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Schedule', 'Tracks', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-cyan-400 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full text-cyan-300 text-sm font-semibold">
            Doctoral Colloquium
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 animate-pulse">
            Quanterra-2026
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-gray-200">
            Quantum Horizons in AI Research
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg mb-8 text-gray-300">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>20-21 February 2026</span>
            </div>
            <div className="hidden md:block">•</div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>KLH University, Aziznagar</span>
            </div>
          </div>
          <div className="text-sm text-gray-400 mb-12">
            Organised by: Department of CSE, KLH
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#schedule" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
              View Schedule
            </a>
            <a href="#contact" className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
              Submit Paper
            </a>
          </div>
        </div>
        
        <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
            About the Symposium
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                The symposium is organized by an interdisciplinary team of faculty and researchers. Our committee combines expertise in machine learning, and computational mathematics, with extensive experience in hosting academic conferences and active collaborations with leading quantum computing research centers worldwide.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">For Researchers</h3>
              <p className="text-gray-300 leading-relaxed">
                The symposium provides an advanced forum for doctoral researchers to present original work and foster collaboration at the convergence of quantum computing and artificial intelligence. Distinguished participants will examine cutting-edge developments across multiple research domains.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-md rounded-2xl p-8 border border-cyan-400/20">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              Key Highlights
            </h3>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Keynote talks by top researchers in AI and quantum computing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Doctoral paper presentations and posters</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Panel on the future of AI-Quantum synergy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Mentoring sessions with senior experts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Industry exhibition showcasing cutting-edge platforms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Networking opportunities with global researchers</span>
              </li>
            </ul>
          </div>

          <div className="mt-12 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 text-center">
            <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Target Audience</h3>
            <p className="text-gray-300 text-lg">
              This event is intended for Ph.D. scholars and researchers who are keen to contribute to Quantum Computing and AI.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
            Registration Schedule
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-600 hidden md:block"></div>
            
            {scheduleItems.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">{item.date}</h3>
                    <p className="text-gray-300 text-lg">{item.event}</p>
                  </div>
                </div>
                
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full border-4 border-slate-900 z-10"></div>
                
                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Tracks Section */}
      <section id="tracks" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
            Research Tracks
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {tracks.map((track, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors">{track}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizers Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
            Organizing Committee
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {organizers.map((org, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-cyan-400 font-semibold mb-2 text-sm uppercase tracking-wide">{org.role}</div>
                <div className="text-white text-lg font-medium">{org.name}</div>
              </div>
            ))}
            
            <div className="md:col-span-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-md rounded-xl p-8 border border-cyan-400/20">
              <div className="text-cyan-400 font-semibold mb-2 text-sm uppercase tracking-wide">Student Volunteers</div>
              <div className="text-white text-lg font-medium">Guild Club and FOSS Club</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
            Contact Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Symposium Chair</h3>
              <div className="space-y-4">
                <div className="text-xl font-semibold">Dr. Arpita Gupta</div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a href="mailto:arpita.gupta@klh.edu.in" className="hover:text-cyan-400 transition-colors">
                    arpita.gupta@klh.edu.in
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href="tel:9407885161" className="hover:text-cyan-400 transition-colors">
                    9407885161
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Convenor</h3>
              <div className="space-y-4">
                <div className="text-xl font-semibold">Dr. Sumit Hazra</div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a href="mailto:sumit.hazra@klh.edu.in" className="hover:text-cyan-400 transition-colors">
                    sumit.hazra@klh.edu.in
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href="tel:9830770461" className="hover:text-cyan-400 transition-colors">
                    9830770461
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © 2025 KLH University. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            We cordially invite your participation in this scholarly forum!
          </p>
        </div>
      </footer>
    </div>
  );
}