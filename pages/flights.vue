<template>
    <div >
      <SectionsFlightsCover />
      <SectionsHomeServicePerCategory  v-for="(category, index) in categories" :key="index" :category="category"></SectionsHomeServicePerCategory>
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
                  category:'Best Cruise Deals'
                },
            ],
        }
    },
}
</script>
