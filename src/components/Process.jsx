import { CheckCircle2 } from 'lucide-react'

const steps = [
  { n: 1, title: 'Заявка', text: 'Вы звоните или оставляете сообщение — обсуждаем задачу' },
  { n: 2, title: 'Снятие мерок', text: 'Встречаемся в удобное время, уточняем детали' },
  { n: 3, title: 'Пошив/ремонт', text: 'Аккуратно выполняю работу в оговорённые сроки' },
  { n: 4, title: 'Примерка', text: 'Финальная посадка — всё сидит идеально' },
]

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">Как это работает</h2>
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center font-semibold">{s.n}</div>
              <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.text}</p>
              <CheckCircle2 className="absolute -top-3 -right-3 w-6 h-6 text-emerald-500"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
