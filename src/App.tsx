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
                <div className="absolute inset-1 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                    YE
                  </div>
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
                        <Sparkles className="text-pink-500" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-pink-400 transition-colors duration-300">Love Calculator App</h3>
                        <p className="text-sm text-gray-400">Interactive Web Application</p>
                      </div>
                    </div>
                    <ExternalLink className="text-gray-400 group-hover:text-pink-500 group-hover:scale-110 cursor-pointer transition-all duration-300" size={24} />
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    A fun and interactive love calculator that computes compatibility scores between two names.
                    This project showcases my skills in creating engaging user experiences with vanilla JavaScript.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      <Terminal className="text-pink-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                      <div>
                        <span className="font-semibold">JavaScript Objects & Arrays:</span> Implemented complex data structures to manage user inputs and calculation logic efficiently.
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      <GitBranch className="text-pink-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                      <div>
                        <span className="font-semibold">Git Version Control:</span> Managed the entire project using GitHub with proper branching strategies and merge workflows.
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
                      GitHub
                    </span>
                    <span className="px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded-full text-sm text-pink-400 group-hover:bg-pink-500/20 group-hover:border-pink-500/60 transition-all duration-300">
                      Git Branching
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
                href="mailto:yamin.einzali@example.com"
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
