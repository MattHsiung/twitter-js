var express = require( 'express' );
var swig = require('swig');
var app = express();
var routes = require( './routes/' );



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
app.use('/', routes);




//----------------END------------
// app.use(function(req, res, next){
// 	console.log('Status:' + res.statusCode)
// });

app.listen(3000, function (){
	console.log('server listening')
});

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
