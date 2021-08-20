const app=new Vue({
    el:'#app',
    data:{
        massage:'',
        events:[
            {state:false,massage:'吃烤肉',starttime:'2020年12月30日',finishtime:''},       
            {state:true,massage:'睡觉',starttime:'2020年12月30日',finishtime:'2021年4月5日'},      
            {state:true,massage:'狠狠洗把脸',starttime:'2020年12月30日',finishtime:'2021年4月5日'},     
            {state:false,massage:'跑三公里',starttime:'2020年12月30日',finishtime:''}  
        ]
    },
    components:{
        cpn1:{
            template:"#cpn1",
            props:{
                cevents:Array
            },
            methods:{
                cpnchangestate(index){
                    this.$emit('statechange',index)
                },
                cpnremoveevent(index){
                    this.$emit('removeevent',index)
                }
            }
        },
        cpn2:{
            template:'#cpn2',
            props:{
                cevents:Array
            },
            methods:{
                cpnchangestate(index){
                    this.$emit('statechange',index)
                },
                cpnremoveevent(index){
                    this.$emit('removeevent',index)
                }
            }
        }
    },
    methods:{
        inputevent(){
            // console.log(this.massage)
            const time=new Date()
            let month=time.getMonth()
            let date=time.getUTCDate()
            let year=time.getFullYear()
            this.events.push({
                state:false,
                massage:this.massage,
                starttime:year+'年'+(month+1)+'月'+date+'日',
                finishtime:''
            })
            // console.log(this.events)
        },
        statechange(index){
            this.events[index].state=!this.events[index].state
            if(this.events[index].state){
                const time=new Date()
                let month=time.getMonth()
                let date=time.getUTCDate()
                let year=time.getFullYear()
                this.events[index].finishtime=year+'年'+(month+1)+'月'+date+'日'
            }else{
                this.events[index].finishtime=''
            }
        },
        removeevent(index){
            this.events.splice(index,1)
        }
    }
})