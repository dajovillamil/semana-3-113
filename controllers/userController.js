//const User = require('../models');
const bcrypt = require ('bcrypjs');
const jwt = require('jsonwebtokenerror');
const models =  require('../models');

exports.signin = async(req,res,next) => {
    try {
        const user = await models.User.findOne({where:{email}});
        if (user){
            const passwordIsValid = bcrypt.compareSync(req.body.password , user.password);
            if (passwordIsValid){
                const token = jwt.sing({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    rol: user.rol
                },'config.secret',{
                    expiresIn:86400,
                }                
                );
                res.status(200).send({
                    auth:true,
                    tokenReturn: token
                }
                );
            }else{
                res.status(401).json({
                    error: 'Error en el usuario o contraseña'
                })
            }
        }else{
            res.status(401).json({
                error: 'Error en el usuario o contraseña'
            }) 
        }
    }
    catch (error){
        res.status(500).send({
            message: 'Error->'
        })
    }
};

exports.register = async(req,res,next) => {
    try {

    }
    catch (error){ 

    }
};
exports.listar = async(req,res,next) => {
    try {

    }
    catch (error){

    }
};