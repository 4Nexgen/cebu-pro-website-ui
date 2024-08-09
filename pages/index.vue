<template>
    <div >
      <SectionsHomeCover />
      <DialogVirtualConsulation />
      <SectionsHomeService/>
      <SectionsHomeServicePerCategory  v-for="(category, index) in categories" :key="index" :category="category"></SectionsHomeServicePerCategory>
      <SectionsHomeTestimonials />
    </div>
</template>
  


<script>
export default{
    data() { 
        return{
            categories:
            [
                {
                  category:'Exclusive Flight Group Tours'
                },
                {
                  category:'Domestic Tour Packages'
                },
                {
                  category:'Best Cruise Deals'
                },
                {
                  category:'International Free & Easy'
                },
                {
                  category:'Top City Combo Tours'
                },
            ],
        }
    },
}
</script>
