import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListadoProductos() {
  const [productos, setProductos] = useState([]);
  //const [idProducto, setIdProducto] = useState('');
  const [cantidad, setCantidad] = useState('');

  const obtenerProductos = async () => {
    try {
      const response = await axios.get('http://3.93.207.181:3001/leerProductos');
      setProductos(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const actualizarStock = async (idProducto, cantidad) => {
    try {
      const response = await axios.patch(`http://3.93.207.181:3001/actualizarStockProducto/${idProducto}`, 
      { cantidad });
      if (response.status === 200) {
        console.log('Stock actualizado correctamente');
        //setIdProducto('');
        setCantidad('');
        obtenerProductos();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const renderProductos = () => {
    return (
      <table>
      <thead>
        <tr>
          <th>Nombre del Producto</th>
          <th>Descripción</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr key={producto.idProducto}>
            <td>{producto.nombre}</td>
            <td>{producto.stock}</td>
            <td><input
        type="text"
        pattern="[0-9]*"
        placeholder="Cantidad"
        //value={idProducto === producto.id ? cantidad : ''}
        onChange={(e) => setCantidad(e.target.value)}
      />
      <button onClick={() => actualizarStock(producto.idProducto, cantidad)}>Actualizar Stock</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    );
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      {renderProductos()}
    </div>
  );
}

export default ListadoProductos;
