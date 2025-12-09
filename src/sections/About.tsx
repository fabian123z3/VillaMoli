import { sobreNosotros } from '../content/site'

function About() {
  return (
    <section
      id="sobre"
      className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/40 p-6 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.8)] sm:grid-cols-[1.2fr_1fr] sm:items-center"
    >
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
          Marca
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{sobreNosotros.titulo}</h2>
        <p className="text-base text-slate-300 sm:text-lg">{sobreNosotros.descripcion}</p>
      </div>

      <div className="grid gap-3 sm:gap-4">
        {sobreNosotros.bullets.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
          >
            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-sm font-semibold text-emerald-200">
              ✔
            </span>
            <p className="text-sm text-slate-200">{item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
