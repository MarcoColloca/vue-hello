console.log('JS Test')


const { createApp } = Vue

createApp({
  data() {
    return{
        // contenuto del titolo
        title:'Hello, Vue is now linked to this App!',
        // classi del titolo
        titleClasses: "text-center main-title",

        // (ง•̀_•́)ง
        lessgo: "(ง•̀_•́)ง",
        lessgoStyle: "text-center lessgo",

        // link per l'immagine
        imgSrc: "./img/ChibiFlayer.png",
        // classi relative all'immagine
        imgClasses:"text-center mt-5",
    }
  },
}).mount('#app')
