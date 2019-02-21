const express = require('express');
const app = express()

app.get('/', (req,res) => res.send('Hola mundo, mi primera practica'))
app.listen(3000, () => console.log('El servidor se ejecuta en http://localhost:3000'))