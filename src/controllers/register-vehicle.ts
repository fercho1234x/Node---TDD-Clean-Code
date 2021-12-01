import { HttpRequest, HttpResponse } from '../interfaces/http-interface'
export class RegisterVehicle {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredProperties = ['name', 'model', 'year', 'color']

    const response = {
      statusCode: 400,
      body: new Error()
    }

    requiredProperties.forEach(prop => {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (!httpRequest.body[prop]) {
        response.body = new Error(`error in the: ${prop}`)
        return response
      }
    })

    return response

    // if (!httpRequest.body.name) {
    //   return {
    //     statusCode: 400,
    //     body: new Error('error in the: name')
    //   }
    // }

    // if (!httpRequest.body.model) {
    //   return {
    //     statusCode: 400,
    //     body: new Error('error in the: model')
    //   }
    // }

    // if (!httpRequest.body.year) {
    //   return {
    //     statusCode: 400,
    //     body: new Error('error in the: year')
    //   }
    // }
  }
}
