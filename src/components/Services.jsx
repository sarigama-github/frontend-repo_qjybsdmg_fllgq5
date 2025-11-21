import { Scissors, Ruler, Shirt, Needle, Baby, Man, Woman } from 'lucide-react'

const services = [
  { icon: Scissors, title: 'Ремонт и настройка', desc: 'Укоротим, ушьём, заменим молнию, подгоним по фигуре' },
  { icon: Ruler, title: 'Индивидуальный пошив', desc: 'Платья, костюмы, школьная форма и изделия любой сложности' },
  { icon: Shirt, title: 'Работа с верхней одеждой', desc: 'Пальто, куртки, плащи — аккуратно и надёжно' },
  { icon: Needle, title: 'Декор и реставрация', desc: 'Нашивки, подклад, латки и бережное восстановление' },
]

const groups = [
  { icon: Woman, label: 'Женская одежда' },
  { icon: Man, label: 'Мужская одежда' },
  { icon: Baby, label: 'Детская одежда' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">Услуги</h2>
        <p className="mt-3 text-slate-600 text-center">Профессионально работаю с любыми типами тканей и фасонами</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
              <s.icon className="w-8 h-8 text-rose-600" />
              <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {groups.map((g) => (
            <div key={g.label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
              <g.icon className="w-4 h-4"/>
              <span className="text-sm">{g.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
