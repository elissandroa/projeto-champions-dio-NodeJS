import { findAllClubs } from '../repositories/clubsRepository'
import * as HttpResponse from '../utils/httpHelper'

export const getClubsService = async () => {
    const data = await findAllClubs()
    const response = HttpResponse.ok(data)
    return response
}