<template>
  <div id="app">
      <cpt-header/>
      <div class="main-wrap">
            <router-view/>
      </div>
      <cpt-footer/>
  </div>
</template>

<script>
import cptHeader from '@/components/cpt-header/cpt-header';
import cptFooter from '@/components/cpt-footer/cpt-footer'
export default {
  name: 'App',
  components:{cptHeader, cptFooter},

}
</script>
<style lang='styl'>
.main-wrap
    max-width 960px
    min-height 800px
    margin 0 auto
    background #fff
    padding 36px


</style>
