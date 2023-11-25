<template>
    <v-container>
      <h2 class="google-font" style="text-align: center; width: 100%;">Explore Previous Devfest Livestreams</h2>
      <v-row>
        <v-col
        v-for="(video, index) in videoData"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="4"
      >
        <YtCard
          :videoUrl="video.videoUrl"
          :thumbnailUrl="video.thumbnailUrl"
          :videoTitle="video.videoTitle"
          :videoDescription="video.videoDescription"
        />
        </v-col>
      </v-row>
    </v-container>
  </template>

<script source>
import YtCard from './YtCard.vue';

export default {
    name: "YtCards",
    components: {
        YtCard
    },
    data() {
        return {
            videoData: [
                // First Card
                {
                    videoUrl: "https://youtu.be/GO32M5G5mm4?si=b3Zqy26lrRMGm87R",
                    thumbnailUrl: "https://img.youtube.com/vi/GO32M5G5mm4/maxresdefault.jpg",
                    videoTitle: "Devfest Indore 2022",
                    videoDescription: "An annual decentralized tech conference hosted by Google Developer Group Indore organized for local developers to connect, learn and innovate together.",
                } ,
                // Second Card
                {
                    videoUrl: "https://youtu.be/MyCjsFWwNm8?si=Gj0J-w5bl9I7NVgJ",
                    thumbnailUrl: "https://img.youtube.com/vi/MyCjsFWwNm8/maxresdefault.jpg",
                    videoTitle: "Devfest Indore 2019",
                    videoDescription: "An annual decentralized tech conference hosted by Google Developer Group Indore organized for local developers to connect, learn and innovate together.",
                },
                // Third Card
                {
                    videoUrl: "https://youtu.be/s9IO5SAazzw?si=bz55fqi6iZi7Kb51",
                    thumbnailUrl: "https://img.youtube.com/vi/CKvi3sT3gU8/maxresdefault.jpg",
                    videoTitle: "Devfest Indore 2018",
                    videoDescription: "An annual decentralized tech conference hosted by Google Developer Group Indore organized for local developers to connect, learn and innovate together.",
                }
            ]
        }
    }
}
</script>

<style source>
</style>
