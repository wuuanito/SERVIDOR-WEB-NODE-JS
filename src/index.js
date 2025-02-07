require("dotenv").config();
const express = require("express");
const axios = require("axios");
const path = require("path");
const fs = require("fs").promises;
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const API_URL = process.env.API_URL || "https://dragonball-api.com/api/characters";
const PORT = process.env.PORT || 3000;

const fetchCharacters = async () => {
  try {
    console.log("Obteniendo personajes de la API...");
    const response = await axios.get(API_URL);
    const { data: { items } } = response;

    return items.map((i) => ({
      id: i.id,
      nombre: i.name,
    }));
  } catch (error) {
    console.error("Error al obtener los personajes:", error.message);
    return [];
  }
};

const saveCharactersToFile = async (characters) => {
  try {
    const pathFile = path.join(__dirname, "../jsonFiles", "DatosDragonBall.json");
    await fs.writeFile(pathFile, JSON.stringify(characters, null, 2), "utf-8");
    console.log("Archivo guardado correctamente.");
  } catch (error) {
    console.error("Error al guardar el archivo:", error.message);
  }
};

const main = async () => {
  const personajes = await fetchCharacters();
  await saveCharactersToFile(personajes);

  app.get("/", (req, res) => {
    res.status(200).json({ personajes });
  });

  app.get("/:id", (req, res) => {
    const personaje = personajes.find((i) => i.id == req.params.id);
    if (personaje) {
      res.json({ nombre: personaje.nombre });
    } else {
      res.status(404).json({ error: "Personaje no encontrado" });
    }
  });
};

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  main();
});