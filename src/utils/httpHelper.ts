import { HttpResponse } from "../models/httpResponseModel"

export const ok = async (data: any): Promise<HttpResponse> => {
    return {
        statusCode: 200,
        body: data
    }
}

export const noContent = async(): Promise<HttpResponse> => {
    return {
        statusCode: 204,
        body: null
    }
}

export const BadRequest = async(): Promise<HttpResponse> => {
    return {
        statusCode: 400,
        body: null
    }
}

export const Created = async(data: any): Promise<HttpResponse> => {
    return {
        statusCode: 201,
        body: data
    }
}