<template>
<div> 
<div class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      
      <div class="relative w-full h-full max-w-lg md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-[#2a3240] rounded-lg shadow">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-5 border-b rounded-t">
                <h3 class="text-xl font-medium text-white uppercase">
                    Edit {{ data?.title}}
                </h3>
                <button @click="close" type="button" class="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span> 
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
              <form enctype="multipart/form-data">
            <select
          
              class="w-full bg-rose-400/20 my-4 p-3 outline-none rounded-lg">
              <option value="Pending" selected>Pending</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Done">Done</option>
            
            </select>
            <input
            v-model="title"
            type="text"
            placeholder="Title"
            class="w-full bg-rose-400/20 my-4 p-3 outline-none rounded-lg"
            />
            <textarea
            v-model="description"
            placeholder="Description"
            class="w-full bg-rose-400/20 my-4 p-3 outline-none rounded-lg"
            />
          </form>
        </div>
            <!-- Modal footer -->
            <div class="flex justify-between p-6 space-x-2 border-t border-white rounded-b">
                <button @click="close" type="button" class="text-white bg-[#d7415d] focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Cancel</button>
                <button @click="update" type="button" class="text-white bg-blue-500 focus:outline-none rounded-lg text-sm font-medium px-5 py-2.5  focus:z-10">
                  Update
                </button>
            </div>
        </div>
    </div>
    </div>     
    <div class="opacity-25 fixed inset-0 z-40 bg-black"></div> 
</div>
</template>

<script>
  export default {
    props: ['data'],
    name: 'Modal',
    data() {
        return {
            title: this.data?.title,
            description: this.data?.description
        }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      update() {
        this.$emit('update');
      },
    },
    created(){
        console.log(this.data)
    }
  };
</script>