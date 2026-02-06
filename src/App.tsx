import { Code2, Github, Mail, ExternalLink, Sparkles, Terminal, GitBranch } from 'lucide-react';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white selection:bg-pink-500/30">
      {/* Animated Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-pink-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-pink-500/10 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="p-2 bg-pink-500/10 rounded-lg group-hover:bg-pink-500/20 transition-colors">
              <Code2 className="text-pink-500" size={24} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">YE</span>
          </div>
          <div className="hidden md:flex gap-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="text-sm font-medium text-gray-400 hover:text-pink-500 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="relative w-full h-full bg-gray-800 rounded-full border-2 border-pink-500/20 overflow-hidden shadow-2xl">
                <img src="/profile.jpg" alt="Yamin Einzali" className="w-full h-full object-cover scale-105" />
              </div>
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/5 border border-pink-500/20 rounded-full mb-8">
              <Sparkles className="text-pink-500" size={14} />
              <span className="text-xs font-semibold text-pink-400 tracking-wider uppercase">Available for Internship</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Hi, I'm <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Yamin Einzali</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              A passionate <span className="text-white font-medium underline decoration-pink-500/50 decoration-2 underline-offset-4">Junior Web Developer</span> building elegant digital experiences.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={() => scrollToSection('contact')} className="px-8 py-4 bg-pink-500 hover:bg-pink-600 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-pink-500/20">
                Contact Me
              </button>
              <button onClick={() => scrollToSection('projects')} className="px-8 py-4 bg-gray-800 border border-gray-700 hover:border-pink-500/50 rounded-xl font-bold transition-all">
                View Projects
              </button>
              <a href="https://drive.google.com/file/d/19T-zBbHFBIDtKAFxw7HqPzGo7EI4Cv0n/view?usp=sharing" target="_blank" className="px-8 py-4 bg-gray-800 border border-gray-700 hover:border-pink-500/50 rounded-xl font-bold transition-all flex items-center gap-2">
                <ExternalLink size={18} /> CV
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent inline-block">Featured Projects</h2>
              <p className="text-gray-500">A showcase of my recent coding projects</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "IBS Health Tracker",
                  desc: "Comprehensive health monitoring app for symptoms and triggers.",
                  tags: ["JavaScript", "HTML/CSS", "Storage"],
                  icon: <Terminal className="text-pink-500" />
                },
                {
                  title: "Java App Suite",
                  desc: "Desktop apps including Secret Diary and Dice Game.",
                  tags: ["Java", "OOP", "Encryption"],
                  icon: <Code2 className="text-purple-500" />
                },
                {
                  title: "Love Calculator",
                  desc: "Fun interactive web app to calculate name compatibility.",
                  tags: ["JavaScript", "DOM", "Git"],
                  icon: <Sparkles className="text-pink-500" />
                }
              ].map((project, i) => (
                <div key={i} className="group bg-gray-800/40 border border-white/5 rounded-2xl p-6 hover:bg-gray-800/60 hover:border-pink-500/30 transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-gray-900 rounded-xl border border-white/5 group-hover:border-pink-500/20 transition-all">{project.icon}</div>
                    <ExternalLink size={18} className="text-gray-600 group-hover:text-pink-500 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-pink-400 transition-colors">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-6 line-clamp-2">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-900 rounded-md text-[10px] font-bold text-gray-400 uppercase tracking-widest border border-white/5">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6">
          <div className="container mx-auto max-w-3xl bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl p-12 text-center shadow-2xl shadow-pink-500/20 relative overflow-hidden">
             <div className="absolute inset-0 bg-black/10"></div>
             <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6">Ready to work together?</h2>
                <p className="text-pink-100 mb-10 text-lg">I'm currently looking for new opportunities and my inbox is always open.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="mailto:yamineinzali54@gmail.com" className="px-8 py-4 bg-white text-pink-600 rounded-xl font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                    <Mail size={20} /> Email Me
                  </a>
                  <a href="https://github.com/yamineinzali" target="_blank" className="px-8 py-4 bg-gray-900/20 text-white border border-white/30 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    <Github size={20} /> GitHub
                  </a>
                </div>
             </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 text-center text-gray-600 text-xs tracking-widest uppercase">
        <p>© 2024 Yamin Einzali • Built with passion</p>
      </footer>
    </div>
  );
}

export default App;
