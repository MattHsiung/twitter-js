


var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var tweetBank = require('../tweetBank');

var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false})


module.exports = function (io) {

	router.get('/', function (req, res) {
	  var tweets = tweetBank.list();
	  var showForm = true
	  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: showForm } );
	});

	router.get('/users/:name', function (req, res) {
	  var name = req.params.name;
	  var list = tweetBank.find({name: name});

	  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: list, showForm: true, dynName: name } );
	});

	router.post('/tweets/', urlencodedParser, function(req,res) { 
		var name = req.body.name;
		var text = req.body.text;
		tweetBank.add(name, text);
		io.sockets.emit('new_tweet', {name: name, text: text})
		res.redirect('/')
	});

	router.get('/fun/', function(req,res) { 	
		
		io.sockets.emit('fun')

	});

	router.get('/tweets/:id', function (req, res) {
	  var id = Number.parseInt(req.params.id)
	  var list = tweetBank.find({id: id});
	  console.log(list)
	  res.render( 'index', { title: 'Twitter.js - Posts by id '+id, tweets: list } );
	});

  return router;
};
