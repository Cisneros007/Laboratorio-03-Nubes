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
  
  // Ruta para mostrar 3 productos
  app.get('/productos', (req, res) => {
    const productos = ['Celular', 'Laptop-2024', 'Tablet'];
    res.json(productos);
  });

app.get('/', (req, res) => {
    res.status(200).send('Pagina Principal')
  })

app.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT)
})