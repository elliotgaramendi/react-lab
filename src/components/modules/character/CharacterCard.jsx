import { Link } from 'react-router';

const CharacterCard = ({ character }) => {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img
        src={character.image}
        className="card-img-top"
        alt={character.name}
        loading="lazy"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{character.name}</h5>
        <div className="mb-2">
          <span className={`badge ${character.status === 'Alive' ? 'bg-success' : character.status === 'Dead' ? 'bg-danger' : 'bg-secondary'}`}>
            {character.status}
          </span>
          <span className="badge bg-primary ms-2">{character.species}</span>
        </div>
        <p className="card-text text-muted small flex-grow-1">
          <i className="bi bi-geo-alt me-1"></i>
          {character.location.name}
        </p>
        <Link to={`/characters/${character.id}`} className="btn btn-outline-primary w-100">
          <i className="bi bi-eye me-2"></i>
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default CharacterCard;
