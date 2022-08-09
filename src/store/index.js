import { createStore } from "vuex";

export default createStore({
  state: {
    allFolders: [
      {
        id: 0,
        name: "Dir 1",
        space: 0,
        type: "folder",
        attachedFiles: [
          {
            id: 1,
            name: "Dir 1-1",
            space: 4,
            type: "folder",
            attachedFiles: [
              { id: 3, name: "File 1-1-1", space: 8, type: "file" },
            ],
          },
          { id: 2, name: "File 1-2", space: 4, type: "file" },
        ],
      },
      {
        id: 4,
        name: "Dir 2",
        space: 0,
        type: "folder",
        attachedFiles: [
          {
            id: 5,
            name: "Dir 2-1",
            space: 4,
            type: "folder",
            attachedFiles: [],
          },
          { id: 6, name: "File 2-2", space: 4, type: "file" },
        ],
      },
      {
        id: 7,
        space: 0,
        name: "File 2",
        type: "folder",
      },
    ],
  },
  getters: {
    getAllFolders(state) {
      return state.allFolders;
    },
  },
  mutations: {
    REMOTE_ELEMENT(state, id) {
      state.allFolders = state.allFolders.filter((elem) => elem.id !== id);
    },
  },
  actions: {
    remoteElement({ commit }, id) {
      commit("REMOTE_ELEMENT", id);
    },
  },
  modules: {},
});
