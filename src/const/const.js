import 'dotenv/config.js';

/* These lines of code are assigning values to constants using the values of environment variables. The
`process.env` object in Node.js provides access to environment variables. */
const SECRET = process.env.SECRET;
const RUN_PORT = process.env.RUN_PORT;
const NODE_ENV = process.env.NODE_ENV;
const STATIC_PATH = process.env.STATIC_PATH;

/* The code is creating an object called `object` and assigning it the values of the constants
`SECRET`, `NODE_ENV`, `RUN_PORT`, and `STATIC_PATH`. These constants are obtained from environment
variables using `process.env`. */
const object = {
    SECRET,
    NODE_ENV,
    RUN_PORT,
    STATIC_PATH,
}

Object.freeze(object)

export default object;