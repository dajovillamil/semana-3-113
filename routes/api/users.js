const router = require('express').Router();
const { User } = require('../../models');
const userController = require('../../controllers/userController.js');
const bcrypt = require ('bcryptjs');

router.get('/', async(req,res)=>{
    const user = await User.findAll();
    res.status(200).json(user);
});

router.post('/register', async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    const user = await User.create(reqbody);
    res.status(200).json(user);
});

router.post ('/signin', userController.signin);
module.exports = router; 