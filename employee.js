
var express = require('express');
var app = express();

var employeeController=function (req, res) {
  console.log("hello");
  var employees=[
            {employeeName:'pooja',age:22,accountNo:101},
          {employeeName:'priyanka',age:22,accountNo:102},
             {employeeName:'soni',age:22,accountNo:103},
      ];
  res.send(employees);
};



app.get('/employees',employeeController );

var server = app.listen(8086, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("listening at http://localhost:8086", host, port)
})
