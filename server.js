var express = require('express');

var app = express();

var contacts = [
  {
    "id": "c5368bbe-adfb-424f-ade3-9d783befa2b6",
    "firstName": "Hahn",
    "lastName": "Rojas",
    "avatarUrl": "https://placehold.it/100x100",
    "isOnline": true,
    "company": "Orbixtar",
    "email": "hahnrojas@orbixtar.com"
  },
  {
    "id": "15ef2834-3ba5-4621-abf1-d771d39c2dd6",
    "firstName": "Helen",
    "lastName": "Stout",
    "avatarUrl": "https://placehold.it/100x100",
    "isOnline": true,
    "company": "Ebidco",
    "email": "helenstout@ebidco.com"
  },
  {
    "id": "1ef05de1-fd8e-41ae-85ac-620b6d716b62",
    "firstName": "Floyd",
    "lastName": "Mcpherson",
    "avatarUrl": "https://placehold.it/100x100",
    "isOnline": false,
    "company": "Ecraze",
    "email": "floydmcpherson@ecraze.com"
  }
];

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(__dirname));

app.get('/contacts', function(req, res){
	res.append("Content-Type", "application/json");
	res.send(contacts);
});

console.log("listenning 1337")
app.listen(1337);