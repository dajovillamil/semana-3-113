const router = require ('express').Router();
const aPiRouterUser = require ('./api/users.js');

router.use('/auth', aPiRouterUser);

module.exports = router;