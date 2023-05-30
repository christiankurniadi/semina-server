const mongoose = require("mongoose")
const { model, Schema } = mongoose

let organizersSchema = Schema(
  {
    organizer: {
      type: String,
      required: [true, "Nama penyelenggara harus diisi"],
    },
  },
  { timestamps: true }
)

module.exports = model("Organizer", organizersSchema)