import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaComments, FaChalkboardTeacher, FaUsers } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-600 to-purple-700 text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-black/20 backdrop-blur-md sticky top-0">
        <h1 className="text-2xl font-extrabold tracking-wider">UniClub 🎓</h1>
        <ul className="flex gap-6 text-lg font-medium">
          <li className="hover:text-yellow-300 cursor-pointer">Guide</li>
          <li className="hover:text-yellow-300 cursor-pointer">Map</li>
          <li className="hover:text-yellow-300 cursor-pointer">Classes</li>
          <li className="hover:text-yellow-300 cursor-pointer">Chat</li>
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
        <p className="text-lg sm:text-xl max-w-2xl text-gray-200 mb-8">
          Your all-in-one college buddy 🏫 — explore the campus, stay connected, 
          ace your classes, and vibe with your community.
        </p>
        <button className="px-6 py-3 bg-yellow-400 text-black font-semibold text-lg rounded-xl shadow-md hover:scale-105 transition-transform">
          🚀 Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10 py-16">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
        >
          <FaMapMarkedAlt size={50} className="mb-4 text-yellow-300" />
          <h3 className="text-2xl font-bold mb-2">Campus Map</h3>
          <p className="text-gray-200">
            Find buildings, hangout spots, and navigate your campus with ease.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
        >
          <FaChalkboardTeacher size={50} className="mb-4 text-yellow-300" />
          <h3 className="text-2xl font-bold mb-2">Live Classes</h3>
          <p className="text-gray-200">
            Get assessments, updates, and interactive class sessions in real time.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
        >
          <FaComments size={50} className="mb-4 text-yellow-300" />
          <h3 className="text-2xl font-bold mb-2">Campus Chat</h3>
          <p className="text-gray-200">
            Connect with classmates, ask doubts, or just vibe together. 🔥
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
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
 
