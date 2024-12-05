console.log(Vue);

const app = Vue.createApp({
    //Options API
    methods: {
        cambiarMensaje(){
            this.mensaje = 'Nuevo mensaje';
            this.edad = 24
        }
    },
    data() {
        return {
            mensaje: 'Hola Mundo Pweb',
            edad:25
        }
    }
})

app.mount('#myApp')