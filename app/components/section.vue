<template lang="pug">
section
  .wrapper
    slot
</template>

<style lang="stylus">
section
  .wrapper
    display flex
    flex-flow column nowrap
    gap 48px
    align-items: center
</style>