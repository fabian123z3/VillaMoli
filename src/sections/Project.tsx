import { beneficiosApp, hitosEstado, playStoreUrl } from '../content/site'

function Project() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">Proyecto digital</p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Carnicero de Bolsillo</h2>
        <p className="text-lg text-slate-300">
          Nuestra app acerca la experiencia Villamoli a donde estés: guía de cortes, recetas paso a paso,
          selector según preparación y asistencia directa para cocinar con confianza.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {beneficiosApp.map((item) => (
            <div
              key={item}
              className="flex items-start gap-2 rounded-xl border border-slate-800 bg-slate-900/40 p-3 text-sm text-slate-200"
            >
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/20 text-xs font-bold text-sky-200">
                +
              </span>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="/carnicerodebolsillo"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-300"
          >
            Ir al proyecto
          </a>
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-slate-500"
          >
            Ver en Google Play
          </a>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.8)]">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold text-white">Actual en desarrollo</p>
          <p className="text-sm text-slate-300">
            Construimos experiencias digitales que respetan nuestro estándar: simple, confiable y
            centrado en el sabor.
          </p>
          <div className="grid gap-3 text-sm text-slate-200">
            {hitosEstado.map((item) => (
              <div
                key={item.titulo}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3"
              >
                <p className="text-xs uppercase tracking-wide text-slate-400">{item.titulo}</p>
                <p className="font-semibold text-white">{item.detalle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
