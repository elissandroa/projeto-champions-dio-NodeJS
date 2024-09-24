import { Request, Response } from "express"
import { getPlayerData } from "../services/playersService"

export const getPlayer = async (req: Request, res: Response) => {
    const data = await getPlayerData()
    res.status(200).json(data)
}