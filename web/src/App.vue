<template>
  <div id="app">
      <cpt-header/>
      <router-view/>
      <!-- <cpt-footer/> -->
  </cpt-footer/>
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
<style>
</style>
