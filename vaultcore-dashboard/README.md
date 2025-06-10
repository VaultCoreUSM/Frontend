# Vaultcore Dashboard

Interfaz web desarrollada con **React + TypeScript + Vite**. Este proyecto está pensado para una ejecución sencilla y rápida, ya sea en tu entorno local o directamente desde un contenedor Docker.

---

## 🚀 ¿Cómo correrlo?

### 🔧 Opción 1: Desarrollo local

#### 1. Requisitos

- Node.js 18+ (recomendado LTS)
- npm

#### 2. Pasos

```bash
# Instalar dependencias
npm install

# Levantar servidor de desarrollo
npm run dev
```

### 🐳 Opción 2: Usar Docker (modo producción)

#### 1. Construir imagen
```bash
docker build -t vaultcore-dashboard .
```

#### 2. Ejecutar contenedor

```bash
docker run -p 3000:80 vaultcore-dashboard
```

La aplicación quedará disponible en http://localhost:3000.

## 📁 Estructura del Proyecto

```bash
├── public/                # Archivos públicos
├── src/                   # Código fuente (componentes, rutas, etc.)
├── package.json           # Dependencias y scripts
├── tsconfig*.json         # Configuración de TypeScript
├── vite.config.ts         # Configuración de Vite
├── Dockerfile             # Build y despliegue con Docker
└── nginx.conf             # Configuración del servidor Nginx
```

## ✅ Scripts útiles

```bash
npm run dev     # Inicia el servidor de desarrollo
npm run build   # Compila para producción
npm run preview # Previsualiza la build
```