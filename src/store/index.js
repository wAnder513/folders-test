import { createStore } from 'vuex'

export default createStore({
  state: {
    allFolders: [
      {
        id: 0,
        name: 'Dir 1',
        space: 0,
        type: 'folder',
        parentsId: [],
        attachedFiles: [
          {
            id: 1,
            name: 'Dir 1-1',
            space: 4,
            type: 'folder',
            parentsId: [0],
            attachedFiles: [
              {
                id: 3,
                name: 'File 1-1-1',
                space: 12,
                type: 'file',
                parentsId: [0, 1],
              },
            ],
          },
          { id: 2, name: 'File 1-2', space: 4, type: 'file', parentsId: [0] },
        ],
      },
      {
        id: 4,
        name: 'Dir 2',
        space: 0,
        type: 'folder',
        parentsId: [],
        attachedFiles: [
          {
            id: 5,
            name: 'Dir 2-1',
            space: 4,
            type: 'folder',
            parentsId: [4],
            attachedFiles: [],
          },
          { id: 6, name: 'File 2-2', space: 4, type: 'file', parentsId: [4] },
        ],
      },
      {
        id: 7,
        space: 0,
        name: 'File 2',
        type: 'folder',
        parentsId: [],
      },
    ],
  },
  getters: {
    getAllFolders(state) {
      return state.allFolders
    },
  },
  mutations: {
    REMOTE_ITEM(state, params) {
      if (params.parentsId && params.parentsId.length === 0) {
        state.allFolders = state.allFolders.filter(
          (folder) => folder.id !== params.id
        )
      } else {
        remoteNestedFolder(state.allFolders, 0)
      }

      // find and remote nested element
      function remoteNestedFolder(childItem, num) {
        childItem.forEach((child) => {
          if (
            child.id === params.parentsId[num] &&
            params.parentsId[num] ===
              params.parentsId[params.parentsId.length - 1]
          ) {
            child.attachedFiles = child.attachedFiles.filter(
              (folder) => folder.id !== params.id
            )
          } else if (child.id === params.parentsId[num]) {
            remoteNestedFolder(child.attachedFiles, (num += 1))
          }
        })
      }
    },
    RENAME_ITEM(state, params) {
      if (params.parentsId && params.parentsId.length === 0) {
        state.allFolders.forEach((folder) => {
          if (folder.id === params.id) {
            folder.name = params.newNameFolder
          }
        })
      } else {
        changeNameNestedFolder(state.allFolders, 0)
      }

      // find and change name nested element
      function changeNameNestedFolder(childItem, num) {
        childItem.forEach((child) => {
          if (
            child.id === params.parentsId[num] &&
            params.parentsId[num] ===
              params.parentsId[params.parentsId.length - 1]
          ) {
            child.attachedFiles.forEach((folder) => {
              if (folder.id === params.id) {
                folder.name = params.newNameFolder
              }
            })
          } else if (child.id === params.parentsId[num]) {
            changeNameNestedFolder(child.attachedFiles, (num += 1))
          }
        })
      }
    },
  },
  actions: {
    remoteElement({ commit }, params) {
      commit('REMOTE_ITEM', params)
    },
    renameElement({ commit }, params) {
      commit('RENAME_ITEM', params)
    },
  },
  modules: {},
})
