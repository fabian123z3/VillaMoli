function ProjectsLink() {
  return (
    <section className="rounded-3xl border border-slate-800/70 bg-slate-900/40 p-6 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.8)]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">Proyectos</p>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Carnicero de Bolsillo</h2>
          <p className="text-sm text-slate-300 sm:text-base">
            Nuestro proyecto digital para acompañarte al cocinar. Conócelo en su página dedicada.
          </p>
        </div>
        <a
          href="/carnicerodebolsillo"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-300"
        >
          Ver proyecto
        </a>
      </div>
    </section>
  )
}

export default ProjectsLink
