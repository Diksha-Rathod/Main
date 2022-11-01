var http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write("welcome in it park");
    res.write(" hello");
    res.write("  in");
    res.write(" indore");

}).listen(8080);