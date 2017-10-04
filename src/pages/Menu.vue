<template>
  <div class="layout">

    <!-- ヘッダ -->
    <vue-header></vue-header>

    <!-- メイン -->
    <main>
      <vue-btn></vue-btn>
    </main>

  </div>
</template>

<script>
import VueHeader from '../components/Header'
import VueBtn from '../components/Btn'

export default {
  components: {
    VueHeader,
    VueBtn
  }
}
</script>

<style lang="stylus">
</style>
