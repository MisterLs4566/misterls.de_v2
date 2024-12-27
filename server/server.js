const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const fs = require('fs');

async function useRustFib() {
    const wasmModule = await import('./wasm-lib/pkg/wasm_lib.js');
    // Pfad zur generierten .wasm-Datei
    const wasmFilePath = path.join(__dirname, './wasm-lib/pkg/wasm_lib_bg.wasm');
    const wasmBuffer = fs.readFileSync(wasmFilePath);

    // Initialisiere das Modul manuell
    await wasmModule.default(wasmBuffer);
    

    // Fibonacci-Funktion aufrufen
    const result = wasmModule.fibonacci(11);
    console.log(`Fibonacci(10) = ${result}`);
}

useRustFib().catch(console.error);


"use strict"

// Middleware to parse JSON requests
app.use(express.json());

// Serve static files from React build folder
app.use(express.static(path.join(__dirname, '../client/dist')));

// API route example
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});

// Catch-all route to serve React's index.html for any unknown routes (SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
