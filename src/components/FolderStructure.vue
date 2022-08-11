<template>
  <folder-structure-item
    v-for="folder in folders"
    :key="folder.id"
    :folder="folder"
  ></folder-structure-item>
</template>

<script>
import { mapGetters } from 'vuex'
import FolderStructureItem from './FolderStructureItem.vue'

export default {
  components: { FolderStructureItem },
  computed: {
    ...mapGetters({ folders: 'getAllFolders' })
  }
}
</script>
