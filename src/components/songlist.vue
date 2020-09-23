<template>
  <div id="songlistContainer">
      <h2>Song list</h2>
    <div id="styling" v-for="song in songlists" v-bind:key="song.id" >
      <h3>Artist: {{song.artist}}</h3>
      <h3>Song:{{song.songTitle}}</h3>
      <button @click="updatesonglist(song)">add to playlist</button>
 
    </div>
  </div>
</template>

<script>
export default {
  name: "song-list",
  computed: {
    songlists: function() {
      return this.$store.state.songlist;
    }
  },
  methods: {
    updatesonglist: function(song) {
      this.$store.commit("toplaylist", song);
    }
  }
};
</script>

<style scoped>
#songlistContainer {
  width: 50%;
  min-height: 60vh;
    border: 1px solid black;

}
#styling {
  border: 1px solid black;
}
</style>