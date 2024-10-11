<template>
  <div class="grid grid-rows-3 grid-flow-col justify-center gap-4 m-11">
    <div class="row-span-2">
      <v-expansion-panels v-model="panel" class="mb-6">
        <v-expansion-panel>
          <v-expansion-panel-title expand-icon="mdi-menu-down">
            Personal Information
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <div class="flex flex-row">
              <v-text-field
                :rules="rules"
                hide-details="auto"
                label="First Name"
                class="mr-5 mb-5"
              ></v-text-field>
              <v-text-field
                :rules="rules"
                hide-details="auto"
                label="Last Name"
                class="ml-5 mb-5"
              ></v-text-field>
            </div>
            <div class="flex flex-row">
              <v-text-field
                :rules="rules"
                hide-details="auto"
                label="Phone Number"
                class="mb-5"
              ></v-text-field>
            </div>
            <div class="flex flex-row">
              <v-text-field
                :rules="rules"
                hide-details="auto"
                label="Email"
                class="mb-5"
              ></v-text-field>
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title expand-icon="mdi-menu-down">
            Billing Address
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <div class="">
              <v-text-field
                :rules="rules"
                hide-details="auto"
                label="Street Address"
                class="mb-5"
              ></v-text-field>
            </div>
            <div class="">
              <v-text-field
                :rules="rules"
                hide-details="auto"
                label="City"
                class="mb-5"
              ></v-text-field>
            </div>
            <div class="flex flex-row">
              <v-text-field
                :rules="rules"
                hide-details="auto"
                label="State/Province"
                class="mr-5 mb-5"
              ></v-text-field>
              <v-text-field
                :rules="rules"
                hide-details="auto"
                label="Zip/Postal Code"
                class="ml-5 mb-5"
              ></v-text-field>
            </div>
            <div class="">
              <v-text-field
                :rules="rules"
                hide-details="auto"
                label="Country"
                class="mb-5"
              ></v-text-field>
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <SectionsReservationsPaymentMethod/>
      </v-expansion-panels>
    </div>
    <div class="row-span-3">
      <v-card width="400" subtitle="Travel to Singapore 5Days and 4Nights">
        <template v-slot:title>
          <span class="font-weight-black">Reservation Summary</span>
        </template>

        <v-card-text class="bg-surface-light pt-4">
          <v-table density="compact">
            <thead>
              <tr>
                <td>Singapore</td>
                <td>5D4N</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Check-in</td>
                <td>10/08/2024</td>
              </tr>
              <tr>
                <td>Check-out</td>
                <td>10/12/2024</td>
              </tr>
              <tr>
                <td>Rate</td>
                <td>₱3890.00/night</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>$780/person</td>
              </tr>
              <tr>
                <td>Guest(s)</td>
                <td>2</td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    panel: [0],
    disabled: false,
    rules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 3 characters",
    ],
  }),
};
</script>
