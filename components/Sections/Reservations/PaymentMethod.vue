<template>
  <v-expansion-panel>
    <v-expansion-panel-title expand-icon="mdi-menu-down">
      Select Payment Method
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-expansion-panels variant="accordion" class="mb-5">
        <v-expansion-panel title="Card">
          <v-expansion-panel-text>
            <div class="">
              <v-text-field
                :rules="rules"
                hide-details="auto"
                label="Card Number:"
                class="m-5"
              ></v-text-field>
            </div>
            <div class="">
                <v-text-field
              v-model="expire"
              label="Expire date"
              type="month"
              width="50%"
              class="m-5"
            ></v-text-field>
            </div>
            <div class="">
              <v-text-field
                :rules="rules"
                hide-details="auto"
                label="CVV/CVC Code"
                class="m-5"
                width="50%"
              ></v-text-field>
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-expansion-panels variant="accordion" class="mb-5">
        <v-expansion-panel title="Gcash"></v-expansion-panel>
      </v-expansion-panels>
      <v-expansion-panels variant="accordion" class="mb-5">
        <v-expansion-panel title="Paymaya"></v-expansion-panel>
      </v-expansion-panels>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>
<script>
  export default {
    data: () => ({
      expire: null,
    }),
  }
</script>