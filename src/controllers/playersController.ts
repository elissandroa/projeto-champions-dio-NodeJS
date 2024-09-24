import { Request, Response } from "express"
import * as playersService from "../services/playersService"

import { ok } from "../utils/httpHelper"
import { HttpResponse } from "../models/httpResponseModel"


export const getPlayer = async (req: Request, res: Response) => {
    const HttpResponse = await playersService.getPlayerData()
    res.status(HttpResponse.statusCode).json(HttpResponse.body)
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const HttpResponse = await playersService.getPlayerByIdService(id)
    res.status(HttpResponse.statusCode).json(HttpResponse.body)
}