//------------MODULES
var express = require( 'express' );
var swig = require('swig');
var app = express();
var routes = require( './routes/' );
var socketio = require('socket.io');
var morgan = require('morgan');
//---------------SETUP
app.use(morgan('dev')); //logger
swig.setDefaults({ cache: false});
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', './views');

//--------------START----------------
app.use(express.static('public'))
// app.use(function(req, res, next){
// 	console.log(req.method)
// 	console.log(req.url)
// 	next()
// });
var server = app.listen(3000, function (){
	console.log('server listening')
});



var io = socketio.listen(server);

//----------------END------------
// app.use(function(req, res, next){
// 	console.log('Status:' + res.statusCode)
// });
//------------SERVER


app.use( '/', routes(io) );

// app.use('/special/', function(req, res, next){
// 	console.log('you reached speshul')
// 	next()
// });
// app.get('/:firstName/:lastName', function (req, res, next){
// 	res.status(200)
// 	var people = [{name: req.params.firstName}, {name: req.params.lastName}, {name: 'Son'}];
// 	res.render( 'index', {title: 'Hall of Fame', people: people} );
// 	next()
// });
