<template>
<div id="layout">
    <song-list></song-list>
    <play-list></play-list>

</div>
</template>

<script>
import PlayList from './playlist.vue'
import SongList from './songlist.vue'


export default {
    name:"page-body",
    components: {
        PlayList,
        SongList

    }
    
}
</script>

<style scoped>
#layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

</style>