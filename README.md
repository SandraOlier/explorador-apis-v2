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

3. Inicia la aplicación con:

```bash
npm run dev
```

4. Abre la aplicación en tu navegador en:

```text
http://localhost:5173/
```

> El proyecto está preparado para arrancar correctamente con `npm run dev`. Si el puerto 5173 está ocupado, Vite elegirá otro disponible automáticamente.

## Funcionalidades entregadas

- Exploración de personajes de la API de Rick and Morty.
- Búsqueda por nombre en tiempo real.
- Vista detallada al hacer clic en cada personaje.
- Navegación desde la tarjeta, el nombre y el botón "Ver detalle".
- Gestión de favoritos con persistencia en localStorage.
- Página de contacto con validaciones.

## Scripts disponibles

- `npm run dev` → inicia el servidor de desarrollo.
- `npm run build` → genera la versión de producción.

## Autor

Sandra Olier

Proyecto realizado como parte de la actividad obligatoria del curso.