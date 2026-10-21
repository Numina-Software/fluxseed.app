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
  --sgap: 96px

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

body
  margin 0
  padding 0
  box-sizing: border-box

  *
    box-sizing: border-box

#app
  position relative

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

  &:disabled
    border-color rgba(white, .1)
    cursor default
    pointer-events: none

header
  padding 24px 0

  a
    text-decoration none
    display flex
    flex-flow row nowrap
    align-items center
    gap 32px
    width 100%

  h1
    margin-bottom 8px
    font-weight 800 !important
    font-size 24px


section
  padding var(--sgap) 0
  
  h2
    margin-top 0
    margin-left auto
    margin-right auto
    text-align center

  p
    margin 0

  &.testimonials
    nav
      display flex
      flex-flow row nowrap
      align-items: center
      gap 16px

      button
        font-size 0

        &:after
        &:before
          font-size 12px

        &.dot
          width 8px
          height 8px
          padding 0
          border-radius 8px

      button
        &.next
          &:after
            content '>'
        &.prev
          &:before
            content '<'

    ul
      list-style-type: none
      padding 0
      position relative
      width 100%
      height 280px
      overflow-x: hidden
      overflow-y visible

      li
        position absolute
        width 100%
        top 0
        transition transform .15s ease
        padding 0
        transform translateX(-100%)
        display flex
        flex-flow column nowrap
        align-items: flex-end
        gap 32px

        &.active
          transform translateX(0)

        blockquote
          width 100%

  &.hero
    padding 96px 0
    text-align center

    h2
      font-size 36px

  &.care
    ul
      list-style-type disclosure-closed
      li
        margin-bottom 16px
        padding-left 12px

  &.fcta
    p
      text-align: center

  &.features
    ul
      list-style-type none
      padding 0
      display flex
      flex-flow row wrap
      gap var(--lgap)

      li
        padding 0
        flex 1 1 40%
        display flex
        flex-flow column nowrap
        gap 24px

  &.how
    ol
      display flex
      flex-flow row wrap
      gap 64px
      padding 0
      list-style-position: outside
      // list-style-type: none

      li
        flex 1 1 30%
        position relative

        &::marker
          display block
          position absolute
          bottom 100%

a
  color aliceblue

footer
  font-size 13px
  text-align: center
  padding var(--lgap) 0

  .links
    list-style-type: none
    padding 0
    display flex
    flex-flow row wrap
    margin 32px 0
    gap 24px

    li
      position relative
      &:not(:last-child)
        &:after
          content '-'
          position absolute
          right -15px

  ul
    justify-content center

h1
  &+p
    margin 0

main
  > section
    &:nth-child(2n)
      background-color rgba(indigo, .25)

blockquote
  padding 32px 48px 32px 64px
  border none
  background rgba(white, .1)
  border-radius 20px
  margin 0
  position relative
  display flex
  flex-flow column nowrap
  gap 24px
  color var(--h)

  &:before
    content '"'
    position absolute
    top 24px
    left 8px
    font-size 64px
    opacity .2

  &+p
    display flex
    flex-flow row nowrap
    align-items center
    gap 8px

.avatar
  border-radius 50px
  background rgba(white, .25)
  width 48px
  height 48px
</style>