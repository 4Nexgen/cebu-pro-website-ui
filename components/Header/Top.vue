<template>
    <div class="bg-[#1044C6] text-white ">
        <div class="grid grid-cols-1 md:grid-cols-3 mx-16 flex-nowrap">
            <div class="md:col-span-2 inline-flex shrink-0 text-sm">
                <div class="flex items-center">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02943 13.9706 0 9 0C4.02943 0 0 4.02943 0 9C0 13.9706 4.02943 18 9 18ZM7.59375 4.5C7.59375 3.72335 8.22335 3.09375 9 3.09375C9.77665 3.09375 10.4062 3.72335 10.4062 4.5V5.06248C10.4062 5.83914 9.77665 6.46873 9 6.46873C8.22335 6.46873 7.59375 5.83914 7.59375 5.06248V4.5ZM7.59373 9C7.59373 8.22335 8.22333 7.59375 8.99998 7.59375C9.77664 7.59375 10.4062 8.22335 10.4062 9V13.5C10.4062 14.2767 9.77664 14.9062 8.99998 14.9062C8.22333 14.9062 7.59373 14.2767 7.59373 13.5V9Z" fill="#FFC700"/>
                    </svg>
                </div>&nbsp;
                <a class="font-bold">Travel Advisory:</a> Your travel insurance could be invalidated if you travel against ...&nbsp;<a class=" font-bold">View All</a>
            </div>
            <div class="flex justify-end w-full gap-8">
                <div class="inline-flex">
                    <a>PHP</a>&nbsp;
                    <div class="flex items-center">
                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 9L0.736861 0.749999L10.2631 0.75L5.5 9Z" fill="#FFC700"/>
                        </svg>
                    </div>
                </div>
                <div class="inline-flex">
                    <a>EN</a>&nbsp;
                    <div class="flex items-center">
                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 9L0.736861 0.749999L10.2631 0.75L5.5 9Z" fill="#FFC700"/>
                        </svg>
                    </div>
                </div>
                <div class="">Help</div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      isMobile: false
    }
  },
  mounted() {
    this.checkScreenSize()
    window.addEventListener('resize', this.checkScreenSize)
  },
  methods: {
    checkScreenSize() {
      this.isMobile = window.innerWidth < 768
      console.log(this.isMobile)
    }
  }
}
</script>