<template>
    <div class="mt-10 mb-16">
  <!-- Horizontal Scrollable Service Categories -->
  <div 
    class="flex gap-4 overflow-x-auto px-4 sm:px-8 cursor-pointer active:cursor-pointer"
    @mousedown="startDrag"
    @mousemove="drag"
    @mouseup="stopDrag"
    @mouseleave="stopDrag"
  >
    <ServiceCategorySlot 
      v-for="(service, index) in services" 
      :key="index" 
      :service="service"
    />
  </div>

  <!-- Why CebuPro Section -->
  <div class="flex justify-center items-center mt-8 px-4">
    <div class="bg-[#1044C6] w-full max-w-[90vw] sm:max-w-[80vw] rounded-3xl flex justify-center items-center">
      <h1 class="font-bold text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-center px-6 py-20">
        Why? CebuPro
      </h1>
    </div>
  </div>
</div>

</template>

<script>
export default{
    data() { 
        return{
            services:
            [
                // {
                //     name:'Flights',
                //     image:'/svg/flights.svg',
                //     link: '/flights'
                // },
                // {
                //     name:'International',
                //     image:'/svg/international.svg',
                //     link: '#'
                // },
                // {
                //     name:'Domestic',
                //     image:'/svg/domestic.svg',
                //     link: '#'
                // },
                // {
                //     name:'Cruises',
                //     image:'/svg/cruise.svg',
                //     link: '#'
                // },
                // {
                //     name:'VISA',
                //     image:'/svg/domestic.svg',
                //     link: '#'
                // },
                // {
                //     name:'',
                //     image:'/svg/insurance.svg',
                //     link: '#'
                // },
                // {
                //     name:'',
                //     image:'/svg/mice.svg',
                //     link: '#'
                // },
                // {
                //     name:'',
                //     image:'',
                //     link: '#'
                // },
                // {
                //     name:'',
                //     image:'',
                //     link: '#'
                // },
            ],
            isDragging: false,
            startX: 0,
            scrollLeft: 0
        }
    },
    async mounted(){
     await this.fetchServices()
    },
    methods: {
        async fetchServices() {
            try {
            const response = await this.$axios.get(`/services/front`);
            if (response.status === 200) {
                this.services = response.data.data;
            }
            } catch (e) {
                console.error(e);
            }
        },
        startDrag(e) {
        this.isDragging = true
        this.startX = e.clientX
        this.scrollLeft = this.$el.querySelector('.flex').scrollLeft
        },
        drag(e) {
        if (this.isDragging) {
            const x = e.clientX
            const scrollLeft = this.scrollLeft + (this.startX - x)
            this.$el.querySelector('.flex').scrollLeft = scrollLeft
        }
        },
        stopDrag() {
        this.isDragging = false
        }
    }
}
</script>

<style>
.scrollbar::-webkit-scrollbar {
  display: none;
}
</style>