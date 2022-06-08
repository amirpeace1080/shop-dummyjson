<template>
  <div>
    <div class="body">
      <section id="introduction" class="product-presentation container">
        <v-container>
          <v-row>
            <v-col lg="6" cols="12">
              <div style="width: 90%">
                <v-carousel>
                  <v-carousel-item
                    :src="showProduct.images[0]"
                  ></v-carousel-item>
                  <v-carousel-item
                    :src="showProduct.images[1]"
                  ></v-carousel-item>
                  <v-carousel-item
                    :src="showProduct.images[2]"
                  ></v-carousel-item>
                  <v-carousel-item
                    :src="showProduct.images[3]"
                  ></v-carousel-item>
                  <v-carousel-item
                    :src="showProduct.images[4]"
                  ></v-carousel-item>
                </v-carousel>
              </div>
            </v-col>
            <v-col lg="6" cols="12">
              <div class="intro-text">
                <h1 class="intro-title">{{ showProduct.title }}</h1>
                <p class="intro-description">
                  {{ showProduct.description }}.<br />
                  <br />
                  <v-rating
                    readonly
                    small
                    dense
                    background-color="orange"
                    color="orange"
                    length="5"
                    :value="showProduct.rating"
                  ></v-rating>
                  <br />
                  <v-icon color="#76FF03">mdi-currency-usd</v-icon>
                  <strong>{{ showProduct.price }}</strong>
                </p>
                <a class="buy" @click="addCart(showProduct)"
                  >Buy Now</a
                >
              </div></v-col
            >
          </v-row>
        </v-container>
      </section>

      <section id="specifications" class="specs">
        <div class="container">
          <h2 class="specs-title">Specifications</h2>
          <ul class="specs-list">
            <li class="specs-item">
              <p>
                <strong>Dimensions:</strong> 162.9 x 75.5 x 8.8 mm (6.41 x 2.97
                x 0.35 in)
              </p>
            </li>
            <li class="specs-item">
              <p>
                <strong>Display:</strong> OLED, HDR10, 90Hz, 6.76 inches, 1344 x
                2772 pixels
              </p>
            </li>
            <li class="specs-item">
              <p>
                <strong>Main Camera:</strong> Penta 50 MP, f/1.9, 23mm (wide),
                1/1.28", 1.22µm, omnidirectional PDAF, Laser AF, OIS 12 MP,
                f/2.4, (telephoto), PDAF, OIS, 3x optical zoom 8 MP, f/4.4,
                240mm (periscope telephoto), PDAF, OIS, 10x optical zoom 20 MP,
                f/2.4, 14mm (ultrawide), PDAF TOF 3D, (depth) Features Leica
                optics, LED flash, panorama, HDR Video 4K@30/60fps,
                1080p@30/60/120/240/480fps, 720p@960fps, 720p@3840fps, HDR,
                gyro-EIS
              </p>
            </li>
            <li class="specs-item">
              <p>
                <strong>Selfie Camera:</strong> Dual 13 MP, f/2.4, 18mm
                (ultrawide) TOF 3D, (depth/biometrics sensor) Features HDR,
                panorama Video 4K@30/60fps, 1080p@30/60/240fps
              </p>
            </li>
            <li class="specs-item">
              <p><strong>Battery:</strong> Li-Po 4400 mAh, non-removable</p>
            </li>
            <li class="specs-item">
              <p>
                <strong>Charging:</strong> Fast charging 66W Fast wireless
                charging 50W Reverse wireless charging 5W
              </p>
            </li>
            <li class="specs-item">
              <p><strong>Storage:</strong> 256GB</p>
            </li>
            <li class="specs-item">
              <p><strong>Memory:</strong> 12GB RAM</p>
            </li>
            <li class="specs-item">
              <p><strong>Chipset:</strong> Kirin 9000 5G</p>
            </li>
            <li class="specs-item">
              <p>
                <strong>Operating System:</strong> Android 10, EMUI 11, no
                Google Play Services
              </p>
            </li>
            <li class="specs-item">
              <p>
                <strong>Features:</strong> Face ID, fingerprint (under display,
                optical), accelerometer, gyro, proximity, barometer, compass,
                color spectrum
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section class="video flex" id="review">
        <iframe
          id="video"
          width="560"
          height="315"
          src="https://www.aparat.com/video/video/embed/videohash/E5bGe/vt/frame"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>

      <section class="newsletter">
        <div class="container">
          <div class="form-title-container">
            <h2 class="form-title">
              Get the latest news about {{ showProduct.brand }}
            </h2>
            <h3>
              Subscribe to our newsletter to receive exclusive promotions and
              daily news from {{ showProduct.brand }}!
            </h3>
            <form class="flex" action="http://mohammad-sharifi.ir/" id="form">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="amirpeace1080@gmail.com"
                required
              />
              <input type="submit" id="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailPhone',
  data() {
    return {
      showProduct: [],
    };
  },
  methods: {
    addCart(product) {
      this.$store.state.cart.push(product);
    },
  },
  created() {
    this.$store
      .dispatch("productPhoneItem", { id: this.$route.params.id })
      .then((resp) => {
        this.showProduct = resp.data;
      });
  },
};
</script>

<style scoped>
/* Variables */
:root {
  --body-font: "Manrope", Arial, Helvetica Neue, Helvetica, sans-serif;
  --normal-font: 8px;
  --primary-color: #cf0a2c;
  --hover: #0b195b;
}

/* Global Styles */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
  font-size: var(--normal-font);
}

.body {
  font-family: var(--body-font);
  font-weight: 400;
  line-height: 1;
}

h1 {
  font-size: 5rem;
  font-weight: 400;
  padding-bottom: 10px;
}

@media only screen and (max-width: 800px) {
  h1 {
    font-size: 3.5rem;
  }
}

h2 {
  font-size: 3rem;
  font-weight: 400;
}

@media only screen and (max-width: 1000px) {
  h2 {
    font-size: 2.5rem;
  }
}
h3 {
  font-size: 12px;
  padding-top: 6px;
}

a {
  text-decoration: none;
  font-size: 2rem;
}

p {
  font-size: 1rem;
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}
#img-caption {
  font-size: 12px;
  text-align: center;
}

.logo-container {
  width: 120px;
  height: 100%;
}

.product-presentation {
  padding-top: 20vh;
  align-items: center;
}

@media only screen and (max-width: 1000px) {
  .product-presentation {
    padding-left: 3rem;
  }
}

.buy {
  color: #cf0a2c;
  padding: 0.5rem 2rem;
  border: 1px solid #cf0a2c;
  display: inline-block;
  margin-top: 2rem;
  transition: 0.2s ease;
}

.buy:hover {
  color: white;
  background-color: #cf0a2c;
}

.specs {
  padding: 3rem;
  margin-top: 3rem;
  color: white;
  background-color: #cf0a2c;
}

.specs-item {
  padding-top: 2.5rem;
  font-size: 16px;
  /* line-height: 16px; */
}

.video {
  align-items: center;
  justify-content: center;
  padding: 3rem;
}

@media only screen and (max-width: 1000px) {
  .specs {
    padding-left: 3rem;
  }
}

.newsletter {
  color: #ffffff;
  text-align: center;
  padding: 3rem;
  background-color: #cf0a2c;
}

#form {
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
}

#form #submit {
  color: #ffffff;
  margin-top: 2rem;
  border: 1px solid #000000;
  background-color: transparent;
  font-size: 1.5rem;
  font-family: inherit;
  font-weight: 400;
  cursor: pointer;
  padding: 0.5rem 2rem;
  text-transform: uppercase;
  transition: 0.3s ease;
}

#form #submit:hover {
  color: white;
  background-color: var(--primary-color);
}

#form input {
  font-family: inherit;
  max-width: 70%;
  padding: 0.5rem 2rem;
}

/* Utilities */

.flex {
  display: flex;
  flex-direction: row;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.intro-title {
  font-size: 40px;
  line-height: 60px;
}
.intro-description {
  font-size: 16px;
  line-height: 24px;
}
.specs-title {
  font-size: 24px;
  line-height: 24px;
}
</style>