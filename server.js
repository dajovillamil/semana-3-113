//parte del profe

//const bodyParser = require('body-parser');
const express = require ('express');
const morgan = require ('morgan');
const aPiRouter = require ('./routes/index');
const bodyParser = require('body-parser');
const cons = require ('cons'); 

const app = express ();
app.use (cors());

app.use((rq, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    next();
});
app.use(morgan('dev'));
app.use(bodyParser.json());   
app.use(bodyParser.urlencoded({ extented: true}));

app.use('/api', aPiRouter);

app.set('PORT', proces.env.PORT || 3000);

//parte normal
app.get('/', function(req, res) {
    console.log("Estructura base del proyecto backend");
    res.send("Estructura base del proyecto backend");
});
app.listen(app.get('PORT'), () => {
    console.log(`Running on http://localhost:${app.get('PORT')}`)
})

app.post('/api/auth/signin', controller.signin);

module.exports = app;