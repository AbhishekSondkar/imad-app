var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user : 'abhisondkar121',
    database : 'abhisondkar121',
    host :'db.imad.hasura.io',
    port : '5432',
    password : 'db-abhisondkar121-98508',
};



var app = express();
app.use(morgan('combined'));


var articles = {
    'article-one':{
         head : 'IMAD ARTICLE ONE',
         title : 'IMAD HASURA ABHISHEK SONDKAR',
         date : '08 aug 2017',
         content:` <p>
                This is my new article volla!!.This is my new article volla!!This is my new article volla!!This is my new article volla!!This is my new article volla!!This is my new article volla!!This is my new article volla!!This is my new article volla!!This is my new article volla!!This is my new article volla!!
            </p>`
         
    },
    'article-two':{
         head : 'IMAD ARTICLE ONE',
         title : 'IMAD HASURA ABHISHEK SONDKAR',
         date : '10 aug 2017',
         content:` <p>
               SECOND ARTICLE
            </p>`
         
    },
    'article-three':{
         head : 'IMAD ARTICLE ONE',
         title : 'IMAD HASURA ABHISHEK SONDKAR',
         date : '12 aug 2017',
         content:` <p>
              THIRD ARTICLE
            </p>`
         
    }
}

function createTemplate(data){
    var title = data.title;
    var head = data.head;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `<html>
    <head>
         <title>
        ${title}
    </title>
    
     <link href="/ui/style.css" rel= "stylesheet"/>
    </head>
   
    <body>
        <div class = "new">
        <div>
            <a href='/'>home</a>
        </div>
        <hr/>
        <div>
             ${head}
            
        </div>
        <div>
             ${date}
        </div>
        <div>
             ${content}
        </div></div>
    </body>`
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

var pool = new Pool(config);
app.get('/dbtest',function(req, res){
   //This is to test the database
   pool.query('SELECT * FROM user', function(err, result){
       if(err){
           res.status(500).send(err.toString());
       }
       else {
           res.send(JSON.stringify(result));
       }
   });
});

app.get('/:articleName' ,function(req,res){
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});






app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
