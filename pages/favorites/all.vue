<template>
    <div class="favorites-gallery">
      <h2>お気に入り一覧</h2>
      <div v-if="favoritesStore.favoriteImages.length === 0">
        お気に入り画像はありません
      </div>
      <div v-else>
  <div  v-for="(favImg, index) in favoriteImages" :key="index">
    <!-- ✅ 修正：favImg.fileName を使う -->
    {{ favImg.fileName }}
    
    <img :src="favImg.url" alt="Favorite Image" />
    <div class="fav-image-name">{{ favImg.fileName }}</div>

    <NuxtLink :to="`/favorites/details/${index}`" class="details-link">
      詳細を見る
    </NuxtLink>
  </div>
</div>

    </div>
  </template>
  
  <script setup lang="ts">
  import { useFavoritesStore } from '@/stores/favorites'
  import { storeToRefs } from 'pinia'

const { favoriteImages } = storeToRefs(favoritesStore)
  
  const favoritesStore = useFavoritesStore()
  </script>
  
  <style scoped>
  .favorites-gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 20px;
  }
  .favorite-item {
    cursor: pointer;
    border: 1px solid #ccc;
    padding: 10px;
  }
  .favorite-item img {
    width: 100px;
    height: auto;
  }
  .details-link {
    margin-top: 10px;
    display: block;
    text-decoration: none;
    color: #007bff;
  }
  </style>