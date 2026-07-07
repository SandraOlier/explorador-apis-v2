# Explorador de APIs

Aplicación desarrollada en React + TypeScript con Vite para explorar personajes de la Rick and Morty API de forma visual, rápida y organizada.

## Características

- Búsqueda de personajes por nombre en tiempo real.
- Visualización en tarjetas con imagen, especie y detalles básicos.
- Vista detallada de cada personaje.
- Gestión de favoritos con persistencia en localStorage.
- Página de contacto con validaciones y mensaje de éxito.
- Navegación entre Inicio, Favoritos y Contacto.

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- React Router DOM
- Fetch API

## Estructura del proyecto

```text
src/
  components/   # Navbar, tarjetas y grilla de resultados
  context/      # Contexto de favoritos
  hooks/        # Lógica reutilizable para consumir la API
  pages/        # Inicio, detalle, favoritos y contacto
  types/        # Tipados de TypeScript
  index.css     # Estilos globales
```

## Instalación y uso

1. Clona el repositorio.
2. Instala las dependencias:

```bash
npm install
```

3. Inicia el proyecto en el puerto 5179 para que quede alineado con la vista previa utilizada en esta entrega:

```bash
npm run dev -- --host 0.0.0.0 --port 5179 --strictPort
```

4. Abre la aplicación en tu navegador en:

```text
http://127.0.0.1:5179/
```

> Si prefieres usar el puerto por defecto de Vite, también funciona con `npm run dev`, pero en esta entrega se recomienda el puerto 5179 para mantener la vista consistente.

## Scripts disponibles

- `npm run dev` → inicia el servidor de desarrollo.
- `npm run build` → genera la versión de producción.

## Autor

Sandra Olier

Proyecto realizado como parte de la actividad obligatoria del curso.