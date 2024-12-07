const app = Vue.createApp({
    data() {
        return {
            persona: {
                nombre: null,
                apellido: null,
                hobby: null,
                lugar: null
            },
            registros: []
        };
    },
    methods: {
        guardarPersona() {
            if (!this.persona.nombre || !this.persona.apellido) {
                alert('Por favor, completa los campos obligatorios: Nombre y Apellido.');
                return;
            }

            const registro = `${this.persona.nombre} - ${this.persona.apellido} - ${this.persona.hobby} - ${this.persona.lugar}`;
            
            this.registros.push(registro);

            this.persona = {
                nombre: null,
                apellido: null,
                hobby: null,
                lugar: null
            };
        }
    }
});

app.mount('#appFormularioPersona');
