import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/services/Api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },

  mutations: {
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
    return  Api('application/json', false)
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
  return  Api('application/json', false)
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

    uploadDocument({ commit }, { data, cb }) {
      return  Api('multipart/formdata')
          .post('/documents/', data)
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
