<template>
  <svg class="svg-bg" viewBox="0 0 1440 900" preserveAspectRatio="none">
    <path v-for="(line, index) in lines" :key="index" :ref="el => setRef(el, index)" />
  </svg>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const lineRefs = []
const lines = Array.from({ length: 20 })

const setRef = (el, index) => {
  if (el) lineRefs[index] = el
}

const basePath = (y) => `
  M0 ${y}
  C240 ${y - 80}
  480 ${y + 80}
  720 ${y - 40}
  960 ${y + 60}
  1200 ${y - 30}
  1440 ${y}
`

onMounted(() => {
  lineRefs.forEach((el, index) => {
    const depth = index * 18
    const opacity = 0.12 - index * 0.01
    const startY = 200 + index * 55

    el.setAttribute('d', basePath(startY))
    el.setAttribute('fill', 'none')
    el.setAttribute('stroke-width', '1')
    el.setAttribute('stroke', `rgba(255,255,255,${opacity})`)

    gsap.to(el, {
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5
      },
      attr: {
        d: basePath(startY + depth)
      }
    })
  })
})
</script>

<style scoped>
.svg-bg {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  pointer-events: none;
}

/* Light mode */
:root[data-theme="light"] .svg-bg path {
  stroke: rgba(0, 0, 0, 0.08);
}
</style>
