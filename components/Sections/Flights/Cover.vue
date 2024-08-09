<template>
    <div class="h-screen px-8">
        <div class="h-full background" :style="{ backgroundImage: `url('/Landing/cover.png')` }">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4">
                <div class="pl-2 md:pl-8 lg:pl-16 xl:pl-64 pt-0 md:pt-40">
                    <h1 class="font-bold text-hawaian-tan text-xl md:text-5xl lg:text-8xl">Travel<br> with the Pros</h1>
                    <br>
                    <p class="text-white text-md md:text-2xl lg:text-4xl">The company delivers end-to-end solutions, 
                    encompassing development, market launch, 
                    and operational flow.
                    </p>
                </div>
            </div>
            
            <div class="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
                <!-- <input type="text" /> -->
                 <FormsFlightSearch></FormsFlightSearch> </div>
            </div>
        <div class="h-10">
            
        </div>
    </div>
</template>

<script>
export default{
    data() { 
        return{
                search_key: '',
        }
    }
}
</script>

<style>

.background {
  width: 100%;
  height: 100%; /* Adjust height as needed */
  background-size: fill;
  background-position: top;
  background-repeat: no-repeat;
}
</style>