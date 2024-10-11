<template>
       <div class="flex flex-column align-center">
        <SectionsReservationsReservationDetails/>
       <v-btn
        :loading="loading"
        class="flex-grow-1 mb-11"
        width="400"
        height="48"
        variant="tonal"
        @click="load"
      >
        Proceed
      </v-btn>
       </div>
</template>
<script>
  export default {
    data: () => ({ loading: false }),

    methods: {
      load () {
        this.loading = true
        setTimeout(() => (this.loading = false), 3000)
      },
    },
  }
</script>
