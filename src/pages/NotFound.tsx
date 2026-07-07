import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="app-shell">
      <section className="hero-section">
        <p className="eyebrow">404</p>
        <h1>Página no encontrada</h1>
        <p className="subtitle">La ruta ingresada no existe. Volvé al inicio para seguir explorando.</p>
        <Link className="back-link" to="/">
          Volver al inicio
        </Link>
      </section>
    </div>
  );
}

export default NotFound;
