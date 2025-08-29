import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaComments, FaChalkboardTeacher, FaUsers } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-600 to-purple-700 text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-black/20 backdrop-blur-md sticky top-0">
        <h1 className="text-2xl font-extrabold tracking-wider">UniClub 🎓</h1>
        <ul className="flex gap-6 text-lg font-medium">
          <li className="hover:text-yellow-300 cursor-pointer transition-colors">Guide</li>
          <li className="hover:text-yellow-300 cursor-pointer transition-colors">Map</li>
          <li className="hover:text-yellow-300 cursor-pointer transition-colors">Classes</li>
          <li className="hover:text-yellow-300 cursor-pointer transition-colors">Chat</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4"
        >
          Welcome to <span className="text-yellow-300">UniClub</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl max-w-2xl text-gray-200 mb-8"
        >
          Your all-in-one college buddy 🏫 — explore the campus, stay connected, 
          ace your classes, and vibe with your community.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-yellow-400 text-black font-semibold text-lg rounded-xl shadow-lg hover:bg-yellow-300 transition-all"
        >
          🚀 Get Started
        </motion.button>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg flex flex-col items-center text-center border border-white/20"
        >
          <FaMapMarkedAlt size={50} className="mb-4 text-yellow-300" />
          <h3 className="text-2xl font-bold mb-2">Campus Map</h3>
          <p className="text-gray-200">
            Find buildings, hangout spots, and navigate your campus with ease.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg flex flex-col items-center text-center border border-white/20"
        >
          <FaChalkboardTeacher size={50} className="mb-4 text-yellow-300" />
          <h3 className="text-2xl font-bold mb-2">Live Classes</h3>
          <p className="text-gray-200">
            Get assessments, updates, and interactive class sessions in real time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg flex flex-col items-center text-center border border-white/20"
        >
          <FaComments size={50} className="mb-4 text-yellow-300" />
          <h3 className="text-2xl font-bold mb-2">Campus Chat</h3>
          <p className="text-gray-200">
            Connect with classmates, ask doubts, or just vibe together. 🔥
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg flex flex-col items-center text-center border border-white/20"
        >
          <FaUsers size={50} className="mb-4 text-yellow-300" />
          <h3 className="text-2xl font-bold mb-2">Community</h3>
          <p className="text-gray-200">
            Join clubs, events, and discover people who share your interests. 🌍
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 text-gray-300 text-center py-6 mt-16">
        <p>© {new Date().getFullYear()} UniClub. Built for Students, by Students 💡</p>
      </footer>
    </div>
  );
}