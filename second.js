var http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.end("welcome in it park");
}).listen(8080);