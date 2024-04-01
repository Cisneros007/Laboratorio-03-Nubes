const express = require('express')

const app = express()
const PORT = 11400

// Datos para clientes de nombre, apellido y la ruta 
const clientes = [
    { nombre: 'Juan', apellido: 'Pérez' },
    { nombre: 'María', apellido: 'González' },
    { nombre: 'Luis', apellido: 'Martínez' }
  ];
app.get('/clientes', (req, res) => {
    res.json(clientes);
  });
  
  // DAtos para los productos y la ruta
const productos = [
    { nombre: 'Celular', precio: 500, stock: 10 },
    { nombre: 'Laptop-2024', precio: 1200, stock: 5 },
    { nombre: 'Tablet', precio: 300, stock: 8 }
  ];
  
  // Ruta para mostrar los productos con nombre, precio y stock
  app.get('/productos', (req, res) => {
    res.json(productos);
  });
  

app.get('/', (req, res) => {
    res.status(200).send('Pagina Principal')
  })

app.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT)
})