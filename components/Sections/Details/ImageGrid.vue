<template>
    <div>
        <div class="flex flex-row gap-4">
            <div class="basis-1/2">
                <img :src="cover" class="h-full w-full">
            </div>
            <div class="basis-1/2">
                <div class="grid grid-cols-2 justify-between gap-2 h-full">
                    <div  v-for="(image, index) in service_images" :key="index">
                        <img :src="image.image" class="h-full w-full">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            cover: '/images/singapore-1.png',
            service_images:[
                {
                    image:'/images/singapore-2.png',
                },
                {
                    image:'/images/singapore-3.png',
                },
                {
                    image:'/images/singapore-4.png',
                },
                {
                    image:'/images/singapore-5.png',
                },
            ]
        }
    }
}
</script>