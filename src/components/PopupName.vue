<template>
  <div class="popup" tabindex="-1">
    <div class="popup_container">
      <h3 class="popup_text">New name for "{{ folderName }}"</h3>
      <div>
        <input class="popup_input" type="text" v-model="newName" />
        <button @click="submitRenameFolder" @keyup.enter="submitRenameFolder">
          submit
        </button>
      </div>
      <span class="popup_close" @click="closePopup">&times;</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newName: ''
    }
  },
  props: {
    folderName: { type: String }
  },
  methods: {
    submitRenameFolder () {
      this.$emit('cahnge-name', this.newName)
    },
    closePopup () {
      this.$emit('close-popup')
    }
  }
}
</script>

<style scoped>
.popup {
  background: rgba(64, 64, 64, 0.4);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
}

.popup_container {
  width: 350px;
  height: 110px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  top: 50px;
  background: #fff;
  border: 1px solid grey;
  border-radius: 5px;
  align-items: center;
}

.popup_text {
  margin-bottom: 10px;
  width: 300px;
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.popup_input {
  margin-right: 5px;
}

.popup_close {
  position: relative;
  bottom: 70px;
  left: 160px;
  font-size: 20px;
  cursor: pointer;
}
</style>
