let express = require('express');
let app=express();    // executando o express
app.set('view engine','ejs');

app.set('views','./app/views'); // diretorio onde os arquivos estao localizados
module.exports = app;
