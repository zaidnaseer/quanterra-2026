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
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Starfield Background */}
      <div className="fixed inset-0 z-0">
        <div className="stars-small absolute inset-0"></div>
        <div className="stars-medium absolute inset-0"></div>
        <div className="stars-large absolute inset-0"></div>
        {/* Nebula effect */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-slate-700/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-blue-950/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-blue-900/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-600 via-blue-800 to-slate-700 rounded-full flex items-center justify-center font-bold shadow-lg shadow-blue-900/50">
                Q
              </div>
              <span className="text-xl font-bold">Quanterra-2026</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Schedule', 'Tracks', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-400 transition-colors duration-200"
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
        {/* Moon */}
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-slate-200 to-slate-400 shadow-2xl shadow-slate-400/30 opacity-80">
          {/* Moon craters */}
          <div className="absolute top-4 right-6 w-8 h-8 rounded-full bg-slate-500/40"></div>
          <div className="absolute top-12 right-14 w-6 h-6 rounded-full bg-slate-500/30"></div>
          <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-slate-500/35"></div>
          <div className="absolute top-16 left-8 w-7 h-7 rounded-full bg-slate-500/25"></div>
          <div className="absolute bottom-12 left-6 w-5 h-5 rounded-full bg-slate-500/30"></div>
          {/* Moon glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
        </div>
        
        {/* Floating planets */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-slate-600 to-blue-900 rounded-full opacity-30 blur-sm animate-float"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-blue-800 to-slate-700 rounded-full opacity-25 blur-sm animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-slate-700 to-blue-900 rounded-full opacity-20 blur-sm animate-float-slow"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-slate-800/40 backdrop-blur-sm rounded-full text-blue-300 text-sm font-semibold border border-slate-700/50 shadow-lg shadow-blue-900/20">
            🚀 Doctoral Colloquium
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-200 via-blue-200 to-slate-300 animate-pulse drop-shadow-2xl">
            Quanterra-2026
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-slate-200 font-light">
            🌌 Quantum Horizons in AI Research
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg mb-8 text-slate-300">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-400" />
              <span>20-21 February 2026</span>
            </div>
            <div className="hidden md:block text-slate-500">✦</div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>KLH University, Aziznagar</span>
            </div>
          </div>
          <div className="text-sm text-slate-400 mb-12">
            Organised by: Department of CSE, KLH
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#schedule" className="px-8 py-4 bg-gradient-to-r from-slate-700 via-blue-800 to-slate-700 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-900/50 transition-all duration-300 transform hover:scale-105">
              View Schedule
            </a>
            <a href="#contact" className="px-8 py-4 bg-white/5 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 border border-slate-700/50 hover:border-slate-600/60">
              Submit Paper
            </a>
          </div>
        </div>

        <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-blue-400" />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-blue-300">
            About the Symposium
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/30">
              <h3 className="text-2xl font-bold mb-4 text-blue-300">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed">
                The symposium is organized by an interdisciplinary team of faculty and researchers. Our committee combines expertise in machine learning, and computational mathematics, with extensive experience in hosting academic conferences and active collaborations with leading quantum computing research centers worldwide.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/30">
              <h3 className="text-2xl font-bold mb-4 text-blue-300">For Researchers</h3>
              <p className="text-slate-300 leading-relaxed">
                The symposium provides an advanced forum for doctoral researchers to present original work and foster collaboration at the convergence of quantum computing and artificial intelligence. Distinguished participants will examine cutting-edge developments across multiple research domains.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-slate-900/50 via-blue-950/30 to-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 hover:shadow-lg hover:shadow-blue-900/30 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-blue-300 flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              Key Highlights
            </h3>
            <ul className="grid md:grid-cols-2 gap-4 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">✦</span>
                <span>Keynote talks by top researchers in AI and quantum computing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">✦</span>
                <span>Doctoral paper presentations and posters</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">✦</span>
                <span>Panel on the future of AI-Quantum synergy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">✦</span>
                <span>Mentoring sessions with senior experts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">✦</span>
                <span>Industry exhibition showcasing cutting-edge platforms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">✦</span>
                <span>Networking opportunities with global researchers</span>
              </li>
            </ul>
          </div>

          <div className="mt-12 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 text-center hover:shadow-lg hover:shadow-blue-900/30 transition-all duration-300">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Target Audience</h3>
            <p className="text-slate-300 text-lg">
              This event is intended for Ph.D. scholars and researchers who are keen to contribute to Quantum Computing and AI.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-4 bg-black/40 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-blue-300">
            Registration Schedule
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-slate-600 to-blue-700 hidden md:block"></div>

            {scheduleItems.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-900/30">
                    <h3 className="text-xl font-bold text-blue-300 mb-2">{item.date}</h3>
                    <p className="text-slate-300 text-lg">{item.event}</p>
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-slate-600 to-blue-700 rounded-full border-4 border-black z-10 shadow-lg shadow-blue-900/50"></div>

                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Tracks Section */}
      <section id="tracks" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-blue-300">
            Research Tracks
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {tracks.map((track, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/60 transition-all duration-300 hover:scale-105 group hover:shadow-lg hover:shadow-blue-900/30">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-slate-600 via-blue-800 to-slate-700 rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-900/50">
                    {index + 1}
                  </div>
                  <p className="text-slate-300 group-hover:text-white transition-colors">{track}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizers Section */}
      <section className="py-20 px-4 bg-black/40 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-blue-300 pb-2">
            Organizing Committee
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {organizers.map((org, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-slate-700/50 hover:border-slate-600/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/30">
                <div className="text-blue-300 font-semibold mb-2 text-sm uppercase tracking-wide">{org.role}</div>
                <div className="text-white text-lg font-medium">{org.name}</div>
              </div>
            ))}

            <div className="md:col-span-2 bg-gradient-to-r from-slate-900/50 via-blue-950/30 to-slate-900/50 backdrop-blur-md rounded-xl p-8 border border-slate-700/50 hover:shadow-lg hover:shadow-blue-900/30 transition-all duration-300">
              <div className="text-blue-300 font-semibold mb-2 text-sm uppercase tracking-wide">Student Volunteers</div>
              <div className="text-white text-lg font-medium">Guild Club and FOSS Club</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-blue-300">
            Contact Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 hover:shadow-lg hover:shadow-blue-900/30 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-blue-300">Symposium Chair</h3>
              <div className="space-y-4">
                <div className="text-xl font-semibold text-white">Dr. Arpita Gupta</div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a href="mailto:arpita.gupta@klh.edu.in" className="hover:text-white transition-colors">
                    arpita.gupta@klh.edu.in
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <a href="tel:9407885161" className="hover:text-white transition-colors">
                    9407885161
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 hover:shadow-lg hover:shadow-blue-900/30 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-blue-300">Convenor</h3>
              <div className="space-y-4">
                <div className="text-xl font-semibold text-white">Dr. Sumit Hazra</div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a href="mailto:sumit.hazra@klh.edu.in" className="hover:text-white transition-colors">
                    sumit.hazra@klh.edu.in
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <a href="tel:9830770461" className="hover:text-white transition-colors">
                    9830770461
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 py-8 px-4 border-t border-slate-700/50 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-300 mb-4">
            © 2025 KLH University. All rights reserved.
          </p>
          <p className="text-sm text-slate-400">
            We cordially invite your participation in this scholarly forum! 🌟
          </p>
          <p className="text-sm text-slate-400">
            Website Developed by <a href="https://www.linkedin.com/in/zaid-naseer-07267428b/" className="text-slate-500 hover:text-slate-400 transition-colors underline">Zaid Naseer</a>
          </p>
        </div>
      </footer>
    </div>
  );
}