<template>
    <div>
    <Navigation />
    <div class="w-full px-4 sm:px-[100px] py-[100px] text-white">
        <!-- Title -->
        <div class="flex justify-between">
            <h1 class="text-[1.75rem] sm:text-[2.5rem] mb-8 sm:mb-12 font-bold tracking-wider">
         Notes
        </h1>
        <!--  -->

        <!-- Notes search -->
        <div class="relative flex items-center mb-8">
                <button class="absolute right-0 focus:outline-none rtl:left-0 rtl:right-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-4 text-gray-400 transition-colors duration-300 dark:text-gray-500 hover:text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
                <input type="text" v-model="text" placeholder="Search notes..." class="w-full bg-gray-600 my-4 px-8 p-3 outline-none rounded-lg">
            </div>
        </div>
        <!--  -->
        <!--first:row-span-2  -->
        <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-[#252525]">
            <!-- New Note -->
            <div v-if="isNewNote" class="p-4 sm:p-6 bg-rose-400 cursor-pointer even:bg-[#ffab91] first:bg-[#e7ed9b] last:bg-[#cf94da] rounded-lg relative"> 
                <div class="flex justify-between">
                    <input v-model="note.title" type="text" class="w-full text-[24px] font-bold bg-inherit p-1 outline-none rounded">
                    <span @click="toggleNewNote" class="text-rose-500 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </span>
                </div>
                <textarea rows="6" v-model="note.description" v-on:keyup.enter="createNote"
                class="w-full text-[18px] font-kalam bg-inherit p-1 outline-none resize-none rounded">
                </textarea>
            </div>
            <!-- End New Note  -->
            <!-- list notes -->
            <div v-for="(document, index) in filteredDocuments" :key="index" class="p-4 sm:p-6 bg-rose-400 cursor-pointer even:bg-[#ffab91] first:bg-[#e7ed9b] last:bg-[#cf94da] rounded-lg relative"> 
                <div class="flex justify-between">
                    <h2 v-if="is_edited !== index"  @click="toggleTitleEdit(index)" class="text-[24px] mb-3 font-bold">
                     {{ document.title }}
                    </h2>
                    <input id="title" v-on:keyup.enter="updateTitle(document.id)" :value="document.title" v-if="is_edited == index" type="text" class="w-full text-[24px] font-bold bg-inherit p-1 outline-none rounded">
                     <span @click="deleteItem(document.id)"  v-if="is_edited !== index"  class="text-rose-500 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                    </span>

                   </div>
                    <p v-if="editDescription !== index"  @click="toggleDescriptionEdit(index)" class="font-kalam text-[18px]">{{ document.description }}</p>
                    <textarea v-if="editDescription === index" rows="6" id="description" v-on:keyup.enter="updateDescription(document.id)" 
                    :value="document.description"
                    class="w-full text-[18px] font-kalam bg-inherit p-1 outline-none resize-none rounded">
                    </textarea>
                    
                    <div class="flex justify-between mt-4">
                        <span class=" rounded px-2 py-1 text-sm font-normal text-gray-700">
                            {{ formatDate(document.modified_at) }}
                        </span>   
                    </div>
            </div>
            <!--  -->
                  
              <!-- Empty list -->
              <div v-if="documents.length == 0" class="w-full col-span-2 text-center py-10 border-2 border-rose-400 rounded-xl text-gray-500">
                <img
                  alt="empty"
                  src="../assets/icons8-empty-box-64.png"
                  class="w-1/3 h-auto mb-4 mx-auto"
                />
                <p class="font-bold text-[2rem]">No notes yet...</p>
                  <button @click="toggleNewNote" class="bg-rose-500 text-[0.90rem] mt-8 text-white sm:mt-12 px-5 py-2 rounded-sm hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300">
                    Create new note
                  </button>
              </div>
              <!--  -->
           
          </div>
          
          <!-- Floating button -->
          <div @click="toggleNewNote" class="hover:animate-bounce w-12 h-12 sm:w-[70px] sm:h-[70px] leading-none pt-1 text-[40px] flex justify-center items-center rounded-full cursor-pointer bg-rose-500 hover:translate-y-[6px] transition-all duration-300 fixed right-8 bottom-8">
            +
          </div>
          <!--  -->
    </div>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import { RouterLink } from 'vue-router';
import { mapActions} from 'vuex';
import moment from "moment";

export default {
  name: 'Notes',
  components: {
    Navigation,
    RouterLink
},
data: ()=>({
    documents: [],
    text: "",
    note: {
        title: "Add title",
        description: "Add description",
        author:  JSON.parse(localStorage.getItem("currentUser")).user.id
    },
    isNewNote: false,
    is_edited: null,
    editDescription: null,
}),
watch: {
    
},
computed: {
      filteredDocuments() {
      return this.documents.filter((document) => {
          return document.title.toLowerCase().includes(this.text.toLowerCase());
      });
  },

  },
methods: {
  ...mapActions({
    createDocument: 'createDocument',
    getDocuments: 'getDocuments',
    updateDocument: 'updateDocument',
    deleteDocument: 'deleteDocument'
  }),
  createNote() {
    this.createDocument({
        data: this.note,
        cb: (resp) => {
            this.toggleNewNote()
            this.init()
            this.resetNote()
        }
    })
  },
  resetNote() {
    this.note.title = "Add title"
    this.note.description = "Add description"
  },
  toggleNewNote() {
    this.isNewNote =! this.isNewNote
  },
  formatDate(value) {
    return moment(value).format("MMM Do YY")
  },
  toggleTitleEdit(index) {
    this.is_edited = index
  },
  toggleDescriptionEdit(index) {
    this.editDescription = index
  },
  updateTitle(id) {
    this.updateDocument({
        data: {"title": document.getElementById('title').value},
        id: id,
        cb: (res=>{
            this.is_edited = null
            this.init()
        })
    }) 
  },
  updateDescription(id) {
    this.updateDocument({
        data: {"description": document.getElementById('description').value},
        id: id,
        cb: (res=>{
            this.editDescription = null
            this.init()
        })
    }) 
    
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
        type: "Note",
        cb: (res=>{
            this.documents = res
        })
    }) 
  }
  },
mounted() {
    this.init()
}
}
</script>
