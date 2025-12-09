import { heroCopy } from '../content/site'

function Hero() {
  return (
    <header className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <div className="space-y-5">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300">
          {heroCopy.marca}
        </span>
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          {heroCopy.titulo}
        </h1>
        <p className="text-lg text-slate-300 sm:text-xl">{heroCopy.descripcion}</p>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:hola@villamoli.com"
            className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-300"
          >
            Hablar con Villamoli
          </a>
          <a
            href="#sobre"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-slate-500"
          >
            Conocer la marca
          </a>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800/70 bg-slate-900/50 p-6 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.8)] backdrop-blur">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Entrega segura</p>
            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
              Frescura
            </span>
          </div>
          <p className="text-2xl font-semibold text-white">
            Cadena de frío controlada, cortes seleccionados y trazabilidad desde origen.
          </p>
          <div className="grid grid-cols-3 gap-3 text-sm text-slate-300">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-3">
              <p className="text-xs uppercase tracking-wide text-slate-400">Origen</p>
              <p className="font-semibold text-white">Productores locales</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-3">
              <p className="text-xs uppercase tracking-wide text-slate-400">Control</p>
              <p className="font-semibold text-white">Cadena de frío</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-3">
              <p className="text-xs uppercase tracking-wide text-slate-400">Entrega</p>
              <p className="font-semibold text-white">Listo para la parrilla</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
