import axios from "../axios";
import _ from "lodash";
import { make } from "vuex-pathify";

import store from "./vuex";

const state = {
  reelList: [],
  reelFilterList: [],
  reelDialog: false,
  reelForm: {},
  reel_image: "",
  reelSearchType: ""
};
const getters = {};

const mutations = make.mutations(state);

const actions = {
  async reelDialogSwitch(context, params) {
    if (params == true) {
      state.reelDialog = true;
    } else {
      state.reelForm = {};

      state.reelDialog = false;
    }
  },

  async getReelList() {
    let load = await axios
      .get("/api/reel")
      .then(r => {
        state.reelList = r.data;
      })
      .catch(e => {
        console.log(e);
      });
  },

  async get2ReelList() {
    let load = await axios
      .get("/api/reel")
      .then(r => {
        state.reelFilterList = r.data;
      })
      .catch(e => {
        console.log(e);
      });
  },

  async getReelOnce(context, params) {
    let load = await axios
      .get("/api/reel/" + params)
      .then(r => {
        state.reelForm = r.data;
        state.reelDialog = true;
      })
      .catch(e => {
        console.log(e);
      });
  },

  async storeReel() {
    if (!state.reelForm.id) {
      await actions.insertReel();
    } else {
      await actions.updateReel();
    }
    actions.getReelList();
  },

  async insertReel() {
    let load = await axios
      .post("/api/reel", state.reelForm)
      .then(r => {
        state.reelDialog = false;
        store.dispatch("alert/alSuccess", "Sucessfully");
        location.reload();
      })
      .catch(e => {
        store.dispatch("alert/alError", "Incorrect");
        console.log(e);
      });
  },

  async updateReel() {
    let load = await axios
      .put("/api/reel/" + state.reelForm.id, state.reelForm)
      .then(r => {
        state.reelDialog = false;
        store.dispatch("alert/alSuccess", "Sucessfully");
      })
      .catch(e => {
        store.dispatch("alert/alError", "Incorrect");
        console.log(e);
      });
  },

  async deleteReel(context, params) {
    let check = confirm("Delete");
    if (check) {
      let load = await axios
        .delete("/api/reel/" + params)
        .then(r => {
          store.dispatch("alert/alSuccess", "Sucessfully");
        })
        .catch(e => {
          store.dispatch("alert/alError", "Incorrect");
          console.log(e);
        });
    }
    actions.getReelList();
  },
  async filterReel(context, params) {
    await actions.getReelList();
    let output = [];
    state.reelSearchType = params;
    for (let i = 0; i < state.reelList.length; i++) {
      if (state.reelList[i].reel_type == params) {
        output.push(state.reelList[i]);
      }
    }
    state.reelFilterList = output;
  },

  async searchingReel(context, params) {
      let load = await axios.get("/api/searchReel?search=" + params + "&type=" + state.reelSearchType)
        .then(r => {
          state.reelFilterList = r.data;
        })
        .catch(e => {
          console.log(e);
        });
  
  },
  async searchingReel2(context, params) {
    let load = await axios.get("/api/searchReel?search=" + params + "&type=" + state.reelSearchType)
      .then(r => {
        state.reelList = r.data;
      })
      .catch(e => {
        console.log(e);
      });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
