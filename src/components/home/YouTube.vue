<template>
  <v-container fluid class=" px-2">
    <v-row justify="center" align="center">
      <v-col v-for="item in youtube" :key="item.day" md="6" sm="6" cols="12">
        <div
          class="pa-2"
          style="
          background: #ffffff 0% 0% no-repeat padding-box;
          border:1px solid #e0e0e0;
          border-radius: 10px;
          opacity: 1;
        "
        >
          <v-img :src="item.img" style="border-radius:8px"></v-img>
          <div class="pa-2">
            <p class="google-font mt-2 mb-0" style="font-size: 80%">
              {{ item.date }}
              <br />{{ item.time }}
            </p>
            <p class="google-font mb-3" style="font-size:110%">
              {{ item.day }}
            </p>
            <v-btn
              :href="item.link"
              target="_blank"
              small
              outlined
              color="red"
              style="text-transform: capitalize"
              class="ml-0 google-font"
            >
              <v-icon size="20px" class="mr-1">{{
                item.type == "Watch Now"
                  ? "mdi-access-point"
                  : "mdi-bell-outline"
              }}</v-icon
              >{{ item.type }}
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    youtube: [
      {
        day: "#IWDIndia2022 | Day 1",
        date: "April 02",
        type: "Watch Now",
        link: "https://bit.ly/iwdindia22-d1",
        time: "03:00 PM - 07:00 PM (IST)",
        img: "https://img.youtube.com/vi/enJs6w0QFog/mqdefault.jpg",
      },
      {
        day: "#IWDIndia2022 | Day 2",
        date: "April 03",
        type: "Watch Now",
        link: "https://bit.ly/iwdindia22-d2",
        time: "03:00 PM - 07:00 PM (IST)",
        img: "https://img.youtube.com/vi/enJs6w0QFog/mqdefault.jpg",
      },
    ],
  }),
};
</script>

<style></style>
