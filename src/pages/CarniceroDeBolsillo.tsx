import { carnicero, playStoreUrl } from '../content/site'

function CarniceroDeBolsillo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 sm:px-10">
        <header className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300">Proyecto</p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              {carnicero.titulo}
            </h1>
            <p className="text-lg text-slate-300 sm:text-xl">{carnicero.descripcion}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-300"
              >
                Ver en Google Play
              </a>
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-slate-500"
              >
                Volver a Villamoli
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800/70 bg-slate-900/50 p-6 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.8)] backdrop-blur">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Qué incluye</p>
                <span className="rounded-full bg-sky-500/15 px-3 py-1 text-xs font-semibold text-sky-200">
                  App
                </span>
              </div>
              <ul className="grid gap-2 text-sm text-slate-200">
                {carnicero.bullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-xl border border-slate-800 bg-slate-900/40 px-3 py-2"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-xs font-semibold text-emerald-200">
                      ✔
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </header>

        <section className="grid gap-4 rounded-3xl border border-slate-800/70 bg-slate-900/40 p-6 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.8)]">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">Características</p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Cómo te acompaña</h2>
              <p className="text-sm text-slate-300 sm:text-base">
                Inspirado en la app original: guía de cortes, recetas guiadas y asistencia directa.
              </p>
            </div>
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-slate-500"
            >
              Descargar app
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {carnicero.secciones.map((item) => (
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
                <p className="mt-1 text-sm text-slate-300">{item.detalle}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-4 rounded-3xl border border-slate-800/70 bg-slate-900/40 p-6 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.8)] sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">Cómo usarla</p>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Tres pasos rápidos</h2>
            <p className="text-sm text-slate-300 sm:text-base">
              Basado en la experiencia real de la app: eliges corte, sigues la guía y recibes apoyo.
            </p>
          </div>
          <ol className="grid gap-3 text-sm text-slate-200">
            {carnicero.pasos.map((item, idx) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/20 text-sm font-semibold text-sky-200">
                  {idx + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  )
}

export default CarniceroDeBolsillo
