
# Calculadora de Costo por Uso

Esta aplicación web permite calcular el costo de uso de un servicio o producto de manera sencilla y rápida. Está desarrollada con React y Vite, siguiendo una arquitectura modular y escalable.

## Arquitectura del Proyecto

El proyecto está organizado de la siguiente manera:

```
calculadora_de_costo/
├── public/                # Archivos públicos y recursos estáticos
├── src/                   # Código fuente principal
│   ├── assets/            # Imágenes y recursos gráficos
│   ├── components/        # Componentes reutilizables de React
│   ├── pages/             # Páginas principales de la aplicación
│   ├── styles/            # Archivos CSS para estilos
│   ├── App.jsx            # Componente principal de la aplicación
│   ├── main.jsx           # Punto de entrada de React
│   └── index.css          # Estilos globales
├── index.html             # HTML principal
├── package.json           # Dependencias y scripts
├── vite.config.js         # Configuración de Vite
└── README.md              # Documentación del proyecto
```

## Herramientas de Desarrollo

- **React**: Biblioteca principal para construir la interfaz de usuario.
- **Vite**: Herramienta de desarrollo y bundler para proyectos modernos de frontend.
- **ESLint**: Linter para mantener la calidad y consistencia del código.
- **CSS**: Para los estilos personalizados de la aplicación.

## Cómo ejecutar el proyecto

1. **Instalar dependencias**

	Abre una terminal en la carpeta `calculadora_de_costo` y ejecuta:
	```powershell
	npm install
	```

2. **Ejecutar el servidor de desarrollo**

	```powershell
	npm run dev
	```

	Esto iniciará la aplicación en modo desarrollo. Normalmente estará disponible en [http://localhost:5173](http://localhost:5173).

3. **Construir para producción**

	```powershell
	npm run build
	```

	Los archivos listos para producción estarán en la carpeta `dist/`.

## Notas

- Asegúrate de tener [Node.js](https://nodejs.org/) instalado.
- Puedes personalizar los estilos en la carpeta `src/styles/`.
- Para reportar errores o sugerencias, crea un issue en el repositorio.

---

Desarrollado por AndreYuli.
