export function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} Rick & Morty API Explorer · Desarrollado con{" "}
          <span className="highlight">React + TypeScript</span>
        </p>
        <nav className="footer-links">
          <a
            href="https://github.com/SandraOlier/explorador-apis-v2"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
          <a
            href="https://rickandmortyapi.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rick & Morty API
          </a>
          <a
            href="mailto:sahndraelizabetholier@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contacto
          </a>
        </nav>
      </div>
    </footer>
  );
}


