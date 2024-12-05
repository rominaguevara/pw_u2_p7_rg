const frases = [
    {frase:'El que madruga Dios le ayuda', autor: 'Pepeito Perez'},
    {frase:'El que mucho abarca poco apreita', autor: 'Juan Teran'},
    {frase:'Texto de prueba', autor: 'Carlos Perez'},
    {frase:'Texto de prueba 2', autor: 'Daniel Cayambe'},
    {frase:'De tal palo tal astilla', autor: 'Andrea Perez'},
    {frase:'Arrecho nunca muere y si muere, muere arrecho', autor: 'Julian Sevilla'}
]

const app = Vue.createApp({
    
    methods: {
       
    },
    data() {
        return {
           listaFrases: frases
        }
    }
})

app.mount('#myApp')