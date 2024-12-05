<template>
  <div class="px-4 py-6">
    <div class="flex flex-wrap gap-2 bg-white bg-opacity-50 border-1 md:border-0 items-center py-3 px-6 rounded-3xl w-[150vh]" >
      <v-col cols="10" md="" class="bg-white">
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
      <v-col cols="10" md="" class="bg-white">
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
      <v-col
        cols="10"
        md=""
        class="bg-white rounded-lg border m-4 w-full md:w-[20vh]"
      >
        <label
          for="last-name"
          class="block text-sm font-medium leading-6 text-gray-900 ml-4"
          >Start Date</label
        >
        <input
          type="date"
          v-model="str_date"
          class="font-bold text-blue-400 block w-40 rounded-md border-0 py-1.5 text-gray-900 ml-2 shadow-sm px-2 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
      </v-col>
      <v-col
        cols="10"
        md=""
        class="bg-white rounded-lg border m-4 w-full md:w-[20vh]"
      >
        <label
          for="last-name"
          class="block text-sm font-medium leading-6 text-gray-900 ml-4"
          >End Date</label
        >
        <input
          type="date"
          v-model="end_date"
          class="font-bold text-blue-400 block w-40 rounded-md border-0 py-1.5 text-gray-900 ml-2 shadow-sm px-2 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
      </v-col>
      <v-col cols="10" md="">
        <v-text-field
          v-model="location"
          :counter="10"
          :rules="locationRules"
          label="Location"
          hide-details
          required
        ></v-text-field>
      </v-col>
      <v-col cols="10" md="">
        <div class="sm:col-span-3">
                <button type="button" class="rounded-2xl bg-indigo-600 p-6 text-sm font-semibold text-white shadow-sm">Search Hotel</button>
            </div>
      </v-col>
    </div>
  </div>
</template>

<script>
export default {
  location: "",
};
</script>
