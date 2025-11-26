import { useEffect } from 'react';
import CharacterCard from '../components/modules/character/CharacterCard';
import { useCharactersStore } from '../stores/useCharactersStore';

const CharactersPage = () => {
  const { characters, isLoading, error, fetchCharacters } = useCharactersStore();

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return (
    <>
      <header className="py-4 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">
            <i className="bi bi-people-fill me-2"></i>
            Personajes de Rick and Morty
          </h1>
          <p className="lead text-muted">
            Explora el universo de personajes
          </p>
        </div>
      </header>

      <section className="py-4">
        <div className="container">

          {isLoading && (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
            </div>
          )}

          {error && (
            <div className="alert alert-danger d-flex align-items-center gap-3">
              <i className="bi bi-exclamation-triangle fs-3"></i>
              <div>
                <h5 className="mb-1">Error</h5>
                <p className="mb-0">{error}</p>
              </div>
            </div>
          )}

          {!isLoading && !error && characters.length > 0 && (
            <>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                {characters.map((character) => (
                  <div key={character.id} className="col">
                    <CharacterCard character={character} />
                  </div>
                ))}
              </div>
            </>
          )}

          {!isLoading && !error && characters.length === 0 && (
            <div className="alert alert-warning d-flex align-items-center gap-3">
              <i className="bi bi-search fs-3"></i>
              <div>
                <h5 className="mb-1">Sin resultados</h5>
                <p className="mb-0">No se encontraron personajes con ese nombre</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CharactersPage;
