
<template>
  <div class="px-4 py-6">
    <!-- Grid Layout -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 bg-white bg-opacity-50 border-1 md:border-0 items-center p-2 rounded-3xl w-full"
    >
      <!-- Room Type -->
      <v-col class="col-span-1 md:col-span-1 bg-white">
        <v-select
          label="Room Type"
          :items="[
            'California',
            'Colorado',
            'Florida',
            'Georgia',
            'Texas',
            'Wyoming',
          ]"
        ></v-select>
      </v-col>

      <!-- Bedroom -->
      <v-col class="col-span-1 md:col-span-1 bg-white">
        <v-select
          label="Bedroom"
          :items="[
            'California',
            'Colorado',
            'Florida',
            'Georgia',
            'Texas',
            'Wyoming',
          ]"
        ></v-select>
      </v-col>

      <!-- Start Date -->
      <v-col class="col-span-1 md:col-span-1 bg-white rounded-lg border p-4">
        <label
          for="start-date"
          class="block text-sm font-medium leading-6 text-gray-900 "
          >Start Date</label
        >
        <input
          id="start-date"
          type="date"
          v-model="str_date"
          class="font-bold text-blue-400 block w-full rounded-md border py-2 px-3 shadow-sm placeholder:text-gray-400 sm:text-sm"
        />
      </v-col>

      <!-- End Date -->
      <v-col class="col-span-1 md:col-span-1 bg-white rounded-lg border p-4">
        <label
          for="end-date"
          class="block text-sm font-medium leading-6 text-gray-900 "
          >End Date</label
        >
        <input
          id="end-date"
          type="date"
          v-model="end_date"
          class="font-bold text-blue-400 block w-full rounded-md border py-2 px-3 shadow-sm placeholder:text-gray-400 sm:text-sm"
        />
      </v-col>

      <!-- Location -->
      <v-col class="col-span-1 md:col-span-1 bg-white">
        <v-text-field
          v-model="location"
          :counter="10"
          :rules="locationRules"
          label="Location"
          hide-details
          required
        ></v-text-field>
      </v-col>

      <!-- Button -->
      <v-col class="col-span-1 md:col-span-1 text-center">
        <button type="button"
          class="rounded-2xl bg-indigo-600 py-4 px-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500" >
          Search Hotel
        </button>
      </v-col>
    </div>
  </div>
</template>


<script>
export default {
  location: "",
};
</script>
