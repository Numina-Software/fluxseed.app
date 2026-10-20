<template lang="pug">
#app
  NuxtLayout
    NuxtPage

</template>

<style lang="stylus">
:root
  --sans: "JetBrains Mono", system-ui, 'Segoe UI', Roboto, sans-serif;
  --heading: "JetBrains Mono", system-ui, 'Segoe UI', Roboto, sans-serif;
  --mono: ui-monospace, Consolas, monospace;
  --bg: #000
  --text: #aaa
  --h: #fff
  --lgap: 64px

  font: 15px/145% var(--sans);
  font-optical-sizing: auto
  font-weight 200
  font-style normal
  letter-spacing: 0.18px;
  color-scheme: light dark;
  color: var(--text);
  background: var(--bg);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

.wrapper
  max-width 800px
  margin 0 auto
  padding 0 20px

h1
h2
h3
h4
  font-weight 300
  color var(--h)
  line-height 150%
  margin 0

h2
  font-size 26px

h3
  font-size 14px

strong
  font-weight 700

button
  padding 12px 16px
  background: none
  border 2px solid
  color var(--h)
  border-radius 4px
  cursor pointer
  font-weight 800

  &.cta
    margin-top 24px
    padding 16px 24px
    font-size 14px

header
  padding 24px 0

  h1
    margin-bottom 8px
    font-weight 800 !important
    font-size 24px

footer
section
  padding var(--lgap) 0

section
  h2
    margin-top 0
    margin-left auto
    margin-right auto
    text-align center

  p
    margin 0

  &.hero
    padding 96px 0
    text-align center

    h2
      font-size 36px

  &.care
    ul
      li
        margin-bottom 16px

  &.features
    ul
      list-style-type none
      padding 0
      display flex
      flex-flow row wrap
      gap 32px

      li
        padding 0
        flex 1 1 40%

  &.how
    ol
      display flex
      flex-flow row wrap
      gap 32px

      li
        flex 1 1 30%

a
  color aliceblue

header
  a
    text-decoration none
    display flex
    flex-flow row nowrap
    gap 32px
    width 100%

footer
  font-size 13px

h1
  &+p
    margin 0

main
  > section
    &:nth-child(2n)
      background-color rgba(indigo, .25)
</style>