<template>
    <v-container id="livestream">
      <h2 class="google-font" style="text-align: center;">Devfest Indore 2023 Livestreams</h2>
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
    name: "YTLiveStreams",
    components: {
        YtCard
    },
    data() {
        return {
            videoData: [
                // First Card
                {
                    videoUrl: "https://www.youtube.com/watch?v=4tdrcd1H1sw",
                    thumbnailUrl: "https://s3-alpha-sig.figma.com/img/3955/7613/de75b383dceda612b7ceccc3f011be8e?Expires=1701648000&Signature=psnKsyb4reS3-MlviV~9CBAdQqxggwkgRuKFiP1VNoyaIa-YBCotPvWlyBo2c0sgXG3YG08QEW6aOiTlrmVkI~GopnpQFJ5yOQk~HQC2eLxKVZm8wwDtWgmZQMW1Od-bL5iddvIfTgiaHMHwn~6ep8TZC0SVjF5XPM-6hAGq35reUEIrnNzPOSGQ0YXebEYyG4YEuqzDVB9wBsHY66c9fSjsBDupj9cu-qWh6OHsNNsGxBUYM34QmMdfcS3OiA8jkrFKBiHC-QVFjPII9OfSKtxRPS3Wopxf4I-c33iHhPe3u0WsEKwWOhFWOGNNaHFsshNGnj8LvsludSistBCOkQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                    videoTitle: "Devfest Indore 2023 - Web Track | 26th November 2023",
                    videoDescription: "An annual decentralized tech conference hosted by Google Developer Group Indore organized for local developers to connect, learn and innovate together.",
                } ,
                // Second Card
                {
                    videoUrl: "https://www.youtube.com/watch?v=9J0NaiHN1SQ",
                    thumbnailUrl: "https://s3-alpha-sig.figma.com/img/64f5/5080/dcb1790fb88f46eafb94e13157a4c8a4?Expires=1701648000&Signature=AzzQ0AnSizam46yldz7Jvx-gFI4UbZSkp9b7IIaM7eIKZlQNOJDDgTpZ45J95AhTe0gLSEL8KsILoNWausYKLZRh-5rOa3JB4dGa80ccIN7UssBDmtuV5DYfM2dJuxBRi5B~WDXNDez8XIL7YDRbe9CWnuCfMUNf-YDoccwmIowER6TnitPNzIEvK2A3AZhcozq5oFbiZWs4-fx6~XsrwZ330~ePB5Rspk6RPrPvZdYCOU~gzBW3gL2Z9vqhjX6sQMjs53U4F78hZggNMfMeQLEUoEsDXfqzKvCNOD0cdcZg6Hia9o0BwCjDyzTZJC3ONumZppNfjeC5c8u8QhsA1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                    videoTitle: "Devfest Indore 2023 - Cloud Track | 26th November 2023",
                    videoDescription: "An annual decentralized tech conference hosted by Google Developer Group Indore organized for local developers to connect, learn and innovate together.",
                },
                // Third Card
                {
                    videoUrl: "https://www.youtube.com/watch?v=eDaopznLUAA",
                    thumbnailUrl: "https://s3-alpha-sig.figma.com/img/cd23/8c5e/f6312219fb12061098089f43d0017599?Expires=1701648000&Signature=fma4GNfQe-3RssSxFJiSSz7TvaJTT8Isax79iK1bIlVsrYMT7YeRdVbtF6nH8D8B0WVNK2S01wkdj7lUb2Ch0Hi5SLnvyGo1N-qFlmmuRmA1eynNd4gp0egO7cS18yA0C0lcwgA9ldTa7Bt5cIBNKELMfan9S6aptzY29v5GJMyDTGkHpb5f2qWNXToUFjOCFjEPv52XjvABaY3tkOjzNnvi0g-AukWabuMsCJ~4CzvIsj5PPqqLtn8T7JgAOY8lcfg5pauW~B0gq47Ebd8soLKOlN8atCmMaV06AnZdtF82TAvcUq2uFoOc05NMZPY-IGgtYI22sDBnHzacSO54Nw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                    videoTitle: "Devfest Indore 2023 - ML Track | 26th November 2023",
                    videoDescription: "An annual decentralized tech conference hosted by Google Developer Group Indore organized for local developers to connect, learn and innovate together.",
                }
            ]
        }
    }
}
</script>

<style source>
</style>
