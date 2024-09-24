import { Router } from "express";
import * as controller from "../controllers/playersController";

const router = Router()



router.get('/players', controller.getPlayer)
router.get('/players/:id', controller.getPlayerById)
router.post('/players', controller.postPlayer)
router.delete('/players/:id', controller.deletePlayer)
export default router