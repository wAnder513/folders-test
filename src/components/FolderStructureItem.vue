<template>
  <div class="folder-item">
    <div class="folder-item_container">
      <div :class="space"></div>
      <img
        class="folder-item_icon"
        :src="require(`../assets/img/${folder.type}.png`)"
        alt="folder"
      />
      <div>{{ folder.name }}</div>
    </div>

    <div>
      <button >edit</button>
      <button @click="remoteElem">remote</button>
    </div>
  </div>

  <div v-if="folder.attachedFiles && folder.attachedFiles.length > 0">
    <folder-structure-item
      v-for="item in folder.attachedFiles"
      :key="item.id"
      :folder="item"
    >
    </folder-structure-item>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: {
    folder: { type: Object, requared: true },
  },
  computed: {
    space() {
      return `space-${this.folder.space}`;
    },
  },
  methods: {
    ...mapActions(['remoteElement']),
    remoteElem() {
      this.remoteElement(this.folder.id)
    },
  },
};
</script>

<style scoped>
.folder-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.folder-item_container {
  display: flex;
  align-items: center;
}

.folder-item_icon {
  width: 24px;
  height: 24px;
  margin-right: 5px;
}

.space-4 {
  margin-right: 4px;
}

.space-8 {
  margin-right: 8px;
}

.space-12 {
  margin-right: 12px;
}

.space-16 {
  margin-right: 16px;
}
</style>
