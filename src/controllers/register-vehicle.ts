export class RegisterVehicle {
  handle (httpRequest: any): any {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('error in the: name')
      }
    }

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!httpRequest.body.model) {
      return {
        statusCode: 400,
        body: new Error('error in the: model')
      }
    }
  }
}
