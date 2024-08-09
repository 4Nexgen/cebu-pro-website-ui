<template>
      <div class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50"
          :class="{ 'hidden': !isOpen }" >
      <div class="rounded-xl mx-48 h-100 w-30 ">
          <div class="rounded-xl border mx-80 h-100 w-30 bg-white">
              <div class="flex flex-col m-2 mb-16">
                  <div class="flex justify-end">
                    <span class="cursor-pointer" @click="close">
                      <svg width="25" height="33" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 2L31.9116 30.4736" stroke="#444444" stroke-width="4" stroke-linecap="round"/>
                        <path d="M31.9116 2L3 30.4736" stroke="#444444" stroke-width="4" stroke-linecap="round"/>
                      </svg>
                    </span>

                  </div>
                  <div class="flex justify-center">
                      <img src="/public/svg/virtual_consulation.svg">
                  </div>
                  <div class="pl-2 md:pl-16 pr-2 md:pr-16">
                      <br>
                      <a class="font-bold text-[#1044C6] text-4xl">Virtual Consulation </a><br>
                      <a class="text-blue-600 text-lg">Hi! Greetings! To connect virtually with our Online Travel Specialist kindly click the link below:</a>
                      <br>
                      <br>
                      <a class="font-bold">https://meet.google.com/xgq-xhkm-ghp?pli=1</a>
                      <br>
                      <br>
                      <a class="font-bold">Note: </a><a>Virtual service is available from 9:00 AM to 6:00 PM every Mondays to Fridays except holidays.</a>
                      <br>
                  </div>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      default: '',
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    confirm() {
      this.$emit('confirm');
    },
  },
}
</script>