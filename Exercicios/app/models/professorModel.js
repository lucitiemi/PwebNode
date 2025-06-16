module.exports = function(){

    this.getProfessores = function(connection, callback){
        connection.query('SELECT * FROM PROFESSORES', callback);
    }

    this.getProfessor = function(connection, callback){
        connection.query('SELECT * FROM PROFESSORES WHERE ID_PROFESSORES = 1', callback);
    }

    this.salvarProfessor = function(professor, connection, callback){
        connection.query("INSERT INTO professores (NOME_PROFESSOR,EMAIL_PROFESSOR) VALUES ('"+ professor.nome_professor +"','"+ professor.email_professor+"')", callback);
    }

    return this;

}