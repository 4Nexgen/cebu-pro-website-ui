<template>
    <div class="mt-4 mb-4">
        <div class="m-8">
            <div class="flex flex-nowrap justify-between">
                <div> 
                    <a class="flex items-centers">
                        <span class="font-bold text-black text-2xl px-2 rounded-full">{{ category.category }}</span> 
                    </a>
                </div>
                <div>
                    <a class="flex items-centers">
                        <span class="font-bold text-sm text-blue ml-2 flex justify-end">See all</span>
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
        category: Object
    },
    data() { 
        return{
            services:
            [
                {
                    image:'/svg/flights.svg'
                },
                {
                    image:'/svg/international.svg'
                },
                {
                    image:'/svg/domestic.svg'
                },
                {
                    image:'/svg/cruise.svg'
                },
                {
                    image:'/svg/domestic.svg'
                },
                {
                    image:'/svg/domestic.svg'
                },
                {
                    image:'/svg/domestic.svg'
                },
            ],
            isDragging: false,
            startX: 0,
            scrollLeft: 0
        }
    },
    // methods: {
    //     startDrag(e) {
    //     this.isDragging = true
    //     this.startX = e.clientX
    //     this.scrollLeft = this.$el.querySelector('.flex').scrollLeft
    //     },
    //     drag(e) {
    //     if (this.isDragging) {
    //         const x = e.clientX
    //         const scrollLeft = this.scrollLeft + (this.startX - x)
    //         this.$el.querySelector('.flex').scrollLeft = scrollLeft
    //     }
    //     },
    //     stopDrag() {
    //     this.isDragging = false
    //     }
    // }
    
    methods: {
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
    mounted() {
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