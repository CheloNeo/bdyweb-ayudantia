import mysql2 from 'mysql2';

const connectionConfig = {
    host: 'localhost',
    user: 'root',
    // password: 'Informatica2022.-',
    database: 'bdyweb'
};

const connection = mysql2.createConnection({
    host: connectionConfig.host,
    user: connectionConfig.user,
    password: connectionConfig.password
});

connection.query(`CREATE DATABASE IF NOT EXISTS ${connectionConfig.database}`, (error) => {
    if (error) {
      console.error('Error al crear la base de datos: ', error);
      return;
    }
  
    console.log('Base de datos creada o ya existente');
  
    // Conectar a la base de datos
    connectionConfig.database = connectionConfig.database;
  
    // Cerrar la conexión temporal
    connection.end();
});

export default connectionConfig;