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
                  
                  <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-20">
                    <div>
              <h2 class="text-2xl font-bold mb-4 text-[#febd2f]">Task backlog</h2>
                <draggable class="space-y-4"
                :list="pendingTasks" 
                :group="{ name: 'tasks'}"
                style="min-height:400px"
                @change="handlePendingChange"
                >
                <div   v-for="task in pendingTasks" :key="task.title" class="p-4 bg-[#febd2f] rounded-md text-gray-800 space-y-2">
                  <div class="flex justify-between">
                    <div class="text-gray-800 text-xs">{{ formatDate(task.created_at) }}</div>
                    <span @click="deleteItem(task.id)" class="text-rose-500 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                    </span>
                  </div>
                  <span class="font-bold">{{ task.title }}</span>
                  <div class="text-sm text-gray-900 font-kalam">
                    {{ task.description }}
                      </div>
                </div>
             
              </draggable>
            </div>
         
            <div>
              <h2 class="text-2xl font-bold mb-4 text-[#e9eef2]">Ongoing Tasks</h2>

              <div  class="space-y-4">
                <draggable class="space-y-4" 
                :list="ongoingTasks" 
                :group="{ name: 'tasks'}"
                style="min-height:400px"
                @change="handleOngoingChange"
                >
                <div v-for="task in ongoingTasks" class="p-4 bg-[#e9eef2] rounded-md text-gray-800 space-y-2">
                  <div class="flex justify-between">
                    <div class="text-gray-800 text-xs">{{ formatDate(task.created_at) }}</div>
                    <span @click="deleteItem(task.id)" class="text-rose-500 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                    </span>
                  </div>
                  <span class="font-bold">{{ task.title }}</span>
                  <div class="text-sm text-gray-900 font-kalam">
                    {{ task.description }}
                    </div>
                </div>
                </draggable>
              </div>
            </div>
            <div>
              <h2 class="text-2xl font-bold mb-4 text-[#74bde0]">Completed tasks</h2>

              <div class="space-y-4">
                <draggable class="space-y-4" 
                :list="doneTasks" 
                :group="{ name: 'tasks'}"
                style="min-height:400px"
                @change="handleDoneChange"
                >
                <div v-for="task in doneTasks" class="p-4 bg-[#74bde0] rounded-md text-gray-800 space-y-2">
                  <div class="flex justify-between">
                    <div class="text-gray-800 text-xs">{{ formatDate(task.created_at) }}</div>
                    <span @click="deleteItem(task.id)" class="text-rose-500 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                    </span>
                  </div>
                  <span class="font-bold">{{ task.title }}</span>
                  <div class="text-sm text-gray-900 font-kalam">
                    {{ task.description }}
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
               
                  <button @click="toggleModal()" class="bg-rose-500 text-[0.90rem] mt-8 text-white sm:mt-12 px-5 py-2 rounded-sm hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300">
                    Create one
                  </button>
             
              </div>
           
          </div>
          
      
          <div @click="toggleModal()" class="animate-bounce w-12 h-12 sm:w-[70px] sm:h-[70px] leading-none pt-1 text-[40px] flex justify-center items-center rounded-full cursor-pointer bg-rose-500 hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300 fixed right-8 bottom-8">
            +
          </div>
        

       
    <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      
      <div class="relative w-full h-full max-w-lg md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-[#2a3240] rounded-lg shadow">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-5 border-b rounded-t">
                <h3 class="text-xl font-medium text-white uppercase">
                    New Task
                </h3>
                <button @click="toggleModal" type="button" class="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span> 
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
              <form enctype="multipart/form-data">
            <select
            v-model="document.status"
              class="w-full bg-rose-400/20 my-4 p-3 outline-none rounded-lg">
              <option value="Pending" selected>Pending</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Done">Done</option>
            
            </select>
            <input
            v-model="document.title"
              type="text"
              placeholder="Title"
              class="w-full bg-rose-400/20 my-4 p-3 outline-none rounded-lg"
            />
            <textarea
              v-model="document.description"
              placeholder="Description"
              class="w-full bg-rose-400/20 my-4 p-3 outline-none rounded-lg"
            />
          </form>
            </div>
            <!-- Modal footer -->
            <div class="flex justify-between p-6 space-x-2 border-t border-white rounded-b">
                <button @click="toggleModal" type="button" class="text-white bg-[#d7415d] focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Cancel</button>
                <button @click="saveTask" type="button" class="text-white bg-blue-500 focus:outline-none rounded-lg text-sm font-medium px-5 py-2.5  focus:z-10">
                  Save
                </button>
            </div>
        </div>
    </div>
    </div>

    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
 
    <!--  -->
    </div>
    </div>
   
    
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import { RouterLink } from 'vue-router';
import { mapActions} from 'vuex';
import moment from "moment";
import draggable from 'vuedraggable'
export default {
  name: 'Tasks',
  components: {
    Navigation,
    RouterLink,
    draggable,
},
data: ()=>({
    tasks: [0],
    pendingTasks: [],
    ongoingTasks: [],
    doneTasks: [],
    text: "",
    showModal: false,
    document: {
      type: "Task",
      status: "Pending",
      title: "",
      description: "",
      author: ""
    },
}),
methods: {
  ...mapActions({
    getDocuments: 'getDocuments',
    createDocument: 'createDocument',
    deleteDocument: 'deleteDocument',
    updateDocument: 'updateDocument'
  }),
  saveTask(e){
      e.preventDefault()
      this.createDocument({
            data: this.document,
            cb: (resp) => {
              this.toggleModal()
              this.init()
          }
        })
    },
  handlePendingChange(event){
      if (event.hasOwnProperty('added')) {
        this.updateTask(event.added.element.id, 'Pending')
      }
  },
  handleOngoingChange(event){
      if (event.hasOwnProperty('added')) {
        this.updateTask(event.added.element.id, 'Ongoing')
      }
  },
  handleDoneChange(event){
      if (event.hasOwnProperty('added')) {
        this.updateTask(event.added.element.id, 'Done')
      }
  },
  updateTask(id, status) {
    this.updateDocument({
      id: id,
      data: {"status": status},
      cb: (res=>{
        this.init()
      })
    })
  },
  formatDate(value) {
    return moment(value).format("MMM Do YY")
  },
  toggleModal(){
      this.showModal = !this.showModal;
  },
  deleteItem(id) {
    this.deleteDocument({
        id: id,
        cb: (res=>{
            this.init()
        })
    }) 
  },
  init() {
    this.getDocuments({
        type: "Task",
        status: "pending",
        cb: (res=>{
            this.pendingTasks = res
        })
    })

    this.getDocuments({
        type: "Task",
        status: "ongoing",
        cb: (res=>{
            this.ongoingTasks = res
        })
    }) 

    this.getDocuments({
        type: "Task",
        status: "done",
        cb: (res=>{
            this.doneTasks = res
        })
    }) 
  }
  
},
mounted() {
    this.init()
}
}
</script>
