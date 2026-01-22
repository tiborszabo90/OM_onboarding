<script setup>
import { ref } from 'vue'
import RegistrationView from './views/RegistrationView.vue'
import OnboardingView from './views/OnboardingView.vue'
import DevNavBar from './components/dev/DevNavBar.vue'

const currentView = ref('registration')
const registrationData = ref(null)
const onboardingRef = ref(null)

const handleRegistrationComplete = (data) => {
  registrationData.value = data
  currentView.value = 'onboarding'
}

const handleDevNavigate = (view) => {
  currentView.value = view
}

const handleDevGoToStep = (step) => {
  if (currentView.value !== 'onboarding') {
    currentView.value = 'onboarding'
  }
  if (onboardingRef.value) {
    onboardingRef.value.devGoToStep(step)
  }
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
      ref="onboardingRef"
      :registration-data="registrationData"
    />
  </transition>

  <DevNavBar
    :current-view="currentView"
    :current-step="onboardingRef?.currentStep || 1"
    :total-steps="onboardingRef?.totalStepsCount || 4"
    @navigate="handleDevNavigate"
    @go-to-step="handleDevGoToStep"
  />
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
