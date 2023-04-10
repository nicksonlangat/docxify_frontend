<template>
  <header>
      <div class="w-full bg-[#2a3240] px-12 lg:px-[100px] fixed top-0 left-0 border-b border-slate-600 sm:flex items-center z-[100] hidden">
        <div class="mr-auto">
          <div class="flex items-center gap-[0px] ml-[-10px] cursor-pointer">
            <img alt="logo" src="../assets/note app logo.png" class="w-16 h-16" />
            <p class="font-dyna text-[1.5rem] text-rose-300 tracking-widest">
              Docxify
            </p>
          </div>
        </div>
        <nav class="w-[65%] flex items-center">
          <div v-if="isLoggedIn" class="flex items-center gap-6 lg:gap-16 mr-auto">
            <RouterLink
              to="/"
              class=" text-white">
              Home
            </RouterLink>
            <RouterLink
              to="/notes"
              class="text-white"
              >
              Notes
            </RouterLink>
            <RouterLink
              to="/tasks"
              class="text-white"
              >
              Tasks
            </RouterLink>
            <RouterLink
              to="/documents"
              class="text-white"
              >
              Documents
            </RouterLink>
          </div>
         
            <div v-if="isLoggedIn" class="flex gap-3 items-center">
              <div class="px-5 py-[4px] border-[#ffab91] rounded-lg flex items-center gap-2">
                <h2 class="text-white">Hi, {{ user?.user.full_name }}</h2>
               
              </div>
              <button @click="logOut" class="bg-rose-500 font-bold text-white text-[0.90rem] px-5 py-1 rounded-md hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300">
                Logout
              </button>
            </div>
        </nav>
      </div>

      {/* mobile header */}
      <div
        class="sm:hidden w-full h-[70px] px-5 bg-[#2a3240] fixed top-0 left-0 z-[100] border-b-[0px] border-b-[#47a3b3] flex justify-between items-center shadow-md"
      >
        <RouterLink to="#" class="mr-auto">
          <div class="flex items-center gap-[0px] ml-[-10px] cursor-pointer">
            <img alt="logo" src="../assets/note app logo.png" class="w-16 h-16" />
            <p class="font-dyna text-[1.5rem] text-rose-300 tracking-widest">
              Docxify
            </p>
          </div>
        </RouterLink>
        <img
        @click="toggleNav"
          alt="hamburger"
          src="../assets/icons8-xbox-menu-50.png"
          class="w-[30px] h-[30px] cursor-pointer"
        />

      
          <div v-if="navOpen" class="w-full h-[100vh] z-[200] bg-black/80 fixed top-0 left-0">
            <img
            @click="toggleNav"
              class="w-[35px] h-[35px] cursor-pointer mr-[25px] absolute top-[30px] right-2"
              alt=""
              src="../assets/icons8-cancel-48.png"
            />
            <div
            
              class="w-[35%] h-screen float-left"
            ></div>
            <ul class="slide float-right w-[65%] h-full bg-[#2a3240] px-[30px] text-[1rem] text-white pt-[100px] text-center">
            
                <li class="w-[fit-content] my-6 mx-auto flex items-center justify-center gap-2 px-2 py-1 rounded-lg">
                  <div class="text-rose-400 font-bold text-[1.25rem]">
                   <p>Nick Langat</p>
                  </div>
                  
                </li>
            
              <li class="my-4">
              
                <RouterLink to="/">Home</RouterLink>
               
              </li>
              <li class="my-4">
              
                  
                  <RouterLink to="/notes">Notes</RouterLink>
               
              </li>
              <li class="my-4">
              
                <RouterLink to="/tasks">Tasks</RouterLink>
               
              </li>
                <li class="my-4">
                  <RouterLink to="/documents">Documents</RouterLink>
                </li>
                <li>
                  <div class="w-full">Log Out</div>
                </li>
            </ul>
          </div>
      </div>
    </header>
</template>
<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'Navigation',
  components: {
    RouterLink
},
data() {
    return {
      user: null,
      isLoggedIn: false,
      navOpen: false,
    }
    },

methods: {
  logOut() {
    localStorage.removeItem("currentUser")
    localStorage.removeItem("isAuthenticated")
    this.$router.push({"name": "login"})
  },
  toggleNav() {
    this.navOpen =! this.navOpen
  }
  },

mounted() {
  this.user = JSON.parse(localStorage.getItem("currentUser"))
  this.isLoggedIn = localStorage.getItem("isAuthenticated")
}
}
</script>