import { defineStore } from 'pinia';

const useFavoritesStore = defineStore("favorites", {
  state: () => ({
    favoriteImages: []
  }),
  actions: {
    addFavorite(newFavorite) {
      console.log("addFavorite \u304C\u547C\u3073\u51FA\u3055\u308C\u307E\u3057\u305F:", newFavorite);
      this.favoriteImages.push(newFavorite);
    },
    removeFavorite(index) {
      console.log(`removeFavorite \u304C\u547C\u3073\u51FA\u3055\u308C\u307E\u3057\u305F: index=${index}`);
      this.favoriteImages.splice(index, 1);
    },
    setFavoriteImages(images) {
      this.favoriteImages = images;
    }
  }
});

export { useFavoritesStore as u };
//# sourceMappingURL=favorites-DaWAitrr.mjs.map
