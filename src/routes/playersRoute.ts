import { Router } from "express";
import * as playersController from "../controllers/playersController";

const router = Router()


router.get('/players', playersController.getPlayer)
router.get('/players/:id', playersController.getPlayerById)

export default router