var http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write("welcome in it park");
    res.write("hello");

}).listen(8080);