<script setup>
import { ref } from 'vue'
import RegistrationView from './views/RegistrationView.vue'
import OnboardingView from './views/OnboardingView.vue'

const currentView = ref('registration')
const registrationData = ref(null)

const handleRegistrationComplete = (data) => {
  registrationData.value = data
  currentView.value = 'onboarding'
}
</script>

<template>
  <transition name="fade" mode="out-in">
    <RegistrationView
      v-if="currentView === 'registration'"
      @complete="handleRegistrationComplete"
    />
    <OnboardingView
      v-else
      :registration-data="registrationData"
    />
  </transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
