<template>
  <div class="imLandingContent">
    <v-container>
      <ImLandingLogo />
      <!--ImLandingFeatures /-->
      <ImLandingFooter />
    </v-container>
  </div>
</template>
<script>
import ImLandingLogo from "@/components/landing/ImLandingLogo";
// import ImLandingFeatures from "@/components/landing/ImLandingFeatures";
import ImLandingFooter from "@/components/landing/ImLandingFooter";
export default {
  //components: { ImLandingFooter, ImLandingFeatures, ImLandingLogo }
  components: { ImLandingLogo, ImLandingFooter }
};
</script>
