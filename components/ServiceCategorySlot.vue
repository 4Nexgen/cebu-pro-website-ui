<template>
    <div>
      <div class="box-border h-48 w-48 p-4 bg-center flex items-center justify-center" style="background-image: url('./svg/background.svg'); background-repeat: no-repeat; ">
        <img :src="service.image" />
      </div>
    </div>
</template>

<script>
export default {
  props: {
    service: Object
  }
}
</script>