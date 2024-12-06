<template>
    <div class="mt-4 mb-4 px-12">
        <div class="m-8">
            <div class="flex flex-nowrap justify-between">
                <div> 
                    <a class="flex items-centers">
                        <span class="font-bold text-black text-2xl px-2 rounded-full">{{ params?.name }}</span> 
                    </a>
                </div>
                <div>
                    <a class="flex items-end" @click="handleSeeAll(params?.name) | $router.push(`services/${params?.name}`)">
                        <span class="font-bold text-sm text-blue ml-2 flex justify-end hover:cursor-pointer">See all</span>
                    </a>
                </div>
            </div>
           
        </div>
        <!-- <div class="flex flex-nowrap gap-4 overflow-x-auto m-8 cursor-grab active:cursor-grabbing " @mousedown="startDrag" @mousemove="drag" @mouseup="stopDrag" @mouseleave="stopDrag">
            <ServiceSlot v-for="(service, index) in services" :key="index" :service="service">
            </ServiceSlot>
        </div> -->
        
        <div class="flex flex-nowrap gap-4 overflow-x-hidden m-8 cursor-pointer active:cursor-grabbing" ref="scrollContainer">
            <ServiceSlot v-for="(service, index) in services" :key="index" :service="service">
            </ServiceSlot>
        </div>
    </div>
</template>

<script>
export default{
    props: {
        params: {
            type: Object,
            default: () => ({})
        }
    },
    data() { 
        return{
            services:
            [
                {
                    name:'No Items Found',
                    photo:'/Landing/cover.png',
                    package_code:'NONE',
                    address:'Locations / Country',
                    adult_price:0,
                    child_price:0,
                    free_time_plan_rate: 0
                },
            ],
            isDragging: false,
            startX: 0,
            scrollLeft: 0,
            search_key:''
        }
    },
    methods: {
        async fetchTours(id) {
            try {
                // let url=`/tours/${id}?search_key=${this.search_key}`
                let url=`/items/${id}?search_key=${this.search_key}`;
                const response = await this.$axios.get(url);
                if (response.status === 200) {
                    console.log(response.data.total)
                    if(response.data.total > 0 ){
                        this.services = response.data.data;
                    }
                }
            } catch (e) {
            console.error(e);
            }
        },
        handleSeeAll(selected_services){
            console.log(selected_services)
            localStorage.setItem('services',selected_services)
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
    async beforeMount() {
        await this.fetchTours(this.params?.id)
    },
    async mounted() {
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