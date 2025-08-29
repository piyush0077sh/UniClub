import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, MessageSquare, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow bg-white sticky top-0 z-50">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          CampusConnect 🚀
        </h1>
        <div className="space-x-4 hidden md:flex">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Guide</Button>
          <Button variant="ghost">Mapping</Button>
          <Button variant="ghost">Assessments</Button>
          <Button variant="ghost">Chat</Button>
        </div>
        <Button className="bg-blue-600 text-white rounded-xl px-5 py-2 hover:bg-blue-700 transition">Sign In</Button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white relative overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-6 drop-shadow-lg"
        >
          Your Campus. Your Space. 🌐
        </motion.h2>
        <p className="max-w-2xl mx-auto text-lg mb-6 opacity-90">
          Maps, live classes, real-time assessments & vibes with your college fam — all in one app.
        </p>
        <Button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-2xl shadow-xl hover:scale-105 transition-transform">
          Let’s Go 👉
        </Button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card className="shadow-xl rounded-3xl hover:scale-105 transition-transform bg-white/80 backdrop-blur-md">
          <CardContent className="p-6 text-center">
            <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4 animate-bounce" />
            <h3 className="font-bold text-xl mb-2">Campus Mapping</h3>
            <p className="text-gray-600">Find every corner of your campus with interactive maps. Never be late again! ⏱️</p>
          </CardContent>
        </Card>

        <Card className="shadow-xl rounded-3xl hover:scale-105 transition-transform bg-white/80 backdrop-blur-md">
          <CardContent className="p-6 text-center">
            <ClipboardCheck className="w-12 h-12 text-green-600 mx-auto mb-4 animate-pulse" />
            <h3 className="font-bold text-xl mb-2">Live Assessments</h3>
            <p className="text-gray-600">Take quizzes, polls & class tests instantly. Results? Real-time. ⚡</p>
          </CardContent>
        </Card>

        <Card className="shadow-xl rounded-3xl hover:scale-105 transition-transform bg-white/80 backdrop-blur-md">
          <CardContent className="p-6 text-center">
            <MessageSquare className="w-12 h-12 text-purple-600 mx-auto mb-4 animate-pulse" />
            <h3 className="font-bold text-xl mb-2">Campus Chat</h3>
            <p className="text-gray-600">Slide into convos with classmates, form study squads & share memes. 💬</p>
          </CardContent>
        </Card>

        <Card className="shadow-xl rounded-3xl hover:scale-105 transition-transform bg-white/80 backdrop-blur-md">
          <CardContent className="p-6 text-center">
            <Users className="w-12 h-12 text-orange-600 mx-auto mb-4 animate-bounce" />
            <h3 className="font-bold text-xl mb-2">Community Guide</h3>
            <p className="text-gray-600">Events, fest alerts & insider hacks to rock your campus journey. 🎉</p>
          </CardContent>
        </Card>
      </section>

      {/* Interactive Map Preview */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-extrabold text-blue-700 mb-6">Explore Your Campus Map 🗺️</h2>
        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509371!2d144.95592831590482!3d-37.81720974201426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d5fa2a0b8f0!2sUniversity!5e0!3m2!1sen!2sau!4v1614069468894!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-12">
        <p>⚡ Built for students, by students | © {new Date().getFullYear()} CampusConnect</p>
      </footer>
    </div>
  );
}
