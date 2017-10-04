<template>
  <div class="layout">

    <!-- ヘッダ -->
    <vue-header></vue-header>

    <!-- メイン -->
    <main>
      <Search></Search>
      <Result></Result>
    </main>

  </div>
</template>

<script>
import VueHeader from '../components/Header'
import Search from '../components/Search'
import Result from '../components/Result'
export default {
  components: {
    VueHeader,
    Search,
    Result
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
