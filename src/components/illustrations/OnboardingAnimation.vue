<template>
  <div class="w-full h-full flex items-center justify-center relative overflow-hidden">
    <!-- Floating background shapes -->
    <div ref="bgShape1" class="absolute w-40 h-40 rounded-full bg-white/10 -top-12 -right-12 opacity-0"></div>
    <div ref="bgShape2" class="absolute w-28 h-28 rounded-full bg-white/10 -bottom-10 -left-10 opacity-0"></div>
    <div ref="bgShape3" class="absolute w-20 h-20 rounded-full bg-[#ED5A29]/20 top-1/3 left-1/4 opacity-0"></div>

    <!-- Main card -->
    <div ref="mainCard" class="relative w-72 bg-white rounded-3xl shadow-2xl p-6 opacity-0">
      <!-- Website Section (Step 1) -->
      <div ref="websiteSection" class="mb-5 opacity-0">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 rounded-xl bg-[#FFEFE5] flex items-center justify-center">
            <svg class="w-5 h-5 text-[#ED5A29]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
            </svg>
          </div>
          <div class="flex-1">
            <p class="text-xs text-[#8F97A4] mb-0.5">Website</p>
            <p ref="websiteUrl" class="text-sm font-medium text-[#23262A] truncate">
              {{ formData?.welcome?.websiteUrl || 'example.com' }}
            </p>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div ref="divider" class="h-px bg-[#E3E5E8] mb-5 scale-x-0 origin-left"></div>

      <!-- Referral Source (Step 2) -->
      <div ref="referralSection" class="mb-4 opacity-0 -translate-x-4">
        <div class="flex items-center gap-3">
          <div ref="referralIcon" class="w-10 h-10 rounded-xl bg-[#F7F7F8] flex items-center justify-center transition-colors duration-300">
            <svg class="w-5 h-5 text-[#8F97A4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div class="flex-1">
            <p class="text-xs text-[#8F97A4] mb-0.5">Heard about us</p>
            <p ref="referralText" class="text-sm font-medium text-[#23262A]">
              {{ referralLabel }}
            </p>
          </div>
          <div ref="referralCheck" class="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center opacity-0 scale-0">
            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Business Type (Step 3) -->
      <div ref="businessSection" class="mb-4 opacity-0 -translate-x-4">
        <div class="flex items-center gap-3">
          <div ref="businessIcon" class="w-10 h-10 rounded-xl bg-[#F7F7F8] flex items-center justify-center transition-colors duration-300">
            <svg class="w-5 h-5 text-[#8F97A4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
          </div>
          <div class="flex-1">
            <p class="text-xs text-[#8F97A4] mb-0.5">Business type</p>
            <p ref="businessText" class="text-sm font-medium text-[#23262A]">
              {{ businessLabel }}
            </p>
          </div>
          <div ref="businessCheck" class="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center opacity-0 scale-0">
            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Relationship (Step 4) -->
      <div ref="relationshipSection" class="mb-4 opacity-0 -translate-x-4">
        <div class="flex items-center gap-3">
          <div ref="relationshipIcon" class="w-10 h-10 rounded-xl bg-[#F7F7F8] flex items-center justify-center transition-colors duration-300">
            <svg class="w-5 h-5 text-[#8F97A4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <div class="flex-1">
            <p class="text-xs text-[#8F97A4] mb-0.5">Relationship</p>
            <p ref="relationshipText" class="text-sm font-medium text-[#23262A]">
              {{ relationshipLabel }}
            </p>
          </div>
          <div ref="relationshipCheck" class="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center opacity-0 scale-0">
            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Contact Type (Step 5 - conditional) -->
      <div v-if="showContactType" ref="contactSection" class="mb-4 opacity-0 -translate-x-4">
        <div class="flex items-center gap-3">
          <div ref="contactIcon" class="w-10 h-10 rounded-xl bg-[#F7F7F8] flex items-center justify-center transition-colors duration-300">
            <svg class="w-5 h-5 text-[#8F97A4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
          </div>
          <div class="flex-1">
            <p class="text-xs text-[#8F97A4] mb-0.5">Contact info</p>
            <p ref="contactText" class="text-sm font-medium text-[#23262A]">
              {{ contactLabel }}
            </p>
          </div>
          <div ref="contactCheck" class="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center opacity-0 scale-0">
            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Agency Details (Step 6 - conditional) -->
      <div v-if="showAgencyDetails" ref="agencySection" class="opacity-0 -translate-x-4">
        <div class="flex items-center gap-3">
          <div ref="agencyIcon" class="w-10 h-10 rounded-xl bg-[#F7F7F8] flex items-center justify-center transition-colors duration-300">
            <svg class="w-5 h-5 text-[#8F97A4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <div class="flex-1">
            <p class="text-xs text-[#8F97A4] mb-0.5">Agency</p>
            <p ref="agencyText" class="text-sm font-medium text-[#23262A]">
              {{ agencyLabel }}
            </p>
          </div>
          <div ref="agencyCheck" class="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center opacity-0 scale-0">
            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating particles for animations -->
    <div ref="particle1" class="absolute w-3 h-3 rounded-full bg-[#ED5A29] opacity-0"></div>
    <div ref="particle2" class="absolute w-2 h-2 rounded-full bg-white opacity-0"></div>
    <div ref="particle3" class="absolute w-4 h-4 rounded-full bg-[#ED5A29]/30 opacity-0"></div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
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
const bgShape1 = ref(null)
const bgShape2 = ref(null)
const bgShape3 = ref(null)
const mainCard = ref(null)
const websiteSection = ref(null)
const divider = ref(null)
const referralSection = ref(null)
const referralIcon = ref(null)
const referralCheck = ref(null)
const businessSection = ref(null)
const businessIcon = ref(null)
const businessCheck = ref(null)
const relationshipSection = ref(null)
const relationshipIcon = ref(null)
const relationshipCheck = ref(null)
const contactSection = ref(null)
const contactIcon = ref(null)
const contactCheck = ref(null)
const agencySection = ref(null)
const agencyIcon = ref(null)
const agencyCheck = ref(null)
const particle1 = ref(null)
const particle2 = ref(null)
const particle3 = ref(null)

let idleTimeline = null

// Computed labels based on form data
const referralLabel = computed(() => {
  const source = props.formData?.referralSource?.referralSource
  if (!source) return 'Not selected yet'
  if (source === 'other') return props.formData?.referralSource?.otherText || 'Other'
  const labels = {
    'partner-agency': 'Partner/Agency',
    'shopify-wordpress': 'Shopify/WordPress',
    'google-search': 'Google Search',
    'instagram-facebook': 'Social Media',
    'friend-colleague': 'Friend/Colleague',
    'chatgpt': 'ChatGPT',
    'youtube': 'YouTube',
    'linkedin': 'LinkedIn',
    'already-used': 'Used before',
    'sales-inquiry': 'Sales Inquiry'
  }
  return labels[source] || source
})

const businessLabel = computed(() => {
  const type = props.formData?.businessType?.businessType
  if (!type) return 'Not selected yet'
  if (type === 'other') return props.formData?.businessType?.otherText || 'Other'
  const labels = {
    'ecommerce': 'eCommerce',
    'saas': 'SaaS/Software',
    'service': 'Service',
    'media': 'Media'
  }
  return labels[type] || type
})

const relationshipLabel = computed(() => {
  const rel = props.formData?.relationship?.relationship
  if (!rel) return 'Not selected yet'
  const labels = {
    'my-business': 'My business',
    'company-employee': 'Company employee',
    'client': 'Client project'
  }
  return labels[rel] || rel
})

const contactLabel = computed(() => {
  const contact = props.formData?.contactType?.contactType
  if (!contact) return 'Not selected yet'
  const labels = {
    'client-contact': "Client's contact",
    'own-contact': 'Own contact'
  }
  return labels[contact] || contact
})

const agencyLabel = computed(() => {
  const agency = props.formData?.agencyDetails
  if (!agency) return 'Not provided yet'
  if (agency.skipped) return 'Skipped'
  return agency.agencyName || 'Pending...'
})

const showContactType = computed(() => {
  return props.formData?.relationship?.relationship === 'client'
})

const showAgencyDetails = computed(() => {
  return showContactType.value && props.formData?.contactType?.contactType === 'client-contact'
})

// Entrance animation
const playEntrance = () => {
  const tl = gsap.timeline()

  gsap.set(mainCard.value, { y: 30 })

  tl.to([bgShape1.value, bgShape2.value, bgShape3.value], {
    opacity: 1,
    scale: 1,
    duration: 0.8,
    stagger: 0.1,
    ease: 'back.out(1.5)'
  })
  .to(mainCard.value, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'power3.out'
  }, '-=0.4')
  .to(websiteSection.value, {
    opacity: 1,
    duration: 0.4,
    ease: 'power2.out'
  }, '-=0.2')
  .to(divider.value, {
    scaleX: 1,
    duration: 0.4,
    ease: 'power2.out'
  }, '-=0.2')
}

// Animate section appearance
const animateSection = (sectionRef, iconRef, checkRef, color = '#FFEFE5') => {
  if (!sectionRef?.value) return

  const tl = gsap.timeline()

  tl.to(sectionRef.value, {
    opacity: 1,
    x: 0,
    duration: 0.5,
    ease: 'back.out(1.5)'
  })

  if (iconRef?.value) {
    tl.to(iconRef.value, {
      backgroundColor: color,
      duration: 0.3
    }, '-=0.3')
  }

  // Particle burst
  emitParticles()
}

// Animate check mark
const animateCheck = (checkRef) => {
  if (!checkRef?.value) return

  gsap.to(checkRef.value, {
    opacity: 1,
    scale: 1,
    duration: 0.4,
    ease: 'back.out(2)'
  })
}

// Emit particles effect
const emitParticles = () => {
  const particles = [particle1.value, particle2.value, particle3.value]

  particles.forEach((p, i) => {
    if (!p) return

    gsap.set(p, {
      x: 0,
      y: 0,
      opacity: 0,
      scale: 1
    })

    gsap.to(p, {
      opacity: 0.8,
      x: gsap.utils.random(-60, 60),
      y: gsap.utils.random(-80, -30),
      scale: gsap.utils.random(0.5, 1.5),
      duration: 0.6,
      delay: i * 0.1,
      ease: 'power2.out'
    })

    gsap.to(p, {
      opacity: 0,
      y: '-=30',
      duration: 0.4,
      delay: 0.5 + i * 0.1
    })
  })
}

// Idle breathing animation
const startIdleAnimation = () => {
  idleTimeline = gsap.timeline({ repeat: -1, yoyo: true })

  idleTimeline
    .to(bgShape1.value, { scale: 1.1, duration: 3, ease: 'sine.inOut' }, 0)
    .to(bgShape2.value, { scale: 1.15, duration: 3.5, ease: 'sine.inOut' }, 0)
    .to(bgShape3.value, { x: 15, y: -10, duration: 4, ease: 'sine.inOut' }, 0)
    .to(mainCard.value, { y: -3, duration: 2.5, ease: 'sine.inOut' }, 0)
}

// Watch step changes
watch(() => props.currentStep, (newStep) => {
  nextTick(() => {
    if (newStep >= 2) {
      animateSection(referralSection, referralIcon, null, '#FFEFE5')
    }
    if (newStep >= 3) {
      animateSection(businessSection, businessIcon, null, '#E0F2FE')
    }
    if (newStep >= 4) {
      animateSection(relationshipSection, relationshipIcon, null, '#F3E8FF')
    }
    if (newStep >= 5 && showContactType.value) {
      animateSection(contactSection, contactIcon, null, '#ECFDF5')
    }
    if (newStep >= 6 && showAgencyDetails.value) {
      animateSection(agencySection, agencyIcon, null, '#FEF3C7')
    }
  })
})

// Watch for form data changes to show checkmarks
watch(() => props.formData?.referralSource?.referralSource, (val) => {
  if (val) {
    nextTick(() => animateCheck(referralCheck))
  }
})

watch(() => props.formData?.businessType?.businessType, (val) => {
  if (val) {
    nextTick(() => animateCheck(businessCheck))
  }
})

watch(() => props.formData?.relationship?.relationship, (val) => {
  if (val) {
    nextTick(() => animateCheck(relationshipCheck))
  }
})

watch(() => props.formData?.contactType?.contactType, (val) => {
  if (val) {
    nextTick(() => animateCheck(contactCheck))
  }
})

watch(() => props.formData?.agencyDetails, (val) => {
  if (val && (val.agencyName || val.skipped)) {
    nextTick(() => animateCheck(agencyCheck))
  }
}, { deep: true })

onMounted(() => {
  gsap.set([bgShape1.value, bgShape2.value, bgShape3.value], { scale: 0.5 })

  setTimeout(() => {
    playEntrance()
    setTimeout(() => {
      startIdleAnimation()
    }, 1200)
  }, 300)
})

onUnmounted(() => {
  if (idleTimeline) idleTimeline.kill()
})
</script>
