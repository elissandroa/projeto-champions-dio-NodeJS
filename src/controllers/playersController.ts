import { Request, Response } from "express"
import { getPlayerData } from "../services/playersService"
import { ok } from "../utils/httpHelper"

export const getPlayer = async (req: Request, res: Response) => {
    const data = await getPlayerData()
    const response = await ok(data)
    res.status(response.statusCode).json(response.body)
}