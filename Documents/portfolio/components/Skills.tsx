export default function Skills() {
  const skills = [
    { category: "AI & Data Science", items: ["Machine Learning", "NLP", "Semantic Search", "Vector Embeddings"] },
    { category: "Libraries", items: ["PyTorch", "Pandas", "NumPy", "Scikit-learn", "FAISS", "Sentence-Transformers"] },
    { category: "Languages", items: ["Python", "C++", "Java", "C"] },
    { category: "Web & Tools", items: ["Flask", "React.js", "Scrapy", "Selenium", "REST APIs"] }
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-slate-800">Technical Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div key={skill.category} className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
            <h3 className="font-bold text-blue-600 mb-3">{skill.category}</h3>
            <ul className="space-y-2">
              {skill.items.map(item => (
                <li key={item} className="text-sm text-slate-600 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}