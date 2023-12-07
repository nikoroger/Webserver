const express = require("express");
const app = express();
const hbs = require('hbs');
require('dotenv').config();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

const port = process.env.PORT;

//Servir contenido estático
app.use( express.static('public') );

app.get("/", (req, res) => {
    res.render( 'home',  {
         nombre: 'Nicolas Seguel',
         titulo: 'Curso Node'

    });
  });

  app.get("/generic", (req, res) => {
    res.render( 'generic',  {
         nombre: 'Nicolas Seguel',
         titulo: 'Curso Node'

    });
  });

  app.get("/elements", (req, res) => {
    res.render( 'elements',  {
         nombre: 'Nicolas Seguel',
         titulo: 'Curso Node'

    });
  });


app.get("*", (req, res) => {
  res.sendFile( __dirname + '/public/404.html');
});

app.listen( port, () => {
    console.log(`La aplicación está corriendo en http://localhost:${ port }`);
});


