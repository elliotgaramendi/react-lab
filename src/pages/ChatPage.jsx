const ChatPage = () => {
  return (
    <>
      <header className="py-4 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">
            <i className="bi bi-robot me-2"></i>
            Chat con Inteligencia Artificial
          </h1>
          <p className="lead text-muted">
            Pregúntame sobre cualquier personaje de Rick and Morty
          </p>
        </div>
      </header>
      <section className="py-4 d-flex">
        <div className="container d-flex justify-content-center">
          <div className="alert alert-success border-0 mb-0 d-flex align-items-center gap-3">
            <i className="bi bi-lightbulb fs-3"></i>
            <div>
              <h5 className="mb-1">Ejemplo de uso</h5>
              <p className="mb-0">
                Prueba preguntar: "¿Quién es Rick Sanchez?" o "Muéstrame información de Morty"
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChatPage;
