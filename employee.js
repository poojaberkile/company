
var express = require('express');
var app = express();

var employeeController=function (req, res) {
  console.log("CAlling rest api");
  var employeess=[
            {employeeName:'pooja',age:22,accountno=101},
          {employeeName:'priyanka',age:22,accountno=101},
             {employeeName:'soni',age:22,accountno=101},
      ];
  res.send(users);
};



app.get('/employees',employeeController );

var server = app.listen(8086, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("listening at http://localhost:8086", host, port)
})
