<template>
  <div class="px-4 sm:px-6 md:px-8 lg:px-16">
    <div class="relative">
      <!-- Text Section -->
      <div class="absolute inset-0 z-10 flex items-center">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-4 w-full">
          <div class="px-4 md:px-8 lg:px-16 pt-1 md:pt-32 lg:pt-40">
            <h1
              class="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-hawaian-tan"
            >
              Travel<br />
              with the Pros
            </h1>
            <p
              class="text-white text-md md:text-lg lg:text-xl xl:text-2xl mt-4 md:mt-6 lg:mt-8"
            >
              The company delivers end-to-end solutions, encompassing development, 
              market launch, and operational flow.
            </p>
          </div>
        </div>
      </div>

      <!-- Image Section -->
      <div class="home-img relative z-0">
        <img src="/Landing/cover.png" alt="Cover Image" class="w-full h-auto object-contain" />
      </div>
    </div>
  </div>

</template>
  
<script>
  export default {
    data() {
      return {
        search_key: "",
      };
    },
  };
  </script>
  
  <style>
  .home-img {
      img {
          width: 100%;
      }
  }
  </style>
  