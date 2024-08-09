<template>
    <div class="mt-4 mb-16">
        <div class="flex flex-nowrap gap-4 overflow-hidden overflow-x-hidden m-8 cursor-pointer active:cursor-pointer " @mousedown="startDrag" @mousemove="drag" @mouseup="stopDrag" @mouseleave="stopDrag">
            <ServiceCategorySlot v-for="(service, index) in services" :key="index" :service="service">
            </ServiceCategorySlot>
        </div>
        <div class="flex justify-center items-center">
            <div class="bg bg-[#1044C6] h-[30vh] w-[160vh] rounded-3xl">
                <div class="flex justify-center">
                    <h1 class="font-bold text-white text-6xl text-center p-24">Why? CebuPro</h1>
                </div>
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
                {
                    name:'Flights',
                    image:'/svg/flights.svg',
                    link: '/flights'
                },
                {
                    name:'International',
                    image:'/svg/international.svg',
                    link: '#'
                },
                {
                    name:'Domestic',
                    image:'/svg/domestic.svg',
                    link: '#'
                },
                {
                    name:'Cruises',
                    image:'/svg/cruise.svg',
                    link: '#'
                },
                {
                    name:'VISA',
                    image:'/svg/domestic.svg',
                    link: '#'
                },
                {
                    name:'',
                    image:'/svg/insurance.svg',
                    link: '#'
                },
                {
                    name:'',
                    image:'/svg/mice.svg',
                    link: '#'
                },
                {
                    name:'',
                    image:'',
                    link: '#'
                },
                {
                    name:'',
                    image:'',
                    link: '#'
                },
            ],
            isDragging: false,
            startX: 0,
            scrollLeft: 0
        }
    },
    methods: {
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