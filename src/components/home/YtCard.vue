<template>
  <v-card class="custom-card">
    <v-img class="custom-thumbnail" :src="thumbnailUrl" alt="Video Thumbnail"></v-img>
    <v-card-content >
      <v-row>
        <v-col class="custom-content">
          <div class="custom-title">{{ videoTitle }}</div>
          <div class="custom-description">{{ videoDescription }}</div>
        </v-col>
      </v-row>
      <v-row>
        <a :href="videoUrl" target="_blank" class="custom-watch-now">
          <div class="btn">
            <img src="../../../public/play-button.png" alt="play button" class="iconimg"/>
            <span class="watch">Watch Now</span>
          </div>
        </a>
      </v-row>
    </v-card-content>
  </v-card>
</template>

<script>
export default {
  props: {
    videoUrl: String,
    thumbnailUrl: String,
    videoTitle: String,
    videoDescription: String,
  },
};
</script>

<style scoped>
.custom-card {
  max-width: 30%;;
  padding: 16px;
  border-radius: 16px;
  height: 25rem;
  margin: 1rem 0;
  background-color: white;
}

.custom-thumbnail {
  height: 40%;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 3rem;
}

.custom-title {
  font-size: 18px;
  font-weight: 800;
  padding: 0 0px 10px 0;
}

.custom-description {
  font-size: 14px;
  color: #666;
}

.custom-watch-now {
  width: 100%;
  text-decoration: none;
  padding: 12px;
}

.btn {
  border-color: #f44336;
  color: #f44336;
  border: solid 1px #f44336;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn:hover {
  box-shadow: #f44336 0px 0px 0px 1px;
}

.iconimg {
  width: 30px;
  height: 30px;
  margin-right: 8px;
}
</style>
s