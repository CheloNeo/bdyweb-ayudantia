import { Router } from 'express';

import { crearUsuario, getUsuarios } from '../controllers/user.js';

const router = Router();

router.route('/create')
    .post(crearUsuario);

router.route('/get-all')
    .get( getUsuarios );


export default router;