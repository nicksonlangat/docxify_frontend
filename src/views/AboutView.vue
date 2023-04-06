<template>
  <div>
    <Navigation />
    <div class="w-full px-4 sm:px-[100px] py-[100px] text-white">
      <div class="flex justify-between">
          <h1 class="text-[1.75rem] sm:text-[2.5rem] mb-8 sm:mb-12 font-bold tracking-wider">
       Tasks
      </h1>
      <div class="relative flex items-center mb-8">
              <button class="absolute right-0 focus:outline-none rtl:left-0 rtl:right-auto">
                  
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-4 text-gray-400 transition-colors duration-300 dark:text-gray-500 hover:text-gray-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>

              </button>

              <input type="text" v-model="text" placeholder="Search tasks..." class="w-full bg-rose-400/20 my-4 px-8 p-3 outline-none rounded-lg">
          </div>
      </div>
      <!--first:row-span-2  -->
      <div class="w-full ">
                
                <div class="grid grid-cols-3 gap-x-20">
                  <div>
            <h2 class="text-2xl font-bold mb-4">Task backlog</h2>
              <draggable
               class="space-y-4"
                :list="pendingTasks" 
                :group="{ name: 'tasks'}"
                style="min-height:400px"
                data-id="1"
                >
              <div   v-for="task in pendingTasks" :key="task" class="p-4 bg-[#FB7185] rounded-md text-gray-800 space-y-2">
                <div class="flex justify-between">
                  <div class="text-gray-800 text-xs">Number 10</div>
                  <div class="text-gray-700 text-xs">4h</div>
                </div>
                <span class="font-bold">{{ task }}</span>
                <div class="text-sm text-gray-900 font-kalam">
                 {{ task }}
                    </div>
              </div>
           
            </draggable>
          </div>
       
          <div>
            <h2 class="text-2xl font-bold mb-4">Ongoing Tasks</h2>

            <div  class="space-y-4">
              <draggable
               class="space-y-4" 
               :list="ongoingTasks"
               :group="{ name: 'tasks'}"
               @change="handleChange"
               style="min-height:400px"
               data-id="2"
               >
              <div v-for="task in ongoingTasks" :key="task" class="p-4 bg-white rounded-md text-gray-800 space-y-2">
                <div class="flex justify-between">
                  <div class="text-gray-800 text-xs">Number 10</div>
                  <div class="text-gray-700 text-xs">4h</div>
                </div>
                <span class="font-bold">{{ task }}</span>
                <div class="text-sm text-gray-900 font-kalam">
                  {{ task }}
                  </div>
              </div>
              </draggable>
            </div>
          </div>
          <div>
            <h2 class="text-2xl font-bold mb-4">Completed tasks</h2>

            <div class="space-y-4">
              <draggable
               class="space-y-4"
                :list="doneTasks"
                :group="{ name: 'tasks'}"
                style="min-height:400px"
                data-id="3"
                @change="finish"
                >
              <div v-for="task in doneTasks" class="p-4 bg-[#188A94] rounded-md text-gray-800 space-y-2">
                <div class="flex justify-between">
                  <div class="text-gray-800 text-xs">Number 10</div>
                  <div class="text-gray-700 text-xs">4h</div>
                </div>
                <span class="font-bold">{{ task }}</span>
                <div class="text-sm text-gray-900 font-kalam">
                  {{ task}}
                   </div>
                 
              </div>
            </draggable> 
            </div>
         
          </div>
                </div>
            <div v-if="tasks.length == 0" class="w-full col-span-2 text-center py-10 border-2 border-rose-400 rounded-xl text-gray-500">
              <img
                alt="empty"
                src="../assets/icons8-empty-box-64.png"
                class="w-1/3 h-auto mb-4 mx-auto"
              />
              <p class="font-bold text-[2rem]">No tasks yet...</p>
              <RouterLink to="/create">
                <button class="bg-rose-500 text-[0.90rem] mt-8 text-white sm:mt-12 px-5 py-2 rounded-sm hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300">
                  Create new task
                </button>
              </RouterLink>
            </div>
         
        </div>
        
      <RouterLink to="/create">
        <div class="animate-bounce w-12 h-12 sm:w-[70px] sm:h-[70px] leading-none pt-1 text-[40px] flex justify-center items-center rounded-full cursor-pointer bg-rose-500 hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300 fixed right-8 bottom-8">
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
import draggable from 'vuedraggable'
export default {
name: 'Tasks',
components: {
  Navigation,
  RouterLink,
  draggable,
},
data: ()=>({
  isEmpty: false,
  pendingTasks: ['Eat breakfast', 'Wash car'],
  ongoingTasks: ['Write code', 'Play Pes'],
  doneTasks: ['Take bath', 'Wake up'],
  text: "",
  tasks: [1]
}),

methods: {
detectMove: function(evt){
     console.log(evt)
  },
handleChange(event){
      console.log(event)
    },
    finish (item) {
  console.log(item) 
}
},
mounted() {
}
}
</script>
