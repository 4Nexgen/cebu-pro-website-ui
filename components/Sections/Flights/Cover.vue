<template>
    <div class="px-8">
      <SectionsCover></SectionsCover>
      <div class="absolute bottom-0 left-0 right-0 flex flex-col justify-center mb-4">
        <!-- <input type="text" /> -->
        <div class="bottom-0 left-0 right-0 flex  justify-center mb-4">
          <FormsFlightSearch></FormsFlightSearch>
        </div>
        <div class="bottom-0 left-0 right-0 flex  justify-center mb-4">
          <FormsInquiryForm></FormsInquiryForm>
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
  };
  </script>
  
  <style></style>