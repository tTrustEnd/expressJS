const express = require('express');
const { render } = require('pug');
const app = express();
const port = 3000;

var userRoute = require('./router/user.router.js')

var users=[
    {id:1 , name: 'Truong'},
    {id:2 , name: 'Chuong'},
    {id:2 , name: 'Chuongsss'}
   ] ;
   const bodyParser = require('body-parser')
   app.use(bodyParser.json()) // for parsing application/json
   app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
   
app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(request, response){
    response.render('index',{
        name: 'AAA'
    })
})
app.use('/users',userRoute);
app.listen(port,function(){
    console.log('app listening on port' + port)
})