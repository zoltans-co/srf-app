<template>
    <v-container class="mt-15">

      <v-row align="center" no-gutters style="height: 150px;">
        <v-col>
          <v-sheet class="pa-2 ma-2">
            <h1
              class="text-sm-h2 font-weight-regular mt-sm-16 mt-16 mb-3 text-center"
              style="color: #8ca71f;"
            >
              investonom
            </h1>
            <h2 class="text-h6 text-sm-h5 font-weight-regular mb-5 text-center">
              The Financial Awareness Tool
            </h2>
          </v-sheet>
        </v-col>
      </v-row>

      <v-row align="center" class="mt-10 mb-16" no-gutters style="height: 150px;">
        <v-col>
          <v-sheet class="pa-2 ma-2">
            <v-responsive>
              <v-img
                src="@/assets/investonom-logo.svg"
                class="my-3"
                contain
                height="300"
              ></v-img>
            </v-responsive>
          </v-sheet>
        </v-col>
      </v-row>

      <v-row align="center" class="mt-5" no-gutters style="height: 150px;"/>

      <v-row align="center" class="justify-center">
          <v-sheet class="pa-2 ma-2">
            <v-btn to="/register" color="#658415" style="font-weight: bolder; color: white;" class="mr-5">
              Register
            </v-btn>
            <v-btn to="/login" color="#8ca71f" style="font-weight: bolder; color: white;">
              Login
            </v-btn>
          </v-sheet>
      </v-row>

    </v-container>
</template>

<script setup>
</script>
