<template>
    <div >
      <SectionsFlightsCover />
      <div v-for="category in categories.data" :key="index">
        <div class="m-8">
            <div class="flex flex-nowrap justify-between">
                <div> 
                    <a class="flex items-centers">
                      <span class="font-bold text-black text-2xl px-2 rounded-full">{{ category.name }}&nbsp;<a class="font-bold text-sm opacity-50 px-2 rounded-full inline-flex ">category</a></span> 
                  </a>
                </div>
            </div>
            <div class="flex flex-wrap gap-4 m-8 justify-start">
                <ServiceSlot v-for="tour in category.items" :key="tour.id" :service="tour" >
                </ServiceSlot>
            </div>
        </div>
      </div>
    </div>
</template>


<script>
export default{
  data() { 
      return{
        categories:
        [
          {
            name:'Exclusive Flight Group Tours'
          },
          {
            name:'Best Cruise Deals'
          },
        ],
        search_key:''
      }
  },
  methods: {
    async fetchCategories() {
      try {
        let services = localStorage.getItem('services')
        // if(services && ( services.toLowerCase() === 'tours' || services.toLowerCase() === 'cruises')){
          let url = `/category-with-items?search_key=${this.search_key}`;
          const response = await this.$axios.get(url)
          if (response.status == 200) {
            this.categories = toRaw(response.data.data)
          }
        // }
      } catch (e) {
        console.error(e);
      }
    },
    startDrag(e) {
            this.isDragging = true
            this.startX = e.clientX
            this.scrollLeft = this.$refs.scrollContainer.scrollLeft
        },
        drag(e) {
            if (this.isDragging) {
                const x = e.clientX
                const scrollLeft = this.scrollLeft + (this.startX - x)
                this.$refs.scrollContainer.scrollLeft = scrollLeft
            }
        },
        stopDrag() {
        this.isDragging = false
        }
  },
  async mounted(){
    await this.fetchCategories()

    console.log('local storage ',localStorage.getItem('services'))

        this.$refs.scrollContainer.addEventListener('mousedown', this.startDrag)
        this.$refs.scrollContainer.addEventListener('mousemove', this.drag)
        this.$refs.scrollContainer.addEventListener('mouseup', this.stopDrag)
        this.$refs.scrollContainer.addEventListener('mouseleave', this.stopDrag)

  },
  beforeDestroy() {
        this.$refs.scrollContainer.removeEventListener('mousedown', this.startDrag)
        this.$refs.scrollContainer.removeEventListener('mousemove', this.drag)
        this.$refs.scrollContainer.removeEventListener('mouseup', this.stopDrag)
        this.$refs.scrollContainer.removeEventListener('mouseleave', this.stopDrag)
  }
}
</script>


<style>
.scrollbar::-webkit-scrollbar {
  display: none;
}
</style>