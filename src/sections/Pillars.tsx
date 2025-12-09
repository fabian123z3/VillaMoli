import { pilares } from '../content/site'

function Pillars() {
  return (
    <section id="proyecto" className="grid gap-6 lg:grid-cols-3">
      {pilares.map((item) => (
        <article
          key={item.titulo}
          className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-5 shadow-[0_18px_60px_-32px_rgba(0,0,0,0.9)] backdrop-blur"
        >
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.acento}`}
            aria-hidden
          />
          <div className="relative flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-white">{item.titulo}</h2>
            <p className="text-sm text-slate-300">{item.descripcion}</p>
          </div>
        </article>
      ))}
    </section>
  )
}

export default Pillars
