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
                    
                    <a class="font-bold text-2xl px-2 rounded-full inline-flex ">
                        <span class="text-indigo-500 !important align-middle">
                          <!-- ${{ new Intl.NumberFormat('en-US').format(service.rate.toFixed(2)) }} -->
                          ${{ new Intl.NumberFormat('en-US').format(service.child_price) }}
                          ${{ new Intl.NumberFormat('en-US').format(service.adult_price) }}
                          ${{ new Intl.NumberFormat('en-US').format(service.free_time_plan_rate) }}
                          <!-- $25,000 -->
                        </span>
                    </a>
                    <br>
                    <a class="font-bold text-sm opacity-50 px-2 rounded-full inline-flex ">/person</a>

                  </div>
                  <div class="flex justify-end mr-4 mb-4">
                    <button type="button" class="rounded-full bg-indigo-500 p-4 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">BOOK NOW</button>
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
      currentIndex: 0
    }
  },
  methods: {
    details(){
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    }
  }
}
</script>
