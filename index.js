const app = Vue.createApp({
    data() {
        return {
           box1: false,                       
        }
    },
    created() {       
    
    },

    methods: {
        modalForm(e){
            console.log(e.target);
            this.box1 = true;            
        },
        cerrarModalForm(e){
            console.log(e.target)
            this.box1 = false;
        }
    }


})
let consol = app.mount("#app")

AOS.init();
