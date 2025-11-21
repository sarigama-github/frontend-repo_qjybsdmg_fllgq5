import { Phone, MessageSquare } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Готовы обсудить заказ?</h2>
          <p className="mt-3 text-slate-600">Расскажите, что нужно сделать — предложу варианты, сроки и ориентировочную стоимость.</p>

          <div className="mt-6 space-y-3">
            <a href="tel:+79991234567" className="inline-flex items-center gap-2 bg-rose-600 text-white px-6 py-3 rounded-lg shadow hover:bg-rose-700 transition">
              <Phone className="w-5 h-5"/>
              <span>Позвонить: +7 (999) 123‑45‑67</span>
            </a>
            <a href="https://wa.me/79991234567" target="_blank" className="block w-max underline text-rose-700 hover:text-rose-800">
              <span className="inline-flex items-center gap-2"><MessageSquare className="w-4 h-4"/>Написать в WhatsApp</span>
            </a>
          </div>
        </div>

        <form onSubmit={(e)=>e.preventDefault()} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Имя" className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500"/>
            <input required type="tel" placeholder="Телефон" className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500"/>
            <textarea rows="4" placeholder="Опишите задачу" className="sm:col-span-2 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500"/>
          </div>
          <button className="mt-4 w-full bg-rose-600 text-white px-6 py-3 rounded-lg shadow hover:bg-rose-700 transition">Отправить заявку</button>
          <p className="mt-2 text-xs text-slate-500">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.</p>
        </form>
      </div>
    </section>
  )
}
