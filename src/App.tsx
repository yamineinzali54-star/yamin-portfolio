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
                    src="profile.jpg" 
                    alt="Yamin Einzali" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <span className="flex items-center gap-2">
                  <Sparkles className="text-pink-500" size={16} />
                  <span className="text-sm text-pink-400">Available for Internship</span>
                </span>
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
                  href="https://drive.google.com/file/d/19T-zBbHFBIDtKAFxw7HqPzGo7EI4Cv0n/view?usp=sharing"
                  target="_blank"
                  className="px-8 py-4 bg-gray-800 border border-pink-500/30 rounded-lg font-semibold hover:bg-gray-700 transition-all flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View CV
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-6 bg-gray-900/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-4 text-center">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-gray-400 text-center mb-12">My background and education</p>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-pink-500/30 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl">
                  <svg className="w-12 h-12 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
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

        <section id="skills" className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-4 text-center">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { name: 'HTML', icon: '📄', desc: 'Semantic markup' },
                { name: 'CSS', icon: '🎨', desc: 'Modern styling' },
                { name: 'JavaScript', icon: '⚡', desc: 'Interactive apps' },
                { name: 'Git/GitHub', icon: <Github size={32}/>, desc: 'Version control' }
              ].map((skill, idx) => (
                <div key={idx} className="bg-gray-800 border border-pink-500/20 rounded-xl p-6 hover:border-pink-500/50 transition-all text-center">
                  <div className="text-4xl mb-3 flex justify-center text-pink-500">{skill.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                  <p className="text-sm text-gray-400">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 px-6 bg-gray-900/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="grid grid-cols-1 gap-8">
              {/* IBS Tracker */}
              <div className="group bg-gray-800 border border-pink-500/30 rounded-2xl p-8 hover:border-pink-500/60 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-pink-400">IBS Health Tracker</h3>
                  <ExternalLink size={20} className="text-gray-400" />
                </div>
                <p className="text-gray-300 mb-6">Health tracking application to monitor symptoms and patterns.</p>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'HTML/CSS', 'Local Storage'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded-full text-sm text-pink-400">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Java Suite */}
              <div className="group bg-gray-800 border border-pink-500/30 rounded-2xl p-8 hover:border-pink-500/60 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-pink-400">Java Application Suite</h3>
                  <ExternalLink size={20} className="text-gray-400" />
                </div>
                <p className="text-gray-300 mb-6">Desktop applications including a Secret Diary and Dice Game.</p>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'OOP', 'Encryption'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded-full text-sm text-pink-400">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:yamineinzali54@gmail.com" className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-semibold hover:scale-105 transition-all">
              <Mail size={20} /> Email Me
            </a>
            <a href="https://github.com/yamineinzali" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-4 bg-gray-800 border border-pink-500/30 rounded-lg font-semibold hover:bg-gray-700 transition-all">
              <Github size={20} /> GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-pink-500/20 py-8 text-center text-gray-400 text-sm">
        <p>© 2024 Yamin Einzali. Built with passion and React.</p>
      </footer>
    </div>
  );
}

export default App;
