<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vehicle App</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <VehicleModal :filter="filter"
                    @select="getSelectedVehicles"/>
      <v-layout row>
        <v-flex xs4></v-flex>
        <v-flex xs4>
          <v-card v-if="selectedVehicles.length">
            <v-list two-line>
              <template v-for="vehicle in selectedVehicles">
                <v-subheader
                    v-if="vehicle.name"
                    :key="vehicle.name"
                >
                  {{vehicle.name}}
                </v-subheader>

                <v-divider
                ></v-divider>

                <v-list-tile
                    :key="vehicle.id"
                    avatar
                >
                  <v-list-tile-avatar>
                    <img :src="vehicle.image">
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title v-html="vehicle.vehicleStatus.name"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="vehicle.vehicleOwnershipType.name"></v-list-tile-sub-title>
                    Контрагент: {{vehicle.counterparty.name}},
                    {{getVehicleModelName(vehicle.vehicleModel)}}
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>

          </v-card>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
  import VehicleModal from './components/VehicleModal'
  import {mapState} from 'vuex'

  export default {
    name: 'App',
    components: {
      VehicleModal
    },
    data() {
      return {
        selectedVehicles: [],
        filter: [
          {vehicleTypeId: 1},
          {vehicleTypeId: 2},
          {vehicleModelId: 1},
          {vehicleModelId: 2},
          {vehicleId: 1},
          {vehicleId: 2}
        ]
      }
    },
    computed: {
      ...mapState('vehicles', ['vehicles', 'models', 'types'])
    },
    created() {
      this.$store.dispatch('vehicles/fetchVehicleTypes')
      this.$store.dispatch('vehicles/fetchVehicleModels')
      this.$store.dispatch('vehicles/fetchVehicleList')
    },
    methods: {
      getSelectedVehicles(data) {
        this.selectedVehicles = this.vehicles.filter(vehicle => data.includes(vehicle.id))
      },
      getVehicleModelName(id) {
        const model = this.models.filter(model => model.id === id)
        const type = this.types.filter(type => type.id === model[0].vehicleType)
        return 'Модель: ' + model[0].name + ', ' + 'Тип: ' + type[0].name
      }
    }
  }
</script>
