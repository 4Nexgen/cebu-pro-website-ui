<template>
    <div class="mx-4 md:mx-10 pb-10 mt-8">
        <img :src="img" alt="" class="rounded-xl shadow-theme-shadow" style="height: 50vh; object-fit: cover">
    </div>
</template>

<script>
export default {
    props: {
        img: null
    }
}
</script>