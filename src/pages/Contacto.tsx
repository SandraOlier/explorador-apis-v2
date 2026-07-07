import { useState } from "react";

function Contacto() {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Datos enviados:", formData);
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div className="app-shell">
      <section className="hero-section">
        <p className="eyebrow">Contacto</p>
        <h1>Formulario de contacto</h1>
        <p className="subtitle">Completa los datos y te responderemos a la brevedad.</p>
      </section>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <div className="input-wrapper">
            <span className="input-icon">👤</span>
            <input
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <div className="input-wrapper">
            <span className="input-icon">✉️</span>
            <input
              id="email"
              name="email"
              type="text"
              inputMode="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Tu email"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <div className="input-wrapper">
            <span className="input-icon">💬</span>
            <input
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="¿En qué te ayudamos?"
            />
          </div>
        </div>

        <button className="submit-button" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contacto;

