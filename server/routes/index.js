const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const claimRouter = require('./claimRouter')

router.use('/', userRouter);
router.use('/', claimRouter);

module.exports = router
