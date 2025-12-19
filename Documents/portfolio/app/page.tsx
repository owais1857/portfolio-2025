import Skills from '@/components/Skills';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <nav className="p-6 max-w-6xl mx-auto flex justify-between items-center">
        <span className="font-bold text-xl tracking-tight text-slate-900">M. OWAIS</span>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-16">
        <header className="mb-20">
          <h1 className="text-6xl font-black text-slate-900 mb-6 tracking-tighter">Mohammad Owais</h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-8">
            Data Science and AI enthusiast specialized in **NLP** and **Search Systems**. [cite: 6, 7]
            Qualified **GATE 2025 (DA)** graduate. [cite: 8, 24]
          </p>
        </header>

        <Skills />

        <section className="py-20 border-t border-slate-200">
          <h2 className="text-3xl font-bold mb-10 text-slate-800">Featured Project</h2>
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4 text-blue-400">Gaming Search Engine</h3>
            <p className="text-slate-300 mb-6">Full-stack, AI-powered search engine using **Sentence-Transformers** and **FAISS**. [cite: 13, 14]</p>
          </div>
        </section>

        <ContactForm />
      </main>
    </div>
  );
}