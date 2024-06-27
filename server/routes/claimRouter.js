const Router = require('express')
const router = new Router()
const userContoller = require('../controllers/claimController')


router.get('/claim-get-user', userContoller.getUserClaim);
router.get('/claim-get', userContoller.getAll);
router.get('/claim-getId', userContoller.getClaimId);

router.post('/claim-create', userContoller.createClaim);
router.post('/claim-delete', userContoller.deleteClaim);

router.patch('/claim-change', userContoller.changeTrim); 



module.exports = router