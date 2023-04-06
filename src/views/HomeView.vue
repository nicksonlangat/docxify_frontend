<template>
    <div>
      <Navigation />
    <main class="bg-home bg-repeat min-h-screen">
        <section
          class="w-full min-h-screen bg-[#2a3240] px-3 sm:px-[100px] sm:pt-[130px] pt-20 pb-8"
        >
          <div class="block sm:flex items-center">
            <div class="w-full sm:w-1/2 sm:mr-auto mb-10 sm:mb-0">
              <img alt="" src="../assets/undraw_add_files_re_v09g (1).svg" class="w-[70%] mx-auto h-auto swing" />
            </div>
            <div class="w-full sm:w-[50%] text-center text-white relative">
              <div class="relative">
                <img
                  alt=""
                  src="../assets/handy-line-line.png"
                  class="w-[80px] h-[80px] hidden sm:block absolute left-[-5%] top-[-40px]"
                />
                <h1 class="text-[1.75rem] sm:text-[2.5rem] font-bold mb-5 sm:mb-[30px]">
                  Create, upload & save your important documents, tasks and notes for free!
                </h1>
              </div>
              <p class="tracking-wider">
                Keeping track of your documents, tasks and notes just got a lot easier! Create,
                organise, and store them with this easy-to-use free tool.
                Collaborate with others and share the love :) <br />
                
              </p>
                <RouterLink v-if="user == null" to="/register">
                  <button class="bg-rose-500 text-[0.90rem] mt-8 sm:mt-12 px-5 py-2 rounded-sm hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300">
                    Sign Up to get started
                  </button>
                </RouterLink>
                <RouterLink  v-else to="/notes">
                  <button class="bg-rose-500 text-[0.90rem] mt-8 sm:mt-12 px-5 py-2 rounded-sm hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300">
                    Create new note
                  </button>
                </RouterLink>
            
            </div>
            <RouterLink v-if="user != null" to="/notes">
              <div class="w-12 text-white text-center h-12 sm:w-[70px] sm:h-[70px] leading-none pt-1 text-[40px] flex justify-center items-center rounded-full cursor-pointer bg-rose-500 hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300 fixed right-8 bottom-8">
                +
              </div>
            </RouterLink>
          </div>
        
        </section>
      </main>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import { RouterLink } from 'vue-router';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    Navigation,
    RouterLink
},
data() {
    return {
        user: null
    }
    },

methods: {
  ...mapGetters({
    getCurrentUser: 'getCurrentUser',
  }),
  ...mapActions({
      loginUser: 'loginUser'
  }),
  },
mounted() {
  this.user = this.getCurrentUser()
}
}
</script>
