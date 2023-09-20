import mysql2 from 'mysql2/promise';
import connectionConfig from '../database/connection.js';

const createConnection = async ( ) => {
    return await mysql2.createConnection(connectionConfig);
}

const crearUsuario = async (req, res) => {
    try {

        const usuario = req.body; //en el cuerpo de la solicitud vamos a enviar data  'POST PUT'
        // const filters = req.query; //?query1=valorquery1&query2=valorquery2
        // const parametros = req.params; // /create/:parametro

        const connection = await createConnection();
        await connection.execute('INSERT INTO Usuarios (nombre, correo) VALUES (?, ?)', [usuario.nombre, usuario.correo]);
        await connection.end();
       
        // console.log("BODY", usuario);
        // console.log("QUERY", filters);
        // console.log("PARAMS", parametros);

        return res.status(200).json({
            status: true,
            message: "Usuario creado"
        });
        
    } catch (error) {
        return res.status(500).json({
            status: false,
            error: "Problemas al crear el usuario",
            code: error
        });
    };
};

const getUsuarios = async ( req, res ) => {
    try {
        
        const connection = await createConnection();
        console.log("JSAH")
        const [rows] = await connection.execute('SELECT * from usuarios');
        await connection.end();

        return res.status(200).json({
            success: true,
            usuarios: rows
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            error: "Problemas al traer el usuarios",
            code: error
        });
    }
}

export {
    getUsuarios,
    crearUsuario,
}