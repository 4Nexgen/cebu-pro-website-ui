<template>
    <div>
      <div >
        <SectionsFlightsCover />
        <div v-for="category in categories" :key="index">
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
    </div>
</template>
  
<script>
import { useRoute } from 'vue-router';

export default {
  data() { 
      return{
        categories:[],
        search_key:''
      }
  },
  setup() {
    const route = useRoute();
    const service = route.params.services;

    return { service };
  },
  methods: {
    async fetchCategories() {
      try {
        // let services = route.params.services;
        console.log(this.service)
          let url = `/category-with-items?search_key=${this.search_key}`;
          const response = await this.$axios.get(url)
          if (response.status == 200) {
            this.categories = response.data.data;
            console.log(this.categories)
            if(this.service.toLowerCase() == 'tours'){
              this.categories = this.categories.data.filter(item => item.name.toLowerCase() !== 'flights' 
                                                                 && item.name.toLowerCase() !== 'international'
                                                                 && item.name.toLowerCase() !== 'domestic'
                                                                 && item.name.toLowerCase() !== 'cruises'
                                                                 && item.name.toLowerCase() !== 'visa'
                                                                 && item.name.toLowerCase() !== 'insurance'
                                                                 && item.name.toLowerCase() !== 'mice');
            }else{
              this.categories = this.categories.data.filter(item => item.name === this.service);
            }
            console.log(this.categories)
          }
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

        console.log(this.service)

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
};
</script>