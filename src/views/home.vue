<template>
  <v-app class="grey lighten-4">
    <LandingNavbar />

    <InomLandingContent />
  </v-app>
</template>

<script setup>
  import LandingNavbar from "@/components/LandingNavbar";
  import InomLandingContent from "@/components/landing/ImLandingContent";
  { InomLandingContent, LandingNavbar }
</script>
