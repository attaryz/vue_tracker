<template>
  <header class="bg-at-light-green text-white">
    <nav
        class="container py-5 px-4 flex flex-col gap-4 items-center sm:flex-row justify-between"
    >
      <!--logo-->
      <div class="flex items-center gap-x-4">
        <img src="public/favicon.png" class="w-14"/>
        <!--app name-->
        <h1>Active Tracker</h1>
      </div>
      <ul class="flex flex-row gap-4">
        <router-link :to="{ name: 'Home' }" class="cursor-pointer" active-class="underline">
          Home
        </router-link
        >
        <!--        <router-link :to="{ name: 'Create' }" class="cursor-pointer"-->
        <!--          >create</router-link-->
        <!--        >-->
        <router-link :to="{ name: 'Login' }" class="cursor-pointer"
        >Login
        </router-link
        >
        <router-link :to="{ name: 'Register' }" class="cursor-pointer"
        >Register
        </router-link
        >
        <li class="cursor-pointer">Logout</li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
