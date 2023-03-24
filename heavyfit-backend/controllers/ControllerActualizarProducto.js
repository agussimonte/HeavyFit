import conexion from "../config.js";

export const actualizarStockProducto = async (req, res) => {
  try {
    let idProducto  = req.params.idProducto;
    let cantidad  = req.body.cantidad;
    console.log(req.params.idProducto)
    await conexion.query(
      "UPDATE productos SET stock = (?) WHERE idProducto = (?)",{
        replacements: [[req.body.cantidad], [req.params.idProducto]],
    }
    );

    res.status(200).json({ message: "Stock actualizado correctamente" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Error al actualizar stock del producto" });
  }
};

