const frases = [
    { frase: 'El que madruga Dios le ayuda', autor: 'Pepeito Perez' },
    { frase: 'El que mucho abarca poco apreita', autor: 'Juan Teran' },
    { frase: 'Texto de prueba', autor: 'Carlos Perez' },
    { frase: 'Texto de prueba 2', autor: 'Daniel Cayambe' },
    { frase: 'De tal palo tal astilla', autor: 'Andrea Perez' },
    { frase: 'Arrecho nunca muere y si muere, muere arrecho', autor: 'Julian Sevilla' }
]

const app = Vue.createApp({

    methods: {
        agregarFrase() {
            console.log(this.frase);
            console.log(this.autor);

            const nuevaFrase = {
                frase: this.frase,
                autor: this.autor
            }

            this.listaFrases.unshift(nuevaFrase);
        },

        agregarFraseFinal() {
            console.log(this.frase);
            console.log(this.autor);

            const nuevaFrase = {
                frase: this.frase,
                autor: this.autor
            }

            this.listaFrases.push(nuevaFrase);
        },

        eventoKeyPress({charCode,cancelable,keyCode,key,target}) {
            if (event.key === 'Enter') {
                console.log('Evento');
                console.log();
                console.log(charCode);
                console.log(cancelable);
                console.log(keyCode);
                console.log(key);
                console.log(target.baseURI);
                this.agregarFraseFinal();
 
 
            }
        },

        eventoKeyPressModificador() {
                console.log('Evento');
                //console.log();
                this.agregarFraseFinal();
        }
 
 
    },

    data() {
        return {
            listaFrases: frases,
            frase: null,
            //autor: 'sin autor'
            autor: null
        }
    }
})

app.mount('#myApp')