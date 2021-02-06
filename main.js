const app = {
    data(){
        return{
        title: "Inventory App",
        newproduct:"",
        products:[
            {
                id: 0,
                name: "Apple",
                qty: 3,

            },
            {
                id: 1,
                name: "Orange",
                qty: 5,
            },
            
        ],
    };
},
computed:{
    total(){
       let sum =0;
       this.products.forEach(product =>{sum += product.qty;
    });
    return sum
    },
},
    methods:{
        addproduct() {
            if(this.newproduct.length > 0){
                this.products.push({
                    id: new Date().toISOString,
                    name: this.newproduct,
                    qty: 0,
                });
                this.newproduct="";
            }
            
        },
           
     },
    
};

Vue.createApp(app).mount('#app');


