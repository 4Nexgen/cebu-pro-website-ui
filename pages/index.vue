<template>
    <div class="content">
      <SectionsHomeSearch />
      <DialogVirtualConsulation />
      <SectionsHomeService/>
      <SectionsHomeServicePerCategory  v-for="(category, index) in services.data" :key="index" :params="category"/>
      <SectionsHomeTestimonials />
    </div>
</template>

<script>
export default{
    data() { 
        return{
            services: [ ],
            search_key:''
        }
    },
    async mounted(){
     await this.fetchCategories()
    },
    methods: {
      async fetchCategories() {
            try {
                const response = await this.$axios.get(`/services/front`);
                if (response.status === 200) {
                    this.services = toRaw(response.data);
                }
            } catch (e) {
                console.error(e);
            }
        },
    }
}
</script>

<style>
.content {
  padding-top: 110px;
}
</style>