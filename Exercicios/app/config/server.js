let express = require('express');
let consign = require('consign');
let app=express();    // executando o express

app.set('view engine','ejs');
app.set('views','./app/views'); // diretorio onde os arquivos estao localizados

consign({cwd:'app'})                    // para incluir a pasta app
    .include('routes')
    .then('config/dbConnection.js')     // garante que todos os arquivos do routes tenham sido processados
    .into(app);

module.exports = app;

