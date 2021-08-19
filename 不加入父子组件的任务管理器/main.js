const app=new Vue({
    el:'#app',
    data:{
        message:'',
        events:[]
    },
    methods:{
     input(){
         this.events.push({
             state:false,
             massage:this.message
         })
         // console.log(this.events[0].state)
     },
     removeevent(index){
         this.events.splice(index,1)
     },
     changestate(index){
         this.events[index].state=!this.events[index].state
         // console.log(index)
     }
    }
})