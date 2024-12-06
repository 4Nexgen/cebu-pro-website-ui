<template>
    <div class="w-full mx-40">
        <ul role="list" class="divide-y divide-gray-100">
        <h1 class="text-2xl font-bold">Important Notice</h1>
        <li v-for="notice in notices" :key="notice.id" class="flex gap-x-4 py-2">
            <div class="flex min-w-0 ">
                <div class="min-w-0 flex-auto ">
                    <p class="text-sm/6  text-gray-100">{{ notice.lastSeenDateTime }}</p>
                </div>
            </div>
            <div class="flex min-w-0 ">
                <div class="min-w-0 flex-auto">
                    <p class="text-sm/6 font-semibold text-gray-900">[{{ notice.airlines }}]</p>
                </div>
            </div>
            <div class="flex min-w-0 ">
                <div class="min-w-0 flex-auto">
                    <p class="text-sm/6 font-semibold text-gray-900">{{ notice.notice }}</p>
                </div>
            </div>
            <!-- <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p class="text-sm/6 text-gray-900">{{ person.role }}</p>
                <p v-if="person.lastSeen" class="mt-1 text-xs/5 text-gray-500">
                    Last seen <time :datetime="person.lastSeenDateTime">{{ person.lastSeen }}</time>
                </p>
            </div> -->
        </li>
        </ul>
    </div>
</template>
  
<script>
export default{
    data(){
        return{
             notices :[
                {
                    id:1,
                    notice: 'Piso Sale',
                    airlines:'Philippine Airlines',
                    lastSeenDateTime: '2023-01-23T13:23Z',
                },
                {
                    id:1,
                    notice: 'Promo',
                    airlines:'Air Asia',
                    lastSeenDateTime: '2023-01-23T13:23Z',
                },
                {
                    id:1,
                    notice: 'Promo',
                    airlines:'Lion Air',
                    lastSeenDateTime: '2023-01-23T13:23Z',
                },
                {
                    id:1,
                    notice: 'Piso Sale',
                    airlines:'Cebu Pacific',
                    lastSeenDateTime: '2023-01-23T13:23Z',
                },
                {
                    id:1,
                    notice: 'Ceb Pass',
                    airlines:'Cebu Pacific',
                    lastSeenDateTime: '2023-01-23T13:23Z',
                },
                {
                    id:1,
                    notice: 'Promo',
                    airlines:'Philippine Airlines',
                    lastSeenDateTime: '2023-01-23T13:23Z',
                },
            ]
        }
    }
}
</script>