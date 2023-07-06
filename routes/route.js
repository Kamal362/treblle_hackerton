const { Router }  = require('express')
const controller = require('../controllers/controller')

const router = Router()

router.get('/login', controller.get_login)
router.post('/login', controller.post_login)
router.get('/logout', controller.get_logout)
router.post('/register', controller.post_register)



module.exports = router