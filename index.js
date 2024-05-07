// const http = require('http');
// const fs = require('fs');

// http.createServer(function(req, res){
//     fs.writeFile('index.html','<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body></body></html>', function () {
//       console.log('HTML file created: index.html');
//       res.send('HTML file created successfully.');
//       res.end();
//     });
    
// }).listen(3000, function(){
//   console.log("http://localhost:3000");
// });

// const http = require('http');
// const fs = require('fs');

// http.createServer(function(req, res){
//     fs.writeFile('index.html',
//     `<html>
//     <body>
//       <h1>hello</h1>
//     </body>
//   </html>`, function () {
//       console.log('HTML file created: index.html');
//       res.end('HTML file created successfully.');
//     });
//     fs.readFile('index.html','utf8',(err,data)=>{
//       if(err){
//         console.error(err);
//         return
//       }
//       console.log(data)
//     })
// }).listen(3000, function(){
//   console.log("localhost:3000");
// });
const http = require('http')
const fs = require('fs')
fs.appendFile('demofile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

http.createServer(function (req, res) {
  fs.readFile('demofile1.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    console.log("데모파일1.txt를 성공적으로 읽었습니다.");
    return res.end();
  });
}).listen(8080);
fs.appendFile('demofile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
fs.unlink('mynewfile1.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});

