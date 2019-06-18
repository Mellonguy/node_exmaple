var express = require('express'); 


const{Pool, Client} = require('pg');

const pool = new Pool({
    host: '61.255.238.83',
    user: 'postgres',
    password: 'P@ssword',
    database: 'postgres',
    port: 5432
});

pool.query('select * from iftg.adtn_prod_lst', (err,res)=>{
    console.log(err,res);
    pool.end();
});

 
var router = express.Router(); 

/* GET home page. */ 
router.get('/', function(_request, response, _next) { 
    console.log('${id}===============>','${id}');
    var con = 'postgres://:postgres:P@ssw0rd@61.255.238.83:5432/postgres'; 
    console.log('con >>>>>>>>>>>>>>>' ,con);
    pg.connect(con, function(_err, client) { 

        console.log('client ==================>',client);

        var query = client.query('select * from iftg.adtn_prod_lst;'); 
        var rows = []; query.on('row', function(row) { rows.push(row); }); 
        
         query.on('end', function(_row,_err) { 
            response.render('data', { title: 'Express', data:rows }); 
        }); 
        query.on('error', function(error) { 
            console.log("ERROR!!" + error); 
            response.render('data', { title: title, data: null, message: "ERROR is occured!" }); 
        }); 

        if(_err){
            console.error(_err); 
        }
    }); 
}); 
module.exports = router;