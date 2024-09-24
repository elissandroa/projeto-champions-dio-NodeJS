import { Request, Response } from "express"
import * as service from "../services/playersService"

import { BadRequest, ok } from "../utils/httpHelper"
import { HttpResponse } from "../models/httpResponseModel"
import { StatisticsModel } from "../models/statiticsModel"



export const getPlayer = async (req: Request, res: Response) => {
    const HttpResponse = await service.getPlayerData()
    res.status(HttpResponse.statusCode).json(HttpResponse.body)
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const HttpResponse = await service.getPlayerByIdService(id)
    res.status(HttpResponse.statusCode).json(HttpResponse.body)
}

export const postPlayer = async (req: Request, res: Response) => {
    const player = req.body
    const HttpResponse = await service.createPlayerService(player)
    res.status(HttpResponse.statusCode).json(HttpResponse.body)

}

export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const HttpResponse = await service.deletePlayerService(id)
    res.status(HttpResponse.statusCode).json(HttpResponse.body)
}

export const updatePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const bodyValue: StatisticsModel = req.body
    const HttpResponse = await service.updatePlayerService(id, bodyValue)
    res.status(HttpResponse.statusCode).json(HttpResponse.body)
}
