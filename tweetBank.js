var _ = require( 'lodash')
var data = [
	{name: 'Matt Hsiung',
	text: "yolo!",
	id: 0},
	{name: 'Prakash Mallela',
	text: 'swagg',
	id: 1}
];

function add (name, text) {
  data.push({ name: name, text: text, id: getId() });
};

function list () {
  return _.cloneDeep(data.sort(function(a,b){
    console.log("jaja");
    console.log(a.id);
    console.log(typeof a);
    return b.id-a.id;
  }));
};

function find (properties) {
  return _.filter(data, properties);
};




module.exports = { add: add, list: list, find: find };

var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var id=2

var getId = function(){
	return id++
}

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Shanna', 'Charlotte', 'Scott', 'Ayana', 'Omri', 'Gabriel', 'Joe'];
  var fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for(var i=0; i<10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}
