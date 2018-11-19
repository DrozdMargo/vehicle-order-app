<template>
  <v-container>
    <v-layout
        text-xs-center
        wrap
    >
      <v-flex xs12>
        <div class="text-xs-center">
          <v-dialog
              v-model="dialog"
              width="700"
          >
            <v-btn
                slot="activator"
                color="red lighten-2"
                dark
            >
              Выбрать технику
            </v-btn>

            <v-card>
              <v-card-title
                  class="headline"
                  primary-title
              >
                Выбор техники
              </v-card-title>

              <v-divider></v-divider>

              <v-card-text>

                <div v-for="type in availableVehicles">
                  <v-checkbox v-model="selectedTypes"
                              :label="type.name"
                              :value="type.id"
                              :ref="'type' + type.id"
                              v-if="filteredTypes.includes(type.id)"
                              @change="setModelsSelected(type.id)"
                  >
                  </v-checkbox>
                  <slot v-for="model in type.models">
                    <v-checkbox class="pl-4"
                                v-model="selectedModels"
                                :label="model.name"
                                :value="model.id"
                                :ref="'model' + model.id"
                                v-if="filteredModels.includes(model.id)"
                                @change="setVehiclesSelected(model.id)"
                    ></v-checkbox>
                    <div v-for="vehicle in model.vehicles">
                      <v-checkbox class="pl-4 ml-4"
                                  v-model="selectedVehicles"
                                  :label="vehicle.name"
                                  :value="vehicle.id"
                                  :ref="'vehicle' + vehicle.id"
                                  v-if="filteredVehicles.includes(vehicle.id)"
                      ></v-checkbox>
                    </div>
                  </slot>
                </div>

                <v-checkbox label="Hide not selected items" v-model="hideNotSelected"></v-checkbox>

              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    flat
                    @click="save"
                >
                  Подтвердить
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    props: {
      filter: Array
    },
    data() {
      return {
        dialog: false,
        selectedTypes: [],
        selectedModels: [],
        selectedVehicles: [],
        hideNotSelected: false
      }
    },
    computed: {
      ...mapGetters('vehicles', ['composedVehicles']),
      filteredTypes() {
        const filteredTypes = []
        this.filter.forEach((item) => {
          if (item.vehicleTypeId) {
            filteredTypes.push(item.vehicleTypeId)
          }
        })
        return filteredTypes
      },
      filteredModels() {
        const filteredModels = []
        this.filter.forEach((item) => {
          if (item.vehicleModelId) {
            filteredModels.push(item.vehicleModelId)
          }
        })
        return filteredModels
      },
      filteredVehicles() {
        const filteredVehicles = []
        this.filter.forEach((item) => {
          if (item.vehicleId) {
            filteredVehicles.push(item.vehicleId)
          }
        })
        return filteredVehicles
      },
      availableVehicles() {
        return this.composedVehicles
      }
    },
    methods: {
      save() {
        this.dialog = false
        const selectedVehicles = []
        this.selectedTypes.forEach((id) => {
          selectedVehicles.push({vehicleTypeId: id})
        })
        this.selectedModels.forEach((id) => {
          selectedVehicles.push({vehicleModelId: id})
        })
        this.selectedVehicles.forEach((id) => {
          selectedVehicles.push({vehicleId: id})
        })
        console.log(selectedVehicles)
        this.$emit('select', this.selectedVehicles)
      },
      setVehiclesSelected(id) {
        if (this.selectedModels.includes(id)) {
          this.availableVehicles.forEach((type) => {
            const model = type.models.find(obj => obj.id === id);
            if (model) {
              const vehicle = model.vehicles.find(obj => obj.vehicleModel === id);
              if (!this.selectedVehicles.includes(vehicle.id)) {
                this.selectedVehicles.push(vehicle.id)
              }
            }
          })
        } else {
          this.availableVehicles.forEach((type) => {
            const model = type.models.find(obj => obj.id === id);
            if (model) {
              const vehicle = model.vehicles.find(obj => obj.vehicleModel === id);
              if (this.selectedVehicles.includes(vehicle.id)) {
                const index = this.selectedVehicles.indexOf(vehicle.id);
                if (index > -1) {
                  this.selectedVehicles.splice(index, 1);
                }
              }
            }
          })
        }
      },
      setModelsSelected(id) {
        const type = this.availableVehicles.find(obj => obj.id === id);
        const model = type.models.find(obj => obj.vehicleType === id);
        const vehicle = model.vehicles.find(obj => obj.vehicleModel === model.id);
        if (this.selectedTypes.includes(id)) {
          if (!this.selectedModels.includes(model.id)) {
            this.selectedModels.push(model.id)
          }
          if (!this.selectedVehicles.includes(vehicle.id)) {
            this.selectedVehicles.push(vehicle.id)
          }
        } else {
          if (this.selectedModels.includes(model.id)) {
            const index = this.selectedModels.indexOf(model.id);
            if (index > -1) {
              this.selectedModels.splice(index, 1);
            }
          }
          if (this.selectedVehicles.includes(vehicle.id)) {
            const i = this.selectedVehicles.indexOf(vehicle.id);
            if (i > -1) {
              this.selectedVehicles.splice(i, 1);
            }
          }
        }
      }
    },
    watch: {
      hideNotSelected() {
        if (this.hideNotSelected) {
          this.availableVehicles.forEach((type) => {
            if (!this.selectedTypes.includes(type.id)) {
              if (this.$refs['type' + type.id]) {
                this.$refs['type' + type.id][0].$el.style.display = 'none'
              }
            }
            type.models.forEach((model) => {
              if (!this.selectedModels.includes(model.id)) {
                if (this.$refs['model' + model.id]) {
                  this.$refs['model' + model.id][0].$el.style.display = 'none'
                }
              }
              model.vehicles.forEach((vehicle) => {
                if (!this.selectedVehicles.includes(vehicle.id)) {
                  if (this.$refs['vehicle' + vehicle.id]) {
                    this.$refs['vehicle' + vehicle.id][0].$el.style.display = 'none'
                  }
                }
              })
            })
          })
        } else {
          this.availableVehicles.forEach((type) => {
            if (!this.selectedTypes.includes(type.id)) {
              if (this.$refs['type' + type.id]) {
                this.$refs['type' + type.id][0].$el.style.display = 'block'
              }
            }
            type.models.forEach((model) => {
              if (!this.selectedModels.includes(model.id)) {
                if (this.$refs['model' + model.id]) {
                  this.$refs['model' + model.id][0].$el.style.display = 'block'
                }
              }
              model.vehicles.forEach((vehicle) => {
                if (!this.selectedVehicles.includes(vehicle.id)) {
                  if (this.$refs['vehicle' + vehicle.id]) {
                    this.$refs['vehicle' + vehicle.id][0].$el.style.display = 'block'
                  }
                }
              })
            })
          })
        }
      }
    }
  }
</script>
