const CharactersPage = () => {
  return (
    <article className="py-5">
      <div className="container">
        <header className="text-center">
          <h1 className="display-5 fw-bold">
            <i className="bi bi-people-fill me-2"></i>
            Personajes de Rick and Morty
          </h1>
          <p className="lead text-muted">
            Explora el universo de personajes
          </p>
        </header>

        <section className="alert alert-info border-0 shadow-sm">
          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-info-circle fs-3"></i>
            <div>
              <h5 className="mb-1">Próximamente</h5>
              <p className="mb-0">Aquí irá el listado completo de personajes con filtros y búsqueda</p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}

export default CharactersPage;
