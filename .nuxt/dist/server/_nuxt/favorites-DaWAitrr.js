import { defineStore } from "pinia";
const useFavoritesStore = defineStore("favorites", {
  state: () => ({
    favoriteImages: []
  }),
  actions: {
    addFavorite(newFavorite) {
      console.log("addFavorite が呼び出されました:", newFavorite);
      this.favoriteImages.push(newFavorite);
    },
    removeFavorite(index) {
      console.log(`removeFavorite が呼び出されました: index=${index}`);
      this.favoriteImages.splice(index, 1);
    },
    setFavoriteImages(images) {
      this.favoriteImages = images;
    }
  }
});
export {
  useFavoritesStore as u
};
//# sourceMappingURL=favorites-DaWAitrr.js.map
