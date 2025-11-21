export default function Works() {
  const items = [
    { src: 'https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', cap: 'Подгонка платья по фигуре' },
    { src: 'https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', cap: 'Ремонт мужского костюма' },
    { src: 'https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', cap: 'Пошив школьной формы' },
    { src: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop', cap: 'Работа с верхней одеждой' },
    { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop', cap: 'Детские наряды' },
    { src: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1600&auto=format&fit=crop', cap: 'Декор и реставрация' },
  ]

  return (
    <section id="works" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">Примеры работ</h2>
        <p className="mt-3 text-slate-600 text-center">Немного того, что мы делаем каждый день</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <figure key={it.src} className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <img src={it.src} alt={it.cap} className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <figcaption className="p-4 text-sm text-slate-700">{it.cap}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
