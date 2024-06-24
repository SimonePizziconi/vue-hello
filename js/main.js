// Createapp Vue
const { createApp } = Vue;

// Messaggio nell'H1 usando i data e aggiunta IMG 
createApp({
    data() {
      return {
        message: 'Hello Vue!',
        imgUrl: `https://www.wisnet.com/wp-content/uploads/2021/07/vue-js-logo-png-transparent-png.png`,
        imgAlt: `Logo Vue`,
      }
    }
  }).mount('#app');