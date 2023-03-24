import conexion from "../config.js";

export const leerProductoPorId = async(req, res) =>{
  const idProducto = req.params.id;
  try {
    const [response] = await conexion.query('SELECT * FROM productos WHERE idPedido = ?', 
    [idProducto]);
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}