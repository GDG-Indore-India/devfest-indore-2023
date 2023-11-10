<template>
    <v-col class="section">
        <h2>Explore Previous Devfest Livestreams</h2>
        <v-row class="main">
        <YtCard
          :videoUrl="firstVideoUrl"
          :thumbnailUrl="firstThumbnailUrl"
          :videoTitle="firstVideoTitle"
          :videoDescription="firstVideoDescription"
        />
        <YtCard
          :videoUrl="secondVideoUrl"
          :thumbnailUrl="secondThumbnailUrl"
          :videoTitle="secondVideoTitle"
          :videoDescription="secondVideoDescription"
        />
        <YtCard
          :videoUrl="thirdVideoUrl"
          :thumbnailUrl="thirdThumbnailUrl"
          :videoTitle="thirdVideoTitle"
          :videoDescription="thirdVideoDescription"
        />
        </v-row>
    </v-col>
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
            // First Card 
            firstVideoUrl: "https://youtu.be/GO32M5G5mm4?si=b3Zqy26lrRMGm87R",
            firstThumbnailUrl: "https://img.youtube.com/vi/GO32M5G5mm4/maxresdefault.jpg",
            firstVideoTitle: "Devfest Indore 2022",
            firstVideoDescription: "An annual decentralized tech conference hosted by Google Developer Group Indore organized for local developers to connect, learn and innovate together.",

            // Second Card
            secondVideoUrl: "https://youtu.be/MyCjsFWwNm8?si=Gj0J-w5bl9I7NVgJ",
            secondThumbnailUrl: "https://img.youtube.com/vi/MyCjsFWwNm8/maxresdefault.jpg",
            secondVideoTitle: "Devfest Indore 2019",
            secondVideoDescription: "An annual decentralized tech conference hosted by Google Developer Group Indore organized for local developers to connect, learn and innovate together.",

            // Third Card
            thirdVideoUrl: "https://youtu.be/s9IO5SAazzw?si=bz55fqi6iZi7Kb51",
            thirdThumbnailUrl: "https://img.youtube.com/vi/CKvi3sT3gU8/maxresdefault.jpg",
            thirdVideoTitle: "Devfest Indore 2018",
            thirdVideoDescription: "An annual decentralized tech conference hosted by Google Developer Group Indore organized for local developers to connect, learn and innovate together.",
        }
    }
}
</script>

<style source>
.section {
    margin: 2rem 0;
}

.main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
}
</style>