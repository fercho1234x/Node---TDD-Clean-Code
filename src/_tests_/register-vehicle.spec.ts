import { RegisterVehicle } from '../controllers/register-vehicle'
describe('RegisterVehicle', () => {
  test('the name does not exist, return 400', () => {
    const sut = new RegisterVehicle() // System under test
    const httpRequest = {
      body: {
        // name: 'Nissan',
        model: 'DXT',
        year: 2020
      }
    }
    const httpResponse = sut.handle(httpRequest) // handle -> resolver - trabaja con esto
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('error in the: name'))
  })

  test('the model does not exist, return 400', () => {
    const sut = new RegisterVehicle() // System under test
    const httpRequest = {
      body: {
        name: 'Nissan',
        // model: 'DXT',
        year: 2020
      }
    }
    const httpResponse = sut.handle(httpRequest) // handle -> resolver - trabaja con esto
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('error in the: model'))
  })
})
