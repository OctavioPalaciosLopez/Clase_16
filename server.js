const express = require('express');
const app = express()
const port = 9000

/********** EJERCICIO 1 ***********/
/*app.get('/handler1', function (req, res) {
    res.send('handler 1')
})

app.get('/handler2', function (req, res) {
    res.send('handler 2')
})*/


/********** EJERCICIO 2 ***********/
/*app.get('/handler1', function (req, res) {
    res.send('Hola')
    console.dir(req.baseUrl)
    console.dir(req.body)
    console.dir(req.hostname)
    console.dir(req.method)
    console.dir(req.originalUrl)
    console.dir(req.path)
    console.dir(req.protocol)
    console.dir(req.query)
})

app.get('/handler2', function (req, res) {
    res.send('handler 2')
})*/

/********** EJERCICIO 3 ***********/ 
/*app.get('/handler1', function (req, res) {
    res.status(200)
    res.set('Content-Type', 'text/plain')
    res.send('<h1>Hol</h1>')
}) */

/********** EJERCICIO 4 ***********/ 
/*app.use(function(req,res,next){
    console.log('Soy middleware')
    res.send('Soy middleware')
    next()
})*/

/********** EJERCICIO 5 ***********/ 

const router = express.Router()

router.get('/',(req,res) => {
    res.sendFile(__dirname + '/public/file.txt')
})

app.use('/asset', router)

app.listen(9000, () => { 
    console.log(`Example app listening on port ${port}!`)
})


        