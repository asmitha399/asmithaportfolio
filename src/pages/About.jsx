function About() {
  return (
    <section
      id="about"
      className="p-12 bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 text-gray-100 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-5xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center gap-12 border border-cyan-400">
        
        {/* Left: Profile Photo */}
        <div className="flex-shrink-0 relative group">
          <img
            src="/assets/1.jpg"
            alt="Asmitha Profile"
            className="w-56 h-56 rounded-full object-cover border-8 border-cyan-400 shadow-lg transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 rounded-full border-4 border-cyan-300 opacity-50 animate-ping pointer-events-none"></div>
        </div>

        {/* Right: Text Content */}
        <div className="max-w-xl text-gray-200">
          <h2 className="text-4xl font-extrabold mb-6 text-cyan-300 relative inline-block">
            <span className="underline decoration-cyan-500 underline-offset-8">
              About Me
            </span>
            <div className="absolute left-0 bottom-0 w-3/4 h-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 rounded-full"></div>
          </h2>
          
          <p className="mb-6 leading-relaxed text-lg">
            I’m a <strong>3rd-year Diploma student</strong> in Computer Science at{' '}
            <span className="font-semibold text-cyan-300">KPT</span>. I have a strong interest in technology and a growing passion for web development and building full-stack applications.
            My goal is to become a skilled <strong className="text-cyan-400">software engineer</strong> and make meaningful contributions in the tech industry.
          </p>
          
          <p className="leading-relaxed text-lg">
            Outside of coding, I love listening to music and exploring new places through travel. I enjoy learning new skills and continuously challenging myself to grow.
            I can speak English, Hindi, and Kannada, and I come from the beautiful town of{' '}
            <span className="font-semibold text-cyan-300">Kundapura</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
