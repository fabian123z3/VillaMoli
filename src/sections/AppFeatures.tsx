import { featuresApp, playStoreUrl } from '../content/site'

function AppFeatures() {
  return (
    <section className="flex flex-col gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/40 p-6 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.8)]">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">La app</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Qué puedes hacer</h2>
          <p className="text-sm text-slate-300 sm:text-base">
            Carnicero de Bolsillo reúne guía de cortes, recetas y asistencia directa para que cocines con
            confianza.
          </p>
        </div>
        <a
          href={playStoreUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-sky-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-300"
        >
          Descargar la app
        </a>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {featuresApp.map((item) => (
          <article
            key={item.titulo}
            className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4 shadow-[0_18px_60px_-32px_rgba(0,0,0,0.9)]"
          >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-300">
              <span className="rounded-full bg-slate-800 px-2 py-1 text-slate-200">{item.etiqueta}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">Villamoli</span>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-white">{item.titulo}</h3>
            <p className="mt-1 text-sm text-slate-300">{item.descripcion}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AppFeatures
