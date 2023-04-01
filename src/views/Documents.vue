<template>
    <Navigation />
</template>

<script>

import Navigation from '@/components/Navigation.vue'
import { RouterLink } from 'vue-router';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Documents',
  components: {
    Navigation,
    RouterLink
},
data() {
    return {
        user: null
    }
    },

methods: {
  ...mapGetters({
    getCurrentUser: 'getCurrentUser',
  }),
  ...mapActions({
      loginUser: 'loginUser'
  }),
  },
mounted() {
  this.user = this.getCurrentUser()
}
}
</script>
