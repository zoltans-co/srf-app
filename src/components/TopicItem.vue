<template>
  <v-container xs4 md1 class="order-0 align-content-center">
    <h1 class="caption ml-3 font-weight-medium" style="color: #8ca71f"> {{ topicObject.name }} </h1>
    <div class="ml-3 im-font-size" style="font-weight: normal;">

      <PublicationItem v-for="publication in topicObject.publications" :key="publication.id" :publicationObject="publication" />

    </div>
  </v-container>
</template>

<script>
import PublicationItem from "@/components/PublicationItem.vue";

export default {
  components: {PublicationItem},
  props: {
    topicObject: Object
  },
};
</script>