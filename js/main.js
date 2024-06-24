// Createapp Vue
const { createApp } = Vue

// Messaggio nell'H1 usando i data
createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')