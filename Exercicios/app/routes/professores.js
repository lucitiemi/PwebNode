// para acessar o arquivo de config
//let dbConnection = require('../config/dbConnection'); // foi pro server

module.exports = function(app){
    app.get('/informacao/professores', function(req,res){

        async function getProfessores() {
            try {
                let connection = app.config.dbConnection;
                const pool = await connection();
                const results = await pool.request().query('SELECT * from PROFESSORES')
           
                //res.json(results.recordset);  // apenas para testar se esta retornando o json corretamente
  
                res.render('informacao/professores',{profs: results.recordset})
     
            } catch (err) {
                console.log(err)
            }
        }
       getProfessores();
    });
 }