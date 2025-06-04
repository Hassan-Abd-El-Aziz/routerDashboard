<template>
  <div class="w-screen h-screen flex">
    <!-- sidebar -->
    <div class="w-[400px] h-full bg-gray-200 text-white" v-show="showSide">
      <div class="h-[50px] bg-gray-900 flex justify-start items-center">
        <div class="px-[20px]">
          <h3 class="font-bold md:text-xl sm:text-sm">Admin Dashboard</h3>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-gray-800 py-[20px]">
        <div
          class="flex flex-col justify-between h-full px-[20px] space-y-[10px]"
        >
          <div class="flex flex-col justify-between space-y-[10px]">
            <router-link
              to="/home"
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm hover:bg-gray-300 hover:rounded-2xl hover:text-black"
            >
              <img
                class="w-5 h-5 mr-1"
                src="https://img.icons8.com/?size=100&id=98956&format=png&color=ffffff"
                alt=""
              />
              Home
            </router-link>
            <router-link
              to="/profile"
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm hover:bg-gray-300 hover:rounded-2xl hover:text-black"
            >
              <img
                class="w-5 h-5 mr-1"
                src="https://img.icons8.com/?size=100&id=61856&format=png&color=ffffff"
                alt=""
              />
              Profile
            </router-link>
            <router-link
              to="/profile"
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm hover:bg-gray-300 hover:rounded-2xl hover:text-black"
            >
              <img
                class="w-5 h-5 mr-1"
                src="https://img.icons8.com/?size=100&id=101281&format=png&color=ffffff"
                alt=""
              />
              Messages
            </router-link>
            <router-link
              to="/home"
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm hover:bg-gray-300 hover:rounded-2xl hover:text-black"
            >
              <img
                class="w-5 h-5 mr-1"
                src="https://img.icons8.com/?size=100&id=101296&format=png&color=ffffff"
                alt=""
              />
              Help
            </router-link>
          </div>
          <div>
            <router-link
              to="/profile"
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm hover:bg-gray-300 hover:rounded-2xl hover:text-black"
            >
              <img
                class="w-5 h-5 mr-1"
                src="https://img.icons8.com/?size=100&id=59992&format=png&color=ffffff"
                alt=""
              />
              Settings
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-full bg-gray-400">
      <div
        class="h-[50px] bg-gray-100 flex items-center justify-between shadow-sm px-[20px] w-full py-[10px] z-10 border-b"
      >
        <!-- hamburger menu -->
        <div
          class="cursor-pointer w-[30px] flex justify-between"
          @click="toggleSideBar"
        >
          <img
            src="https://img.icons8.com/?size=100&id=59832&format=png&color=000000"
            alt=""
          />
        </div>
        <h2 class="font-bold text-gray-700">Hassan</h2>
      </div>
      <div class="h-[calc(100vh-50px)] bg-gray-50 p-[20px]">
        <div class="border border-gray-300 rounded-md p-[20px] h-full">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <!-- main -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDropDown: false,
      showSide: true,
    };
  },
  methods: {
    toggleSideBar() {
      this.showSide = !this.showSide;
    },
  },
};
</script>
