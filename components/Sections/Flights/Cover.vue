<template>
    <div class="px-8">
      <SectionsCover></SectionsCover>
      <div class="absolute bottom-0 left-0 right-0 flex flex-col justify-center mb-4">
        <!-- <input type="text" /> -->
        <div class="relative z-10 bottom-0 left-0 right-0 flex  justify-center mb-4">
          <FormsFlightSearch v-show="service.toLowerCase() === 'flights'"></FormsFlightSearch>
          <FormsInquiryForm v-show="service.toLowerCase() === 'tours'"></FormsInquiryForm>
        </div>
      </div>
    </div>
  </template>
  
<script>
export default {
  data() {
    return {
      search_key: "",
    };
  },
  setup() {
    const route = useRoute();
    const service = route.params.services || '';

    return { service };
  },
};
</script>
  