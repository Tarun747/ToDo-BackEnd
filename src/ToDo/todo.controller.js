const bcrypt = require('bcrypt')
const ToDoModel = require('./todo.model')
const { TOKEN_KEY } = require('../../config/keys')
const Boom = require('@hapi/boom')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')

// ---------------------   CREATE TODO CONTROLLER    ----------------------------
const createTodo = async (req, res, next) => {
  try {
    const { data } = req.body
    const todoData = await ToDoModel.find({})

    if (data.length > 0 || todoData.length > 0) {
      await ToDoModel.findOneAndUpdate(
        { _id: todoData[0]._id },
        { data: data },
        { upsert: true }
      )
    } else {
      const newToDoList = new ToDoModel({
        data,
      })

      await newToDoList.save()
    }

    return res.status(200).json({
      success: true,
      message: 'Todo List is updated',
    })
  } catch (err) {
    next(err)
  }
}

// ----------------------------   ALL TODO DATA CONTROLLER    ----------------------------
const dataTodo = async (req, res, next) => {
  try {
    const todoData = await ToDoModel.find({})
    return res.json({
      success: true,
      message: 'Todo Data !',
      data: todoData,
    })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  dataTodo,
  createTodo,
}
