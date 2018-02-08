var express = require('express'), port = 8000;
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app routes start
app.use('/', express.static(__dirname + '/app'));
app.use('/guide', express.static(__dirname + '/app'));
app.use('/exercise-one', express.static(__dirname + '/app'));
app.use('/exercise-two', express.static(__dirname + '/app'));
app.use('/exercise-three', express.static(__dirname + '/app'));
app.use('/exercise-four', express.static(__dirname + '/app'));
app.use('/exercise-five', express.static(__dirname + '/app'));
app.use('/exercise-six', express.static(__dirname + '/app'));
//end

app.post('/dummy.json', function (request, response) {
  console.log(request.body);
  if (request.body.address && request.body.ssn) {
    response.sendFile(__dirname + '/app/dummy.json');
  }
  else {
    response.sendStatus(500);
  }
});

app.listen(port, function () {
  console.log("Listening on port " + port);
});