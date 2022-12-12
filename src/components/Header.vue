<template>
  <header
    class="fixed z-30 w-full transition duration-300 ease-in-out md:bg-opacity-90"
    :class="{ 'bg-white shadow-lg backdrop-blur-sm': !top }"
    style=""
  >
    <div class="mx-auto max-w-7xl sm:px-6">
      <div class="flex h-16 items-center justify-between md:h-20">
        <!-- Site branding -->
        <div class="mr-4 shrink-0">
          <!-- Logo -->
          <router-link to="/" class="block" aria-label="Cruip">
            <img src="/logo.svg" />
          </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="hidden md:flex md:grow">
          <!-- Desktop sign in links -->
          <ul class="flex grow flex-wrap items-center justify-end">
            <li>
              <router-link
                to="/projects"
                class="flex items-center px-3 py-2 text-lg text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 lg:px-5"
                >Projects</router-link
              >
            </li>
            <li>
              <router-link
                to="/articles"
                class="flex items-center px-3 py-2 text-lg text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 lg:px-5"
                >Articles</router-link
              >
            </li>
            <li>
              <router-link
                to="/about"
                class="flex items-center px-3 py-2 text-lg text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 lg:px-5"
                >About</router-link
              >
            </li>
            <li>
              <PLinkButton link="/contacts" class="mt-1 ml-2 flex items-center">
                Contact me
                <svg
                  class="ml-2 -mr-1 h-3 w-3 shrink-0 fill-current"
                  style="color: #0f141e"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                    fill-rule="nonzero"
                  />
                </svg>
              </PLinkButton>
              <!-- 
              <router-link
                to="/signup"
                class="btn-sm ml-3 bg-gray-900 text-gray-200 hover:bg-gray-800"
              >
                <span>Contact</span>
                <svg
                  class="ml-2 -mr-1 h-3 w-3 shrink-0 fill-current text-gray-400"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                    fill-rule="nonzero"
                  />
                </svg>
              </router-link> -->
            </li>
          </ul>
        </nav>

        <!-- Mobile menu -->
        <div class="flex md:hidden">
          <!-- Hamburger button -->
          <button
            class="hamburger"
            ref="hamburger"
            :class="{ active: mobileNavOpen }"
            aria-controls="mobile-nav"
            :aria-expanded="mobileNavOpen"
            @click="mobileNavOpen = !mobileNavOpen"
          >
            <span class="sr-only">Menu</span>
            <svg
              class="h-6 w-6 fill-current text-gray-900"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="4" width="24" height="2" />
              <rect y="11" width="24" height="2" />
              <rect y="18" width="24" height="2" />
            </svg>
          </button>

          <!-- Mobile navigation -->
          <transition
            enter-active-class="transition ease-out duration-200 transform"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-out duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <nav
              id="mobile-nav"
              ref="mobileNav"
              v-show="mobileNavOpen"
              class="absolute top-full left-0 z-20 h-screen w-full overflow-scroll bg-white pb-16"
            >
              <ul class="px-5 py-2">
                <li>
                  <router-link
                    to="/pricing"
                    class="flex py-2 text-gray-600 hover:text-gray-900"
                    >Pricing</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/about"
                    class="flex py-2 text-gray-600 hover:text-gray-900"
                    >About us</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/tutorials"
                    class="flex py-2 text-gray-600 hover:text-gray-900"
                    >Tutorials</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/blog"
                    class="flex py-2 text-gray-600 hover:text-gray-900"
                    >Blog</router-link
                  >
                </li>

                <li>
                  <PLinkButton />

                  <svg
                    class="ml-2 -mr-1 h-3 w-3 shrink-0 fill-current text-gray-400"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fill="#999"
                      fill-rule="nonzero"
                    />
                  </svg>
                </li>
              </ul>
            </nav>
          </transition>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: function () {
    return {
      mobileNavOpen: false,
      top: true,
    }
  },
  methods: {
    clickOutside(e) {
      if (
        !this.mobileNavOpen ||
        this.$refs.mobileNav.contains(e.target) ||
        this.$refs.hamburger.contains(e.target)
      )
        return
      this.mobileNavOpen = false
    },
    keyPress() {
      if (!this.mobileNavOpen || event.keyCode !== 27) return
      this.mobileNavOpen = false
    },
    handleScroll() {
      this.top = window.pageYOffset > 10 ? false : true
    },
  },
  mounted() {
    document.addEventListener("click", this.clickOutside)
    document.addEventListener("keydown", this.keyPress)
    document.addEventListener("scroll", this.handleScroll)
  },
  beforeUnmount() {
    document.removeEventListener("click", this.clickOutside)
    document.removeEventListener("keydown", this.keyPress)
    document.removeEventListener("scroll", this.handleScroll)
  },
}
</script>
