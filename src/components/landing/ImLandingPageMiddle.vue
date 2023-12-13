<template>
    <v-container class="mt-15">

      <v-row align="center" style="height: 150px;">
        <v-col>
          <v-sheet class="pa-2 ma-2">
            <h1
              class="text-sm-h2 font-weight-regular mt-sm-16 mt-16 mb-3 text-center"
              style="color: #8ca71f;"
            >
              SRF Demo News
            </h1>
          </v-sheet>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" style="height: 150px;">
        <v-col>
          <v-sheet class="pa-md-10 ma-lg-10">
            <v-responsive>
                <TopicItem v-for="topic in topics" :key="topic.id" :topicObject="topic" />
            </v-responsive>
          </v-sheet>
        </v-col>
      </v-row>

    </v-container>
</template>

<script>
import ApiService from "@/services/ApiService";
import TopicItem from "@/components/TopicItem.vue";

export default {
  components: {
    TopicItem
  },
  data() {
    return {
      topics: []
    };
  },
  created() {
    ApiService.getAllTopics()
        .then(response => {
          this.topics = response.data;
          // console.log(response);
        })
        .catch(error => {
          console.log("There was an error:", error.response);
        });
  }
};
</script>