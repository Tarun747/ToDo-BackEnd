const { Schema, model } = require('mongoose')

const TodoModel = new Schema(
  {
    data: {
      type: Object,
      default: [],
    },
  },
  {
    minimize: true,
    timestamps: true,
  }
)

module.exports = model('todo', TodoModel)
