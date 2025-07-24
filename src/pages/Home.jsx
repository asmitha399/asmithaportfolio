// src/components/Home.jsx
import React, { useEffect, useState } from 'react';

function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 text-gray-100 overflow-hidden pt-20"
      style={{
        background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)', // ocean gradient
      }}
    >
      {/* Animated floating bubbles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="bubble"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${8 + Math.random() * 12}s`,  // duration between 8-20s
              animationDelay: `${Math.random()}s`,              // delay between 0-1s
              width: `${10 + Math.random() * 30}px`,
              height: `${10 + Math.random() * 30}px`,
              opacity: 0.15 + Math.random() * 0.2,
            }}
          />
        ))}
      </div>

      <div
        className={`max-w-3xl bg-black bg-opacity-40 rounded-xl p-10 shadow-lg text-center transition-all duration-1000 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 select-none">
          Hi, I'm{' '}
          <span className="text-cyan-400 drop-shadow-lg">Asmitha</span>{' '}
          <span className="inline-block animate-wave-hand">👋</span>
        </h1>

        <p className="text-xl md:text-2xl font-semibold mb-8 leading-relaxed">
          I'm a passionate 3rd-year Diploma Computer Science student,
          <br />
          currently learning Full-Stack Web Development.
        </p>

        <q className="italic text-cyan-300 block mb-10 text-lg max-w-md mx-auto drop-shadow-md">
          "Code is like humor. When you have to explain it, it’s bad." – Cory House
        </q>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="#about"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition transform hover:-translate-y-1 hover:shadow-xl"
          >
            About Me
          </a>
          <a
            href="#skills"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition transform hover:-translate-y-1 hover:shadow-xl"
          >
            My Skills
          </a>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        .animate-wave-hand {
          display: inline-block;
          transform-origin: 70% 70%;
          animation: wave-hand 2.5s infinite;
          will-change: transform;
        }
        @keyframes wave-hand {
          0%, 100% { transform: rotate(0deg); }
          15% { transform: rotate(20deg); }
          30% { transform: rotate(-15deg); }
          45% { transform: rotate(20deg); }
          60% { transform: rotate(-15deg); }
          75% { transform: rotate(20deg); }
        }

        .bubble {
          position: absolute;
          bottom: -50px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          animation-name: rise;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }
        @keyframes rise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-110vh) scale(1.2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}

export default Home;
