import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/services/Api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null,
    isLoggedIn: false
  },
  getters: {
    getCurrentUser: (state) => {
      state.currentUser = JSON.parse(localStorage.getItem("currentUser"))
      return state.currentUser
  },
  getLoginStatus: (state) => {
    if(state.currentUser != null) {
      state.isLoggedIn = true
    }
    return state.isLoggedIn
  },
  },

  mutations: {
    SET_CURRENT_USER(state, value) {
      state.currentUser = value
  },

  SET_DOCUMENTS(state, value) {
    state.documents = value
  }   

  },
  actions: {

    registerUser({ commit }, { data, cb }) {
      return  Api()
          .post('/accounts/register/', {
              full_name: data.full_name,
              email: data.email,
              phone_number: data.phone_number,
              password: data.password,
          })
          .then((response) => {
              if (cb) {
                  cb(response.data)
              }
          })
          .catch((error) => Promise.reject(error))
  },

  loginUser({ commit }, { data, cb }) {
    return  Api()
        .post('/accounts/login', {
            email: data.email,
            password: data.password,
        })
        .then((response) => {
            if (cb) {
                cb(response.data)
                localStorage.setItem("currentUser", JSON.stringify(response.data))
            }
        })
        .catch((error) => Promise.reject(error))
},

createDocument({ commit }, { data, cb }) {
  return  Api()
      .post('/documents/', {
          type: data.type,
          title: data.title,
          description: data.description,
          file: data.file,
          author: data.author
      })
      .then((response) => {
          if (cb) {
              cb(response.data)
          }
      })
      .catch((error) => Promise.reject(error))
    
    },

    getDocuments({ commit }, {cb }) {
      return  Api()
          .get('/documents/')
          .then((response) => {
              if (cb) {
                  cb(response.data)
              }
          })
          .catch((error) => Promise.reject(error))
    },


  },
  modules: {
  }
})
