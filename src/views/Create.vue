<template>
    <div class="bg-[#29445D]">
    <Navigation />
    <div class="w-full min-h-[85vh] px-4 my-16 text-white flex items-center justify-center relative">
        <div class="w-full sm:w-[550px] p-5 sm:p-10 rounded-2xl border-2 border-rose-400">
          <h1 class="font-bold text-[1.75rem] text-center">Create a record</h1>
          <form>
            <select
              type="text"
              placeholder="Type"
              class="w-full bg-rose-400/20 my-4 p-3 outline-none rounded-lg">
            <option value="">Note</option>
            <option value="">Task</option>
            <option value="">Document</option>
            </select>
            <input
              type="text"
              placeholder="Title"
              class="w-full bg-rose-400/20 my-4 p-3 outline-none rounded-lg"
            />
            <textarea
              type="email"
              placeholder="Description"
              class="w-full bg-rose-400/20 my-4 p-3 outline-none rounded-lg"
            />
            <input
              type="file"
              placeholder="Document"
              class="w-full bg-rose-400/20 my-4 p-3 outline-none rounded-lg"
            />
            
            <button
              class="w-full bg-rose-400 my-4 p-3 outline-none rounded-lg"
            >
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

export default {
  name: 'Register',
  components: {
    Navigation,
    RouterLink
}
}
</script>
