import express from 'express';
import MyUserController from '../controllers/MyUserController';
import { jwtCheck, jwtParse } from '../../middlewares/auth';
import { validateUserRequest } from '../../middlewares/validation';


const router = express.Router();


router.get("/", jwtCheck, jwtParse, MyUserController.getCurrentUser);
router.post("/", jwtCheck, MyUserController.createCurrentUser);
router.put("/", jwtCheck,  jwtParse, validateUserRequest, MyUserController.updateCurrentUser);



export default router; 