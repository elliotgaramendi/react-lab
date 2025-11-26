import { Link, useParams } from 'react-router';

const CharacterDetailPage = () => {
  const { id } = useParams();

  return (
    <>
      <header className="py-4">
        <div className="container">
          <nav className="mb-3">
            <Link to="/characters" className="btn btn-outline-secondary">
              <i className="bi bi-arrow-left me-2"></i>
              Volver a personajes
            </Link>
          </nav>
          <div className="text-center">
            <h1 className="display-5 fw-bold">
              <i className="bi bi-person-badge me-2"></i>
              Detalle del Personaje
            </h1>
            <p className="lead text-muted">ID: {id}</p>
          </div>
        </div>
      </header>

      <section className="py-4">
        <div className="container">
          <div className="alert alert-info border-0 d-flex align-items-center gap-3">
            <i className="bi bi-info-circle fs-3"></i>
            <div>
              <h5 className="mb-1">Próximamente</h5>
              <p className="mb-0">Aquí irá toda la información detallada del personaje</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CharacterDetailPage;
