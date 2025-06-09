let sql = require ('mssql');
    
module.exports = function(){
    const sqlConfig = {
        user: 'BD2321006', //7 últimos dígitos do seu RA
        password: 'Luciana@19',
        database: 'BD', 
        server: 'APOLO',
        options: {
            encrypt: false,
            trustServerCertificate: true,
        }
    }
    return sql.connect(sqlConfig);
}
        