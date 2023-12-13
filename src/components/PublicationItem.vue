<template>
  <v-container xs4 md1 class="order-0 align-content-center">

    <h2 class="caption ml-3 font-weight-medium"> {{ publicationObject.title }} </h2>
    <h3 class="caption ml-3 font-weight-medium"> {{ publicationObject.summary }} </h3>
    <h4 class="caption ml-3 font-weight-medium"> {{ publicationObject.content }} </h4>


  </v-container>
</template>

<script>
export default {
  props: {
    publicationObject: Object
  },
};
</script>