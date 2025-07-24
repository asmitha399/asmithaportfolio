import React, { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
        
        {/* Section 1: About */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-xl font-semibold mb-4 text-white">Asmitha</h3>
          <p className="text-sm leading-relaxed">
            Passionate full-stack developer learning and building great web experiences. Let’s connect and create something amazing together!
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://github.com/asmitha399" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition-colors">
              {/* GitHub Icon SVG */}
              <svg className="w-6 h-6 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>GitHub</title>
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.023c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.204.084 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.305 3.492.998.107-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.932 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.398 3.005-.404 1.02.006 2.048.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.656 1.653.244 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.625-5.475 5.922.43.37.814 1.096.814 2.21v3.285c0 .32.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors">
              {/* LinkedIn Icon SVG */}
              <svg className="w-6 h-6 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.94v5.666h-3.554v-11.5h3.414v1.57h.05c.476-.9 1.637-1.85 3.37-1.85 3.6 0 4.27 2.368 4.27 5.452v6.328zM5.337 8.433c-1.144 0-2.068-.927-2.068-2.07 0-1.146.924-2.07 2.068-2.07 1.147 0 2.07.924 2.07 2.07 0 1.143-.923 2.07-2.07 2.07zm1.779 12.019h-3.558v-11.5h3.558v11.5zM22.225 0h-20.449c-.977 0-1.776.8-1.776 1.777v20.449c0 .978.8 1.777 1.776 1.777h20.449c.978 0 1.777-.8 1.777-1.777v-20.449c0-.978-.8-1.777-1.777-1.777z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Section 2: Quick Links */}
        <div className="flex-1 min-w-[160px]">
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <nav className="flex flex-col gap-3 text-sm">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>

        {/* Section 3: Contact Info */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-xl font-semibold mb-4 text-white">Contact Info</h3>
          <ul className="text-sm space-y-2">
            <li>Email: <a href="mailto:poojaryasmitha64@gmail.com" className="hover:text-white transition-colors">poojaryasmitha64@gmail.com</a></li>
            <li>GitHub: <a href="https://github.com/asmitha399" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">github.com/asmitha399</a></li>
            <li>Location: Mangalore, India</li>
          </ul>
        </div>

        {/* Section 4: Newsletter */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-xl font-semibold mb-4 text-white">Stay Connected</h3>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
            <input
              type="email"
              aria-label="Email address"
              placeholder="Your email address"
              className="px-4 py-2 rounded bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded transition-colors"
            >
              Subscribe
            </button>
            {submitted && (
              <p className="text-green-400 text-sm mt-1 select-none">
                Thanks for subscribing!
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-8 text-center text-sm text-gray-500 select-none">
        Made with ❤️ by Asmitha &nbsp;|&nbsp; Powered by React & TailwindCSS
      </div>
    </footer>
  );
}

export default Footer;
