
const express = require('express');
//Importar Cors
const cors = require('cors');
// Crear una instancia de Express
const app = express();
// Definir el puerto en el que se ejecutará el servidor
const PORT = 4000;
// Middleware para poder recibir datos JSON
app.use(express.json());
// Rutas RESTful
// Ruta GET: Retorna todos los usuarios

app.use(cors());

app.get("/",(req,res)=>{
    res.sendFile(path.join(_dirname,"index.html"));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});