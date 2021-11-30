import { HttpRequest, HttpResponse } from '../interfaces/http-interface'
export class RegisterVehicle {
  handle (httpRequest: HttpRequest): HttpResponse {
    let response

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!httpRequest.body.name) {
      response = {
        statusCode: 400,
        body: new Error('error in the: name')
      }
    }

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!httpRequest.body.model) {
      response = {
        statusCode: 400,
        body: new Error('error in the: model')
      }
    }

    return response
  }
}
