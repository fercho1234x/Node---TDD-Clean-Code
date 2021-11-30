import { Food } from '../models/food-model'
describe('Classes', () => {
  it('Class FoodModel', () => {
    const foodModel = new Food('Test One', 'This is a description', 200)
    expect(foodModel.getName()).toEqual('Test One')
    expect(foodModel.getDescription()).toEqual('This is a description')
    expect(foodModel.getPrice()).toBe(200)
  })
})