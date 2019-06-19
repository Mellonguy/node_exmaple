const connect = require('connect');
const app =  connect();
// app.use((req,res,next)=> {
//     console.log('%s %s',req.method, res.url);
//     next();
// });

app.use(logger).use(hello)
app.listen(3000);

function logger(req,res,next){
    console.log('%s  %s',req.method, res.url, next);
    next();
}

function hello(req,res){
    res.setHeader("Content-Type","text/plan");
    res.end('Hello World');
}

function restrict(req,res,next){
    var autorization = req.headers.autorization;
    if (!autorization) return next(new Error('Unauthrizaition'));

    var parths = autorization.splict(' ');
    var shema = parts[0];
    var auth = new Buffer(parts[1], 'base64').toString().split(':');
    var pass = auth[1];

    authla
}