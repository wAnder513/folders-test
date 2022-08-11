<template>
  <div class="folder-item">
    <div class="folder-item_container">
      <img
        class="folder-item_icon"
        :class="space"
        :src="require(`../assets/img/${folder.type}.png`)"
        alt="folder"
      />
      <div class="folder-item_name">{{ folder.name }}</div>
    </div>

    <div class="folder-item_buttons">
      <popup-name
        v-if="isOpenRenameFolder"
        :folder-name="folder.name"
        @cahnge-name="submitRenameFolder"
        @close-popup="closePopup"
      ></popup-name>
      <i class="material-icons folder-item_edit" @click="renameElem">edit</i>
      <i class="material-icons folder-item_delete" @click="remoteElem"
        >delete</i
      >
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
import { mapActions } from 'vuex'
import PopupName from './PopupName.vue'
export default {
  components: { PopupName },
  data () {
    return {
      isOpenRenameFolder: false
    }
  },
  props: {
    folder: { type: Object, requared: true }
  },
  computed: {
    space () {
      return `space-${this.folder.space}`
    }
  },
  methods: {
    ...mapActions(['remoteElement', 'renameElement']),
    remoteElem () {
      this.remoteElement({
        id: this.folder.id,
        parentsId: this.folder.parentsId
      })
    },
    renameElem () {
      this.isOpenRenameFolder = true
    },
    submitRenameFolder (newName) {
      this.renameElement({
        id: this.folder.id,
        parentsId: this.folder.parentsId,
        newNameFolder: newName
      })
      this.isOpenRenameFolder = false
    },
    closePopup () {
      this.isOpenRenameFolder = false
    }
  }
}
</script>

<style scoped>
.folder-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.folder-item_name {
  width: 150px;
  text-align: start;
  margin-right: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.folder-item_buttons {
  display: flex;
}

.folder-item_input {
  max-width: 100px;
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

.folder-item_edit {
  margin-right: 5px;
}

.folder-item_edit,
.folder-item_delete {
  cursor: pointer;
}

.folder-item_delete:focus,
.folder-item_delete:hover,
.folder-item_edit:focus,
.folder-item_edit:hover {
  color: #1b232c;
}

.folder-item_from {
  display: flex;
}

.space-4 {
  margin-left: 8px;
}

.space-8 {
  margin-left: 8px;
}

.space-12 {
  margin-left: 12px;
}

.space-16 {
  margin-left: 16px;
}
</style>
