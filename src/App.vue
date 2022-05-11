<script setup></script>

<template>
  <div v-if="appReady" class="min-h-full font-Poppins box-border">
    <Navigation />
    <Home />
  </div>
  <RouterView />
</template>

<style>
@import "./index.css";
</style>
<script>
import Navigation from "./components/Navigation.vue"
import Home from "./views/Home.vue"
import { ref } from "vue"
import { supabase } from "./supabase/init"
import store from "./store/index"

export default {
  components: {
    Navigation,
    Home,
  },
  setup() {
    const appReady = ref(null)
    const user = supabase.auth.user()
    // check if user is logged in
    if (!user) {
      appReady.value = true
    }
    supabase.auth.onAuthStateChange((_, session) => {
      store.methods.setUser(session)
      appReady.value = true
    })
    return {
      appReady,
    }
  },
}
</script>
