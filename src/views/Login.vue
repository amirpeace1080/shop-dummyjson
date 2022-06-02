<template>
  <div id="app">
    <v-app>
      <v-card width="400" class="mx-auto mt-5">
        <v-card-title>
          <h1>Login Form</h1>
          <v-card-text>
            <v-text-field
              v-model="username"
              label="Username"
              prepend-icon="mdi-account-circle"
            />
            <v-text-field
              v-model="password"
              @click:append="showPassword = !showPassword"
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            >
            </v-text-field>
          </v-card-text>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-actions class="ma-3">
          <v-spacer></v-spacer>
          <v-btn @click="login" color="secondary">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
      username: "kminchelle",
      password: "0lelplR",
    };
  },
  methods: {
    login() {
      let username = this.username;
      let password = this.password;
      this.$store
        .dispatch("login", { username, password })
        .then(() => {
          // window.location('/')
          this.$router.push("/");
        })
        .catch(() => {
          this.$fire({
            title: "خطا !",
            text: "نام کاربری و رمز عبور وارد شده صحیح نمی باشد",
            type: "error",
            confirmButtonText: "دوباره تلاش می‌کنم",
            timer: 3000,
          }).then((r) => {
            console.log(r.value);
          });
        });
    },
  },
};
</script>

<style>
</style>