# 🐉 Dragon Ball API - Node.js Express

## 🚀 Descripción
Este es un servidor en Node.js con Express que obtiene una lista de personajes de **Dragon Ball** desde una API pública y los guarda en un archivo JSON. Además, expone dos endpoints:

- **`GET /`** → Devuelve todos los personajes.
- **`GET /:id`** → Devuelve un personaje por su ID.

El servidor está diseñado para manejar errores, utilizar variables de entorno y registrar eventos mediante `morgan`.

---

## 📌 Tecnologías Usadas
- **Node.js** - Entorno de ejecución de JavaScript
- **Express.js** - Framework para la creación del servidor
- **Axios** - Para hacer peticiones HTTP a la API externa
- **Morgan** - Middleware para logs
- **dotenv** - Para manejar variables de entorno
- **fs.promises** - Para manejar archivos JSON

---

## 🛠 Instalación y Configuración

1️⃣ **Clonar el repositorio:**
```sh
git clone https://github.com/wuuanito/nodejs-dragonball-characters.git
cd dragonball-api-express
```

2️⃣ **Instalar dependencias:**
```sh
npm install
```

3️⃣ **Configurar variables de entorno:**
Crea un archivo `.env` en la raíz del proyecto y agrega:
```env
API_URL=https://dragonball-api.com/api/characters
PORT=3000
```

4️⃣ **Ejecutar el servidor:**
```sh
npm start
```

El servidor se iniciará en `http://localhost:3000`.

---

## 📡 Endpoints Disponibles

### 🔹 Obtener todos los personajes
```http
GET /
```
#### 📌 Respuesta:
```json
{
  "personajes": [
    {
      "id": 1,
      "nombre": "Goku"
    },
    {
      "id": 2,
      "nombre": "Vegeta"
    }
  ]
}
```

### 🔹 Obtener un personaje por ID
```http
GET /:id
```
#### 📌 Ejemplo:
```http
GET /1
```
#### 📌 Respuesta:
```json
{
  "nombre": "Goku"
}
```
Si el ID no existe, devuelve:
```json
{
  "error": "Personaje no encontrado"
}
```

---

## 🛠 Mejoras Futuras
✔️ Agregar TypeScript para mayor robustez.  
✔️ Implementar pruebas unitarias con Jest.  
✔️ Desplegar en un servicio como Heroku o Render.  
✔️ Cachear los datos para mejorar el rendimiento.

---

## 📜 Licencia
Este proyecto está bajo la licencia **MIT**. Puedes usarlo y modificarlo libremente. 🚀

