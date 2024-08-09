<template>
    <div class="h-full w-full">
        <button type="submit" class="block w-full h-full rounded-full bg-indigo-600 px-3.5 py-2.5 text-center text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{label}}</button>
    </div>
</template>


<script>
export default {
    props: {
        label: ''
    }
}
</script>