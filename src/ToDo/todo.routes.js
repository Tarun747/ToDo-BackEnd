const router = require('express').Router()
const { createTodo, dataTodo } = require('./todo.controller')

router.post('/', createTodo)
router.get('/', dataTodo)

module.exports = router
