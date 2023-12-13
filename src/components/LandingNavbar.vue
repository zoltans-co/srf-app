<template>
  <nav>
    <v-app-bar flat app style="background: white;">
      <v-toolbar-title class="light-green--text text-sm-h5">
        <v-btn text to="/" color="light-green">
          <span class="font-weight-black">investo</span>
          <span class="font-weight-regular">nom</span>
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        to="/register"
        text="Register"
        color="light-green"
        class="text-sm-h6 text-lowercase"
      >
        <span>Register</span>
      </v-btn>

      <v-btn
        to="/login"
        text="Login"
        color="light-green"
        class="text-sm-h6 text-lowercase"
      >
        <span>Login</span>
      </v-btn>
    </v-app-bar>
  </nav>
</template>
