<template>
    <div>
        <div class="flex flex-wrap gap-2 bg-white bg-opacity-50 border-1 md:border-0 items-center py-3 px-6 rounded-3xl w-[150vh]">
                <div class="m-4 w-full md:w-[25vh] bg-white rounded-lg border">
                    <label class="block text-sm font-medium leading-6 text-gray-900 ml-4">From</label>
                    <input type="text" v-model="from"
                    class="font-bold text-blue-400 block w-full rounded-md py-1.5 text-gray-900 shadow-sm px-2 ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                </div>

                <div class="m-4 w-full md:w-[25vh] bg-white rounded-lg border">
                    <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900 ml-4">To</label>
                    <input type="text" v-model="to"
                    class="font-bold text-blue-400 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm px-2 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                </div>
            
                <div class="m-4 w-full md:w-[20vh] bg-white rounded-lg border">
                    <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900 ml-4">Departure Date</label>
                    <input type="date" v-model="dep_date"
                    class="font-bold text-blue-400 block w-40 rounded-md py-1.5 text-gray-900 ml-2 shadow-sm ml-2 px-2 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                </div>
                <div class="m-4 flex h-6 items-center">
                    <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" /> &nbsp;
                    <label for="comments" class="font-medium text-gray-900">Round trip</label>
                </div>
                <div class="m-4 w-full md:w-[20vh] bg-white rounded-lg border">
                    <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900 ml-4">Return Date</label>
                    <input type="date" v-model="ret_date"
                    class="font-bold text-blue-400 block w-40 rounded-md border-0 py-1.5 text-gray-900 ml-2 shadow-sm px-2 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                </div>
            <div class="sm:col-span-3">
                <button type="button" class="rounded-2xl bg-indigo-600 p-6 text-sm font-semibold text-white shadow-sm">Search Flights</button>
            </div>
        </div>
        
    </div>
</template>


<script>
export default{
    data() { 
        return{
                from: 'Cebu (CEB)',
                to: 'Siargao (IAO)',
                dep_date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
                ret_date: new Date(Date.now() + 86400000).toISOString().split('T')[0]
        }
    }
}
</script>