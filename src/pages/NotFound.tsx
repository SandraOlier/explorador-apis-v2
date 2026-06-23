import React from "react";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>404 - Página no encontrada 🚀</h1>
      <p>Ups... parece que esta ruta no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}
