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
          author: data.author,
          status: data.status
      })
      .then((response) => {
          if (cb) {
              cb(response.data)
          }
      })
      .catch((error) => console.log(error))
    
    },

    getDocuments({ commit }, {cb, type, status}) {
      let endpoint = ""
      if (status!=undefined) {
        endpoint = `/documents/?type=${type}&&status=${status}`
      }
      else {
        endpoint = `/documents/?type=${type}`
      }
      return  Api()
          .get(endpoint)
          .then((response) => {
              if (cb) {
                  cb(response.data)
              }
          })
          .catch((error) => console.log(error))
    },

    updateDocument({ commit }, { data, id, cb }) {
      return  Api()
          .patch(`/documents/${id}/`, data)
          .then((response) => {
              if (cb) {
                  cb(response.data)
              }
          })
          .catch((error) => console.log(error))
        
        },
    deleteDocument({ commit }, { id, cb }) {
      return  Api()
          .delete(`/documents/${id}`)
          .then((response) => {
              if (cb) {
                  cb(response.data)
              }
          })
          .catch((error) => console.log(error))
        
        },
  },
  modules: {
  }
})
