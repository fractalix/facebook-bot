'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

app.set('port', (process.env.PORT || 5000))

//Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))

//Process application/Json
app.use(bodyParser.json())

// Index route
app.get('/', function (req, res) {
	res.send('Hola, soy un bot')
})

// for Facebook verification
app.get('/webhook/', function (req, res) {
	if (req.query['hub.verify_token'] === 'my_voice_is_my_password_verify_me') {
		res.send(req.query['hub.challenge'])
	}
	res.send('Error, wrong token')
})

app.listen(app.get('port'), function () {
	console.log('running on port', app.get('port'))
})