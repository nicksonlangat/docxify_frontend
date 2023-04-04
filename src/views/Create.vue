<template>
    <div class="bg-[#29445D]">
    <Navigation />
    <div class="w-full min-h-[85vh] px-4 my-16 text-white flex items-center justify-center relative">
        <div class="w-full sm:w-[550px] p-5 sm:p-10 rounded-2xl border-2 border-rose-400">
          <h1 class="font-bold text-[1.75rem] text-center">Create a record</h1>
          <form enctype="multipart/form-data">
            <select
            v-model="document.type"
              class="w-full bg-rose-400/20 my-4 p-3 outline-none rounded-lg">
              <option value="" selected>---Please select---</option>
            <option value="Note">Note</option>
            <option value="Task">Task</option>
            <option value="Document">Document</option>
            </select>
            <input
            v-model="document.title"
              type="text"
              placeholder="Title"
              class="w-full bg-rose-400/20 my-4 p-3 outline-none rounded-lg"
            />
            <textarea
            v-if="document.type != 'Document'"
              v-model="document.description"
              placeholder="Description"
              class="w-full bg-rose-400/20 my-4 p-3 outline-none rounded-lg"
            />
            <input v-if="document.type == 'Document'"
            name="docArray" @change="onChange"
              type="file"
              placeholder="Document"
              class="w-full bg-rose-400/20 my-4 p-3 outline-none rounded-lg"
            />
            
            <button @click="saveDocument" class="w-full bg-rose-400 my-4 p-3 outline-none rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue'
import { RouterLink } from 'vue-router';
import { mapActions } from 'vuex';

export default {
  name: 'Create',
  components: {
    Navigation,
    RouterLink
},
data() {
        return {
            document: {
                type: "",
                title: "",
                description: "",
                file: null,
                author: ""
            },
            docArray: null
        }
    },

methods: {
        ...mapActions({
          createDocument: 'createDocument'
        }),
        onChange (event) {
          this.docArray = event.target.files[0]
        },
        saveDocument(e){
          e.preventDefault()

          // const data ={
          //        title: this.document.title,
          //        type: this.document.type,
          //        description: this.document.description,
          //        author: this.document.author,  
          // }
          
          // const formData = new FormData()
          
          // formData.set('title', data.title)
          // formData.set('description', data.description)
          // formData.set('type', data.type)
          // formData.set('author', data.author)
          // formData.append('file', this.docArray, this.docArray.name)
         
          this.createDocument({
                data: this.document,
                cb: (resp) => {
                    if (resp.type == 'Note') {
                      this.$router.push({"name": "notes"})
                    }
                    else if (resp.type == 'Task') {
                      this.$router.push({"name": "tasks"})
                    }
                    else if (resp.type == 'Document') {
                      this.$router.push({"name": "documents"})
                    }
                    }
            })
            
        }
    }
}
</script>
