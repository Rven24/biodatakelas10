const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
 const { name, email, message } = req.body;
    // Simpan ke database atau kirim email di sini
    console.log('Pesan diterima:', { name: '...', email: '...', message: '...' });
    res.json({ success: true, message: 'Pesan berhasil dikirim!' });
});
app.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});