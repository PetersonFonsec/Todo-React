const {model, Schema} = require("mongoose");

module.exports = model(
  "Task",
  new Schema({
    name: {
      type: String,
      require: true,
    },
    done: {
      type: Boolean,
      require: true,
    },
    createAt: {
      type: Date,
      default: Date.now,
    },
  })
);
