<script setup lang="ts">
import sectiune from '../components/section.vue';
import { ref } from 'vue'

const testimonials = [{
  by: {
    name: 'Early user',
    avatar: null,
  },
  message: 'Finally a seed generator that feels as serious as the funds it protects.',
  review: 5
}, {
  by: {
    name: 'Security-conscious adopter'
  },
  message: 'Clean, fast, and the security messaging actually matches the product.',
  review: 4.5
}]

const activeTesti = ref(0)
</script>

<template lang="pug">
sectiune.hero
  h2 Your wallet’s strongest origin.
  p Weak seeds get rekt. FluxSeeds don’t. Entropy so pure, hackers quit.

  button.cta Secure your future in one tap.

sectiune
  h2 Most seed phrases are only as strong as the generator behind them.
  p Weak entropy. Predictable patterns. Human error.
  p A single compromised seed can mean permanent loss of funds. In a world where wallets hold real value, “good enough” security is no longer good enough.

sectiune
  h2 FluxSeed turns chaos into an unbreakable foundation.
  p We combine high-entropy flux generation with rigorous security standards to produce seeds that are statistically impregnable. No shortcuts. No compromises. Just pure, fortress-level protection for your digital assets.
  p Flux in. Fortress out.

sectiune.features
  //- h2 Key benefits
  
  ul
    li.secure
      h3 Uncompromising Security
      p Military-grade entropy meets modern cryptography. Every seed is generated to resist even the most sophisticated attacks.

    li.fast
      h3 Instant & Effortless
      p Create a fully secure seed in seconds. No technical expertise required — just pure protection.

    li.universal
      h3 Universal Compatibility
      p Works with virtually every major digital wallet and blockchain. One seed standard, total flexibility.

    li.forever
      h3 Future-Proof Design
      p Built for today’s threats and tomorrow’s. Your seed remains impregnable as the landscape evolves.

sectiune.how
  h2 How it works
  ol
    li #[strong Initiate Flux] – Start a new secure generation session.
    //- li #[strong Harness Entropy] – We draw from your device's camera, microphone and orientation movements.
    li #[strong Harness Entropy] – Our system draws from high-quality, unpredictable sources.
    li #[strong Receive Your Seeds] – Get clean, verified, impregnable recovery phrases ready for your wallets.


  p Generate once. Secure forever.

sectiune.care
  h2 Security isn’t a feature. It’s the entire product.
  ul
    li Zero knowledge of your seed after generation
    li No storage of generated phrases on the device
    li Transparent, auditable generation process
    li Designed from the ground up for maximum resistance to brute-force and side-channel attacks

  p Your keys. Your control. Our flux.

sectiune.testimonials
  h2 Trusted by people who refuse to take chances with their assets.

  ul
    li(v-for="t,i in testimonials" :class="{ active: activeTesti === i }")
      blockquote
        .stars(:style="`--rating: ${ t.review }; --star-fill-color: #0affc1; --star-gap: 4px; --star-size: 1.5rem;`" :aria-label="`Rating of this product is ${ t.review } out of 5`")
        p {{ t.message }}
      p
        span.avatar
          img(v-if="t.by.avatar" :src="t.by.avatar")
        cite {{ t.by.name }}
      
  nav
    button.prev(
      @click= "activeTesti -= 1"
      :disabled=  "!activeTesti"
    ) Previous
    button.dot(
      v-for=  "t, i in testimonials"
      :disabled="activeTesti === i"
      @click= "activeTesti = i"
    ) {{ i }}
    button.next(
      :disabled="activeTesti === testimonials.length - 1"
      @click= "activeTesti += 1"
    ) Next

sectiune.fcta
  h2 Unlimited seeds. Zero compromise.
  p Stop relying on average generators.
  p Start with FluxSeed and give your digital wallet the impregnable foundation it deserves.
  button.cta Download today!
</template>

<style lang="stylus">
.stars
  --rating: 0;
  --max-rating: 5;
  --star-color: #fc0;
  --star-empty-color: transparent;
  --star-gap: 3px;
  --percent: calc(((var(--rating) / var(--max-rating)) * 100%));
  display: inline-block;
  font-size: var(--star-size, 1.175rem);
  font-family: Times;
  line-height: 1;
  
  &:before
    content: "★★★★★";
    --star-gap-half: calc(var(--star-gap) / 2);
    --star-perc: calc(var(--percent) - var(--star-gap-half));
    background: linear-gradient(
      90deg,
      var(--star-color) var(--star-perc),
      var(--star-empty-color) var(--star-perc)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px;
    -webkit-text-stroke-color: var(--star-color);
    letter-spacing: var(--star-gap);
    line-height: 0;


.features
  ul
    li
      h3
        &:before
          content ' '
          display block
          width 24px
          height 30px
          margin-right 8px
          margin-bottom 16px
          background-size 24px 24px
          background-repeat no-repeat
          background-position 50% 50%

      &.secure
        h3
          &:before
            background-image: url('/icons/secure.svg')
      &.universal
        h3
          &:before
            background-image: url('/icons/universal.svg')
      &.fast
        h3
          &:before
            background-image: url('/icons/instant.svg')
      &.forever
        h3
          &:before
            background-image: url('/icons/future.svg')
</style>