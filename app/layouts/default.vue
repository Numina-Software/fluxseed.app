<template lang="pug">
header
  .wrapper
    router-link(to="/")
      img.icon(src="/icon.png")
      div
        h1 FluxSeed
        p Seeds forged in flux. Secured for life. Unbreakable by design.

main
  .wrapper
    slot

footer
  .wrapper
    ul.links
      li
        router-link(to="/") Overview
      
      //- li
      //-   router-link(to="/about") About

      //- li
      //-   router-link(to="/faq") F.A.Q.
      //- li
      //-   router-link(to="/credits") Credits
      
      li
        router-link(to="/privacy") Privacy Policy

    p.copy &copy; #[a(href="https://github.com/Numina-Software") Numina Software] 2026 - {{ curYear }}. All Rights Reserved.
</template>


<script setup lang="ts">
const curYear = new Date().getFullYear()
</script>

<style lang="stylus">
.icon
  float left
  width 96px
  height 96px
  border-radius 50px

header
  .wrapper
    display flex
    flex-flow row nowrap

    > div
      display flex
      flex-flow column nowrap
</style>