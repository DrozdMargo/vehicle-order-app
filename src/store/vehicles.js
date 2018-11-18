import axios from 'axios'

export default {
  namespaced: true,
  state: {
    vehicles: [],
    types: [],
    models: []
  },
  mutations: {
    setVehicles (state, data) {
      state.vehicles = data
    },
    setTypes (state, data) {
      state.types = data
    },
    setModels (state, data) {
      state.models = data
    }
  },
  actions: {
    async fetchVehicleTypes (state) {
      try {
        const response = await axios.get('https://api.myjson.com/bins/7y3fr')
        state.commit('setTypes', response.data)
      } catch (e) {
        console.log(e)
      }
    },
    async fetchVehicleModels (state) {
      try {
        const response = await axios.get('https://api.myjson.com/bins/170i8s')
        state.commit('setModels', response.data)
      } catch (e) {
        console.log(e)
      }
    },
    async fetchVehicleList (state) {
      try {
        const response = await axios.get('https://api.myjson.com/bins/1h4vj0')
        state.commit('setVehicles', response.data)
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    composedVehicles (state) {
      const types = state.types.slice()
      const models = state.models.slice()
      const vehicles = state.vehicles.slice()

      models.forEach((model) => {
        model.vehicles = []
        vehicles.forEach((vehicle) => {
          if (vehicle.vehicleModel === model.id) {
            model.vehicles.push(vehicle)
          }
        })
      })

      types.forEach((type) => {
        type.models = []
        models.forEach((model) => {
          if (model.vehicleType === type.id) {
            type.models.push(model)
          }
        })
      })
      return types
    }
  }
}
