import { Router } from "express";
import * as playersController from "../controllers/playersController";
import * as clubsController from '../controllers/clubsController';

const router = Router()



router.get('/players', playersController.getPlayer)
router.get('/players/:id', playersController.getPlayerById)
router.post('/players', playersController.postPlayer)
router.delete('/players/:id', playersController.deletePlayer)
router.patch('/players/:id', playersController.updatePlayer)

router.get('/clubs', clubsController.getClubs)
export default router