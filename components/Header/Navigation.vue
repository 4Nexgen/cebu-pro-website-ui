<template>
    <div class="flex my-4">
        <div class="flex-1 hidden sm:block h-16 ">
            <HeaderLeftSection />
        </div>
        <div class="shrink-0 h-16 w-32">
            <a href="/" class="block ">
                <img src="/public/cebupro-logo.png" />
            </a>
        </div>
        <div class="flex-1 h-16 w-auto">
            <HeaderRightSection  />
        </div>
    </div>
</template>
 

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>