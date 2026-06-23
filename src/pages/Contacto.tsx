import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
}

export function Contacto() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    alert("Formulario enviado correctamente ✅");
    console.log("Datos enviados:", data);
  };

  return (
    <div className="app-shell">
      <section className="hero-section">
        <h1>Contacto / Login</h1>
        <p className="subtitle">
          Completa el formulario para iniciar sesión o enviarnos tu consulta.
        </p>
      </section>

      {/* 🔹 Formulario con íconos */}
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <div className="input-wrapper">
            <span className="input-icon">✉️</span>
            <input
              id="email"
              type="email"
              placeholder="Ingresa tu correo"
              autoComplete="off"
              {...register("email", {
                required: "El correo es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Formato inválido",
                },
              })}
            />
          </div>
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <div className="input-wrapper">
            <span className="input-icon">🔒</span>
            <input
              id="password"
              type="password"
              placeholder="Ingresa tu contraseña"
              autoComplete="new-password"
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 6,
                  message: "Debe tener al menos 6 caracteres",
                },
              })}
            />
          </div>
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>

        <button type="submit" className="submit-button">Enviar</button>
      </form>

      {/* 🔹 Botón volver a inicio (fuera del form) */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Link to="/" className="submit-button">Volver a Inicio</Link>
      </div>
    </div>
  );
}
