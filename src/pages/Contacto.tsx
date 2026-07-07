import { useState } from "react";

function Contacto() {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({ nombre: "", email: "", mensaje: "" });

  const validate = (values: typeof formData) => {
    const nextErrors = {
      nombre: values.nombre.trim() ? "" : "Ingresa tu nombre.",
      email: values.email.trim() ? "" : "Ingresa tu correo.",
      mensaje: values.mensaje.trim() ? "" : "Escribe un mensaje.",
    };

    if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Ingresa un correo válido.";
    }

    return nextErrors;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const nextData = { ...formData, [name]: value };
    setFormData(nextData);
    setErrors(validate(nextData));
    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(formData);
    setErrors(nextErrors);

    const hasErrors = Object.values(nextErrors).some(Boolean);
    if (hasErrors) {
      return;
    }

    console.log("Datos enviados:", formData);
    setSubmitted(true);
    setFormData({ nombre: "", email: "", mensaje: "" });
    setErrors({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div className="app-shell">
      <section className="hero-section">
        <p className="eyebrow">Contacto</p>
        <h1>Formulario de contacto</h1>
        <p className="subtitle">Completa los datos y te responderemos a la brevedad.</p>
      </section>

      <form className="contact-form" onSubmit={handleSubmit}>
        {submitted && <div className="success-message">Mensaje enviado con éxito ✅</div>}

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
          {errors.nombre && <span className="error-message">{errors.nombre}</span>}
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
          {errors.email && <span className="error-message">{errors.email}</span>}
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
          {errors.mensaje && <span className="error-message">{errors.mensaje}</span>}
        </div>

        <button className="submit-button" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contacto;

