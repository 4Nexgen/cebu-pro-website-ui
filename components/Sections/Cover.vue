<template>
    <div class="px-8">
      <div class="relative">
        <div class="absolute">
          <div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div class="px-4 md:px-8 lg:px-16 pt-1 md:pt-32 lg:pt-40">
              <h1
                class="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-hawaian-tan"
              >
                Travel<br />
                with the Pros
              </h1>
              <p
                class="text-white text-md md:text-md lg:text-3xl xl:text-4xl mt-4 md:mt-6 lg:mt-8"
              >
                The company delivers end-to-end solutions, encompassing
                development, market launch, and operational flow.
              </p>
            </div>
          </div>
        </div>
        <div class="home-img">
          <img src="/Landing/cover.png" />
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
  