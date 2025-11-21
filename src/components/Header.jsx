import { Menu, Phone } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/70 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 shadow ring-2 ring-white"/>
          <div className="leading-tight">
            <p className="text-slate-900 font-semibold">Портной Наталья</p>
            <p className="text-xs text-slate-500">индивидуальный пошив и ремонт</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <button onClick={() => scrollTo('services')} className="hover:text-slate-900 transition">Услуги</button>
          <button onClick={() => scrollTo('works')} className="hover:text-slate-900 transition">Работы</button>
          <button onClick={() => scrollTo('process')} className="hover:text-slate-900 transition">Как это работает</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-slate-900 transition">Контакты</button>
          <a href="tel:+79991234567" className="inline-flex items-center gap-2 bg-rose-600 text-white px-4 py-2 rounded-lg shadow hover:bg-rose-700 transition">
            <Phone className="w-4 h-4"/>
            <span>+7 (999) 123‑45‑67</span>
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-slate-100">
          <Menu className="w-6 h-6 text-slate-700"/>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-2 text-slate-700">
            <button onClick={() => scrollTo('services')} className="py-2 text-left">Услуги</button>
            <button onClick={() => scrollTo('works')} className="py-2 text-left">Работы</button>
            <button onClick={() => scrollTo('process')} className="py-2 text-left">Как это работает</button>
            <button onClick={() => scrollTo('contact')} className="py-2 text-left">Контакты</button>
            <a href="tel:+79991234567" className="mt-2 inline-flex items-center justify-center gap-2 bg-rose-600 text-white px-4 py-2 rounded-lg shadow hover:bg-rose-700 transition">
              <Phone className="w-4 h-4"/>
              <span>Позвонить</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
