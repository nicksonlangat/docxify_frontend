<template>
    <div class="bg-[#29445D]">
    <Navigation />
    <div class="w-full px-4 sm:px-[100px] py-[100px] text-white">
          <div class="w-full px-5 py-3 sm:p-5 mt-4 mb-6 sm:mb-16 border-2 border-[#ffab91] rounded-lg relative">
            <p class="text-[1rem] sm:text-[1.25rem]">
              Hi Nick, welcome to your library.
            </p>
            <img
              class="w-8 h-8 cursor-pointer mr-6 absolute top-1/2 right-0 translate-y-[-50%]"
              alt=""
              src="../assets/icons8-cancel-48.png"
              
            />
          </div>
        <h1 class="text-[1.75rem] sm:text-[2.5rem] mb-8 sm:mb-12 font-bold tracking-wider">
         Notes
        </h1>
        <!--  -->
        <div class="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-[#252525]">
                  <div v-for="document in documents" :key="document.id" class="p-4 sm:p-6 bg-rose-400 cursor-pointer even:bg-[#ffab91] first:bg-[#e7ed9b] last:bg-[#cf94da] first:row-span-2 rounded-lg relative">
                    <RouterLink to="">
                      <div class="overlay w-full h-full absolute top-0 left-0"></div>
                    </RouterLink>
                    <div
                      class="w-3 h-3 sm:w-[18px] sm:h-[18px] rounded-full absolute top-2"
                    ></div>
                    <h2 class="text-[1.1rem] sm:text-[1.5rem] font-bold mb-2">
                     {{ document.title }}
                    </h2>
                    <p>{{ document.description }}</p>
                    <h3>{{ document.created_at }}</h3>
                  </div>
                  
              <div v-if="isEmpty" class="w-full col-span-2 text-center py-10 border-2 border-rose-400 rounded-xl text-gray-500">
                <img
                  alt="empty"
                  src="../assets/icons8-empty-box-64.png"
                  class="w-1/3 h-auto mb-4 mx-auto"
                />
                <p class="font-bold text-[2rem]">No notes yet...</p>
                <RouterLink to="/create">
                  <button class="bg-rose-500 text-[0.90rem] mt-8 text-white sm:mt-12 px-5 py-2 rounded-sm hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300">
                    Create new note
                  </button>
                </RouterLink>
              </div>
           
          </div>
       
          <!-- <div class="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 text-[#252525]">
                <div class="p-4 sm:p-6 bg-rose-400 cursor-pointer even:bg-[#ffab91] first:bg-[#e7ed9b] last:bg-[#cf94da] first:row-span-2 rounded-lg relative">
                  <RouterLink to="">
                    <div class="overlay w-full h-full absolute top-0 left-0"></div>
                  </RouterLink>
                  <div
                    class="w-3 h-3 sm:w-[18px] sm:h-[18px] rounded-full absolute top-2"
                  ></div>
                  <h2 class="text-[1.1rem] sm:text-[1.5rem] font-bold mb-2">
                   Title 2
                  </h2>
                  <h3>April 1</h3>
                </div> 
          </div> -->
          
        <RouterLink to="/create">
          <div class="w-12 h-12 sm:w-[70px] sm:h-[70px] leading-none pt-1 text-[40px] flex justify-center items-center rounded-full cursor-pointer bg-rose-500 hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300 fixed right-8 bottom-8">
            +
          </div>
        </RouterLink>
        <!--  -->
    </div>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import { RouterLink } from 'vue-router';
import { mapActions} from 'vuex';

export default {
  name: 'Register',
  components: {
    Navigation,
    RouterLink
},
data: ()=>({
    isEmpty: false,
    documents: []
}),

methods: {
  ...mapActions({
    getDocuments: 'getDocuments'
  }),
  },
mounted() {
    this.getDocuments({
        cb: (res=>{
            this.documents = res
        })
    }) 
}
}
</script>
