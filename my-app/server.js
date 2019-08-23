var express = require('express')
var app = express()
var fs = require('fs')
var cors = require('cors')
app.options('*', cors())
// var corsOptions = {
//   origin: 'http://example.com',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

app.get('/listUsers', function(req, res) {
  fs.readFile(
    __dirname + '/' + 'src' + '/' + 'dataTable' + '/' + 'dataTable.json',
    'utf8',
    function(err, data) {
      console.log(data, err)
      res.end(data)
    }
  )
})

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
)

var server = app.listen(8081, function() {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
