function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16">
        <header className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
            Villamolí
          </span>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Carne seleccionada con sabor auténtico
          </h1>
          <p className="text-lg text-slate-300 sm:max-w-2xl">
            Cortes premium preparados por expertos, listos para disfrutar en casa o en tu próximo
            asado.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button className="rounded-full bg-sky-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-300">
              Ver catálogo
            </button>
            <button className="rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-slate-500">
              Contactar
            </button>
          </div>
        </header>

        <section className="grid gap-6 sm:grid-cols-2">
          {[
            {
              title: 'Cortes premium',
              description: 'Selección de res, cerdo y cordero con marmoleo y frescura garantizados.',
            },
            {
              title: 'Entrega cuidada',
              description: 'Cadena de frío controlada para que cada pedido llegue con la mejor calidad.',
            },
            {
              title: 'Asesoría experta',
              description: 'Recomendaciones de cocción y maridaje según el corte y la ocasión.',
            },
            {
              title: 'Origen trazable',
              description: 'Productores locales comprometidos con el bienestar animal y prácticas responsables.',
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.75)] backdrop-blur"
            >
              <h2 className="text-lg font-semibold text-white">{item.title}</h2>
              <p className="mt-2 text-sm text-slate-300">{item.description}</p>
            </article>
          ))}
        </section>

        <footer className="border-t border-slate-800 pt-6 text-sm text-slate-400">
          Calidad desde Villamolí — hechos a la parrilla y con cariño.
        </footer>
      </div>
    </div>
  )
}

export default App
