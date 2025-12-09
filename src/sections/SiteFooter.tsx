import { playStoreUrl } from '../content/site'

function SiteFooter() {
  return (
    <footer className="flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-slate-200">Villamoli</p>
        <p className="text-slate-400">Calidad que se siente en cada corte.</p>
      </div>
      <div className="flex flex-wrap gap-3 text-xs">
        <a
          href={playStoreUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-slate-700 px-4 py-2 font-semibold text-slate-100 transition hover:border-slate-500"
        >
          Descargar app
        </a>
        <a
          href="mailto:hola@villamoli.com"
          className="rounded-full border border-slate-700 px-4 py-2 font-semibold text-slate-100 transition hover:border-slate-500"
        >
          Contacto
        </a>
      </div>
    </footer>
  )
}

export default SiteFooter
