import 'dotenv/config.js';

const SECRET = process.env.SECRET;
const RUN_PORT = process.env.RUN_PORT;
const NODE_ENV = process.env.NODE_ENV;
const STATIC_PATH = process.env.STATIC_PATH;

// BD
const HOST = process.env.HOST;
const USER = process.env.USER;
const DATABASE = process.env.DATABASE;

const object = {
    HOST,
    USER,
    SECRET,
    NODE_ENV,
    DATABASE,
    RUN_PORT,
    STATIC_PATH,
}

Object.freeze(object) //The Object.freeze() static method freezes an object

export default object;