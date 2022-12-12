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
                <h1 class="h2 mb-8">Get in touch — let’s work together.</h1>
                <img class="absolute top-16" src="/contact-bg.svg" style="height: 150px"/>

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
                      <span>Call me directly? <b>+359898747162</b></span>
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
                      <span
                        >Schedule a meeting?
                        <a
                          class="font-bold text-blue-500"
                          href="https://calendly.com/ivoovcharov/30min"
                          target="_blank"
                          >Calendly</a
                        ></span
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
                      <span>Eather way let's improve your project!</span>
                    </li>
                  </ul>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import ContactForm from "../components/contacts/ContactForm.vue"

export default {
  name: "Apply",
  components: { ContactForm },
}
</script>
