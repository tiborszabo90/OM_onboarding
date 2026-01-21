<template>
  <div>
    <h2 class="text-2xl font-normal text-[#23262A] mb-2">Personal Information</h2>
    <p class="text-[#505763] mb-6">Tell us a bit about yourself</p>

    <div class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-[#23262A] mb-2">
          Full Name
        </label>
        <input
          type="text"
          v-model="localData.name"
          @input="updateData"
          class="w-full px-4 py-2 border border-[#D5D8DD] rounded-lg focus:ring-2 focus:ring-[#ED5A29] focus:border-transparent text-[#23262A]"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-[#23262A] mb-2">
          Email Address
        </label>
        <input
          type="email"
          v-model="localData.email"
          @input="updateData"
          class="w-full px-4 py-2 border border-[#D5D8DD] rounded-lg focus:ring-2 focus:ring-[#ED5A29] focus:border-transparent text-[#23262A]"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-[#23262A] mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          v-model="localData.phone"
          @input="updateData"
          class="w-full px-4 py-2 border border-[#D5D8DD] rounded-lg focus:ring-2 focus:ring-[#ED5A29] focus:border-transparent text-[#23262A]"
          placeholder="+1 (555) 000-0000"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:modelValue'])

const localData = reactive({
  name: props.modelValue.name || '',
  email: props.modelValue.email || '',
  phone: props.modelValue.phone || ''
})

const updateData = () => {
  emit('update:modelValue', { ...localData })
}

watch(() => props.modelValue, (newVal) => {
  Object.assign(localData, newVal)
}, { deep: true })
</script>
