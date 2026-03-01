import { Code2, Github, Mail, ExternalLink, Sparkles, Terminal, GitBranch } from 'lucide-react';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <header className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm border-b border-pink-500/20 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code2 className="text-pink-500" size={28} />
            <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              YE
            </span>
          </div>
          <div className="flex gap-6">
            <button onClick={() => scrollToSection('about')} className="hover:text-pink-500 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-pink-500 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-pink-500 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-pink-500 transition-colors">
              Contact
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="mb-10 animate-slide-up">
              <div className="w-32 h-32 mx-auto mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-glow-pulse opacity-75"></div>
                <div className="absolute inset-1 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src="/profile.jpg" 
                    alt="Yamin Einzali" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Sparkles className="text-pink-500" size={16} />
              <span className="text-sm text-pink-400">Available for Internship</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Hi, I'm <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                Yamin Einzali
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              A passionate <span className="text-pink-500 font-semibold">Junior Web Developer</span>
            </p>

            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
              Building interactive web experiences with modern technologies.
              I love turning ideas into reality through clean code and creative problem-solving.
            </p>

            <div className="flex flex-wrap gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all transform hover:scale-105"
              >
                Contact Me
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gray-800 border border-pink-500/30 rounded-lg font-semibold hover:bg-gray-700 transition-all"
              >
                View My Projects
              </button>
              <a
                href="https://drive.google.com/file/d/1p4S6itEdpb8Udd0sM_nR3xYGohMIkFVa/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-800 border border-pink-500/30 rounded-lg font-semibold hover:bg-gray-700 transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-6 bg-gray-900/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-4 text-center animate-slide-up">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-gray-400 text-center mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              My background and education
            </p>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-pink-500/30 rounded-2xl p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl">
                  <svg className="w-12 h-12 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-pink-400">Master of Science (Physics)</h3>
                  <p className="text-xl text-gray-300 mb-4">Pathein University</p>
                  <p className="text-gray-400 leading-relaxed">
                    Currently pursuing my Master's degree in Physics, combining scientific knowledge with
                    a passion for web development. I bring analytical thinking and problem-solving skills
                    from my physics background into creating elegant technical solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 px-6 bg-gray-900/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-4 text-center animate-slide-up">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-gray-400 text-center mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>Technologies I work with</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="group bg-gray-800 border border-pink-500/20 rounded-xl p-6 hover:border-pink-500/50 transition-all hover:transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 cursor-pointer animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">📄</div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-pink-400 transition-colors duration-300">HTML</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Semantic markup</p>
              </div>

              <div className="group bg-gray-800 border border-pink-500/20 rounded-xl p-6 hover:border-pink-500/50 transition-all hover:transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 cursor-pointer animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">🎨</div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-pink-400 transition-colors duration-300">CSS</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Modern styling</p>
              </div>

              <div className="group bg-gray-800 border border-pink-500/20 rounded-xl p-6 hover:border-pink-500/50 transition-all hover:transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 cursor-pointer animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">⚡</div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-pink-400 transition-colors duration-300">JavaScript</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Interactive web apps</p>
              </div>

              <div className="group bg-gray-800 border border-pink-500/20 rounded-xl p-6 hover:border-pink-500/50 transition-all hover:transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 cursor-pointer animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <Github className="text-pink-500 mb-3 group-hover:scale-125 group-hover:text-purple-500 transition-all duration-300" size={40} />
                <h3 className="font-semibold text-lg mb-2 group-hover:text-pink-400 transition-colors duration-300">Git/GitHub</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Version control</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent pointer-events-none"></div>
          <div className="container mx-auto max-w-4xl relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-center animate-slide-up">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-gray-400 text-center mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>Check out my recent work</p>

            <div className="grid grid-cols-1 gap-8">
              <div className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-pink-500/30 rounded-2xl overflow-hidden hover:border-pink-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20 transform hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg group-hover:from-pink-500/40 group-hover:to-purple-500/40 transition-all duration-300">
                        <svg className="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-pink-400 transition-colors duration-300">IBS Health Tracker</h3>
                        <p className="text-sm text-gray-400">Health Monitoring Application</p>
                      </div>
                    </div>
                   <a href="https://my-ibs-app-tmlcm69tapc2tsnraq4eid.streamlit.app/" target="_blank" rel="noreferrer">
                      <ExternalLink className="text-gray-400 hover:text-pink-500 cursor-pointer" size={24} />
<                     /a>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    A comprehensive health tracking application designed to help users monitor symptoms, triggers,
                    and patterns related to Irritable Bowel Syndrome. Features data visualization and personalized insights.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      <Terminal className="text-pink-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                      <div>
                        <span className="font-semibold">Data Management:</span> Implemented local storage solutions for secure symptom tracking and historical data analysis.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      <GitBranch className="text-pink-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                      <div>
                        <span className="font-semibold">User Experience:</span> Designed intuitive interface for daily logging and pattern recognition.
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded-full text-sm text-pink-400 group-hover:bg-pink-500/20 group-hover:border-pink-500/60 transition-all duration-300">
                      JavaScript
                    </span>
                    <span className="px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded-full text-sm text-pink-400 group-hover:bg-pink-500/20 group-hover:border-pink-500/60 transition-all duration-300">
                      HTML/CSS
                    </span>
                    <span className="px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded-full text-sm text-pink-400 group-hover:bg-pink-500/20 group-hover:border-pink-500/60 transition-all duration-300">
                      Local Storage
                    </span>
                    <span className="px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded-full text-sm text-pink-400 group-hover:bg-pink-500/20 group-hover:border-pink-500/60 transition-all duration-300">
                      Data Visualization
                    </span>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-pink-500/30 rounded-2xl overflow-hidden hover:border-pink-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20 transform hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg group-hover:from-pink-500/40 group-hover:to-purple-500/40 transition-all duration-300">
                        <svg className="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-pink-400 transition-colors duration-300">AI-Powered Coding Mentor</h3>
                        <p className="text-sm text-gray-400">Intelligent Programming Assistant</p>
                      </div>
                    </div>
                    <a href="https://my-ai-app-ten-navy.vercel.app/" target="_blank" rel="noreferrer">
                      <ExternalLink className="text-gray-400 hover:text-pink-500 cursor-pointer" size={24} />
                    </a>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    An intelligent coding mentor built with JavaScript that provides real-time programming guidance using AI.
                    This application helps developers learn and solve coding challenges with instant, context-aware assistance.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      <Terminal className="text-pink-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                      <div>
                        <span className="font-semibold">AI Integration:</span> Seamlessly integrated AI API to provide intelligent, real-time coding suggestions and explanations.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      <GitBranch className="text-pink-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                      <div>
                        <span className="font-semibold">Interactive Interface:</span> Developed responsive UI with CSS for an engaging learning experience.
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded-full text-sm text-pink-400 group-hover:bg-pink-500/20 group-hover:border-pink-500/60 transition-all duration-300">
                      JavaScript
                    </span>
                    <span className="px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded-full text-sm text-pink-400 group-hover:bg-pink-500/20 group-hover:border-pink-500/60 transition-all duration-300">
                      CSS
                    </span>
                    <span className="px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded-full text-sm text-pink-400 group-hover:bg-pink-500/20 group-hover:border-pink-500/60 transition-all duration-300">
                      AI API
                    </span>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-pink-500/30 rounded-2xl overflow-hidden hover:border-pink-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20 transform hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg group-hover:from-pink-500/40 group-hover:to-purple-500/40 transition-all duration-300">
                        <svg className="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-pink-400 transition-colors duration-300">Smart Expense Tracker</h3>
                        <p className="text-sm text-gray-400">Professional Financial Tool</p>
                      </div>
                    </div>
                    <a href="https://smart-tracker-6d35.vercel.app/" target="_blank" rel="noreferrer">
                      <ExternalLink className="text-gray-400 hover:text-pink-500 cursor-pointer" size={24} />
                    </a>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    A professional financial tool for tracking expenses, developed with TypeScript to ensure robust logic and real-time calculations.
                    This application helps users manage their finances with precision and clarity.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      <Terminal className="text-pink-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                      <div>
                        <span className="font-semibold">TypeScript Architecture:</span> Built with TypeScript for type-safe code, ensuring reliability and maintainability in financial calculations.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      <GitBranch className="text-pink-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                      <div>
                        <span className="font-semibold">Real-Time Tracking:</span> Implemented dynamic expense tracking with instant updates and financial insights.
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded-full text-sm text-pink-400 group-hover:bg-pink-500/20 group-hover:border-pink-500/60 transition-all duration-300">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded-full text-sm text-pink-400 group-hover:bg-pink-500/20 group-hover:border-pink-500/60 transition-all duration-300">
                      HTML
                    </span>
                    <span className="px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded-full text-sm text-pink-400 group-hover:bg-pink-500/20 group-hover:border-pink-500/60 transition-all duration-300">
                      CSS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-6 bg-gray-900/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent pointer-events-none"></div>
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-4xl font-bold mb-4 animate-slide-up">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
              I'm currently seeking internship opportunities. Let's connect!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <a
                href="mailto:yamineinzali54@gmail.com"
                className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all transform hover:scale-105"
              >
                <Mail size={20} className="group-hover:-rotate-12 transition-transform duration-300" />
                Email Me
              </a>
              <a
                href="https://github.com/yamineinzali"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-4 bg-gray-800 border border-pink-500/30 rounded-lg font-semibold hover:bg-gray-700 hover:border-pink-500/60 transition-all"
              >
                <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                View GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-pink-500/20 py-8 px-6 bg-gray-900 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-50"></div>
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Yamin Einzali. Built with passion and React.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
