<template>
  <div class="min-h-screen flex items-center justify-center">
    <!-- Form Container -->
    <div class="w-full max-w-md px-6">
        <!-- Logo -->
        <div class="mb-10 text-center">
          <img
            src="https://www.optimonk.com/wp-content/uploads/optimonk-logo-2024.svg"
            alt="OptiMonk"
            class="h-6 mx-auto"
          />
        </div>

        <!-- Headlines -->
        <div class="mb-8 text-center">
          <h1 class="text-3xl font-semibold text-[#23262A] mb-3">Everything you need to stop losing customers</h1>
          <p class="text-sm text-gray-400 font-light">No credit card required. No surprises. Just results.</p>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="space-y-5">
          <!-- Name Row -->
          <div class="flex gap-4">
            <div class="flex-1">
              <label class="block text-sm font-medium text-[#23262A] mb-1.5">First name</label>
              <input
                v-model="formData.firstName"
                type="text"
                class="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ED5A29] focus:border-transparent transition-colors text-[#23262A]"
                placeholder="John"
                required
              />
            </div>
            <div class="flex-1">
              <label class="block text-sm font-medium text-[#23262A] mb-1.5">Last name</label>
              <input
                v-model="formData.lastName"
                type="text"
                class="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ED5A29] focus:border-transparent transition-colors text-[#23262A]"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-[#23262A] mb-1.5">Business email</label>
            <input
              v-model="formData.email"
              type="email"
              class="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ED5A29] focus:border-transparent transition-colors text-[#23262A]"
              placeholder="john@company.com"
              required
            />
            <p class="text-xs text-gray-400 mt-1.5">You'll receive important alerts and notifications about your account and popups.</p>
          </div>

          <!-- Password -->
          <div>
            <label class="block text-sm font-medium text-[#23262A] mb-1.5">Password (8+ characters)</label>
            <input
              v-model="formData.password"
              type="password"
              class="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ED5A29] focus:border-transparent transition-colors text-[#23262A]"
              placeholder="Enter your password"
              minlength="8"
              required
            />
            <!-- Password Strength Tracker -->
            <div class="mt-2">
              <div class="flex gap-1.5">
                <div
                  v-for="i in 4"
                  :key="i"
                  class="h-1 flex-1 rounded-full transition-colors"
                  :class="i <= passwordStrength ? strengthColors[passwordStrength] : 'bg-gray-200'"
                ></div>
              </div>
              <p v-if="formData.password" class="text-xs mt-1.5" :class="strengthTextColors[passwordStrength]">
                {{ strengthLabels[passwordStrength] }}
              </p>
            </div>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full py-3 bg-[#ED5A29] text-white font-medium rounded-lg hover:bg-[#E54D1F] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ED5A29] focus:ring-offset-2"
          >
            Get Started
          </button>

          <!-- Disclaimer -->
          <p class="text-xs text-gray-400 text-center">
            By submitting this form, you agree to the
            <a href="#" class="text-[#ED5A29] hover:underline">Terms of Service</a>
            and
            <a href="#" class="text-[#ED5A29] hover:underline">Privacy Policy</a>.
          </p>
        </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['complete'])

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: ''
})

// Password strength calculation
const passwordStrength = computed(() => {
  const password = formData.value.password
  if (!password) return 0

  let strength = 0

  // Length check
  if (password.length >= 8) strength++
  if (password.length >= 12) strength++

  // Character variety checks
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++
  if (/\d/.test(password)) strength++
  if (/[^a-zA-Z0-9]/.test(password)) strength++

  return Math.min(4, strength)
})

const strengthColors = {
  0: 'bg-gray-200',
  1: 'bg-red-400',
  2: 'bg-orange-400',
  3: 'bg-yellow-400',
  4: 'bg-green-500'
}

const strengthTextColors = {
  0: 'text-gray-400',
  1: 'text-red-500',
  2: 'text-orange-500',
  3: 'text-yellow-600',
  4: 'text-green-600'
}

const strengthLabels = {
  0: '',
  1: 'Weak',
  2: 'Fair',
  3: 'Good',
  4: 'Strong'
}

const handleSubmit = () => {
  emit('complete', formData.value)
}
</script>
