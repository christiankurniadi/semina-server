// Import mongoose
const mongoose = require("mongoose")

// import config terkait mongoDB dari app/config/index.js
const { urlDb } = require("../config")

// connect ke mongoDB
mongoose.connect(urlDb)

// simpan koneksi ke dalam constant db
const db = mongoose.connection

// export db agar bisa digunakan oleh file lain
module.exports = db
