//parte del profe

const express = require ('express');
const morgan = require ('morgan');
const apiRouter = require ('./routes/index');
const bodyPArser = require('body-parser');
const cors = require ('cors'); 

const app = express ();
app.use(cors());

app.use((req, res, next) => {
    res.header("Acces-Control-Alow-Origin","*");
    res.header("Acces-Control-Alow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Acces-Control-Alow-Methods: GET, POST, PUT,  DELETE");
    next();
});
app.use(morgan('dev'));
app.use(bodyPArser.json());   
app.use(bodyPArser.urlencoded({extended: true}));

app.use('/api',apiRouter);

app.set('PORT', process.env.PORT || 3000);

/////revision


//parte normal
app.get('/', function(req, res) {
    console.log("Estructura base del proyecto backend");
    res.send("Estructura base del proyecto backend");
});
app.listen(app.get('PORT'), () => {
    console.log(`Running on http://localhost:${app.get('PORT')}`)
});

//app.post('/api/auth/signin', controller.signin);

module.exports = app;