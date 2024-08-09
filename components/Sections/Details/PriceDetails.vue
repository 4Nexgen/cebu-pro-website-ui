<template>
    <div>
        <div class="flex flex-row gap-4 my-2 mt-16">
            <div class="w-1/2 ">
                <div class="flex justify-between">
                    <div>
                        <h1 class="font-bold" style="font-size: 42px;">{{ recomendation }}</h1>
                    </div>
                    <div>
                        <h1 class="font-bold" style="font-size: 42px;color: blue;">{{ package_code }}</h1>
                    </div>
                </div>
                <div class="border-2 border-gray-500 rounded-3xl bg-white">
                    <div class="flex flex-nowrap overflow-hidden overflow-x-hidden m-4 mx-4 cursor-grab active:cursor-grabbing ">
                        <ServiceCategorySlot v-for="(service, index) in services" :key="index" :service="service"/>
                    </div>
                </div>
                <div class="flex flex-col justify-start mt-8 gap-4">
                    <div class="w-full mx-4">
                        <a class="" style="font-size: 22px;font-weight: bold;">Date & Price</a>
                    </div>
                    <div class="border-2 border-gray-500 rounded-full p-4">
                        <span class="m-8" style="font-size: 22px;font-weight: 700;"><a style="color: blue;">2024</a> Jul 28 - Aug 4, 11</span>
                    </div>
                    <div class="border-2 border-gray-500 rounded-full p-4">
                        <div class="flex justify-between" style="font-size: 22px;font-weight: 700;">
                            <div>
                                <span class="mx-8" >Jul 28, 2024</span>
                            </div>
                            <div>
                                <span class="mx-8" >$780 /person </span>
                            </div>
                        </div>
                    </div>
                    <div class="border-2 border-gray-500 rounded-full p-4">
                        <div class="flex justify-between" style="font-size: 22px;font-weight: 700;">
                            <div>
                                <span class="mx-8" >Jul 28, 2024</span>
                            </div>
                            <div>
                                <span class="mx-8" >$780 /person </span>
                            </div>
                        </div>
                    </div>
                    <div class="border-2 border-gray-500 rounded-full p-4">
                        <div class="flex justify-between" style="font-size: 22px;font-weight: 700;">
                            <div>
                                <span class="mx-8" >Jul 28, 2024</span>
                            </div>
                            <div>
                                <span class="mx-8" >$780 /person </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-1/2 shadow-2xl bg-white rounded-3xl grid grid-cols-1 content-between">
                <div>
                    <div class="flex justify-between">
                        <div class="w-full mx-8 my-4 inline">
                            <h1><span class="font-bold" style="font-size: 52px;">₱{{ rate.toFixed(2) }}</span>/night</h1>
                        </div>
                    </div>
                    <div class="border-2 border-gray-500 rounded-3xl bg-white mx-8">
                        <div class="flex justify-between border-b-2 border-gray-500">
                            <div class="w-full m-4 inline border-r-2 border-gray-500">
                                <div>
                                    <a class="w-full font-semibold">Check-in</a><br>
                                    <span class="w-full">
                                        <input type="date" v-model="check_in_date"/>
                                    </span>
                                </div>
                            </div>
                            <div class="w-full m-4 inline">
                                <div>
                                    <a class="w-full font-semibold">Check-out</a><br>
                                    <span class="w-full">
                                        {{ checkoutDate  }}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between  ">
                            <div class="w-full m-4 inline">
                                <div>
                                    <a class="w-full font-semibold">Guest(s)</a><br>
                                    <span class="w-full">
                                        <select class="w-full">
                                            <option v-for="num in number" :key="num.id" :value="num.code">
                                            {{ num.code }}<a class="text-grey-200"> / guest</a>
                                            </option>
                                        </select>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="mx-4 my-4 h-full pb-8">
                    <div class="w-full  inline mb-auto ">
                        <ButtonRounded class="rounded-full" :label="'BOOK NOW'"></ButtonRounded>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        let checkInDate = new Date();

        return{
            recomendation:'Singapore',
            rate: 3890,
            check_in_date: checkInDate.toISOString().split('T')[0],
            package_code:'5D4N',
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
            ],
            number: [
                {
                    id:1,
                    code:1,
                },
                {
                    id:2,
                    code:2,
                },
                {
                    id:3,
                    code:3,
                },
                {
                    id:4,
                    code:4,
                },
                {
                    id:5,
                    code:5,
                },
            ]
        }
    },
    
    computed: {
        checkoutDate() {
            const checkInDate = new Date(this.check_in_date);
            return new Date(checkInDate.getTime() + 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        }
    },
    methods: {
        handleUpdate(newDate) {
           
        }
    }
}
</script>