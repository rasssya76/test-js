const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/info', (res) => {
 res.send('{
  "nama": "Rama",
  "usia": 17,
  "tanggalLahir": "2006-10-31",
  "jenisKelamin": "Laki-laki",
  "alamat": {
    "jalan": "Jl. Raya kandangan",
    "kota": "Madiun",
    "provinsi": "Jawa Timur",
    "kodePos": "63182"
  },
  "pendidikan": {
    "tingkat": "SMA",
    "kelas": 11,
    "namaSekolah": "SMAN 1 Wungu"
  },
  "hobi": [
    "Main Game",
    "Ngoding",
    "Ngocog"
  ],
  "prestasi": [
    "Bisa Makan Udara",
    "Berjalan di atas tanah"
  ],
  "mediaSosial": {
    "instagram": "@rasssya766",
    "twitter": "-"
  },
  "citaCita": "Menjadi seorang Yang berguna",
  "mottohidup": "jangan pernah mengeluh, karena banyak orang yg ingin hidup seperti mu"
}')
});

module.exports = app;
module.exports.handler = serverless(app);
