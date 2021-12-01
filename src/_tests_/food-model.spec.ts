import { Food } from '../models/food-model'
describe('Classes', () => {
  it('Class FoodModel', () => {
    const foodModel = new Food({
      name: 'Test One',
      description: 'This is a description',
      price: 200,
      inventory: 10
    })

    expect(foodModel.getFood()).toEqual(foodModel)
    expect(foodModel.getName()).toEqual('Test One')
    expect(foodModel.getDescription()).toEqual('This is a description')
    expect(foodModel.getPrice()).toBe(200)
    expect(foodModel.getInventory()).toBe(10)
  })
})
