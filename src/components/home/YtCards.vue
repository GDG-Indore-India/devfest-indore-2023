<template>
    <v-col class="section">
        <h2 class="google-font">Explore Previous Devfest Livestreams</h2>
        <v-row class="main">
        <YtCard
        class="card"
          :videoUrl="firstVideoUrl"
          :thumbnailUrl="firstThumbnailUrl"
          :videoTitle="firstVideoTitle"
          :videoDescription="firstVideoDescription"
        />
        <YtCard
        class="card"
          :videoUrl="secondVideoUrl"
          :thumbnailUrl="secondThumbnailUrl"
          :videoTitle="secondVideoTitle"
          :videoDescription="secondVideoDescription"
        />
        <YtCard
        class="card"
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
    display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-gap: 1rem;
        margin: 0 auto;
}

@media screen and (max-width: 960px) {
    .main {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .card {
        margin: 1rem 0;
    }
    
}

@media screen and (max-width: 600px) {
    .section {
        margin: 1rem 0;
        width: 100vw;
    }

    .main {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}
</style>
