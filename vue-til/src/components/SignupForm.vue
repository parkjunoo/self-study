<template>
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">id : </label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">password : </label>
      <input type="password" id="password" v-model="password" />
    </div>
    <div>
      <label for="nickname">nickname : </label>
      <input type="text" id="nickname" v-model="nickname" />
    </div>
    <button type="submit">signup</button>
    <p>
      {{ logMassage }}
    </p>
  </form>
</template>

<script>
import { registerUser } from "@/api/index";
export default {
  data() {
    return {
      logMassage: "",
      username: "",
      password: "",
      nickname: "",
    };
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const {data} = await registerUser(userData);

      this.logMassage = `${data.nickname} 님 가입되었습니다.`;
      this.initFrom();
    },
    initFrom() {
      this.username = "";
      this.nickname = "";
      this.password = "";
    },
  },
};
</script>

<style></style>
