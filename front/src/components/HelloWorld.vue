<template>
  <v-card class="px-4 mx-auto mt-7" max-width="450">
    <template  v-if="messages.length">
      <v-badge
        bordered
        color="red"
        overlap
        :content="messages.length"
      >
        <v-btn icon>
          <v-icon>mdi-bell</v-icon>
        </v-btn>
      </v-badge>

      <v-list three-line>
        <template v-for="(message, index) in messages">
          <v-subheader
            v-if="message.header"
            :key="message.header"
            v-text="message.header"
          ></v-subheader>

          <v-divider v-if="index" :key="index" inset></v-divider>

          <v-list-item :key="message.title">
            <v-list-item-avatar>
              <v-img :src="message.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="message.title"></v-list-item-title>
              <v-list-item-subtitle
                v-html="message.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </template>
      <h2 v-else>
        Esperando a que el servidor emita ...
      </h2>
  </v-card>
</template>

<script>
export default {
  name: "HelloWorld",
  mounted() {
    this.listenPusher();
  },
  methods: {
    listenPusher() {
      try {
        var channel = this.$pusher.subscribe("notifications");
        channel.bind("admin-va", (notification) => {
          this.messages.push(notification);
        });
      } catch (error) {
        console.log("error en pusher", error);
      }
    },
  },
  data() {
    return {
      messages: [],
    };
  },
};
</script>
