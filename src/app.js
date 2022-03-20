const router = require('express').Router()

const todoRouter = require('./ToDo/todo.routes')

router.use('/', todoRouter)

module.exports = router
