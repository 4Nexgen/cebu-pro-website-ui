<template>
    <v-sheet style="background-image:url('/Landing/Rectangle-699.png'); background-repeat: no-repeat; background-size:cover;" class="p-20 mb-20" height="800">
    <v-card
      class="mx-auto m-20 text-center"
      max-width="400"
      title="Create Account"
    >
      <v-container
      >
        <v-row>
            <v-col
          cols="12"
          md="6"
        >
        <v-text-field
          v-model="first"
          color="primary"
          label="First name"
          variant="underlined"
        ></v-text-field>
    </v-col>
        <v-col
          cols="12"
          md="6"
        >
        <v-text-field
          v-model="last"
          color="primary"
          label="Last name"
          variant="underlined"
        ></v-text-field>    
    </v-col>
            
  
        
        </v-row>
  
        <v-text-field
          v-model="email"
          color="primary"
          label="Email"
          variant="underlined"
        ></v-text-field>
  
        <v-text-field
          v-model="password"
          color="primary"
          label="Password"
          placeholder="Enter your password"
          variant="underlined"
        ></v-text-field>
  
      </v-container>
  
      <v-divider></v-divider>
  
      <v-card-actions>
        <v-spacer></v-spacer>
  
        <v-btn color="primary">
          Register
        </v-btn>
      </v-card-actions>
    </v-card>
</v-sheet>
  </template>
  <script>
    export default {
      data: () => ({
        first: null,
        last: null,
        email: null,
        password: null,
        terms: false,
      }),
    }
  </script>
  <style>
.v-card-title, .v-btn{
    font-weight: bold;
}
</style>