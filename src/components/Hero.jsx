import { Sparkles, ArrowRight, PhoneCall } from 'lucide-react'

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-20 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl"/>
        <div className="absolute top-40 -left-20 w-[32rem] h-[32rem] bg-pink-200/30 rounded-full blur-3xl"/>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur px-3 py-1 rounded-full border border-rose-200 text-rose-700 text-sm">
            <Sparkles className="w-4 h-4"/>
            <span>Индивидуальный пошив и идеальная посадка</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Портной Наталья — одежда, которая сидит безупречно
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Настройка, ремонт и пошив изделий для женщин и мужчин, взрослых и детей. Подчеркнём достоинства фигуры и обеспечим комфорт каждый день.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="tel:+79991234567" className="inline-flex items-center justify-center gap-2 bg-rose-600 text-white px-6 py-3 rounded-lg shadow hover:bg-rose-700 transition">
              <PhoneCall className="w-5 h-5"/>
              <span>Позвонить сейчас</span>
            </a>
            <button onClick={() => scrollTo('contact')} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50">
              <span>Оставить заявку</span>
              <ArrowRight className="w-5 h-5"/>
            </button>
          </div>

          <p className="mt-4 text-sm text-slate-500">Бесплатная консультация и предварительная оценка.</p>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
            <img src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1600&auto=format&fit=crop" alt="Ателье и швейное дело" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 border border-slate-200">
            <p className="text-slate-900 font-semibold">3–5 дней</p>
            <p className="text-slate-500 text-sm">срок большинства работ</p>
          </div>
        </div>
      </div>
    </section>
  )
}
