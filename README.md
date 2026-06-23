# ✨ Explorador de APIs ✨

## 📘 Descripción
Aplicación desarrollada en **React + TypeScript** con **Vite** como bundler.  
El proyecto consume la **Rick and Morty API** y permite:

- Buscar personajes en tiempo real.
- Mostrar resultados en tarjetas con imagen y datos.
- Navegar entre distintas páginas (Home, Favoritos, Contacto).
- Gestionar favoritos con persistencia en `localStorage`.

Este trabajo corresponde a la **Actividad Obligatoria 2 y 3** del curso.

---

## 🛠️ Tecnologías Utilizadas
- React 18 + Hooks  
- TypeScript  
- Vite  
- Fetch API  
- React Router DOM  
- Rick and Morty API  

---

## 📂 Estructura del Proyecto

```plaintext
explorador-apis-v2/
 ├── public/              # Recursos estáticos
 ├── src/
 │    ├── components/     # Header, Footer, GridResultados
 │    ├── pages/          # Home, Favoritos, Contacto
 │    ├── hooks/          # useCharacters.ts
 │    ├── assets/         # Imágenes y estilos
 │    ├── App.tsx         # Rutas principales
 │    ├── main.tsx        # Punto de entrada con BrowserRouter
 │    └── index.css       # Estilos globales
 ├── package.json         # Dependencias y scripts
 ├── vite.config.ts       # Configuración de Vite
 └── README.md            # Documentación del proyecto

⚙️ Funcionalidades
🔍 Buscador en tiempo real: filtra personajes por nombre.

🖼️ Renderizado dinámico: muestra resultados en tarjetas con imagen y datos.

✅ Tipado estricto: uso de TypeScript para mayor seguridad.

📱 Diseño responsivo: interfaz adaptable a distintos dispositivos.

⭐ Favoritos: guarda personajes seleccionados en localStorage.

📩 Formulario de contacto: página dedicada para enviar mensajes.

🌐 Navegación con React Router: Home, Favoritos y Contacto.

▶️ Instalación y Uso
Clona el repositorio:

bash
git clone https://github.com/SandraOlier/explorador-apis-v2.git
cd explorador-apis-v2
Instala dependencias:

bash
npm install
Inicia el servidor de desarrollo:

bash
npm run dev
Abre en tu navegador:

Código
http://localhost:5173
📌 Evaluación
Este proyecto cumple con los criterios de las actividades:

Uso de React + TypeScript.

Consumo de una API externa.

Implementación de rutas y hooks personalizados.

Gestión de favoritos persistentes.

Presentación clara y profesional.

Documentación completa en README.

👩‍💻 Autora
Sandra Olier  
Proyecto realizado como parte de la Actividad Obligatoria  3 del curso.