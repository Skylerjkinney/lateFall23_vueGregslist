import { applyStyles } from "@popperjs/core"
import { AppState } from "../AppState"
import { House } from "../models/House"
import { api } from "./AxiosService"


class HousesService {
    async getHouses() {
        const response = await api.get('api/houses')
        console.log('houses got in service layer')
        AppState.houses = response.data.map(house => new House(house))
    }
    async createHouse(houseData) {
        const response = await api.post('api/houses', houseData)
        console.log('creating house', response.data);
        AppState.houses.push(new House(response.data));
    }
    async updateHouse(updateHouse) {
        const response = await api.put(`api/houses/${updateHouse.id}`, updateHouse)
        const indexToUpdate = AppState.houses.findIndex(house => house.id == updateHouse.id)
        AppState.houses.splice(indexToUpdate, 1, new House(response.data))
    }
    async deleteHouse(houseId) {
        const response = await api.delete(`api/houses/${houseId}`)
        console.log('deleting car in service', response.data);
        const indexToRemove = AppState.houses.findIndex(house => house.id == houseId)
        AppState.houses.splice(indexToRemove, 1)
    }
    setActiveHouse(houseId) {
        const selectedHouse = AppState.houses.find(house => house.id == houseId)
        AppState.activeHouse = selectedHouse
    }
}

export const housesService = new HousesService()