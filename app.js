/*
 * @Author: BoHai
 * @Date: 2022-11-07 18:13:47
 * @LastEditTime: 2022-11-09 10:12:29
 * @LastEditors: BoHai
 * @Description: 
 * @FilePath: /backstageeditapp/app.js
 */
var express = require('express');
var app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + '/dist'));

app.get('/index.html', function (req, res) {
	res.sendFile( __dirname + "/index.html" );
})
 
app.post('/process_post', function (req, res) {
	// 输出 JSON 格式
	var response = {
		"fileName": req.body.fileName,
		"output": req.body.output,
		"type": req.body.type 
	};
	console.log(response);
	res.end(JSON.stringify(response));
})
 
var server = app.listen(8081, function () {
 
	// var host = server.address().address
	var port = server.address().port
 
	console.log("应用实例，访问地址为 http://localhost:" + port + "/index.html")
 
})