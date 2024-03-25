console.log('JS Test')


const { createApp } = Vue

createApp({
  data() {
    return{
        title:'Hello, Vue is now linked to this App!',
        titleClasses: "text-center main-title",
    }
  },
}).mount('#app')
