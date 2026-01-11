"use client";
import Skills from '@/components/Skills';
import ContactForm from '@/components/ContactForm';
import { Card } from '@/components/Card';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-200 font-sans text-slate-900">
      
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <nav className="relative z-10 p-6 max-w-6xl mx-auto flex justify-between items-center backdrop-blur-sm">
        <span className="font-bold text-xl tracking-tighter">MO.</span>
        <div className="flex gap-6 text-sm font-medium">
          <a href="https://github.com/owais1857" target="_blank" className="hover:text-blue-600 transition">GitHub</a>
          <a href="https://linkedin.com/in/mohammadowais1857" target="_blank" className="hover:text-blue-600 transition">LinkedIn</a>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-20">
        
        {/* Hero Section */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-24 max-w-3xl"
        >
          {/* UPDATED STATUS BADGE */}
          <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full">
            Ready to Collaborate
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-slate-900">
            Building <span className="text-blue-600">Intelligent</span> Systems.
          </h1>
          
          {/* UPDATED BIO / HEADLINE */}
          <p className="text-xl text-slate-600 leading-relaxed mb-8 font-medium">
            Aspiring AI & Data Science Professional | B.Tech CSE | GATE 2025 Qualified (DA)
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="/OwaisResume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-800 transition shadow-lg shadow-blue-900/20 flex items-center gap-2"
            >
              <span>📄</span> Download Resume
            </a>
            <a 
              href="mailto:mohammadowais1857@gmail.com" 
              className="bg-white text-slate-900 border border-slate-200 px-6 py-3 rounded-lg font-bold hover:bg-slate-50 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.header>

        <Skills />

        {/* Projects Section */}
        <section id="projects" className="py-24 border-t border-slate-200/60">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Featured Engineering</h2>
            <span className="hidden md:block text-sm text-slate-500 font-mono">SELECTED WORKS 2024-25</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Project 1: Gaming Search Engine */}
            <Card>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-800">Gaming Search Engine</h3>
                <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded">AI POWERED</span>
              </div>
              <p className="text-slate-600 mb-6">
                A context-aware search engine that moves beyond keywords. Uses <b>Sentence-Transformers</b> and <b>FAISS</b> to understand semantic meaning.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Python", "FAISS", "Flask", "React"].map(tag => (
                  <span key={tag} className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
              <a href="https://github.com/owais1857/gaming-search-new" target="_blank" className="text-blue-600 font-bold text-sm hover:underline">View Architecture →</a>
            </Card>

            {/* Project 2: Food Classification */}
            <Card>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-800">CNN Image Classifier</h3>
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">DEEP LEARNING</span>
              </div>
              <p className="text-slate-600 mb-6">
                High-accuracy image classification model built with <b>TensorFlow</b>. Processed labeled datasets to improve model generalization.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["TensorFlow", "Keras", "Python", "NumPy"].map(tag => (
                  <span key={tag} className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
              <a href="https://github.com/safwannazir923/FoodClassificationProject" target="_blank" className="text-blue-600 font-bold text-sm hover:underline">View Repository →</a>
            </Card>

            {/* Project 3: Hackathon Project */}
            <Card className="md:col-span-2 border-orange-200">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-800">IUST Binary Ninjas (Hackathon)</h3>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded">GEOLOCATION API</span>
              </div>
              <p className="text-slate-600 mb-6">
                Developed the <b>&quot;Nearby Bookstore&quot;</b> feature using the <b>OpenStreetMap API</b> to provide real-time geospatial recommendations. 
                Managed core backend logic to handle API requests and data retrieval efficiently.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["OpenStreetMap API", "Python", "Backend Logic", "Rapid Prototyping"].map(tag => (
                  <span key={tag} className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
              <a href="https://github.com/andinolabs-hackathon/iust-binary-ninjas" target="_blank" className="text-blue-600 font-bold text-sm hover:underline">View Hackathon Submission →</a>
            </Card>

          </div>
        </section>

        <ContactForm />
      </main>
    </div>
  );
}