<template>
    <v-col class="section">
        <h2 class="google-font">Explore Previous Devfest Livestreams</h2>
        <v-row class="main">
        <YtCard
            class="card"
            v-for="(video, index) in videoData"
            :key="index"
            :videoUrl="video.videoUrl"
            :thumbnailUrl="video.thumbnailUrl"
            :videoTitle="video.videoTitle"
            :videoDescription="video.videoDescription"
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
