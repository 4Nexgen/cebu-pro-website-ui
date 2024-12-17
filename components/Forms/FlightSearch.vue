<template>
  <div class="p-4">
    <div class="bg-white bg-opacity-50 border border-gray-200 p-4 rounded-3xl ">
      <!-- Grid Container -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        <!-- From Input -->
        <div class="bg-white rounded-lg border p-4">
          <label class="block text-sm font-medium leading-6 text-gray-900 mb-2">From</label>
          <input
            type="text"
            v-model="from"
            class="font-bold text-blue-400 block w-full rounded-md py-2 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm"
          />
        </div>

        <!-- To Input -->
        <div class="bg-white rounded-lg border p-4">
          <label class="block text-sm font-medium leading-6 text-gray-900 mb-2">To</label>
          <input
            type="text"
            v-model="to"
            class="font-bold text-blue-400 block w-full rounded-md py-2 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm"
          />
        </div>

        <!-- Departure Date -->
        <div class="bg-white rounded-lg border p-4">
          <label class="block text-sm font-medium leading-6 text-gray-900 mb-2">Departure Date</label>
          <input
            type="date"
            v-model="dep_date"
            class="font-bold text-blue-400 block w-full rounded-md py-2 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm"
          />
        </div>

        <!-- Round Trip Checkbox -->
        <div class="flex items-center space-x-2 bg-white rounded-lg border p-4">
          <input
            id="round-trip"
            name="round-trip"
            type="checkbox"
            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label for="round-trip" class="text-sm font-medium text-gray-900">Round Trip</label>
        </div>

        <!-- Return Date -->
        <div class="bg-white rounded-lg border p-4">
          <label class="block text-sm font-medium leading-6 text-gray-900 mb-2">Return Date</label>
          <input
            type="date"
            v-model="ret_date"
            class="font-bold text-blue-400 block w-full rounded-md py-2 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm"
          />
        </div>
      </div>

      <!-- Submit Button -->
      <!-- <div class="text-center mt-6">
        <button type="button"
          class="rounded-2xl bg-indigo-600 py-8 px-6 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        >
          Search Flights
        </button>
      </div> -->
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