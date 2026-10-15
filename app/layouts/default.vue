<template lang="pug">
header
  .wrapper
    h1 FluxSeed
    p Seed(s) you can trust.

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
