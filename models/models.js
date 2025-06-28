// models.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function createModels() {
  const connection = mongoose.createConnection(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const userSchema = new Schema({
    active: { type: Boolean, default: true },
    signup_date: Date,
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
  });

  const paymentSchema = new Schema({
    name: String,
    active: { type: Boolean, default: true },
    amount: Number,
    date: Date,
    user: { type: Schema.Types.ObjectId, ref: "User" },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
  });

  const user = connection.model("User", userSchema);
  const payment = connection.model("Payment", paymentSchema);

  return { user, payment, connection };
}

module.exports = createModels;