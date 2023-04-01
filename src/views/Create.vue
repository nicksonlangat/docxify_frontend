<template>
    <div class="bg-[#29445D]">
    <Navigation />
    <div class="w-full min-h-[85vh] px-4 my-16 text-white flex items-center justify-center relative">
        <div class="w-full sm:w-[550px] p-5 sm:p-10 rounded-2xl border-2 border-rose-400">
          <h1 class="font-bold text-[1.75rem] text-center">Create a record</h1>
          <form>
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
              v-model="document.description"
              placeholder="Description"
              class="w-full bg-rose-400/20 my-4 p-3 outline-none rounded-lg"
            />
            <input
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
        }
    },

methods: {
        ...mapActions({
          createDocument: 'createDocument'
        }),
        saveDocument(e){
            this.createDocument({
                data: this.document,
                cb: (resp) => {
                    this.$router.push({"name": "notes"})
                    }
            })
            e.preventDefault()
        }
    }
}
</script>
