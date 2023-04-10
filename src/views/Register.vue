<template>
    <div>
    <Navigation />
    <div class="w-full min-h-[85vh] px-4 my-16 text-white flex items-center justify-center relative">
        <div class="w-full sm:w-[550px] p-5 sm:p-10 rounded-md border-2 border-gray-400">
          <h1 class="font-bold text-[1.75rem] text-center">Register</h1>
          <form >
            <input
            v-model="user.full_name"
              type="text"
              placeholder="Full Name"
              class="w-full bg-gray-600 my-4 p-3 outline-none rounded-lg"
            />
            <input
            v-model="user.email"
              type="email"
              placeholder="Email"
              class="w-full bg-gray-600 my-4 p-3 outline-none rounded-lg"
            />
            <input
            v-model="user.phone_number"
              type="text"
              placeholder="Phone Number"
              class="w-full bg-gray-600 my-4 p-3 outline-none rounded-lg"
            />
            <div class="w-full relative">
              <input
              v-model="user.password"
              type="password"
                placeholder="Password"
                class="w-full bg-gray-600 my-4 p-3 outline-none rounded-lg"
              />
              <img
                alt="reveal"
                src="../assets/icons8-eye-30.png"
                class="w-5 h-5 absolute top-1/2 right-3 translate-y-[-50%] cursor-pointer"
              />
            </div>
            <button @click="registerNewUser" class="w-full bg-emerald-500 my-4 p-3 outline-none rounded-lg">
              Register
            </button>
            <p>
              Have an account already?
              <RouterLink to="/login" class="text-rose-400">
                Login
              </RouterLink>
            </p>
          </form>
        </div>
      </div>
    </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue'
import { RouterLink } from 'vue-router'
import { mapActions} from 'vuex'

export default {
  name: 'Register',
  components: {
    Navigation,
    RouterLink
},

data() {
        return {
            user: {
                full_name: "",
                email: "",
                phone_number: "",
                password: ""
            },
        }
    },

methods: {
        ...mapActions({
            registerUser: 'registerUser'
        }),
        registerNewUser(e){
            this.registerUser({
                data: this.user,
                cb: (resp) => {
                    this.$router.push({"name": "login"})
                    }
            })
            e.preventDefault()
        }
    }
}
</script>
