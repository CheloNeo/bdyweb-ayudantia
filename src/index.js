import 'dotenv/config.js';
import app from './app.js';

import { RUN_PORT } from './const/const.js';

const main = (() => {
    const server = app.listen( RUN_PORT || 5000 ); //instancia 
    console.log("Server activo", RUN_PORT || 5000);
    server.timeout = 600000;
})();