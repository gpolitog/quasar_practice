<template>
  <div class="">
    <input @change="setKeyword($event.target.value)" class="" type="text" id="">
    <!--<i @click="search()" class="">search</i>-->
    <button class="" id="" @click="search()">search</button>
  </div>
</template>

<script>
import { SET_KEYWORD, SET_WIKI_DATA } from '../store/mutation-types'
export default {
  methods: {
    setKeyword (v) {
      this.$store.dispatch(SET_KEYWORD, v)
    },
    search () {
      this.$store.dispatch(SET_WIKI_DATA)
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdated () {
    console.log('beforeUpdated')
  },
  updated () {
    console.log('updated')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  }
}
</script>

<style lang="stylus">
</style>
