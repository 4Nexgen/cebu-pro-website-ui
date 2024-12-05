<template>
    <div>
      <!-- <span @click="addRouteMiddleware.pu"> -->
        <div @click="handleClick" class="box-border h-48 w-48 p-4 bg-center flex items-center justify-center" style="background-image: url('./svg/background.svg'); background-repeat: no-repeat; ">
          <img :src="service.image" />
        </div>
        <div class="flex justify-center">
          <a style="font-weight: bold;font-size: 22px;">{{ service.name }}</a>
        </div>
        <!-- </span> -->
    </div>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      required: true
    }
  }, 
  methods: {
    handleClick() {
      this.$router.push({ path: `${this.service.name}` });
    }
  }
}
</script>