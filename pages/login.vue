<template>
  <v-sheet
    style="
      background-image: url('/Landing/Rectangle-699.png');
      background-repeat: no-repeat;
      background-size: cover;
    "
    class="p-20 mb-20"
    height="800"
  >
    <v-card title="Login" class="mx-auto px-6 py-8 text-center" max-width="400">
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          label="Email"
          clearable
          ><i class="fa-regular fa-user"></i
        ></v-text-field>

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          label="Password"
          placeholder="Enter your password"
          clearable
        ></v-text-field>

        <br />
        <v-btn
          :loading="loading"
          color="primary"
          size="large"
          type="submit"
          variant="elevated"
          block
        >
          Sign In
        </v-btn>
        <br />
        <div class="flex flex-row-reverse">
          <a href="/registration" class="text-primary text-sm"
            >Create Account</a
          >
        </div>
      </v-form>
    </v-card>
  </v-sheet>
</template>
<script>
export default {
  data: () => ({
    form: false,
    email: null,
    password: null,
    loading: false,
  }),

  methods: {
    onSubmit() {
      if (!this.form) return;

      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    required(v) {
      return !!v || "Field is required";
    },
  },
};
</script>
<style>
.v-card-title{
    font-weight: bold;
    color: #1767c0;
}
</style>