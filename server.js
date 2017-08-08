var express = require('express');
var morgan = require('morgan');
var path = require('path');

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
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/:articleName' ,function(req,res){
   res.send(createTemplate(articleName));
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
