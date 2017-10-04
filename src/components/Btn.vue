<template>
  <div>
    <button @click="moveWikipedia()">wikipedia</button>
  </div>
</template>

<script>
export default {
  methods: {
    moveWikipedia () {
      console.log('moveWikipedia')
      this.$root._router.push('/wiki')
    }
  }
}
</script>

<style lang="stylus">
</style>