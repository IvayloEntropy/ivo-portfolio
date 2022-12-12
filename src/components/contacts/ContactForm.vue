<script setup>
import { ref } from "vue"
import { load, create } from "../../api/api.js"

// load("contacts").then(response => {
//   console.log(response)
// })
const isSubmitting = ref(false)
const isSumitted = ref(false)

const name = ref("")
const email = ref("")
const service = ref("Need help with one off project")
const budget = ref("$1000 - $2500")
const message = ref("")
function onSubmit() {
  isSubmitting.value = true
  create("contacts", {
    name: "name",
    email: "email",
    service: "service",
    budget: "budget",
    message: "message",
  })
    .then(success => {
      name.value = ""
      email.value = ""
      service.value = "Need help with one off project"
      budget.value = "$1000 - $2500"
      message.value = ""
    })
    .catch(error => alert("Something went wrong"))
    .finally(() => {
      isSubmitting.value = false
      isSumitted.value = true
    })
}
</script>
<template>
  <!-- Right side -->
  <div class="relative shrink-0 text-center lg:text-left">
    <!-- Bg -->

    <div class="flex pt-12 lg:pt-0 lg:pl-12 xl:pl-20">
      <div
        class="mx-auto w-full max-w-[480px] bg-white p-6 shadow-2xl lg:mx-0 lg:w-[480px] lg:max-w-none xl:w-[512px]"
      >
        <!-- Form -->
        <form @submit.prevent="onSubmit">
          <div class="space-y-4">
            <div class="items-start justify-between sm:flex sm:space-x-4">
              <label
                class="mt-2.5 mb-1.5 block text-left text-sm font-[550] leading-5 text-slate-800 sm:mb-0"
                for="first-name"
                >Your name</label
              >
              <div class="shrink-0 sm:w-72 xl:w-80">
                <input
                  v-model="name"
                  id="first-name"
                  class="form-input w-full py-2 text-sm"
                  type="text"
                  placeholder="Patrick Miller"
                  required
                />
              </div>
            </div>

            <div class="items-start justify-between sm:flex sm:space-x-4">
              <label
                class="mt-2.5 mb-1.5 block text-left text-sm font-[550] leading-5 text-slate-800 sm:mb-0"
                for="email"
                >Work email</label
              >
              <div class="shrink-0 sm:w-72 xl:w-80">
                <input
                  v-model="email"
                  id="email"
                  class="form-input w-full py-2 text-sm"
                  type="email"
                  placeholder="patrick@example.com"
                  required
                />
              </div>
            </div>

            <div class="items-start justify-between sm:flex sm:space-x-4">
              <label
                class="mt-2.5 mb-1.5 block text-left text-sm font-[550] leading-5 text-slate-800 sm:mb-0"
                for="company-size"
                >Service</label
              >
              <div class="shrink-0 sm:w-72 xl:w-80">
                <select
                  v-model="service"
                  id="company-size"
                  class="form-select w-full py-2 text-sm"
                  required
                >
                  <option>Need help with one off project</option>
                  <option>Looking for long term partnership</option>
                  <option>Need consulting</option>
                  <option>Just wanted to say hi!</option>
                </select>
              </div>
            </div>
            <div class="items-start justify-between sm:flex sm:space-x-4">
              <label
                class="mt-2.5 mb-1.5 block text-left text-sm font-[550] leading-5 text-slate-800 sm:mb-0"
                for="country"
                >Budget</label
              >
              <div class="shrink-0 sm:w-72 xl:w-80">
                <select
                  v-model="budget"
                  id="country"
                  class="form-select w-full py-2 text-sm"
                  required
                >
                  <option>$1000 - $2500</option>
                  <option>$2500 - $5000</option>
                  <option>$5000 - $10000</option>
                  <option>$10000 or more</option>
                </select>
              </div>
            </div>
            <div class="items-start justify-between sm:flex sm:space-x-4">
              <label
                class="mt-2.5 mb-1.5 block text-left text-sm font-[550] leading-5 text-slate-800 sm:mb-0"
                for="comment"
                >Message</label
              >
              <div class="shrink-0 sm:w-72 xl:w-80">
                <textarea
                  v-model="message"
                  placeholder="I need to redesign my website"
                  id="comment"
                  class="form-textarea w-full py-2 text-sm"
                  rows="4"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="mt-6 text-right">
              <button
                v-if="!isSumitted"
                class="btn-sm group inline-flex items-center bg-blue-500 text-blue-50 shadow-sm hover:bg-blue-600"
              >
              <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
                Submit the form
              </button>
              <span v-else class="font-semibold"> I will get back to you soon ✓</span>
             
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
