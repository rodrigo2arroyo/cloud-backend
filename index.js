// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware (opcional si quieres aceptar JSON)
app.use(express.json());

// Endpoint simple
app.get('/hello', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
