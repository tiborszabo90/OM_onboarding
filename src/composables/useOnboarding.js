import { ref, computed } from 'vue'

export function useOnboarding(initialTotalSteps) {
  const currentStep = ref(1)
  const maxReachedStep = ref(1)
  const formData = ref({})
  const totalSteps = ref(initialTotalSteps)

  const isFirstStep = computed(() => currentStep.value === 1)
  const isLastStep = computed(() => currentStep.value === totalSteps.value)
  const progress = computed(() => (currentStep.value / totalSteps.value) * 100)

  const setTotalSteps = (newTotal) => {
    totalSteps.value = newTotal
  }

  const nextStep = () => {
    if (currentStep.value < totalSteps.value) {
      currentStep.value++
      if (currentStep.value > maxReachedStep.value) {
        maxReachedStep.value = currentStep.value
      }
    }
  }

  const prevStep = () => {
    if (currentStep.value > 1) {
      currentStep.value--
    }
  }

  const goToStep = (step) => {
    if (step >= 1 && step <= maxReachedStep.value) {
      currentStep.value = step
    }
  }

  const updateFormData = (key, value) => {
    formData.value[key] = value
  }

  return {
    currentStep,
    maxReachedStep,
    formData,
    totalSteps,
    isFirstStep,
    isLastStep,
    progress,
    nextStep,
    prevStep,
    goToStep,
    setTotalSteps,
    updateFormData
  }
}
