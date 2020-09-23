<template>
  <div id="playlistContainer">
    <h2>Play list</h2>

    <div  id="styles" v-for="song in playlists" v-bind:key="song.id" >
      <h3>Artist: {{song.artist}}</h3>
      <h3>Song:{{song.songTitle}}</h3>
      <button @click="deletesonglist(song)">remove from playlist</button>



    </div>

  </div>
</template>


<script>
export default {
  name: "play-list",
   
  computed: {
    playlists: function() {
      return this.$store.state.playlist;
    }
  },
   methods: {
    deletesonglist: function(song) {
      this.$store.commit("fromplaylist", song);
    }
  }
};
</script>

<style scoped>
#playlistContainer {
    width: 50%;
  min-height: 60vh;
    border: 1px solid black;

}
#styles {
  border: 1px solid black;

}
</style>