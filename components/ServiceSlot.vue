<template>
    <div class="m-8">
      <div class="box-border h-[40vh] w-80 border bg-center flex justify-center rounded-3xl" >
        <div class="flex flex-col w-full flex-1">
          <div class="h-2/3 relative bg-contain bg-no-repeat bg-center-top" :style="{ backgroundImage: `url('${ service.photo }')` }">
              <div class="flex justify-end p-4">
                <a class="bg-gray-600 font-bold text-white text-sm px-2 rounded-full inline-flex ">
                  <span class="inline-block align-middle">4.3</span>
                  <svg width="30" height="20" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 0L18.98 10.7102H30.2414L21.1307 17.3295L24.6107 28.0398L15.5 21.4205L6.38933 28.0398L9.8693 17.3295L0.758624 10.7102H12.02L15.5 0Z" fill="#FFC700"/>
                  </svg>
                </a>
              </div>
          </div>
          <div class="">
            <div class="grid grid-rows-* gap-4">
              <div class="">
                <a @click="$router.push(`/details/${service.id}`)" class="font-bold text-black text-xl px-2 rounded-full inline-flex cursor-pointer hover:text-blue-600">
                  <!-- Tour Name -->
                   {{ service.name }}
                </a>
              </div>
              <div class="">

                <div class="grid grid-cols-2 gap-4">  
                  <div>
                    <a class="font-bold text-gray-100 opacity-50 text-sm px-2 rounded-full inline-flex ">
                      <!-- Locations / Country -->
                       {{ service.address }}
                    </a>
                  </div>
                  <div class="flex justify-end">
                    <a class="border-2 border-indigo-500 font-bold text-sm px-2 rounded-full inline-flex mx-2">
                      <span class="inline-block text-blue align-middle">3D2N</span>
                    </a>
                  </div>
                </div>
                
              </div>
              <div class=" row-span-2">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    
                    <div class="font-bold text-2xl px-2 rounded-full inline-flex "  v-for="(rate, index) in rates" :key="index" >
                      <a class="font-bold text-sm opacity-50 px-2 rounded-full inline-flex ">{{ rate.name }}</a><br>
                        <span class="text-indigo-500 !important align-middle" > ${{ new Intl.NumberFormat('en-US').format(rate.rate) }}  </span>
                    </div>
                    <br>
                    <a class="font-bold text-sm opacity-50 px-2 rounded-full inline-flex ">/person</a>

                  </div>
                  <div class="flex justify-end mr-4 mb-4 items-center">
                    
                    <div>
                      <button class="flex w-full justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">BOOK NOW</button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    service: Object
  },
  data() {
    return {
      images: [
        '/Landing/Rectangle-699.png',
        '/Landing/cover.png',
        '/Landing/Rectangle-699.png'
      ],
      currentIndex: 0,
      rates: []
    }
  },
  methods: {
    async fetchRates() {
      try {
        if(this.service.id){
          let url=`/item-rates/${this.service.id}`;
          const response = await this.$axios.get(url);
          if (response.status === 200) {
              if(response.data.total > 0 ){
                  this.rates = response.data.data;
              }
          }
        }
      } catch (e) {
        console.error(e);
      }
    },
    details(){
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    }
  },
  async beforeMount() {
      await this.fetchRates()
  },
}
</script>
