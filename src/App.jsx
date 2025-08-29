import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaCalendarAlt, FaGraduationCap, FaStar, FaArrowRight, FaFacebook, FaTwitter, FaInstagram, FaBars } from 'react-icons/fa';

function App() {
  const clubs = [
    {
      name: "Tech Innovation Club",
      members: 245,
      category: "Technology",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      id: 1
    },
    {
      name: "Creative Arts Society",
      members: 189,
      category: "Arts",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      id: 2
    },
    {
      name: "Business Leaders Network",
      members: 156,
      category: "Business",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      id: 3
    }
  ];

  const events = [
    {
      title: "Tech Talk: AI in Education",
      date: "March 15, 2025",
      time: "6:00 PM",
      location: "Main Auditorium",
      id: 1
    },
    {
      title: "Art Exhibition Opening",
      date: "March 18, 2025",
      time: "7:30 PM",
      location: "Gallery Hall",
      id: 2
    },
    {
      title: "Startup Pitch Competition",
      date: "March 22, 2025",
      time: "2:00 PM",
      location: "Business Center",
      id: 3
    }
  ];

  // Simple mobile nav toggle state
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaGraduationCap className="text-2xl text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">UniClub</span>
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Home</a>
              <a href="#clubs" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Clubs</a>
              <a href="#events" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Events</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">About</a>
            </nav>
            {/* Mobile nav button */}
            <button 
              className="md:hidden text-gray-700 hover:text-indigo-600 transition-colors duration-200"
              aria-label="Open navigation menu"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <FaBars className="text-2xl" />
            </button>
            <motion.div 
              className="hidden md:flex space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Sign In</button>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                Join Now
              </button>
            </motion.div>
          </div>
        </div>
        {/* Mobile Navigation Dropdown */}
        {mobileNavOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <nav className="flex flex-col items-start px-4 py-2 space-y-2">
              <a href="#home" className="text-gray-700 hover:text-indigo-600 w-full py-2" onClick={() => setMobileNavOpen(false)}>Home</a>
              <a href="#clubs" className="text-gray-700 hover:text-indigo-600 w-full py-2" onClick={() => setMobileNavOpen(false)}>Clubs</a>
              <a href="#events" className="text-gray-700 hover:text-indigo-600 w-full py-2" onClick={() => setMobileNavOpen(false)}>Events</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600 w-full py-2" onClick={() => setMobileNavOpen(false)}>About</a>
              <button className="text-gray-700 hover:text-indigo-600 w-full py-2 text-left">Sign In</button>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200 w-full text-left">
                Join Now
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Connect. Learn. <span className="text-yellow-300">Grow.</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join the ultimate university club platform where students discover their passions, 
              build lasting friendships, and create unforgettable experiences.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="#clubs">
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Explore Clubs
                </button>
              </a>
              <a href="#clubs">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-200 transform hover:scale-105">
                  Create a Club
                </button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-indigo-600 mb-2">500+</div>
              <div className="text-gray-600">Active Clubs</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-indigo-600 mb-2">25K+</div>
              <div className="text-gray-600">Students Connected</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-indigo-600 mb-2">1000+</div>
              <div className="text-gray-600">Events This Year</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Clubs */}
      <section id="clubs" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Clubs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover amazing communities that match your interests and help you grow
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clubs.map((club, index) => (
              <motion.div 
                key={club.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={club.image}
                  alt={`${club.name} club`}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-indigo-600 font-medium">{club.category}</span>
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 text-sm mr-1" aria-label="star rating" />
                      <span className="text-sm text-gray-600">{club.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{club.name}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <FaUsers className="mr-2" aria-label="club members" />
                    <span>{club.members} members</span>
                  </div>
                  <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center">
                    Join Club <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't miss out on exciting events happening across campus
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div 
                key={event.id}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <FaCalendarAlt className="text-indigo-600 mr-3" aria-label="calendar" />
                  <span className="text-sm text-gray-600">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2">{event.time}</p>
                <p className="text-gray-600 mb-4">{event.location}</p>
                <button className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors duration-200">
                  Learn More →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white" id="about">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-indigo-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of students who are already making the most of their university experience
          </motion.p>
          <motion.a
            href="#clubs"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Get Started Today
            </button>
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FaGraduationCap className="text-2xl text-indigo-400" />
                <span className="text-xl font-bold">UniClub</span>
              </div>
              <p className="text-gray-400">
                Connecting university students through meaningful club experiences.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#clubs" className="hover:text-white transition-colors duration-200">Browse Clubs</a></li>
                <li><a href="#clubs" className="hover:text-white transition-colors duration-200">Create Club</a></li>
                <li><a href="#events" className="hover:text-white transition-colors duration-200">Events</a></li>
                <li><a href="#about" className="hover:text-white transition-colors duration-200">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#clubs" className="hover:text-white transition-colors duration-200">Technology</a></li>
                <li><a href="#clubs" className="hover:text-white transition-colors duration-200">Arts & Culture</a></li>
                <li><a href="#clubs" className="hover:text-white transition-colors duration-200">Sports</a></li>
                <li><a href="#clubs" className="hover:text-white transition-colors duration-200">Academic</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-2xl text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
                </a>
                <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-2xl text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
                </a>
                <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-2xl text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 UniClub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
