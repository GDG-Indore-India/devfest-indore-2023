<template>
    <v-col class="section">
        <h2>Explore Previous Devfest Livestreams</h2>
        <v-row class="main">
        <YtCard
          :videoUrl="firstVideoUrl"
          :thumbnailUrl="firstThumbnailUrl"
          :videoTitle="firstVideoTitle"
          :EventDate="EventDate"
          :EventTime="EventTime"
          :videoDescription="firstVideoDescription"
        />
        <YtCard
          :videoUrl="secondVideoUrl"
          :thumbnailUrl="secondThumbnailUrl"
          :videoTitle="secondVideoTitle"
          :EventDate="secondEventDate"
          :EventTime="secondEventTime"
          :videoDescription="secondVideoDescription"
        />
        <YtCard
          :videoUrl="thirdVideoUrl"
          :thumbnailUrl="thirdThumbnailUrl"
          :videoTitle="thirdVideoTitle"
          :EventDate="thirdEventDate"
          :EventTime="thirdEventTime"
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
            firstVideoUrl: "https://www.youtube.com/watch?v=9XaS93WMRQQ",
            firstThumbnailUrl: "https://img.youtube.com/vi/GO32M5G5mm4/maxresdefault.jpg",
            firstVideoTitle: "Devfest Indore 2022",
            firstVideoDescription: "An annual decentralized tech conference hosted by Google Developer Group Indore organized for local developers to connect, learn and innovate together.",
            EventDate: "October 2022",
            EventTime: "10:00 AM - 5:00 PM ( IST )",

            // Second Card
            secondVideoUrl: "https://www.youtube.com/watch?v=9XaS93WMRQQ",
            secondThumbnailUrl: "https://img.youtube.com/vi/GO32M5G5mm4/maxresdefault.jpg",
            secondVideoTitle: "Devfest Indore 2022 | Day 2",
            secondVideoDescription: "An annual decentralized tech conference hosted by Google Developer Group Indore organized for local developers to connect, learn and innovate together.",
            secondEventDate: "October 2022",
            secondEventTime: "10:00 AM - 5:00 PM ( IST )",

            // Third Card
            thirdVideoUrl: "https://www.youtube.com/watch?v=9XaS93WMRQQ",
            thirdThumbnailUrl: "https://img.youtube.com/vi/GO32M5G5mm4/maxresdefault.jpg",
            thirdVideoTitle: "Devfest Indore 2022 | Day 3",
            thirdVideoDescription: "An annual decentralized tech conference hosted by Google Developer Group Indore organized for local developers to connect, learn and innovate together.",
            thirdEventDate: "October 2022",
            thirdEventTime: "10:00 AM - 5:00 PM ( IST )",
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