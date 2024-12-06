<template>
    <div>
        <div class="flex flex-row gap-4 my-2 mt-16">
            <div class="w-full ">
                <div class="flex justify-between">
                    <div>
                        <h1 class="font-bold" style="font-size: 42px;">ITINERARY</h1>
                        <br/>
                        <p v-if="details">{{ details.description }}</p>
                        <p v-else>No details available.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        details: {
            type: Object, // or String/Array based on the data type of details_raw
            required: true, // Set to `true` if this prop is mandatory
        },
    },
};
</script>