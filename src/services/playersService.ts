import { PlayerModel } from "../models/playersModel"
import { StatisticsModel } from "../models/statiticsModel"
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


export const deletePlayerService = async (id: number) => {

   const isDeleted = await repository.deleteOnePlayer(id)
   if (isDeleted) {
      return HttpResponse.ok({ message: "Deleted" })
   } else {
      return HttpResponse.BadRequest()
   }
}


export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
   const data = await repository.findAndModifyPlayer(id, statistics)
   if (!data) {
      return HttpResponse.BadRequest()
   } else {
      return HttpResponse.ok(data)
   }
}



