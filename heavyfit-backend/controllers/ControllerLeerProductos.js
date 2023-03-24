import conexion  from "../config.js";

export const leerProductos = async(req, res) =>{
    try {
        const [response] = await conexion.query('SELECT * FROM productos');
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}