<<<<<<< HEAD
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="app-shell">
      <section className="hero-section">
        <div>
          <p className="eyebrow">Página no encontrada</p>
          <h1>Ruta inválida</h1>
          <p className="subtitle">
            La página que buscas no existe. Regresa al inicio para continuar con la búsqueda de personajes.
          </p>
          <Link to="/" className="back-link">
            ← Volver a la página principal
          </Link>
        </div>
      </section>
    </div>
  );
}
=======
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="app-shell">
      <section className="hero-section">
        <div>
          <p className="eyebrow">Página no encontrada</p>
          <h1>Ruta inválida</h1>
          <p className="subtitle">
            La página que buscas no existe. Regresa al inicio para continuar con la búsqueda de personajes.
          </p>
          <Link to="/" className="back-link">
            ← Volver a la página principal
          </Link>
        </div>
      </section>
    </div>
  );
}
>>>>>>> 80ee51d20a06fddce60da0a7b0a5016afb21d675
