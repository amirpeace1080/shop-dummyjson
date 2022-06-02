<template>
  <div>
    <v-overlay v-if="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <router-view />
    <div>
      <div>
        <v-container>
          <v-row>
            <v-col
              lg="4"
              cols="12"
              v-for="(product, index) in visiblePages"
              :key="index"
            >
              <main class="container">
                <section class="card-container">
                  <header class="image-header">
                    <v-hover>
                      <template v-slot:default="{ hover }">
                        <v-card>
                          <v-img
                            height="300"
                            :src="product.images[0]"
                            alt="image equilibrium"
                            class="image-main"
                          >
                          </v-img>
                          <v-fade-transition>
                            <v-overlay v-if="hover" absolute color="#036358">
                              <v-btn @click="addCart(product)">
                                <v-icon>mdi-cart</v-icon>
                              </v-btn>
                            </v-overlay>
                          </v-fade-transition>
                        </v-card>
                      </template>
                    </v-hover>
                  </header>
                  <router-link
                    :to="{ path: `/${product.id}`, params: { id: product.id } }"
                  >
                    <h1 class="tittle-card">{{ product.title }}</h1>

                    <p class="text-card">{{ product.description }}.</p>
                  </router-link>

                  <div class="items-card">
                    <div class="left">
                      <v-icon color="#76FF03" class="img-item"
                        >mdi-currency-usd</v-icon
                      >
                      <span class="eth">{{ product.price }}</span>
                    </div>
                    <div class="right">
                      <v-rating
                        readonly
                        small
                        dense
                        background-color="orange"
                        color="orange"
                        length="5"
                        :value="product.rating"
                      ></v-rating>
                    </div>
                  </div>

                  <!-- <footer class="creator-section">
                <img
                  src="https://avatars.githubusercontent.com/u/66575135?s=400&u=4e316d2a8fd2ddd46d3cf94cdb25b86b4ebd081c&v=4"
                  alt=""
                  class="img-creator"
                />
                <p class="text-creator">
                  Creation of
                  <a href="https://github.com/Jean-carje" class="name-creator"
                    >Jean Estevez</a
                  >
                </p>
              </footer> -->
                </section>
              </main>
            </v-col>
          </v-row>
        </v-container>

        <v-pagination
          v-model="page"
          :length="Math.ceil(pages.length / perPage)"
          @next="nextPage"
          @previous="preventPage"
        ></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      page: 1,
      perPage: 12,
      pages: [],
      loading: false,
      msg: "",
    };
  },
  methods: {
    nextPage() {
      scrollTo(0, 0);
    },
    preventPage() {
      scrollTo(0, 0);
    },
    onEnterLeave(val) {
      this.msg = `Mouse ${val ? "Enter" : "Leave"}`;
    },
    addCart(product) {
      this.$store.state.cart.push(product)
    },
  },
  computed: {
    visiblePages() {
      return this.pages.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },
  },
  created() {
    this.loading = true;
    this.$store.dispatch("productPhone").then((res) => {
      this.loading = false;
      this.pages = res.data.products;
    });
  },
};
</script>


<style scoped>
@font-face {
  font-family: "Outfit";
  src: url("https://fonts.google.com/specimen/Outfit");
  /* Weights: 300, 400, 600 */
}

:root {
  /* Width layout */
  --width-mobile: 375px;
  --desktop: 1440px;

  /* Colors */
  --primary-Soft-blue: hsl(215, 51%, 70%);
  --primary-Cyan: hsl(178, 100%, 50%);

  --main-Very-dark-blue: hsl(217, 54%, 11%);
  --card-Very-dark-blue: hsl(216, 50%, 16%);
  --line-Very-dark-blue: hsl(215, 32%, 27%);
  --neutral-White: hsl(0, 0%, 100%);

  /* Font */
  --Font-paragraph-size: 18px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #616161;
}

.container {
  max-width: var(--desktop);
}

.card-container {
  background-color: var(--card-Very-dark-blue);
  width: min(87.5%, 22rem);
  height: 500px;
  margin: 3rem auto;
  padding: 1.4rem;
  border-radius: 5%;
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 50%);
}

.image-header:hover .overlay + .view {
  display: block;
}

.image-header {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  height: 98%;
  width: 100%;
  opacity: 0;
  background-color: var(--primary-Cyan);
  border-radius: 5%;
}

.view {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
}

.image-header:hover .overlay {
  opacity: 0.5;
  cursor: pointer;
}

.tittle-card {
  font-size: 1.3rem;
  color: var(--neutral-White);
  font-weight: 600;
  cursor: pointer;
  margin: 1.1rem 0 0.7rem 0;
}

.tittle-card:hover {
  color: var(--primary-Cyan);
}

.text-card {
  font-size: var(--Font-paragraph-size);
  color: var(--primary-Soft-blue);
  font-weight: 300;
  height: 48px;
  overflow: hidden;
  margin: 0.7rem 0;
}

.items-card {
  margin: 0.7rem 0 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.img-item {
  height: 1.3rem;
  vertical-align: middle;
  margin-right: 5px;
}

.eth {
  color: var(--primary-Cyan);
  font-weight: 600;
  vertical-align: middle;
}

.days {
  color: var(--primary-Soft-blue);
  font-weight: 400;
  vertical-align: middle;
}

.creator-section {
  color: var(--primary-Soft-blue);
  display: flex;
  flex-direction: row;
  padding: 0.7rem 0 0 0;
  align-items: center;
  border-top: 2px solid var(--line-Very-dark-blue);
}

.img-creator {
  height: 2.5rem;
  vertical-align: middle;
  border-radius: 50%;
  display: inline-block;
}

.text-creator {
  color: var(--primary-Soft-blue);
  font-weight: 400;
  margin: 0 1rem;
  vertical-align: middle;
}

.name-creator {
  text-decoration: none;
  font-weight: 400;
  margin: 0 0.1rem;
  color: var(--neutral-White);
  cursor: pointer;
  vertical-align: middle;
}

.name-creator:hover {
  color: var(--primary-Cyan);
}

@media (max-width: 375px) {
  .card-container {
    margin: 2rem auto;
  }

  .tittle-card {
    font-size: 1.2rem;
  }

  .text-card,
  .items-card {
    font-size: 17px;
  }

  .name-creator,
  .text-creator {
    font-size: 17px;
    display: inline-block;
  }
}
</style>