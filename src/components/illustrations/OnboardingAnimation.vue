<template>
  <div ref="containerRef" class="w-full h-full flex items-center justify-center relative overflow-hidden">
    <!-- Background decorative elements -->
    <div ref="bgCircle1" class="absolute w-32 h-32 rounded-full bg-white/20 -top-10 -right-10 opacity-0"></div>
    <div ref="bgCircle2" class="absolute w-24 h-24 rounded-full bg-white/15 -bottom-8 -left-8 opacity-0"></div>
    <div ref="bgCircle3" class="absolute w-16 h-16 rounded-full bg-[#ED5A29]/20 top-1/4 right-1/4 opacity-0"></div>

    <!-- Main card container -->
    <div ref="mainCard" class="relative w-64 bg-white rounded-3xl shadow-xl p-6 opacity-0">
      <!-- Avatar section -->
      <div class="flex flex-col items-center mb-6">
        <div ref="avatarCircle" class="w-20 h-20 rounded-full bg-[#ED5A29]/10 flex items-center justify-center mb-3 scale-0">
          <div ref="avatarIcon" class="w-12 h-12 rounded-full bg-[#ED5A29]/30 flex items-center justify-center opacity-0">
            <svg class="w-6 h-6 text-[#ED5A29]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </div>

        <!-- Website name placeholder -->
        <div ref="websiteNameBar" class="h-4 bg-[#E3E5E8] rounded-full w-32 mb-2"></div>
        <!-- Website URL placeholder -->
        <div ref="websiteUrlBar" class="h-2.5 bg-[#F1F2F4] rounded-full w-40"></div>
      </div>

      <!-- Divider -->
      <div ref="divider" class="h-px bg-[#E3E5E8] mb-6 scale-x-0"></div>

      <!-- Info rows -->
      <div class="space-y-4">
        <!-- Business type row -->
        <div ref="businessRow" class="flex items-center gap-3 opacity-0 -translate-x-4">
          <div ref="businessIcon" class="w-10 h-10 rounded-xl bg-[#F7F7F8] flex items-center justify-center">
            <svg class="w-5 h-5 text-[#D5D8DD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
          </div>
          <div class="flex-1">
            <div ref="businessLabelBar" class="h-3 bg-[#E3E5E8] rounded-full w-24 mb-1.5"></div>
            <div class="h-2 bg-[#F1F2F4] rounded-full w-16"></div>
          </div>
        </div>

        <!-- Referral row -->
        <div ref="referralRow" class="flex items-center gap-3 opacity-0 -translate-x-4">
          <div ref="referralIcon" class="w-10 h-10 rounded-xl bg-[#F7F7F8] flex items-center justify-center">
            <svg class="w-5 h-5 text-[#D5D8DD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div class="flex-1">
            <div ref="referralLabelBar" class="h-3 bg-[#E3E5E8] rounded-full w-20 mb-1.5"></div>
            <div class="h-2 bg-[#F1F2F4] rounded-full w-14"></div>
          </div>
        </div>

        <!-- Relationship row -->
        <div ref="relationshipRow" class="flex items-center gap-3 opacity-0 -translate-x-4">
          <div ref="relationshipIcon" class="w-10 h-10 rounded-xl bg-[#F7F7F8] flex items-center justify-center">
            <svg class="w-5 h-5 text-[#D5D8DD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <div class="flex-1">
            <div ref="relationshipLabelBar" class="h-3 bg-[#E3E5E8] rounded-full w-28 mb-1.5"></div>
            <div class="h-2 bg-[#F1F2F4] rounded-full w-20"></div>
          </div>
        </div>
      </div>

      <!-- Floating badge -->
      <div ref="floatingBadge" class="absolute -top-3 -right-3 bg-[#ED5A29] text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg opacity-0 scale-0">
        <span ref="badgeText">Step 1</span>
      </div>
    </div>

    <!-- Floating particles -->
    <div ref="particle1" class="absolute w-3 h-3 rounded-full bg-[#ED5A29]/40 opacity-0"></div>
    <div ref="particle2" class="absolute w-2 h-2 rounded-full bg-white/60 opacity-0"></div>
    <div ref="particle3" class="absolute w-4 h-4 rounded-full bg-[#ED5A29]/20 opacity-0"></div>

    <!-- Check marks for completed steps -->
    <div ref="checkMark1" class="absolute top-8 right-8 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center opacity-0 scale-0">
      <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const props = defineProps({
  currentStep: {
    type: Number,
    default: 1
  },
  formData: {
    type: Object,
    default: () => ({})
  }
})

// Template refs
const containerRef = ref(null)
const bgCircle1 = ref(null)
const bgCircle2 = ref(null)
const bgCircle3 = ref(null)
const mainCard = ref(null)
const avatarCircle = ref(null)
const avatarIcon = ref(null)
const websiteNameBar = ref(null)
const websiteUrlBar = ref(null)
const divider = ref(null)
const businessRow = ref(null)
const businessIcon = ref(null)
const businessLabelBar = ref(null)
const referralRow = ref(null)
const referralIcon = ref(null)
const referralLabelBar = ref(null)
const relationshipRow = ref(null)
const relationshipIcon = ref(null)
const relationshipLabelBar = ref(null)
const floatingBadge = ref(null)
const badgeText = ref(null)
const particle1 = ref(null)
const particle2 = ref(null)
const particle3 = ref(null)
const checkMark1 = ref(null)

let masterTimeline = null
let idleTimeline = null

// Initial entrance animation
const playEntranceAnimation = () => {
  masterTimeline = gsap.timeline()

  // Background circles fade in
  masterTimeline
    .to([bgCircle1.value, bgCircle2.value, bgCircle3.value], {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out(1.7)'
    })
    // Main card slides up
    .to(mainCard.value, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.4')
    // Avatar circle pops
    .to(avatarCircle.value, {
      scale: 1,
      duration: 0.5,
      ease: 'back.out(2)'
    }, '-=0.3')
    // Avatar icon fades in
    .to(avatarIcon.value, {
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out'
    }, '-=0.2')
    // Divider expands
    .to(divider.value, {
      scaleX: 1,
      duration: 0.4,
      ease: 'power2.out'
    }, '-=0.2')
    // Badge pops in
    .to(floatingBadge.value, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: 'back.out(2)'
    }, '-=0.2')

  // Set initial state for main card
  gsap.set(mainCard.value, { y: 30 })
}

// Animate step changes
const animateToStep = (step) => {
  const tl = gsap.timeline()

  // Update badge text
  if (badgeText.value) {
    badgeText.value.textContent = `Step ${step}`
  }

  // Badge bounce
  tl.to(floatingBadge.value, {
    scale: 1.2,
    duration: 0.15,
    ease: 'power2.out'
  }).to(floatingBadge.value, {
    scale: 1,
    duration: 0.3,
    ease: 'elastic.out(1, 0.5)'
  })

  // Step-specific animations
  if (step >= 1) {
    // Step 1: Website info - animate name/url bars
    tl.to(websiteNameBar.value, {
      backgroundColor: '#23262A',
      width: '80%',
      duration: 0.4,
      ease: 'power2.out'
    }, 0)
    .to(websiteUrlBar.value, {
      backgroundColor: 'rgba(237, 90, 41, 0.4)',
      width: '90%',
      duration: 0.4,
      ease: 'power2.out'
    }, 0.1)
  }

  if (step >= 2) {
    // Step 2: Referral source
    tl.to(referralRow.value, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: 'back.out(1.7)'
    }, 0.2)
    .to(referralIcon.value, {
      backgroundColor: 'rgba(237, 90, 41, 0.1)',
      duration: 0.3
    }, 0.3)
    .to(referralLabelBar.value, {
      backgroundColor: 'rgba(35, 38, 42, 0.7)',
      duration: 0.3
    }, 0.3)
  }

  if (step >= 3) {
    // Step 3: Business type
    tl.to(businessRow.value, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: 'back.out(1.7)'
    }, 0.2)
    .to(businessIcon.value, {
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      duration: 0.3
    }, 0.3)
    .to(businessLabelBar.value, {
      backgroundColor: 'rgba(35, 38, 42, 0.7)',
      duration: 0.3
    }, 0.3)
  }

  if (step >= 4) {
    // Step 4: Relationship
    tl.to(relationshipRow.value, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: 'back.out(1.7)'
    }, 0.2)
    .to(relationshipIcon.value, {
      backgroundColor: 'rgba(168, 85, 247, 0.1)',
      duration: 0.3
    }, 0.3)
    .to(relationshipLabelBar.value, {
      backgroundColor: 'rgba(35, 38, 42, 0.7)',
      duration: 0.3
    }, 0.3)
    // Show completion check
    .to(checkMark1.value, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: 'back.out(2)'
    }, 0.5)
  }

  // Particles float animation on each step change
  tl.to(particle1.value, {
    opacity: 1,
    x: 'random(-50, 50)',
    y: 'random(-80, -40)',
    duration: 0.8,
    ease: 'power2.out'
  }, 0)
  .to(particle1.value, {
    opacity: 0,
    y: '-=30',
    duration: 0.4
  }, 0.6)

  tl.to(particle2.value, {
    opacity: 1,
    x: 'random(-40, 40)',
    y: 'random(-60, -30)',
    duration: 0.7,
    ease: 'power2.out'
  }, 0.1)
  .to(particle2.value, {
    opacity: 0,
    y: '-=20',
    duration: 0.4
  }, 0.7)
}

// Idle breathing animation
const startIdleAnimation = () => {
  idleTimeline = gsap.timeline({ repeat: -1, yoyo: true })

  idleTimeline
    .to(bgCircle1.value, {
      scale: 1.1,
      duration: 2,
      ease: 'sine.inOut'
    }, 0)
    .to(bgCircle2.value, {
      scale: 1.15,
      duration: 2.5,
      ease: 'sine.inOut'
    }, 0)
    .to(bgCircle3.value, {
      x: 10,
      y: -10,
      duration: 3,
      ease: 'sine.inOut'
    }, 0)
    .to(mainCard.value, {
      y: -5,
      duration: 2,
      ease: 'sine.inOut'
    }, 0)
}

// Watch for step changes
watch(() => props.currentStep, (newStep, oldStep) => {
  if (newStep !== oldStep) {
    animateToStep(newStep)
  }
}, { immediate: false })

// Watch for form data changes
watch(() => props.formData, (newData) => {
  // Animate specific data changes
  if (newData?.welcome?.websiteName) {
    gsap.to(websiteNameBar.value, {
      scaleX: 1.05,
      duration: 0.15,
      yoyo: true,
      repeat: 1,
      ease: 'power2.out'
    })
  }
}, { deep: true })

onMounted(() => {
  // Set initial positions
  gsap.set([bgCircle1.value, bgCircle2.value, bgCircle3.value], { scale: 0.5 })
  gsap.set(particle1.value, { x: 0, y: 0 })
  gsap.set(particle2.value, { x: 20, y: 10 })
  gsap.set(particle3.value, { x: -20, y: -10 })

  // Play entrance animation after a short delay
  setTimeout(() => {
    playEntranceAnimation()
    // Start idle animation after entrance
    setTimeout(() => {
      startIdleAnimation()
      // Animate to current step
      animateToStep(props.currentStep)
    }, 1500)
  }, 300)
})

onUnmounted(() => {
  if (masterTimeline) masterTimeline.kill()
  if (idleTimeline) idleTimeline.kill()
})
</script>
