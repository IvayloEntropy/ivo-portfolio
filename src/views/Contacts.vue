<template>
  <div class="flex min-h-screen flex-col overflow-hidden">
    <!-- Page content -->
    <main class="grow">
      <section>
        <div class="mx-auto max-w-6xl px-4 sm:px-6">
          <div class="pt-36 pb-12 md:pt-40 md:pb-20">
            <div class="lg:flex lg:space-x-12 xl:space-x-16">
              <!-- Left side -->
              <div class="mb-16 grow text-center lg:mt-32 lg:mb-0 lg:text-left">
                <h1 class="h2 mb-8">Improve your digital products</h1>

                <div class="mb-12">
                  <ul class="inline-flex flex-col space-y-2.5 text-slate-500">
                    <li class="flex items-center text-left">
                      <svg
                        class="mr-3 shrink-0"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle class="fill-blue-100" cx="10" cy="10" r="10" />
                        <path
                          class="fill-blue-500"
                          d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                        />
                      </svg>
                      <span
                        >Wanna send me an email?
                        <b> entropyactive@gmail.com</b></span
                      >
                    </li>
                    <li class="flex items-center text-left">
                      <svg
                        class="mr-3 shrink-0"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle class="fill-blue-100" cx="10" cy="10" r="10" />
                        <path
                          class="fill-blue-500"
                          d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                        />
                      </svg>
                      <span>Wanna call me directly? <b>+359898747162</b></span>
                    </li>
                    <li class="flex items-center text-left">
                      <svg
                        class="mr-3 shrink-0"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle class="fill-blue-100" cx="10" cy="10" r="10" />
                        <path
                          class="fill-blue-500"
                          d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                        />
                      </svg>
                      <span>Eather way let's improve your project!</span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Right side -->
              <div class="relative shrink-0 text-center lg:text-left">
                <!-- Bg -->

                <!-- Illustration -->
                <img
                  class="pointer-events-none absolute top-1/2 left-1/2 -z-10 -mt-40 ml-20 max-w-none -translate-y-1/2 -translate-x-1/2 mix-blend-lighten"
                  src="../images/hero-illustration.svg"
                  width="960"
                  height="960"
                  aria-hidden="true"
                />

                <div class="flex pt-12 lg:pt-0 lg:pl-12 xl:pl-20">
                  <div
                    class="mx-auto w-full max-w-[480px] bg-white p-6 shadow-2xl lg:mx-0 lg:w-[480px] lg:max-w-none xl:w-[512px]"
                  >
                    <!-- Form -->
                    <form>
                      <div class="space-y-4">
                        <div
                          class="items-start justify-between sm:flex sm:space-x-4"
                        >
                          <label
                            class="mt-2.5 mb-1.5 block text-left text-sm font-[550] leading-5 text-slate-800 sm:mb-0"
                            for="first-name"
                            >First name</label
                          >
                          <div class="shrink-0 sm:w-72 xl:w-80">
                            <input
                              id="first-name"
                              class="form-input w-full py-2 text-sm"
                              type="text"
                              placeholder="Patrick"
                              required
                            />
                          </div>
                        </div>
                        <div
                          class="items-start justify-between sm:flex sm:space-x-4"
                        >
                          <label
                            class="mt-2.5 mb-1.5 block text-left text-sm font-[550] leading-5 text-slate-800 sm:mb-0"
                            for="last-name"
                            >Last name</label
                          >
                          <div class="shrink-0 sm:w-72 xl:w-80">
                            <input
                              id="last-name"
                              class="form-input w-full py-2 text-sm"
                              type="text"
                              placeholder="Mills"
                              required
                            />
                          </div>
                        </div>
                        <div
                          class="items-start justify-between sm:flex sm:space-x-4"
                        >
                          <label
                            class="mt-2.5 mb-1.5 block text-left text-sm font-[550] leading-5 text-slate-800 sm:mb-0"
                            for="email"
                            >Work email</label
                          >
                          <div class="shrink-0 sm:w-72 xl:w-80">
                            <input
                              id="email"
                              class="form-input w-full py-2 text-sm"
                              type="email"
                              placeholder="patrick@example.com"
                              required
                            />
                          </div>
                        </div>
                        <div
                          class="items-start justify-between sm:flex sm:space-x-4"
                        >
                          <label
                            class="mt-2.5 mb-1.5 block text-left text-sm font-[550] leading-5 text-slate-800 sm:mb-0"
                            for="website"
                            >Website</label
                          >
                          <div class="shrink-0 sm:w-72 xl:w-80">
                            <input
                              id="website"
                              class="form-input w-full py-2 text-sm"
                              type="text"
                              placeholder="example.com"
                              required
                            />
                          </div>
                        </div>
                        <div
                          class="items-start justify-between sm:flex sm:space-x-4"
                        >
                          <label
                            class="mt-2.5 mb-1.5 block text-left text-sm font-[550] leading-5 text-slate-800 sm:mb-0"
                            for="company-size"
                            >Company size</label
                          >
                          <div class="shrink-0 sm:w-72 xl:w-80">
                            <select
                              id="company-size"
                              class="form-select w-full py-2 text-sm"
                              required
                            >
                              <option>Less than 10</option>
                              <option>More than 10</option>
                              <option>More than 20</option>
                              <option>More than 50</option>
                            </select>
                          </div>
                        </div>
                        <div
                          class="items-start justify-between sm:flex sm:space-x-4"
                        >
                          <label
                            class="mt-2.5 mb-1.5 block text-left text-sm font-[550] leading-5 text-slate-800 sm:mb-0"
                            for="country"
                            >Country</label
                          >
                          <div class="shrink-0 sm:w-72 xl:w-80">
                            <select
                              id="country"
                              class="form-select w-full py-2 text-sm"
                              required
                            >
                              <option>United States</option>
                              <option>United Kingdom</option>
                              <option>Germany</option>
                              <option>Italy</option>
                            </select>
                          </div>
                        </div>
                        <div
                          class="items-start justify-between sm:flex sm:space-x-4"
                        >
                          <label
                            class="mt-2.5 mb-1.5 block text-left text-sm font-[550] leading-5 text-slate-800 sm:mb-0"
                            for="comment"
                            >Anything else?</label
                          >
                          <div class="shrink-0 sm:w-72 xl:w-80">
                            <textarea
                              id="comment"
                              class="form-textarea w-full py-2 text-sm"
                              rows="4"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div class="mt-6 text-right">
                        <button
                          class="btn-sm group inline-flex items-center bg-blue-500 text-blue-50 shadow-sm hover:bg-blue-600"
                        >
                          Submit the form
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "Apply",
}
</script>
