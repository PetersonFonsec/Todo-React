const { model, Schema } = require("mongoose");

module.exports = model(
  "Project",
  new Schema({
    title: {
      type: String,
      require: true
    },
    tasks: {
      type: [{ title: String, done: Boolean }],
      require: true
    },
    createAt: {
      type: Date,
      default: Date.now
    },
    done: {
      type: Boolean,
      require: true
    }
  })
);
