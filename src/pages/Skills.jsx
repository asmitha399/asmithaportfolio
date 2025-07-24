import { FaReact, FaPython, FaDatabase, FaCode } from 'react-icons/fa';
import { DiJava } from 'react-icons/di';

function Skills() {
  const skills = [
    {
      name: 'React',
      icon: <FaReact className="w-12 h-12 text-blue-400" />,  // smaller size
      gradient: 'from-blue-400 to-cyan-400',
    },
    {
      name: 'Python',
      icon: <FaPython className="w-12 h-12 text-yellow-400" />,
      gradient: 'from-yellow-400 to-yellow-600',
    },
    {
      name: 'SQL',
      icon: <FaDatabase className="w-12 h-12 text-green-400" />,
      gradient: 'from-green-400 to-green-600',
    },
    {
      name: 'VS Code',
      icon: <FaCode className="w-12 h-12 text-indigo-400" />,
      gradient: 'from-indigo-400 to-indigo-600',
    },
    {
      name: 'Java',
      icon: <DiJava className="w-12 h-12 text-orange-400" />,
      gradient: 'from-orange-400 to-orange-600',
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 text-gray-100 flex flex-col items-center justify-center p-12">
      <h2 className="text-4xl font-extrabold mb-4 text-cyan-300 relative inline-block">
        <span className="underline decoration-cyan-400 underline-offset-8">My Skills</span>
      </h2>
      <p className="mb-10 max-w-xl text-center text-gray-300 text-lg">
        Here are some of the key tools and technologies I’m actively learning and utilizing on my development journey.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl w-full">
        {skills.map(({ name, icon, gradient }, index) => (
          <div
            key={name}
            style={{ animationDelay: `${index * 150}ms` }}
            className={`bg-white/10 backdrop-blur-md border border-cyan-500 rounded-2xl p-6 flex flex-col items-center justify-center space-y-3 cursor-pointer
              hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/60 hover:-rotate-2
              transition-transform duration-300 ease-in-out
              animate-popUp`}
          >
            <div
              className={`p-4 rounded-full bg-gradient-to-br ${gradient} bg-opacity-20 flex items-center justify-center shadow-md`}
            >
              {icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-100">{name}</h3>
          </div>
        ))}
      </div>

      {/* CSS animation inside JSX */}
      <style jsx>{`
        @keyframes popUp {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          80% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-popUp {
          animation: popUp 0.5s ease forwards;
        }
      `}</style>
    </section>
  );
}

export default Skills;
