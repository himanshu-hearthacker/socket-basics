var PORT = process.env.PORT || 3000;
var express = require('express');
app = express();

var http = require('http').Server(app);

var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {
	console.log("user conncected via socket.io");

	socket.on('message', function(message) {
		console.log('message recieved' + message.text);
		io.emit('message', message);

	});


	socket.emit('message', {
		text: 'welcome to the chat application '

	});

});

http.listen(PORT, function() {
	console.log("server started" + PORT);
});