<template>
  <div class="m-8">
    <div
      class="box-border w-80 border bg-center flex justify-center rounded-3xl"
    >
      <div class="flex flex-col w-full flex-1">
        <div class="h-2/3 relative bg-contain bg-no-repeat bg-center-top">
          <div class="absolute right-0 p-4" style="z-index: 9">
            <a
              class="bg-gray-600 font-bold text-white text-sm px-2 rounded-full inline-flex"
            >
              <span class="inline-block align-middle">4.3</span>
              <svg
                width="30"
                height="20"
                viewBox="0 0 31 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5 0L18.98 10.7102H30.2414L21.1307 17.3295L24.6107 28.0398L15.5 21.4205L6.38933 28.0398L9.8693 17.3295L0.758624 10.7102H12.02L15.5 0Z"
                  fill="#FFC700"
                />
              </svg>
            </a>
          </div>
          <div class="">
            <v-carousel 
            :show-arrows="false"
            height="200"
            cycle
            hide-delimiters>
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
                cover
              ></v-carousel-item>
            </v-carousel>
          </div>
        </div>
        <div class="">
          <div class="grid grid-rows-* gap-4">
            <div class="">
              <a @click="$router.push(`/details/${service.item_code}`)"
                class="font-bold text-black text-md px-2 rounded-full inline-flex cursor-pointer hover:text-blue-600" >
                <!-- Tour Name -->
                {{ service.name }}
              </a>
            </div>
            <div class="">
              <div class="gap-4">
                <div>
                  <a class="font-bold text-gray-100 opacity-50 text-sm px-2 rounded-full inline-flex" >
                    <!-- Locations / Country -->
                    {{ service.location }}
                  </a>
                </div>
              </div>
              
              <div class="flex justify-end px-2">
                <a class="border-2 border-indigo-500 font-bold text-sm px-2 rounded-full inline-flex" >
                  <span class="inline-block text-blue align-middle" >{{ service.item_code || 'NA' }}</span >
                </a>
              </div>
            </div>
            <div class="row-span-2">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <div class="text-lg px-2 rounded-full inline-flex" v-for="(rate, index) in rates" :key="index" >
                    <a class="text-sm opacity-50 px-2 rounded-full inline-flex" >{{ rate.name }}&nbsp;
                    <span class="font-bold text-black !important align-middle">
                      ${{ new Intl.NumberFormat("en-US").format(rate.rate) }}
                    </span>
                    </a >
                  </div>
                  <br />
                  <!-- <a class="text-sm opacity-50 px-2 rounded-full inline-flex" >/person</a > -->
                </div>
                <div class="flex justify-end mr-4 mb-4 items-center">
                  <div>
                    <button @click="$router.push(`/reservation`)"
                      class="flex w-full justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      BOOK NOW
                    </button>
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
<style>
.v-responsive.v-img {
  border-radius: 10px 10px 0 0;
}
</style>
<script>
export default {
  props: {
    service: Object,
  },
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
      rates: [],
    };
  },
  methods: {
    async fetchRates() {
      try {
        if (this.service.id) {
          let url = `/item-rates/${this.service.id}`;
          const response = await this.$axios.get(url);
          if (response.status === 200) {
            if (response.data.total > 0) {
              this.rates = response.data.data;
            }
          }
        }
      } catch (e) {
        console.error(e);
      }
    },
    details() {},
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
  },
  async beforeMount() {
    await this.fetchRates();
  },
};
</script>

