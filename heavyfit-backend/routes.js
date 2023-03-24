import express from "express";
import { leerProductos } from "./controllers/ControllerLeerProductos.js";
import { leerProductoPorId } from "./controllers/ControllerLeerProductoPorId.js";

import { actualizarStockProducto } from "./controllers/ControllerActualizarProducto.js";
const router = express.Router();

/* POST */
// router.post('/registrarArticulo', registrarArticulo);

/* GET */
router.get('/leerProductos', leerProductos);
router.get('/leerProductosPorId/:idProducto', leerProductoPorId); // Nueva ruta para leer producto por ID

/* PATCH */
router.patch('/actualizarStockProducto/:idProducto', actualizarStockProducto);

/* DELETE */

export default router;
