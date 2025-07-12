// stores/favorites.ts
import { defineStore } from 'pinia'

// stores/favorites.ts
export interface FavoriteImage {
  fileName: string;
  url: string;
}

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favoriteImages: [] as FavoriteImage[],
  }),
  actions: {
    addFavorite(image: FavoriteImage) {
      this.favoriteImages.push(image);
    },
    removeFavorite(index: number) {
      this.favoriteImages.splice(index, 1);
    }
  },
  persist: true
});


