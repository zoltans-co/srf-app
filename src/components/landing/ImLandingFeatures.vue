<template>
  <v-container class="mt-15 mb-5">

    <v-row align="center" class="justify-center" no-gutters style="height: 150px;">
        <v-sheet class="pa-2 ma-2">
          <h2 class="text-sm-h4 mb-1" style="color: #8ca71f;">
            What is Investonom?
          </h2>
        </v-sheet>
      <v-sheet class="pa-2 ml-5 mr-5">
        <p
          class="text-sm-h5 font-weight-regular text-justify text-md-center py-3"
        >
          Investonom is a 100% automatic and high tech tool that helps you to
          review, simulate and plan your finances. With some very easy steps you
          can analyze and optimize your financial situation and plans for future.
          This tool learns your decisions and helps you to forecast and simulate
          possible scenarios to see all their outcomes. This tool helps you to
          make very vise and optimal decisions with the resources that you already
          have.
        </p>
      </v-sheet>
    </v-row>

    <v-row align="center" class="justify-center" no-gutters style="height: 150px;">
      <v-sheet class="mt-15 pa-2 ml-5 mr-5">
        <h2 class="text-sm-h4 mb-8" style="color: #8ca71f;">
          Investonom Features
        </h2>
      </v-sheet>
    </v-row>

  </v-container>

  <!--v-layout row text-center class="mx-2">
    <v-flex mb-5>
      <h2 class="text-sm-h4 mb-8" style="color: #8ca71f;">
        Investonom Features
      </h2>

      <v-row>
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          cols="12"
          xs="12"
          md="6"
          lg="4"
        >
          <h3 class="text-sm-h5 font-weight-medium">
            {{ feature.title }}
          </h3>
          <p class="text-sm-h5 font-weight-regular text-justify py-4">
            {{ feature.description }}
          </p>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout-->
</template>

<script>
export default {
  data: () => ({
    features: [
      {
        title: "Innovative Ideas",
        description:
          "We have implemented for you the most innovative ideas regarding\n" +
          "              personal finances. We do the hard work for you in a couple of\n" +
          "              miliseconds."
      },
      {
        title: "Always up to date",
        description:
          "Would you like to know what happens in the world, that could\n" +
          "              affect your finances? No problem! We inform you about major\n" +
          "              changes in the finance world (for instance inflation or\n" +
          "              deflation rate and much more)."
      },
      {
        title: "Easy to use",
        description:
          "Our team has designed this product to be easy understandable and\n" +
          "              easy to use even if you are not expert in finances. No mather\n" +
          "              what is your financial plan, we will guide you to achieve it."
      },
      {
        title: "Dedicated Support",
        description:
          "Our Team is answering all your questions regarding our product\n" +
          "              in 24 hours via e-mail. We believe that Customer Support is very\n" +
          "              important."
      },
      {
        title: "Perfect privacy",
        description:
          "Your data is your property, we don't use it for other purposes\n" +
          "              than making calculations and forecasting your finances for you.\n" +
          "              You and only you can read it and change it or even delete it."
      },
      {
        title: "No commercials",
        description:
          "Our product is not based on the foreign companys advertisments.\n" +
          "              We are not interested in selling any foreign products on our\n" +
          "              website or any of your data to foreign companys. We believe that\n" +
          "              you should pay with your money if you want for our services and\n" +
          "              not with your data or your privacy."
      }
    ]
  })
};
</script>
