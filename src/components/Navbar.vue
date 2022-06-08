<template>
  <div class="navbar-main">
    <!-- size lg -->
    <v-app-bar
      class="hidden-sm-and-down elevation-8"
      color="teal lighten-3"
      dark
      fixed
    >
      <v-toolbar-items>
        <router-link to="/">
          <v-img
            class="mt-3 mr-3"
            width="58"
            height="38"
            src="../../public/logo.jpg"
          />
        </router-link>
        <v-btn text to="/products">
          <span>Products</span>
        </v-btn>
        <v-btn text to="/about">
          <span>About</span>
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-text-field
        class="mt-2"
        placeholder="Search in Site"
        outlined
        prepend-inner-icon="mdi-search-web"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          text
          href="https://github.com/amirpeace1080/shopping-dummyjson/"
          target="_blank"
        >
          <v-icon>mdi-github</v-icon>
        </v-btn>
        <router-link to="/cart">
          <v-btn text class="mt-3">
            <v-icon>mdi-cart</v-icon>
            <span>{{ this.$store.state.cart.length }}</span>
          </v-btn>
        </router-link>
        <v-btn text @click="logout">
          <v-icon>mdi-exit-to-app</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <!-- size mobile -->
    <v-app-bar
      class="hidden-sm-and-up elevation-8"
      color="teal lighten-3"
      dark
      fixed
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>

      <v-btn
        text
        href="https://github.com/amirpeace1080/shopping-dummyjson/"
        target="_blank"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <router-link to="/cart">
        <v-btn text>
          <v-icon>mdi-cart</v-icon>
          <span>{{ this.$store.state.cart.length }}</span>
        </v-btn>
      </router-link>
      <v-btn text @click="logout">
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-system-bar></v-system-bar>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img
              src="https://lh3.googleusercontent.com/a-/AOh14GhRowOcRCeXt5Uw7plDEq6qacBrFbyjB-UQ7txUbw=s96-c-rg-br100"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Mohammad Sharifi
            </v-list-item-title>
            <v-list-item-subtitle>amirpeace1080@gmail.com</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group color="primary">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <router-link to="/">Home</router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <router-link to="/products">Products</router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <router-link to="/about">About</router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style scoped>
.navbar-main {
  margin-bottom: 50px;
}
</style>