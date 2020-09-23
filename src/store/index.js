import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    songlist : [ {id:1,artist:"Michael Jackson",songTitle:"Earth Song"},
    {id:2,artist:"Bob Dylan",songTitle:" A Hard Rain's A-Gonna Fall"},
    {id:3,artist:"Travis",songTitle:"Why Does It Always Rain on Me"},
    {id:4,artist:"John Denver",songTitle:"Sunshine on my shoulders"}],
    playlist:[]
  },
  mutations: {
   
    toplaylist: function(state,addedSongs){
      state.playlist.push(addedSongs);
      for(let i=0;i<state.songlist.length;i++){
        if(state.songlist[i]==addedSongs){
          state.songlist.splice(i,1);
        }
      }
    },
    fromplaylist: function (state, deletedSongs) {

      state.songlist.push(deletedSongs);
      for (let i = 0; i < state.playlist.length; i++) {
        if (state.playlist[i] == deletedSongs) {
          state.playlist.splice(i, 1);
        }
      }

    }
  },
  actions: {},
  modules: {}
});
