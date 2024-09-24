import { PlayerModel } from "../models/playersModel"
import * as repository from "../repositories/playerRepository"
import * as HttpResponse from "../utils/httpHelper"

export const getPlayerData = async () => {
   const data = await repository.findAllPlayers()
   let response = null
   if (data) {
      response = await HttpResponse.ok(data)
   } else {
      response = await HttpResponse.noContent()
   }

   return response
}


export const getPlayerByIdService = async (id: number) => {
   const data = await repository.findPlayerById(id)
   let response = null
   if (data) {
      response = await HttpResponse.ok(data)
   } else {
      response = await HttpResponse.noContent()
   }
   return response
}

export const createPlayerService = async (player: PlayerModel) => {
   if (Object.keys(player).length !== 0) {
      await repository.insertPlayer(player)
      return HttpResponse.Created(player)
   } else {
      return HttpResponse.BadRequest()
   }
}


export const deletePlayerServie = async(id:number) => {
   await repository.deleteOnePlayer(id)
   return HttpResponse.ok({message: "Deleted"})
}



