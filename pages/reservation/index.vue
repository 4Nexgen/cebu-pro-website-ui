<template>
       <div class="flex flex-column align-center">
        <SectionsReservationsReservationDetails/>
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
