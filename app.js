var express = require( 'express' );
var app = express();

app.listen(3000, function (){
	console.log('server listening')
});

app.use(function(req, res, next){
	console.log(req.method)
	console.log(req.url)

	next()
})

app.use('/special/', function(req, res, next){
	console.log('you reached speshul')
	next()
})

app.get('/', function (req, res, next){
	res.status(200)
	
	res.send('Welcome')
	next()
})

app.use(function(req, res, next){
	console.log('Status:' + res.statusCode)
})
