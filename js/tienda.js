const {createApp} = Vue

const app= createApp({

    data(){

        return{
            datos :[],
            categorias:[],
            checkValue:[],
            resultado:[undefined],
            filtrotexto:"",
            disponible : [],
        }
    },
    created(){
        fetch("https://mindhub-xj03.onrender.com/api/petshop")
            .then(response => response.json())
            .then((data) =>{
                this.datos = data
                this.categorias = [...new Set(this.datos.map(key => key.categoria))]
                this.disponible = this.datos.filter(key => key.disponibles < 5)
                this.resultado = data
                console.log(this.disponible)
                
            })
    },
    methods:{
        filtrobusqueda(){
            this.resultado = this.datos.filter(key => {
                return key.producto.toLowerCase().includes(this.filtrotexto.toLowerCase())
                && (this.checkValue.includes(key.categoria) || this.checkValue.length == 0)
            })
        },
    }
})

app.mount("#andres")