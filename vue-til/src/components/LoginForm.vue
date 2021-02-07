<template>
  <form @submit.prevent="submitForm">
    <div>login</div>
    <div>
      <label for="username">id:</label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">password : </label>
      <input type="password" id="password" v-model="password" />
    </div>
    <button v-bind:disabled="!isUsernameVaild || !password" type="submit">로그인</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from "@/api/index";
import { validateEmail } from "@/utils/validation";
export default {
  data() {
    return {
      logMessage: "",
      username: "",
      password: "",
    };
  },
  computed: {
    isUsernameVaild() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        };
        const { data } = await loginUser(userData);
        console.log(data.user.username);
        this.logMessage = `${data.user.username} 님 환영합니다.`;
      } catch (error) {
        // error handling
        console.log(error.response.data);
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      (this.username = ""), (this.password = "");
    },
  },
};
</script>

<style></style>
