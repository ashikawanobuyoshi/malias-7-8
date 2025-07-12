<template>
  <div class="p-4">
    <h1>✅ トップページに来ました</h1>
    <h1 class="text-xl font-bold mb-2">ようこそ、{{ userName }} さん。</h1>
    <button
    @click="logout"
    class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
  >
    ログアウト
  </button>
    <h1 class="text-2xl font-bold mb-4">フォルダ内の画像ギャラリー</h1>

    <input
      v-model="folder"
      type="text"
      placeholder="例: 5_11koyama sama"
      class="border border-gray-300 p-2 rounded mb-4 w-full"
    />

    <button
      @click="fetchImages"
      class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
    >
      画像を読み込む
    </button>

    <div v-if="loading" class="mt-4 text-gray-500">読み込み中...</div>
    <div v-if="!loading && imagesData.length === 0" class="mt-4 text-gray-500">画像が見つかりません。</div>

    <div class="image-selector mt-10">
      <!-- モニター部 -->
      <div class="monitor-container">
        <div class="monitor monitor-left">
          <div class="image-wrapper">
            <img :src="leftImage.url" :alt="leftImage.fileName" />
          </div>
          <div class="image-name">{{ leftImage.fileName }}</div>
        </div>
        <div class="monitor monitor-right">
          <div class="image-wrapper">
            <img :src="rightImage.url" :alt="rightImage.fileName" />
          </div>
          <div class="image-name">{{ rightImage.fileName }}</div>
        </div>
      </div>

      <!-- スクロール連動トグル -->
      <div class="toggle-scroll-link">
        <label>
          <input type="checkbox" v-model="isScrollLinked" />
          サムネイルのスクロールを連動させる
        </label>
      </div>

      <!-- サムネイル部 -->
      <div class="thumbnail-container flex gap-4">
        <div ref="leftThumbnail" class="thumbnail left-thumbnail overflow-x-auto whitespace-nowrap w-full">
          <div class="flex gap-2">
            <div
              v-for="(img, index) in imagesData"
              :key="'left-' + index"
              class="thumbnail-item flex-shrink-0 w-32"
              :class="{ active: index === leftIndex }"
              @click="selectLeftImage(index)"
            >
              <img :src="img.url" :alt="img.fileName" class="w-full h-auto object-contain rounded" />
              <span class="thumb-name block text-center text-sm mt-1">{{ img.fileName }}</span>
            </div>
          </div>
        </div>

        <div ref="rightThumbnail" class="thumbnail right-thumbnail overflow-x-auto whitespace-nowrap w-full">
          <div class="flex gap-2">
            <div
              v-for="(img, index) in imagesData"
              :key="'right-' + index"
              class="thumbnail-item flex-shrink-0 w-32"
              :class="{ active: index === rightIndex }"
              @click="selectRightImage(index)"
            >
              <img :src="img.url" :alt="img.fileName" class="w-full h-auto object-contain rounded" />
              <span class="thumb-name block text-center text-sm mt-1">{{ img.fileName }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- お気に入り -->
      <div class="controls">
        <button @click="addLeftToFavorites">お気に入りに追加（左画像）</button>
        <button @click="addRightToFavorites">お気に入りに追加（右画像）</button>
      </div>

      <div class="favorites-nav">
        <NuxtLink to="/favorites">
          <button class="favorites-button">お気に入りページへ</button>
        </NuxtLink>
      </div>

      <div class="favorites">
        <h3>お気に入り画像</h3>
        <div class="favorites-gallery">
          <div
            v-for="(favImg, index) in favoritesStore.favoriteImages"
            :key="index"
            class="favorite-item"
            @click="removeFavorite(index)"
          >
            <img :src="favImg.url" :alt="favImg.fileName" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue'
import { useFavoritesStore } from '@/stores/favorites'
import { useRouter } from 'vue-router'
import { useCookie } from '#app'

const router = useRouter()

const logout = async () => {
  localStorage.removeItem('user')
  localStorage.removeItem('isAuthenticated')

  const isAuthenticated = useCookie('isAuthenticated')
  isAuthenticated.value = ''

  // ログインページに遷移
 await router.push('/login')
}

const userName = computed(() => {
  if (process.client) {
    try {
      const storedUser = localStorage.getItem('user')
      return storedUser ? JSON.parse(storedUser).name : 'ゲスト'
    } catch {
      return 'ゲスト'
    }
  }
  return 'ゲスト'
})

defineExpose({ logout })

const folder = ref('5_11koyama sama')
const imagesData = ref<any[]>([])
const loading = ref(false)


const leftIndex = ref(0)
const rightIndex = ref(0)

const leftImage = computed(() => imagesData.value[leftIndex.value] || { url: '', fileName: '画像がありません' })
const rightImage = computed(() => imagesData.value[rightIndex.value] || { url: '', fileName: '画像がありません' })

const favoritesStore = useFavoritesStore()

const leftThumbnail = ref<HTMLElement | null>(null)
const rightThumbnail = ref<HTMLElement | null>(null)
const isScrollLinked = ref(true)

let leftScrollHandler: (() => void) | null = null
let rightScrollHandler: (() => void) | null = null

const fetchImages = async () => {
  console.log('🧪 S3 fetch 処理をスキップ中')
  loading.value = true
  try {
    const res = await $fetch('/api/list-images', {
      method: 'GET',
      params: { folder: folder.value }
    })
     imagesData.value = res.images.map((img: { key: string; url: string }) => ({
      ...img,
      fileName: img.key.split('/').pop() || '(ファイル名不明)'
    }))
  } catch (err) {
    console.error('画像取得エラー:', err)
    imagesData.value = []
  } finally {
    loading.value = false
  }
}

function selectLeftImage(index: number) {
  leftIndex.value = index;
}

function selectRightImage(index: number) {
  rightIndex.value = index;
}

function addLeftToFavorites() {
    console.log('🟡 leftImage:', leftImage.value)
  if (leftImage.value) {
    addFavorite({ ...leftImage.value }); // ✅ オブジェクトを展開して渡す
  } else {
    alert('左画像が選択されていません');
  }
}

function addRightToFavorites() {
  console.log('🟡 rightImage:', rightImage.value)
  if (rightImage.value) {
    addFavorite({ ...rightImage.value }); // ✅ オブジェクトを展開して渡す
  } else {
    alert('右画像が選択されていません');
  }
}

function addFavorite(image: { url: string; fileName: string }) {
  console.log('🧪 addFavorite 呼び出し:', image);

  // 厳密に空文字や型もチェック
  if (!(typeof image.url === 'string' && image.url.trim() !== '') ||
      !(typeof image.fileName === 'string' && image.fileName.trim() !== '')) {
    console.warn('❌ URL または fileName が未定義または空文字です:', image);
    alert('画像データが正しく取得できませんでした');
    return;
  }

  if (favoritesStore.favoriteImages.find((fav) => fav.url === image.url)) {
    alert('この画像はすでにお気に入りに追加されています');
    return;
  }

  favoritesStore.addFavorite({
    fileName: image.fileName,
    url: image.url,
    selectedType: '',
    quantity: 1
  });

  console.log('✅ 追加後のお気に入り一覧:', favoritesStore.favoriteImages);
}


function removeFavorite(index: number) {
  favoritesStore.removeFavorite(index)
}

onMounted(() => {
    console.log('✅ index.vue マウントされました')

  const isAuth = useCookie('isAuthenticated')
  console.log('🟣 isAuthenticated クッキー値:', isAuth.value)

  console.log('🧭 現在のルート:', router.currentRoute.value.fullPath)


  const storedFavorites = localStorage.getItem('favoriteImages')
  if (storedFavorites) {
    try {
      const parsed = JSON.parse(storedFavorites)
      // 配列の内容をPiniaのfavoriteImagesに差し替える
      favoritesStore.favoriteImages.splice(0, favoritesStore.favoriteImages.length, ...parsed)
    } catch (error) {
      console.error('localStorage からの復元に失敗しました:', error)
    }
  }
})


watch(
  () => favoritesStore.favoriteImages,
  (newVal) => {
    localStorage.setItem('favoriteImages', JSON.stringify(newVal))
  },
  { deep: true }
)

watchEffect(() => {
  if (!leftThumbnail.value || !rightThumbnail.value) return

  leftThumbnail.value.removeEventListener('scroll', leftScrollHandler as EventListener)
  rightThumbnail.value.removeEventListener('scroll', rightScrollHandler as EventListener)

  if (isScrollLinked.value) {
    leftScrollHandler = () => {
      if (rightThumbnail.value && leftThumbnail.value) {
        rightThumbnail.value.scrollLeft = leftThumbnail.value.scrollLeft
      }
    }
    rightScrollHandler = () => {
      if (leftThumbnail.value && rightThumbnail.value) {
        leftThumbnail.value.scrollLeft = rightThumbnail.value.scrollLeft
      }
    }
    leftThumbnail.value.addEventListener('scroll', leftScrollHandler)
    rightThumbnail.value.addEventListener('scroll', rightScrollHandler)
  } else {
    leftScrollHandler = null
    rightScrollHandler = null
  }
})
</script>

<style scoped>
/* 必要に応じてスタイル追加 */
.toggle-scroll-link {
  margin: 1em;
}

.image-selector {
  max-width: 1200px;
  margin: 0 auto;
}

.monitor-container {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
.monitor {
  flex: 1;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible;
  position: relative;
}
.image-wrapper {
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.monitor img {
  max-width: 100%;
  max-height: 100%;
}
.image-name {
  width: 100%;
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  padding: 8px;
  box-sizing: border-box;
  font-weight: bold;
  overflow-wrap: break-word;
}

.thumbnail-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
}
.thumbnail {
  flex: 1;
  height: 180px;
  overflow-x: auto;
  border: 1px solid #ccc;
  display: flex;
  gap: 10px;
  padding: 5px;
}
.thumbnail-item {
  position: relative;
}
.thumbnail-item.active {
  background-color: #e0e0e0; /* 追加 */
}
.thumbnail-item img {
  display: block;
  height: 100%;
}
.thumb-name {
  display: block;
  text-align: center;
  margin-top: 5px;
  font-size: 14px;
  color: #333;
  background: rgba(255, 255, 255, 0.9);
  padding: 4px 6px;
  border-radius: 4px;
  overflow-wrap: break-word;
}

.controls,
.favorites-nav {
  text-align: center;
  margin-bottom: 20px;
}
.favorites-button {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
}

.favorites {
  border-top: 1px solid #ccc;
  padding-top: 20px;
}
.favorites-gallery {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.favorite-item {
  cursor: pointer;
}
.favorite-item img {
  width: 100px;
  border: 1px solid #ccc;
}
.favorite-button {
  display: inline-flex;
  align-items: center;
  gap: 8px; /* アイコンとテキストの隙間 */
  padding: 8px 12px;
  font-size: 16px;
  cursor: pointer;
}

/* 右用ボタンはアイコンを右側に */
.right-favorite {
  flex-direction: row-reverse;
}
</style>