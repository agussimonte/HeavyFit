// Importar Express y mysql2
import express from "express";
import conexion from "./config.js";
import Routes from "./routes.js"
import cors from "cors";
import { URL } from 'url';
import path from "path";

const __dirname = new URL('.', import.meta.url).pathname.slice(1, -1);
// Verificaci�n de conexi�n con la base de datos.
conexion.authenticate()
    .then(() => {
        console.log('Conectando...');
        console.log('Conectado a la base de datos.');
    })
    .catch(err => {
        console.log('Conectando...');
        console.log('La conexi�n a la base de datos fall�.');
        console.log('Error: ' + err.message);
        console.log('Para intentar corregir el problema intente lo siguiente:');
        console.log(' - Verificar que el motor de base de datos est� ejecutando correctamente.');
        console.log(' - Verificar las configuraci�n del archivo config/Database.js.');
    });

// Crear una instancia de Express\

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
     res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });

app.use(cors());
app.use(express.json());
app.use(Routes);


const port = 3001;

app.listen(port, () => {
  console.log('Servidor iniciado en el puerto: ' + port);
});