import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Works from './components/Works'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <Works />
        <Process />
        <CTA />
      </main>
      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Портной Наталья. Все права защищены.</p>
          <div className="text-sm text-slate-600">Тел.: <a className="hover:underline" href="tel:+79991234567">+7 (999) 123‑45‑67</a></div>
        </div>
      </footer>
    </div>
  )
}

export default App
