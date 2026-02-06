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
            <button onClick={() => scrollToSection('about')} className="hover:text-pink-500 transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-pink-500 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-pink-500 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-pink-500 transition-colors">Contact</button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="mb-10">
              <div className="w-32 h-32 mx-auto mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse opacity-75 blur-md"></div>
                <div className="absolute inset-1 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center overflow-hidden border border-pink-500/20">
                  <img src="/profile.jpg" alt="Yamin Einzali" className="w-full h-full object-cover" />
                </div>
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full mb-6">
                <Sparkles className="text-pink-500" size={16} />
                <span className="text-sm text-pink-400 font-medium">Available for Internship</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Hi, I'm <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Yamin Einzali</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                A passionate <span className="text-pink-500 font-semibold">Junior Web Developer</span>
              </p>

              <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                Building interactive web experiences with modern technologies. I love turning ideas into reality through clean code.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <button onClick={() => scrollToSection('contact')} className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all transform hover:scale-105">
                  Contact Me
                </button>
                <button onClick={() => scrollToSection('projects')} className="px-8 py-4 bg-gray-800 border border-pink-500/30 rounded-lg font-semibold hover:bg-gray-700 transition-all">
                  View My Projects
                </button>
                <a href="https://drive.google.com/file/d/19T-zBbHFBIDtKAFxw7HqPzGo7EI4Cv0n/view?usp=sharing" target="_blank" className="px-8 py-4 bg-gray-800 border border-pink-500/30 rounded-lg font-semibold hover:bg-gray-700 transition-all flex items-center gap-2">
                  <ExternalLink size={18} /> View CV
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 bg-gray-900/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Featured Projects</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* LOVE APP (IBS TRACKER) */}
              <div className="group bg-gray-800/50 border border-pink-500/30 rounded-2xl p-8 hover:border-pink-500/60 transition-all hover:transform hover:-translate-y-2">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-pink-500/20 rounded-lg text-pink-500"><Sparkles size={24} /></div>
                  <ExternalLink size={20} className="text-gray-500 group-hover:text-pink-500 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Love App (IBS Health Tracker)</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">A comprehensive health tracking application designed to help users monitor symptoms and patterns related to IBS.</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {['JavaScript', 'HTML/CSS', 'Local Storage'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full text-xs text-pink-400">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Java Suite */}
              <div className="group bg-gray-800/50 border border-pink-500/30 rounded-2xl p-8 hover:border-pink-500/60 transition-all hover:transform hover:-translate-y-2">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-purple-500/20 rounded-lg text-purple-500"><Terminal size={24} /></div>
                  <ExternalLink size={20} className="text-gray-500 group-hover:text-pink-500 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Java Application Suite</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">Desktop applications focusing on Object-Oriented Programming, featuring a Secret Diary and Dice Game.</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {['Java', 'OOP', 'Encryption'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-400">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Let's Work Together</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:yamineinzali54@gmail.com" className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-semibold hover:scale-105 transition-all">
              <Mail size={20} /> Email Me
            </a>
            <a href="https://github.com/yamineinzali" target="_blank" className="flex items-center gap-2 px-8 py-4 bg-gray-800 border border-pink-500/30 rounded-lg font-semibold hover:bg-gray-700 transition-all">
              <Github size={20} /> GitHub Profile
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-pink-500/20 py-8 text-center text-gray-500 text-sm">
        <p>© 2024 Yamin Einzali. Built with passion using React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
