// src/components/Contact.jsx
function Contact() {
  return (
    <section
      id="contact"
      className="p-10 bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 min-h-screen text-gray-100 flex flex-col justify-center"
    >
      <h2 className="text-3xl font-bold text-center mb-4 text-cyan-300">Contact Me</h2>

      <p className="text-center text-white mb-10 italic max-w-md mx-auto">
        Feel free to reach out — I’m always open to connect and collaborate!
      </p>

      <form className="max-w-xl mx-auto space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-cyan-500 rounded bg-white/10 backdrop-blur-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-cyan-500 rounded bg-white/10 backdrop-blur-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border border-cyan-500 rounded h-40 bg-white/10 backdrop-blur-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded text-white transition font-medium"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
