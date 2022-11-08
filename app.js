/*
 * @Author: BoHai
 * @Date: 2022-11-07 18:13:47
 * @LastEditTime: 2022-11-08 14:18:30
 * @LastEditors: BoHai
 * @Description: 
 * @FilePath: /backstageEditApp/app.js
 */
var express = require('express');
var app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/public', express.static('public'));

app.get('/index.html', function (req, res) {
	res.sendFile( __dirname + "/views/" + "index.html" );
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